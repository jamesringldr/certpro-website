import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import LegalPage, { LegalSection } from '@/components/legal/LegalPage'
import { EMAIL, LEGAL_NAME, PHONE_DISPLAY } from '@/lib/seo/constants'
import { buildPageMetadata, CORE_PAGE_SEO } from '@/lib/seo/metadata'
import { webPageJsonLd } from '@/lib/seo/schema'

const pageSeo = CORE_PAGE_SEO.privacy

export const metadata: Metadata = buildPageMetadata(pageSeo)

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={webPageJsonLd(pageSeo.title, pageSeo.path, pageSeo.description)} />
      <LegalPage title="Privacy Policy" updated="August 22, 2026">
        <LegalSection heading="Who we are">
          <p>
            {LEGAL_NAME} (“CertPro,” “we”) is a family-owned plumbing company serving the Kansas City metro as a
            service-area business. We do not operate a public storefront. This policy describes how we handle information
            collected through https://www.certproplumbingkc.com and related booking tools.
          </p>
          <p>
            Questions: {EMAIL} or {PHONE_DISPLAY}.
          </p>
        </LegalSection>

        <LegalSection heading="Information we collect">
          <p>We collect information you choose to give us and information created when you use the site:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Contact and job details from the estimate form or Housecall Pro booking widget (name, phone, email, service address, and a description of the plumbing issue).</li>
            <li>Call records when you tap a click-to-call link (the number you dialed and that the click happened on this site).</li>
            <li>Usage data such as pages viewed, device type, and approximate location derived from IP address, via analytics tools listed below.</li>
          </ul>
        </LegalSection>

        <LegalSection heading="How we use it">
          <p>
            We use this information to return your call or message, schedule service, dispatch a technician, improve the
            website, measure advertising, and keep the site secure. We do not sell personal information.
          </p>
        </LegalSection>

        <LegalSection heading="Service providers">
          <p>We share information with vendors only as needed to run the business:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Housecall Pro, for online booking and job communication.</li>
            <li>Google Analytics and Google Ads, for site measurement and advertising conversion tracking.</li>
            <li>PostHog, for product analytics and error tracking (events are proxied through this website).</li>
            <li>Vercel, which hosts the website.</li>
          </ul>
          <p>
            Those companies process data under their own terms. Booking details you enter in the Housecall Pro widget are
            also subject to Housecall Pro’s privacy policy.
          </p>
        </LegalSection>

        <LegalSection heading="Cookies and similar technology">
          <p>
            The site uses cookies and similar storage for analytics and advertising measurement. You can control cookies in
            your browser. Blocking them may limit how well we can measure visits; it will not prevent you from calling or
            requesting service.
          </p>
        </LegalSection>

        <LegalSection heading="Retention and requests">
          <p>
            We keep job and contact records as long as needed to provide service, meet legal or insurance requirements, and
            resolve disputes. To ask what we have, correct it, or request deletion of marketing analytics identifiers, email{' '}
            {EMAIL}. We may need to retain some records related to work already performed.
          </p>
        </LegalSection>

        <LegalSection heading="Children">
          <p>This website is not directed at children under 13. We do not knowingly collect information from them.</p>
        </LegalSection>

        <LegalSection heading="Changes">
          <p>
            We will update this page when our practices change. The date at the top is the current version. Related site
            rules are in our <Link href="/terms" className="font-semibold text-brand-secondary hover:text-white">Terms of Service</Link>.
          </p>
        </LegalSection>
      </LegalPage>
    </>
  )
}
