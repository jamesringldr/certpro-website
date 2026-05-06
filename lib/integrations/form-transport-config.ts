import { FormTransportDestination, FormTransportProvider } from '@/lib/integrations/form-transport-contract'

const DEFAULT_TIMEOUT_MS = 5000
const DEFAULT_MAX_RETRIES = 3
const DEFAULT_RETRY_BASE_MS = 250

function parseIntegerEnv(name: string, fallback: number): number {
  const raw = process.env[name]
  if (!raw) {
    return fallback
  }

  const parsed = Number.parseInt(raw, 10)
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback
}

function parseProvider(rawProvider: string | undefined): FormTransportProvider {
  if (rawProvider === 'formspree' || rawProvider === 'emailjs' || rawProvider === 'webhook') {
    return rawProvider
  }

  return 'webhook'
}

function parseDestination(rawDestination: string | undefined): FormTransportDestination {
  if (rawDestination === 'internal' || rawDestination === 'google_sheets' || rawDestination === 'dual_write') {
    return rawDestination
  }

  return 'internal'
}

export interface FormTransportConfig {
  provider: FormTransportProvider
  destination: FormTransportDestination
  webhookUrl?: string
  timeoutMs: number
  maxRetries: number
  retryBaseMs: number
}

export function getFormTransportConfig(): FormTransportConfig {
  return {
    provider: parseProvider(process.env.FORMS_TRANSPORT_PROVIDER),
    destination: parseDestination(process.env.FORMS_PRIMARY_DESTINATION),
    webhookUrl: process.env.FORMS_INTERNAL_WEBHOOK_URL,
    timeoutMs: parseIntegerEnv('INTEGRATION_REQUEST_TIMEOUT_MS', DEFAULT_TIMEOUT_MS),
    maxRetries: parseIntegerEnv('INTEGRATION_MAX_RETRIES', DEFAULT_MAX_RETRIES),
    retryBaseMs: parseIntegerEnv('INTEGRATION_RETRY_BASE_MS', DEFAULT_RETRY_BASE_MS),
  }
}

