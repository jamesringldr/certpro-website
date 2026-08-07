'use client'

import BookServiceButton from '@/components/booking/BookServiceButton'
import { trackGa4Event } from '@/lib/analytics/ga4'

export default function MobileEmergencyBar() {
  return (
    <div
      id="mobile-emergency-bar"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-border bg-brand-bg px-3 pt-2.5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-2 text-center text-sm font-semibold tracking-wide text-white">
          Rapid Response by Real People
        </p>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="tel:+18164540247"
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
          <BookServiceButton
            entrypoint="sticky_bar"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-brand-secondary px-3 py-2 text-sm font-semibold text-brand-secondary"
          >
            Book Now
          </BookServiceButton>
        </div>
      </div>
    </div>
  )
}
