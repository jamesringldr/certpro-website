'use client'

import Link from 'next/link'
import { trackGa4Event } from '@/lib/analytics/ga4'

export default function MobileEmergencyBar() {
  return (
    <div
      id="mobile-emergency-bar"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-border bg-brand-bg p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3">
        <a
          href="tel:+18165550192"
          onClick={() => {
            trackGa4Event('call_click', {
              entrypoint: 'sticky_bar',
              page_path: window.location.pathname,
            })
          }}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-primary px-3 py-2 text-sm font-semibold text-white"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          onClick={() => {
            trackGa4Event('book_click', {
              entrypoint: 'sticky_bar',
              page_path: window.location.pathname,
            })
          }}
          className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-secondary px-3 py-2 text-sm font-semibold text-brand-secondary"
        >
          Book Now
        </Link>
      </div>
    </div>
  )
}
