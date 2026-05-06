'use client'

import { motion } from 'framer-motion'

export default function FinalCTA() {
  return (
    <section
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(130deg, #00C4EE 0%, #0099BB 35%, #006080 65%, #0A0F2C 100%)',
      }}
    >
      {/* Decorative circles */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-15"
        style={{ backgroundColor: '#FFFFFF' }}
      />
      <div
        className="pointer-events-none absolute -bottom-16 -left-16 w-52 h-52 rounded-full opacity-10"
        style={{ backgroundColor: '#FFFFFF' }}
      />

      {/* Subtle pipe motif */}
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <svg viewBox="0 0 1440 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice" fill="none" stroke="white" strokeWidth="2">
          <path d="M-100 100 Q200 40 500 100 Q800 160 1100 100 Q1300 60 1540 100" />
          <path d="M-100 130 Q200 70 500 130 Q800 190 1100 130 Q1300 90 1540 130" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-body font-semibold text-xs tracking-[0.22em] uppercase text-white/80">
              Available 24 hours a day, 7 days a week
            </span>
          </div>

          <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase text-white leading-[0.95] mb-6">
            NEED FAST PLUMBING SERVICE?<br />
            WE&apos;RE READY 24/7!
          </h2>

          <p className="font-body text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Don&apos;t let a plumbing emergency ruin your day. Book a service now and our
            certified team will be on their way — fast.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15551234567"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-body font-bold text-base px-10 py-4 rounded text-white border cursor-pointer transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.5)' }}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              (555) 123-4567
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto font-body font-bold text-base px-12 py-4 rounded text-center cursor-pointer transition-all duration-200 hover:brightness-95 active:scale-95"
              style={{ backgroundColor: '#FFFFFF', color: '#0A0F2C' }}
            >
              Book a Service
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
