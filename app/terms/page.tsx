import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import LegalPage, { LegalSection } from '@/components/legal/LegalPage'
import { EMAIL, HOURS_DISPLAY, LEGAL_NAME, PHONE_DISPLAY } from '@/lib/seo/constants'
import { buildPageMetadata, CORE_PAGE_SEO } from '@/lib/seo/metadata'
import { webPageJsonLd } from '@/lib/seo/schema'

const pageSeo = CORE_PAGE_SEO.terms

export const metadata: Metadata = buildPageMetadata(pageSeo)

export default function TermsPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(pageSeo.title, pageSeo.path, pageSeo.description)} />
      <LegalPage title="Terms of Service" updated="August 22, 2026">
        <LegalSection heading="Agreement">
          <p>
            These terms govern use of https://www.certproplumbingkc.com, operated by {LEGAL_NAME}. By using the site or
            requesting service, you agree to them. If you do not agree, do not use the site. Plumbing work we perform is
            also subject to the estimate, invoice, and any work-authorization you sign on the job.
          </p>
        </LegalSection>

        <LegalSection heading="Who we are">
          <p>
            CertPro is a licensed, bonded, and insured plumbing company serving the Kansas City metro. We come to you. The
            website is for information and to request service—not an online store or a guaranteed appointment calendar.
          </p>
        </LegalSection>

        <LegalSection heading="Hours and emergency dispatch">
          <p>
            Posted business hours are {HOURS_DISPLAY}. After-hours calls to {PHONE_DISPLAY} are answered by real people when
            we can; dispatch depends on technician availability. We do not promise 24/7 coverage or a fixed arrival window
            from this website.
          </p>
        </LegalSection>

        <LegalSection heading="Estimates and pricing">
          <p>
            Information on the site is general. It is not a bid. We explain recommendations and pricing before repair work
            starts. A website form, chat, or phone conversation is a request for service, not a contract until we agree on
            scope and price for that job.
          </p>
        </LegalSection>

        <LegalSection heading="Your responsibilities">
          <p>
            Provide a safe work area, accurate access information, and a truthful description of the problem. You are
            responsible for obtaining any HOA or building access we need. Shut off water or gas when we instruct you to do
            so for safety.
          </p>
        </LegalSection>

        <LegalSection heading="Website content">
          <p>
            Service pages describe typical jobs. Site content may change without notice. We are not liable for actions you
            take based only on website copy, including DIY steps listed as “what to do before we arrive.” Those steps are
            precautions, not a substitute for a licensed plumber.
          </p>
        </LegalSection>

        <LegalSection heading="Limitation of liability">
          <p>
            To the fullest extent allowed by Missouri law, {LEGAL_NAME} is not liable for indirect or consequential damages
            arising from use of this website. Liability for plumbing work is limited as stated on the job paperwork and by
            applicable law. Nothing here limits rights you cannot waive.
          </p>
        </LegalSection>

        <LegalSection heading="Privacy">
          <p>
            How we handle personal information is described in our{' '}
            <Link href="/privacy" className="font-semibold text-brand-secondary hover:text-white">
              Privacy Policy
            </Link>
            .
          </p>
        </LegalSection>

        <LegalSection heading="Contact">
          <p>
            {LEGAL_NAME} · {PHONE_DISPLAY} · {EMAIL}
          </p>
        </LegalSection>
      </LegalPage>
    </>
  )
}
