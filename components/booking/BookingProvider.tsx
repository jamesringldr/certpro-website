'use client'

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import HousecallProLeadModal from '@/components/booking/HousecallProLeadModal'
import { trackGa4Event, type Ga4EventParams } from '@/lib/analytics/ga4'

export type BookingEntrypoint = NonNullable<Ga4EventParams['entrypoint']>

type BookingContextValue = {
  isOpen: boolean
  openBooking: (entrypoint: BookingEntrypoint) => void
  closeBooking: () => void
}

const BookingContext = createContext<BookingContextValue | null>(null)

export function useBooking(): BookingContextValue {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error('useBooking must be used within BookingProvider')
  }

  return context
}

type BookingProviderProps = {
  children: ReactNode
}

export default function BookingProvider({ children }: BookingProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const openBooking = useCallback((nextEntrypoint: BookingEntrypoint) => {
    const pagePath = window.location.pathname
    trackGa4Event('book_start', { entrypoint: nextEntrypoint, page_path: pagePath })
    trackGa4Event('form_view', { entrypoint: nextEntrypoint, page_path: pagePath })
    setIsOpen(true)
  }, [])

  const closeBooking = useCallback(() => {
    setIsOpen(false)
  }, [])

  const value = useMemo(
    () => ({
      isOpen,
      openBooking,
      closeBooking,
    }),
    [closeBooking, isOpen, openBooking],
  )

  return (
    <BookingContext.Provider value={value}>
      {children}
      <HousecallProLeadModal isOpen={isOpen} onClose={closeBooking} />
    </BookingContext.Provider>
  )
}
