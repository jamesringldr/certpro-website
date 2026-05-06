'use client'

import { FormEvent, useMemo, useState } from 'react'
import SectionShell from '@/components/sections/SectionShell'
import { trackGa4Event } from '@/lib/analytics/ga4'

const SERVICE_OPTIONS = [
  'Emergency Plumbing',
  'Drain Cleaning',
  'Water Heater',
  'Leak Detection',
  'Sewer Line Service',
  'General Plumbing',
]

export default function LeadCaptureSection() {
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState<string>('')

  const currentPath = useMemo(() => {
    if (typeof window === 'undefined') {
      return '/'
    }

    return window.location.pathname
  }, [])

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault()

    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const correlationId = typeof crypto !== 'undefined' ? crypto.randomUUID() : `cfp_${Date.now()}`

    const payload = {
      form_type: 'contact' as const,
      name: String(formData.get('name') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      email: String(formData.get('email') ?? '') || undefined,
      service: String(formData.get('service') ?? '') || undefined,
      message: String(formData.get('message') ?? '') || undefined,
      consent: formData.get('consent') === 'on',
      correlation_id: correlationId,
      source_page_path: currentPath,
      submitted_at: new Date().toISOString(),
      source: 'ui' as const,
    }

    setSubmitState('submitting')
    setSubmitMessage('')
    trackGa4Event('form_submit', {
      entrypoint: 'service_cta',
      page_path: currentPath,
      correlation_id: correlationId,
    })

    try {
      const response = await fetch('/api/forms/submit', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { ok?: boolean; error?: { message?: string } }
      if (!response.ok || !result.ok) {
        trackGa4Event('form_submit_failure', {
          entrypoint: 'service_cta',
          page_path: currentPath,
          correlation_id: correlationId,
          destination: 'internal',
          error_code: 'UPSTREAM_REJECTED',
          failure_stage: 'transport',
        })
        setSubmitState('error')
        setSubmitMessage(result.error?.message ?? 'Unable to submit your request right now. Please call us directly.')
        return
      }

      trackGa4Event('form_submit_success', {
        entrypoint: 'service_cta',
        page_path: currentPath,
        correlation_id: correlationId,
        destination: 'internal',
      })
      setSubmitState('success')
      setSubmitMessage('Request received. Our team will follow up shortly.')
      formElement.reset()
    } catch {
      trackGa4Event('form_submit_failure', {
        entrypoint: 'service_cta',
        page_path: currentPath,
        correlation_id: correlationId,
        destination: 'internal',
        error_code: 'UPSTREAM_NETWORK_ERROR',
        failure_stage: 'transport',
      })
      setSubmitState('error')
      setSubmitMessage('Unable to submit your request right now. Please call us directly.')
    }
  }

  return (
    <SectionShell
      id="estimate"
      eyebrow="Get a Free Estimate"
      title="Fast quote form designed for less than 15-second intent capture"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6">
          <label className="block text-sm font-semibold text-white">
            Name
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="mt-1 h-11 w-full rounded-md border border-brand-border bg-brand-bg px-3 text-sm text-white placeholder:text-slate-400"
            />
          </label>
          <label className="block text-sm font-semibold text-white">
            Phone
            <input
              type="tel"
              name="phone"
              placeholder="(555) 123-4567"
              className="mt-1 h-11 w-full rounded-md border border-brand-border bg-brand-bg px-3 text-sm text-white placeholder:text-slate-400"
            />
          </label>
          <label className="block text-sm font-semibold text-white">
            Email (optional)
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="mt-1 h-11 w-full rounded-md border border-brand-border bg-brand-bg px-3 text-sm text-white placeholder:text-slate-400"
            />
          </label>
          <label className="block text-sm font-semibold text-white">
            Service Type
            <select name="service" className="mt-1 h-11 w-full rounded-md border border-brand-border bg-brand-bg px-3 text-sm text-white">
              {SERVICE_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="block text-sm font-semibold text-white">
            Message
            <textarea
              name="message"
              rows={4}
              placeholder="What issue are you seeing?"
              className="mt-1 w-full rounded-md border border-brand-border bg-brand-bg px-3 py-2 text-sm text-white placeholder:text-slate-400"
            />
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" name="consent" className="h-4 w-4 rounded border-brand-border bg-brand-bg" required />
            I consent to be contacted about my request.
          </label>
          <button
            type="submit"
            disabled={submitState === 'submitting'}
            className="inline-flex min-h-11 items-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            {submitState === 'submitting' ? 'Submitting...' : 'Request Free Estimate'}
          </button>
          {submitState !== 'idle' ? (
            <p className={`text-sm ${submitState === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>{submitMessage}</p>
          ) : null}
        </form>

        <aside className="space-y-4 rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6">
          <h3 className="text-lg font-bold text-white">Need help right now?</h3>
          <p className="text-sm leading-6 text-slate-300">
            Emergency issues should not wait for form replies. Tap the call button for immediate dispatch support.
          </p>
          <a
            href="tel:+18165550192"
            onClick={() => {
              trackGa4Event('call_click', {
                entrypoint: 'service_cta',
                page_path: currentPath,
              })
            }}
            className="inline-flex min-h-11 items-center rounded-md border border-brand-secondary px-5 py-2 text-sm font-semibold text-brand-secondary"
          >
            Call (816) 555-0192
          </a>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Family-owned local team</li>
            <li>Licensed and insured professionals</li>
            <li>Transparent quote-first process</li>
          </ul>
        </aside>
      </div>
    </SectionShell>
  )
}
