import { EstimateFormSubmissionPayload } from '@/lib/integrations/form-transport-contract'

export interface ValidationResult {
  valid: boolean
  issues: string[]
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function isIsoDate(value: string): boolean {
  return !Number.isNaN(Date.parse(value))
}

export function validateEstimateFormPayload(payload: unknown): payload is EstimateFormSubmissionPayload {
  const { valid } = getEstimateFormValidationIssues(payload)
  return valid
}

export function getEstimateFormValidationIssues(payload: unknown): ValidationResult {
  const issues: string[] = []

  if (!payload || typeof payload !== 'object') {
    return { valid: false, issues: ['payload must be an object'] }
  }

  const candidate = payload as Partial<EstimateFormSubmissionPayload>
  const validFormType = candidate.form_type === 'contact' || candidate.form_type === 'booking' || candidate.form_type === 'callback'

  if (!validFormType) {
    issues.push('form_type must be one of contact, booking, callback')
  }
  if (!isNonEmptyString(candidate.name)) {
    issues.push('name is required')
  }
  if (!isNonEmptyString(candidate.phone)) {
    issues.push('phone is required')
  }
  if (candidate.email !== undefined && typeof candidate.email !== 'string') {
    issues.push('email must be a string when provided')
  }
  if (candidate.service !== undefined && typeof candidate.service !== 'string') {
    issues.push('service must be a string when provided')
  }
  if (candidate.message !== undefined && typeof candidate.message !== 'string') {
    issues.push('message must be a string when provided')
  }
  if (typeof candidate.consent !== 'boolean') {
    issues.push('consent must be boolean')
  }
  if (!isNonEmptyString(candidate.correlation_id)) {
    issues.push('correlation_id is required')
  }
  if (!isNonEmptyString(candidate.source_page_path)) {
    issues.push('source_page_path is required')
  }
  if (!isNonEmptyString(candidate.submitted_at) || !isIsoDate(candidate.submitted_at)) {
    issues.push('submitted_at must be a valid ISO date string')
  }
  if (candidate.source !== undefined && candidate.source !== 'ui' && candidate.source !== 'api') {
    issues.push('source must be ui or api when provided')
  }

  return {
    valid: issues.length === 0,
    issues,
  }
}

