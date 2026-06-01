'use client'

import { motion } from 'framer-motion'

const slideIn = (dir: 'left' | 'right') => ({
  hidden:  { opacity: 0, x: dir === 'left' ? -50 : 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
})

export default function TrustBar() {
  return (
    <section
      id="about"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="mb-12 rounded-2xl border p-5 sm:p-6"
          style={{ backgroundColor: '#FFFFFF', borderColor: '#CDEFFC' }}
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-heading text-xl font-black uppercase" style={{ color: '#0A0F2C' }}>
                Trusted by 13K+ Kansas City homeowners
              </p>
              <p className="mt-1 font-body text-sm text-gray-600">
                State licensed, fully insured, with fast rapid response and emergency dispatch. Your call is answered by
                real people.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+15551234567"
                className="inline-flex min-h-11 items-center justify-center rounded px-6 py-3 text-sm font-bold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: '#00D4FF', color: '#0A0F2C' }}
              >
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded border px-6 py-3 text-sm font-bold transition-colors duration-200 hover:bg-slate-100"
                style={{ borderColor: '#00D4FF', color: '#0A0F2C' }}
              >
                Book Service
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ── */}
          <motion.div
            variants={slideIn('left')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-6" style={{ backgroundColor: '#F5C518' }} />
              <span
                className="font-body font-semibold text-xs tracking-[0.22em] uppercase"
                style={{ color: '#F5C518' }}
              >
                About Us
              </span>
            </div>

            <h2
              className="font-heading font-black text-4xl sm:text-5xl uppercase leading-[1] mb-6"
              style={{ color: '#0A0F2C' }}
            >
              TRUSTED PLUMBING EXPERT YOU CAN COUNT ON
            </h2>

            <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
              With 30+ years of experience serving Kansas City homeowners and commercial
              clients, CertPro Plumbing has built a reputation for quality, reliability, and
              transparent pricing. Our certified technicians arrive on time, diagnose accurately,
              and fix it right the first time — guaranteed.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 mb-10">
              {['State Licensed', 'Fully Insured', 'Background Checked', '5-Star Rated'].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: '#E8F8FF', border: '1px solid #00D4FF' }}
                >
                  <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 flex-shrink-0" fill="#00D4FF">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-body font-semibold text-xs" style={{ color: '#0A0F2C' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block font-body font-bold text-sm px-8 py-4 rounded transition-all duration-200 hover:brightness-110 active:scale-95 cursor-pointer"
              style={{ backgroundColor: '#F5C518', color: '#0A0F2C' }}
            >
              Learn More About Us
            </a>
          </motion.div>

          {/* ── Right: images + badge ── */}
          <motion.div
            variants={slideIn('right')}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder 1 */}
              <div
                className="h-60 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{ background: 'linear-gradient(155deg, #1A2555 0%, #0A0F2C 100%)' }}
              >
                <svg viewBox="0 0 24 24" className="w-14 h-14 opacity-20" fill="#00D4FF">
                  <path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31z" />
                </svg>
              </div>

              {/* Placeholder 2 (offset down) */}
              <div
                className="h-60 rounded-2xl flex items-center justify-center overflow-hidden mt-8"
                style={{ background: 'linear-gradient(155deg, #0D1535 0%, #2A3570 100%)' }}
              >
                <svg viewBox="0 0 24 24" className="w-14 h-14 opacity-20" fill="#00D4FF">
                  <path d="M20.57 14.86L22 13.43 20.57 12l-1 1-1-1L17.14 13.43 18.57 14.86l-1 1 1 1 1.43-1.43 1.43 1.43 1.43-1.43-1.29-1.57zM10 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm6 4H4v-.99C4.2 17.29 7.3 16 10 16s5.8 1.29 6 3.01V18z" />
                </svg>
              </div>
            </div>

            {/* Certified badge */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl"
              style={{
                backgroundColor: '#0A0F2C',
                border: '3px solid #00D4FF',
                boxShadow: '0 0 0 6px rgba(0,212,255,0.12), 0 16px 40px rgba(0,0,0,0.35)',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-7 h-7 mb-1" fill="#00D4FF">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
              </svg>
              <span className="font-heading font-black text-sm leading-tight text-white text-center">
                Certified
              </span>
              <span className="font-body text-[10px] tracking-wider" style={{ color: '#00D4FF' }}>
                &amp; Licensed
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
