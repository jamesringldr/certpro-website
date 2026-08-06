'use client'

export const GOOGLE_ADS_ID = 'AW-18316420696'
export const GOOGLE_ADS_CONTACT_SEND_TO = 'AW-18316420696/2MHaCLmHq9AcENjM-Z1E'

/** Fires the Google Ads "Contact" conversion event (estimate/contact form success). */
export function trackGoogleAdsContactConversion(): void {
  if (typeof window === 'undefined') {
    return
  }

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_CONTACT_SEND_TO,
    })
    return
  }

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'conversion',
    send_to: GOOGLE_ADS_CONTACT_SEND_TO,
  })
}
