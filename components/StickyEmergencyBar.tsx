'use client'

export default function StickyEmergencyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t px-3 py-2 sm:px-6"
      style={{ backgroundColor: '#0A0F2C', borderColor: '#1A2555' }}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full" style={{ backgroundColor: '#00D4FF' }} />
            <p className="font-body font-semibold text-white">
              Emergency? Fast rapid response — reach a licensed plumber in under 60 minutes.
            </p>
          </div>
          <p className="pl-4 font-body text-[11px] text-slate-400 sm:text-xs">Your call is answered by real people.</p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:flex">
          <a
            href="tel:+15551234567"
            className="inline-flex min-h-11 items-center justify-center rounded px-4 py-2 text-sm font-bold transition-all duration-200 hover:brightness-110"
            style={{ backgroundColor: '#00D4FF', color: '#0A0F2C' }}
          >
            Call Now
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded border px-4 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
            style={{ borderColor: 'rgba(0, 212, 255, 0.5)' }}
          >
            Book Service
          </a>
        </div>
      </div>
    </div>
  )
}
