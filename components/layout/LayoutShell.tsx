import type { ReactNode } from 'react'
import BookingProvider from '@/components/booking/BookingProvider'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import MobileEmergencyBar from '@/components/layout/MobileEmergencyBar'

type LayoutShellProps = {
  children: ReactNode
}

export default function LayoutShell({ children }: LayoutShellProps) {
  return (
    <BookingProvider>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main id="main-content" className="flex-1 pb-[calc(7.25rem+env(safe-area-inset-bottom))] md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileEmergencyBar />
      </div>
    </BookingProvider>
  )
}
