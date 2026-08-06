'use client'

import { FormEvent, useMemo, useState } from 'react'
import AddressLookupField from '@/components/forms/AddressLookupField'
import SectionShell from '@/components/sections/SectionShell'
import type { PreferredContactMethod } from '@/lib/integrations/form-transport-contract'
import { trackGa4Event } from '@/lib/analytics/ga4'
import { trackGoogleAdsContactConversion } from '@/lib/analytics/google-ads'

const SERVICE_OPTIONS = [
  'Emergency Plumbing',
  'Drain Cleaning',
  'Water Heater',
  'Leak Detection',
  'Sewer Line Service',
  'General Plumbing/Other',
] as const

const fieldClassName =
  'mt-1 h-11 w-full rounded-md border border-brand-border bg-brand-bg px-3 text-sm text-white placeholder:text-slate-400'

export default function LeadCaptureSection() {
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState<string>('')
  const [formKey, setFormKey] = useState(0)

  const formStartedAt = useMemo(() => new Date().toISOString(), [])

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

    const preferredContact = String(formData.get('preferred_contact_method') ?? '')
    const service = String(formData.get('service') ?? '').trim()

    const payload = {
      form_type: 'contact' as const,
      name: String(formData.get('name') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      preferred_contact_method:
        preferredContact === 'text' || preferredContact === 'call'
          ? (preferredContact as PreferredContactMethod)
          : undefined,
      address: String(formData.get('address') ?? '').trim() || undefined,
      service: service || undefined,
      message: String(formData.get('message') ?? '').trim() || undefined,
      consent: formData.get('consent') === 'on',
      website: String(formData.get('website') ?? ''),
      form_started_at: String(formData.get('form_started_at') ?? formStartedAt),
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
      trackGoogleAdsContactConversion()
      setSubmitState('success')
      setSubmitMessage('Request received. Our team will follow up shortly.')
      formElement.reset()
      setFormKey((value) => value + 1)
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
          <input type="hidden" name="form_started_at" value={formStartedAt} />

          <div className="sr-only" aria-hidden="true">
            <label htmlFor="estimate-website">Website</label>
            <input id="estimate-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>

          <label className="block text-sm font-semibold text-white">
            Name
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className={fieldClassName}
            />
          </label>

          <label className="block text-sm font-semibold text-white">
            Phone
            <input
              type="tel"
              name="phone"
              required
              placeholder="Your mobile number"
              className={fieldClassName}
            />
          </label>

          <fieldset>
            <legend className="text-sm font-semibold text-white">Preferred contact method</legend>
            <div className="mt-2 flex flex-wrap gap-4">
              <label className="inline-flex items-center gap-2 text-sm text-slate-300">
                <input
                  type="radio"
                  name="preferred_contact_method"
                  value="text"
                  required
                  className="h-4 w-4 border-brand-border bg-brand-bg text-brand-primary"
                />
                Text
              </label>
              <label className="inline-flex items-center gap-2 text-sm text-slate-300">
                <input
                  type="radio"
                  name="preferred_contact_method"
                  value="call"
                  required
                  className="h-4 w-4 border-brand-border bg-brand-bg text-brand-primary"
                />
                Call
              </label>
            </div>
          </fieldset>

          <AddressLookupField key={formKey} />

          <label className="block text-sm font-semibold text-white">
            Service type
            <select name="service" defaultValue="" className={fieldClassName}>
              <option value="" disabled>
                Select Service
              </option>
              {SERVICE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm font-semibold text-white">
            Additional Information
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us more about your issue..."
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
            {submitState === 'submitting' ? 'Submitting...' : 'Request Estimate'}
          </button>
          {submitState !== 'idle' ? (
            <p className={`text-sm ${submitState === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>{submitMessage}</p>
          ) : null}
        </form>

        <aside className="space-y-4 rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6">
          <h3 className="text-lg font-bold text-white">Need help right now?</h3>
          <p className="text-sm leading-6 text-slate-300">
            Emergency issues should not wait for form replies. Tap the call button for fast rapid response—your call is
            answered by real people, not voicemail trees.
          </p>
          <a
            href="tel:+18164540247"
            onClick={() => {
              trackGa4Event('call_click', {
                entrypoint: 'service_cta',
                page_path: currentPath,
              })
            }}
            className="inline-flex min-h-11 items-center rounded-md border border-brand-secondary px-5 py-2 text-sm font-semibold text-brand-secondary"
          >
            Call (816) 454-0247
          </a>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Live answers from real people</li>
            <li>Family-owned local team</li>
            <li>Licensed and insured professionals</li>
            <li>Transparent quote-first process</li>
          </ul>
        </aside>
      </div>
    </SectionShell>
  )
}
