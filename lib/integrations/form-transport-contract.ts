export type FormTransportProvider = 'formspree' | 'emailjs' | 'webhook'

export type FormTransportDestination = 'internal' | 'google_sheets' | 'dual_write'

export type FormRequestSource = 'ui' | 'api'

export interface EstimateFormSubmissionPayload {
  form_type: 'contact' | 'booking' | 'callback'
  name: string
  phone: string
  email?: string
  service?: string
  message?: string
  consent: boolean
  correlation_id: string
  source_page_path: string
  submitted_at: string
  source?: FormRequestSource
}

export type FormSubmissionErrorCode =
  | 'VALIDATION_ERROR'
  | 'UNSUPPORTED_DESTINATION'
  | 'PROVIDER_NOT_CONFIGURED'
  | 'UPSTREAM_REJECTED'
  | 'UPSTREAM_TIMEOUT'
  | 'UPSTREAM_NETWORK_ERROR'
  | 'INTERNAL_ERROR'

export interface FormSubmissionSuccessEnvelope {
  ok: true
  data: {
    correlationId: string
    destination: FormTransportDestination
    provider: FormTransportProvider
    status: 'accepted'
    submittedAt: string
    attemptCount: number
  }
}

export interface FormSubmissionFailureEnvelope {
  ok: false
  error: {
    code: FormSubmissionErrorCode
    message: string
    retryable: boolean
  }
  data: {
    correlationId: string
    destination: FormTransportDestination
    provider: FormTransportProvider
    status: 'failed'
    submittedAt: string
    attemptCount: number
  }
}

export type FormSubmissionResponseEnvelope = FormSubmissionSuccessEnvelope | FormSubmissionFailureEnvelope

