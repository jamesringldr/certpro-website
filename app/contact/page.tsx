import type { Metadata } from 'next'
import BookServiceButton from '@/components/booking/BookServiceButton'
import JsonLd from '@/components/seo/JsonLd'
import { AFTER_HOURS_POLICY, HOURS_DISPLAY, LEGAL_NAME, PHONE_DISPLAY } from '@/lib/seo/constants'
import { buildPageMetadata, CORE_PAGE_SEO } from '@/lib/seo/metadata'
import { webPageJsonLd } from '@/lib/seo/schema'

const pageSeo = CORE_PAGE_SEO.contact

export const metadata: Metadata = buildPageMetadata(pageSeo)

export default function ContactPage() {
  return (
    <section className="py-14 md:py-16 lg:py-20">
      <JsonLd data={webPageJsonLd(pageSeo.title, pageSeo.path, pageSeo.description)} />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">Contact CertPro Plumbing</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          For immediate issues call {LEGAL_NAME} at {PHONE_DISPLAY}—we offer fast rapid response and your call is
          answered by real people—or open the booking form to schedule service online.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
          {HOURS_DISPLAY}. {AFTER_HOURS_POLICY}
        </p>
        <div className="mt-6 grid gap-3 sm:max-w-xl sm:grid-cols-2">
          <a
            href="tel:+18164540247"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            Call Emergency Line
          </a>
          <BookServiceButton entrypoint="contact_page">Book Online</BookServiceButton>
        </div>
        <div className="mt-5 rounded-xl border border-brand-border bg-brand-surface p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-secondary">High-intent links</p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-200">
            <a href="/services/emergency-plumbing" className="rounded-full border border-brand-border px-3 py-1.5 hover:text-white">
              Emergency Plumbing
            </a>
            <a href="/services/drain-cleaning" className="rounded-full border border-brand-border px-3 py-1.5 hover:text-white">
              Drain Cleaning
            </a>
            <a href="/services" className="rounded-full border border-brand-border px-3 py-1.5 hover:text-white">
              All Services
            </a>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">
          Prefer email?{' '}
          <a href="mailto:info@certproplumbing.com" className="font-semibold text-brand-secondary hover:text-white">
            info@certproplumbing.com
          </a>
        </p>
      </div>
    </section>
  )
}
