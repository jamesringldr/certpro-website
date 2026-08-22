import { PostHog } from 'posthog-node'

export function createPostHogClient(): PostHog | null {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN
  if (!token) {
    return null
  }

  return new PostHog(token, {
    host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    enableExceptionAutocapture: true,
    flushAt: 1,
    flushInterval: 0,
  })
}

export function getPostHogDistinctId(request: Request): string | undefined {
  const headerId = request.headers.get('x-posthog-distinct-id')
  return headerId && headerId.trim().length > 0 ? headerId.trim() : undefined
}

export function getPostHogSessionId(request: Request): string | undefined {
  const sessionId = request.headers.get('x-posthog-session-id')
  return sessionId && sessionId.trim().length > 0 ? sessionId.trim() : undefined
}
