import {
  EstimateFormSubmissionPayload,
  FormSubmissionErrorCode,
  FormTransportDestination,
  FormTransportProvider,
} from '@/lib/integrations/form-transport-contract'
import { FormTransportConfig } from '@/lib/integrations/form-transport-config'

export interface TransportAttemptResult {
  ok: boolean
  attemptCount: number
  retryable: boolean
  code?: FormSubmissionErrorCode
}

function computeBackoffMs(attempt: number, baseMs: number): number {
  const jitter = Math.floor(Math.random() * baseMs)
  return baseMs * 2 ** (attempt - 1) + jitter
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function resolveUnsupportedDestination(destination: FormTransportDestination): TransportAttemptResult {
  if (destination === 'google_sheets' || destination === 'dual_write') {
    return {
      ok: false,
      attemptCount: 0,
      retryable: false,
      code: 'UNSUPPORTED_DESTINATION',
    }
  }

  return {
    ok: true,
    attemptCount: 0,
    retryable: false,
  }
}

function resolveMissingWebhook(
  destination: FormTransportDestination,
  webhookUrl: string | undefined
): TransportAttemptResult | undefined {
  if (destination !== 'internal') {
    return undefined
  }

  if (webhookUrl && webhookUrl.trim().length > 0) {
    return undefined
  }

  return {
    ok: false,
    attemptCount: 0,
    retryable: false,
    code: 'PROVIDER_NOT_CONFIGURED',
  }
}

function buildProviderPayload(payload: EstimateFormSubmissionPayload, provider: FormTransportProvider): Record<string, unknown> {
  return {
    provider,
    submission: payload,
  }
}

function mapUpstreamStatus(status: number): { code: FormSubmissionErrorCode; retryable: boolean } {
  if (status === 408 || status === 429 || status >= 500) {
    return {
      code: 'UPSTREAM_REJECTED',
      retryable: true,
    }
  }

  return {
    code: 'UPSTREAM_REJECTED',
    retryable: false,
  }
}

export async function sendEstimateSubmission(
  config: FormTransportConfig,
  payload: EstimateFormSubmissionPayload
): Promise<TransportAttemptResult> {
  const destinationStatus = resolveUnsupportedDestination(config.destination)
  if (!destinationStatus.ok) {
    return destinationStatus
  }

  const missingWebhookStatus = resolveMissingWebhook(config.destination, config.webhookUrl)
  if (missingWebhookStatus) {
    return missingWebhookStatus
  }

  const webhookUrl = config.webhookUrl as string
  const maxAttempts = Math.max(1, config.maxRetries + 1)
  let attemptCount = 0

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    attemptCount = attempt

    const controller = new AbortController()
    const timeoutHandle = setTimeout(() => controller.abort(), config.timeoutMs)

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(buildProviderPayload(payload, config.provider)),
        signal: controller.signal,
      })

      clearTimeout(timeoutHandle)

      if (response.ok) {
        return {
          ok: true,
          attemptCount,
          retryable: false,
        }
      }

      const mapped = mapUpstreamStatus(response.status)
      if (!mapped.retryable || attempt === maxAttempts) {
        return {
          ok: false,
          attemptCount,
          retryable: mapped.retryable,
          code: mapped.code,
        }
      }
    } catch (error: unknown) {
      clearTimeout(timeoutHandle)
      const isAbortError = error instanceof Error && error.name === 'AbortError'
      const retryable = true
      const code: FormSubmissionErrorCode = isAbortError ? 'UPSTREAM_TIMEOUT' : 'UPSTREAM_NETWORK_ERROR'

      if (attempt === maxAttempts) {
        return {
          ok: false,
          attemptCount,
          retryable,
          code,
        }
      }
    }

    await wait(computeBackoffMs(attempt, config.retryBaseMs))
  }

  return {
    ok: false,
    attemptCount,
    retryable: false,
    code: 'INTERNAL_ERROR',
  }
}

