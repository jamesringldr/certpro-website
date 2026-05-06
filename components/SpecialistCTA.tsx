'use client'

import { motion } from 'framer-motion'

export default function SpecialistCTA() {
  return (
    <section
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A0F2C 0%, #1A2555 50%, #0D1535 100%)',
      }}
    >
      {/* Cyan radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 55% 60% at 90% 50%, rgba(0,212,255,0.07) 0%, transparent 70%)',
        }}
      />
      {/* Pipe pattern decoration */}
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-48 opacity-5">
        <svg viewBox="0 0 200 400" fill="none" stroke="#00D4FF" strokeWidth="3" className="h-full w-full">
          <circle cx="40"  cy="80"  r="20" />
          <circle cx="40"  cy="200" r="20" />
          <circle cx="40"  cy="320" r="20" />
          <line x1="40" y1="100" x2="40" y2="180" />
          <line x1="40" y1="220" x2="40" y2="300" />
          <line x1="60"  y1="80"  x2="180" y2="80"  />
          <line x1="60"  y1="200" x2="180" y2="200" />
          <line x1="60"  y1="320" x2="180" y2="320" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: headline + CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] text-white mb-8">
              WE SPECIALIZE IN PROVIDING TOP-NOTCH PLUMBING SERVICES{' '}
              <span style={{ color: '#00D4FF' }}>TAILORED TO YOUR UNIQUE NEEDS.</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15551234567"
                className="inline-block font-body font-bold text-sm px-10 py-4 rounded text-center transition-all duration-200 hover:brightness-110 active:scale-95 cursor-pointer"
                style={{ backgroundColor: '#00D4FF', color: '#0A0F2C' }}
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center font-body font-bold text-sm px-10 py-4 rounded text-white border transition-all duration-200 hover:bg-white/10 cursor-pointer"
                style={{ borderColor: 'rgba(0,212,255,0.5)' }}
              >
                Book Service
              </a>
            </div>
          </motion.div>

          {/* ── Right: plumber profile ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="text-center">
              {/* Profile image placeholder */}
              <div
                className="relative w-52 h-64 rounded-3xl mx-auto overflow-hidden flex items-center justify-center"
                style={{
                  background: 'linear-gradient(160deg, #1A2555 0%, #2A3570 100%)',
                  border: '2px solid rgba(0,212,255,0.4)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
                }}
              >
                {/* Silhouette */}
                <svg viewBox="0 0 80 100" className="w-32 h-40 opacity-20" fill="#00D4FF">
                  <ellipse cx="40" cy="22" rx="16" ry="16" />
                  <path d="M14 52c0-14.4 11.7-22 26-22s26 7.6 26 22v40H14V52z" />
                </svg>

                {/* Name plate */}
                <div
                  className="absolute bottom-0 left-0 right-0 py-3 px-4"
                  style={{ backgroundColor: 'rgba(0,212,255,0.92)' }}
                >
                  <div
                    className="font-body font-bold text-xs"
                    style={{ color: '#0A0F2C' }}
                  >
                    Lead Specialist
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="font-heading font-black text-xl text-white">Marcus Johnson</div>
                <div className="font-body text-sm mt-0.5" style={{ color: '#00D4FF' }}>
                  Master Plumber &amp; Founder
                </div>
              </div>

              {/* Credential badges */}
              <div className="flex justify-center gap-3 mt-4">
                {['Licensed', 'Insured', 'Certified'].map(badge => (
                  <div
                    key={badge}
                    className="font-body text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: 'rgba(0,212,255,0.12)',
                      color: '#00D4FF',
                      border: '1px solid rgba(0,212,255,0.3)',
                    }}
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
