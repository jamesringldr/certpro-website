'use client'

import Script from 'next/script'
import { GOOGLE_ADS_ID } from '@/lib/analytics/google-ads'

const ga4MeasurementId = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID

/** Primary gtag.js loader ID — Ads is always installed; GA4 is optional via env. */
const primaryTagId = ga4MeasurementId || GOOGLE_ADS_ID

export default function Ga4Bootstrap() {
  const configCommands = [
    ga4MeasurementId ? `gtag('config', '${ga4MeasurementId}');` : null,
    `gtag('config', '${GOOGLE_ADS_ID}');`,
  ]
    .filter(Boolean)
    .join('\n            ')

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${primaryTagId}`} strategy="afterInteractive" />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            ${configCommands}
          `,
        }}
      />
    </>
  )
}
