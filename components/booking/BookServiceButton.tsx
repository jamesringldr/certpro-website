'use client'

import { type ButtonHTMLAttributes, type ReactNode } from 'react'
import { useBooking, type BookingEntrypoint } from '@/components/booking/BookingProvider'
import { trackGa4Event } from '@/lib/analytics/ga4'

type BookServiceButtonProps = {
  children: ReactNode
  entrypoint: BookingEntrypoint
  className?: string
  variant?: 'primary' | 'secondary'
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'children'>

const VARIANT_CLASS: Record<NonNullable<BookServiceButtonProps['variant']>, string> = {
  primary:
    'inline-flex min-h-11 items-center justify-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white',
  secondary:
    'inline-flex min-h-11 items-center justify-center rounded-md border border-brand-secondary px-5 py-2 text-sm font-semibold text-brand-secondary',
}

export default function BookServiceButton({
  children,
  entrypoint,
  className,
  variant = 'secondary',
  ...buttonProps
}: BookServiceButtonProps) {
  const { openBooking } = useBooking()

  function handleClick(): void {
    trackGa4Event('book_click', {
      entrypoint,
      page_path: window.location.pathname,
    })
    openBooking(entrypoint)
  }

  const mergedClassName = className ?? VARIANT_CLASS[variant]

  return (
    <button type="button" className={mergedClassName} onClick={handleClick} {...buttonProps}>
      {children}
    </button>
  )
}
