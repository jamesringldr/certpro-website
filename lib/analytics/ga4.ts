'use client'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export type Ga4ConversionEventName =
  | 'call_click'
  | 'call_connect_success'
  | 'call_connect_failure'
  | 'book_click'
  | 'book_start'
  | 'book_submit'
  | 'book_submit_success'
  | 'book_submit_failure'
  | 'form_view'
  | 'form_start'
  | 'form_submit'
  | 'form_submit_success'
  | 'form_submit_failure'

export interface Ga4EventParams {
  entrypoint?: 'sticky_bar' | 'header_cta' | 'hero_cta' | 'service_cta' | 'contact_page' | 'booking_page'
  page_path: string
  correlation_id?: string
  destination?: 'internal' | 'google_sheets' | 'dual_write'
  latency_ms?: number
  error_code?: string
  failure_stage?: 'validation' | 'transport' | 'auth' | 'timeout' | 'unknown'
}

function resolvePagePath(explicitPath?: string): string {
  if (explicitPath) {
    return explicitPath
  }

  if (typeof window === 'undefined') {
    return '/'
  }

  return window.location.pathname
}

export function trackGa4Event(name: Ga4ConversionEventName, params: Ga4EventParams): void {
  if (typeof window === 'undefined') {
    return
  }

  const payload: Ga4EventParams = {
    ...params,
    page_path: resolvePagePath(params.page_path),
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', name, payload)
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: name,
    ...payload,
  })
}

