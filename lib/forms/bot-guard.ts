export const MIN_FORM_FILL_MS = 2500
export const MAX_FORM_FILL_MS = 2 * 60 * 60 * 1000

export interface FormBotSignals {
  website?: string
  form_started_at?: string
  submitted_at?: string
}

export function getFormBotGuardIssues(signals: FormBotSignals): string[] {
  const issues: string[] = []

  if (typeof signals.website === 'string' && signals.website.trim().length > 0) {
    issues.push('honeypot triggered')
  }

  if (!signals.form_started_at || Number.isNaN(Date.parse(signals.form_started_at))) {
    issues.push('form_started_at is invalid')
    return issues
  }

  const startedAt = Date.parse(signals.form_started_at)
  const submittedAt = signals.submitted_at ? Date.parse(signals.submitted_at) : Date.now()

  if (Number.isNaN(submittedAt)) {
    issues.push('submitted_at is invalid')
    return issues
  }

  const elapsedMs = submittedAt - startedAt

  if (elapsedMs < MIN_FORM_FILL_MS) {
    issues.push('form submitted too quickly')
  }

  if (elapsedMs > MAX_FORM_FILL_MS) {
    issues.push('form session expired')
  }

  return issues
}

export function isFormBotSubmission(signals: FormBotSignals): boolean {
  return getFormBotGuardIssues(signals).length > 0
}
