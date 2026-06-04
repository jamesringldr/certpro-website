import { NextRequest, NextResponse } from 'next/server'
import {
  EstimateFormSubmissionPayload,
  FormSubmissionFailureEnvelope,
  FormSubmissionResponseEnvelope,
  FormSubmissionSuccessEnvelope,
} from '@/lib/integrations/form-transport-contract'
import { getFormTransportConfig } from '@/lib/integrations/form-transport-config'
import { sendEstimateSubmission } from '@/lib/integrations/form-transport-provider'
import { isFormBotSubmission } from '@/lib/forms/bot-guard'
import { getEstimateFormValidationIssues, validateEstimateFormPayload } from '@/lib/integrations/form-transport-validation'

const FALLBACK_CORRELATION_PREFIX = 'cfp'

function buildFallbackCorrelationId(): string {
  return `${FALLBACK_CORRELATION_PREFIX}_${Date.now()}`
}

function resolveProviderMessage(code: FormSubmissionFailureEnvelope['error']['code']): string {
  switch (code) {
    case 'VALIDATION_ERROR':
      return 'Submitted form data is invalid.'
    case 'UNSUPPORTED_DESTINATION':
      return 'Configured destination is not supported in this task phase.'
    case 'PROVIDER_NOT_CONFIGURED':
      return 'Form transport provider is not configured.'
    case 'UPSTREAM_TIMEOUT':
      return 'The form provider timed out while processing the request.'
    case 'UPSTREAM_NETWORK_ERROR':
      return 'The form provider could not be reached.'
    case 'UPSTREAM_REJECTED':
      return 'The form provider rejected the request.'
    default:
      return 'Unable to process your request at this time.'
  }
}

function failureEnvelope(
  correlationId: string,
  code: FormSubmissionFailureEnvelope['error']['code'],
  retryable: boolean,
  attemptCount: number
): FormSubmissionFailureEnvelope {
  const config = getFormTransportConfig()

  return {
    ok: false,
    error: {
      code,
      message: resolveProviderMessage(code),
      retryable,
    },
    data: {
      correlationId,
      destination: config.destination,
      provider: config.provider,
      status: 'failed',
      submittedAt: new Date().toISOString(),
      attemptCount,
    },
  }
}

function successEnvelope(correlationId: string, attemptCount: number): FormSubmissionSuccessEnvelope {
  const config = getFormTransportConfig()

  return {
    ok: true,
    data: {
      correlationId,
      destination: config.destination,
      provider: config.provider,
      status: 'accepted',
      submittedAt: new Date().toISOString(),
      attemptCount,
    },
  }
}

function extractCorrelationId(payload: unknown): string {
  if (payload && typeof payload === 'object' && 'correlation_id' in payload) {
    const correlation = (payload as { correlation_id?: unknown }).correlation_id
    if (typeof correlation === 'string' && correlation.trim().length > 0) {
      return correlation
    }
  }

  return buildFallbackCorrelationId()
}

export async function POST(request: NextRequest): Promise<NextResponse<FormSubmissionResponseEnvelope>> {
  let payload: unknown = null

  try {
    payload = await request.json()
  } catch {
    const envelope = failureEnvelope(buildFallbackCorrelationId(), 'VALIDATION_ERROR', false, 0)
    return NextResponse.json(envelope, { status: 400 })
  }

  const correlationId = extractCorrelationId(payload)

  if (payload && typeof payload === 'object') {
    const candidate = payload as {
      website?: string
      form_started_at?: string
      submitted_at?: string
    }

    if (isFormBotSubmission(candidate)) {
      console.warn('[form-submit] bot guard rejected submission', { correlationId })
      return NextResponse.json(failureEnvelope(correlationId, 'VALIDATION_ERROR', false, 0), { status: 400 })
    }
  }

  const validation = getEstimateFormValidationIssues(payload)
  if (!validation.valid || !validateEstimateFormPayload(payload)) {
    console.warn('[form-submit] validation failed', {
      correlationId,
      issueCount: validation.issues.length,
    })

    return NextResponse.json(failureEnvelope(correlationId, 'VALIDATION_ERROR', false, 0), { status: 400 })
  }

  const typedPayload = payload as EstimateFormSubmissionPayload
  const transportResult = await sendEstimateSubmission(getFormTransportConfig(), typedPayload)

  if (!transportResult.ok) {
    const code = transportResult.code ?? 'INTERNAL_ERROR'
    const envelope = failureEnvelope(correlationId, code, transportResult.retryable, transportResult.attemptCount)
    const statusCode = code === 'VALIDATION_ERROR' || code === 'UNSUPPORTED_DESTINATION' || code === 'PROVIDER_NOT_CONFIGURED' ? 400 : 502

    console.error('[form-submit] transport failed', {
      correlationId,
      code,
      retryable: transportResult.retryable,
      attemptCount: transportResult.attemptCount,
      destination: getFormTransportConfig().destination,
      provider: getFormTransportConfig().provider,
    })

    return NextResponse.json(envelope, { status: statusCode })
  }

  const envelope = successEnvelope(correlationId, transportResult.attemptCount)
  return NextResponse.json(envelope, { status: 200 })
}

