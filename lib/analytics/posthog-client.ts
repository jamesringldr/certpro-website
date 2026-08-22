'use client'

import posthog from 'posthog-js'

export function getPostHogRequestHeaders(): Record<string, string> {
  if (typeof window === 'undefined') {
    return {}
  }

  const headers: Record<string, string> = {}
  const distinctId = posthog.get_distinct_id()
  const sessionId = posthog.get_session_id()

  if (distinctId) {
    headers['X-POSTHOG-DISTINCT-ID'] = distinctId
  }

  if (sessionId) {
    headers['X-POSTHOG-SESSION-ID'] = sessionId
  }

  return headers
}
