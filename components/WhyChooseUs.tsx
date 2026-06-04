'use client'

import { motion } from 'framer-motion'

const FEATURES = [
  {
    title: 'Experienced & Reliable',
    desc:  'Over 30 years of proven track record with thousands of satisfied clients across the KC metro.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    title: 'Your Comfort, Our Commitment',
    desc:  'We treat every home with respect — clean work sites, on-time arrivals, and upfront pricing, always.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: 'Backed By Certified Experts',
    desc:  'All plumbers are fully licensed, insured, and background-checked for your complete peace of mind.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z" />
      </svg>
    ),
  },
  {
    title: 'Ready For Every Season',
    desc:  'Frozen pipes in winter, clogged drains in summer — we handle every seasonal plumbing challenge.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
      </svg>
    ),
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="h-px w-6" style={{ backgroundColor: '#00D4FF' }} />
              <span
                className="font-body font-semibold text-xs tracking-[0.22em] uppercase"
                style={{ color: '#00D4FF' }}
              >
                Why Choose Us
              </span>
            </div>

            <h2
              className="font-heading font-black text-4xl sm:text-5xl uppercase leading-[1] mb-6"
              style={{ color: '#0A0F2C' }}
            >
              WHY HOMEOWNERS TRUST OUR PLUMBING EXPERTS
            </h2>

            <p className="font-body text-gray-600 text-lg leading-relaxed mb-8">
              We&apos;ve earned our reputation through consistent excellence, transparent
              communication, and results that speak for themselves. Join thousands of homeowners
              who trust CertPro Plumbing with their most important investment — their home.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+18164540247"
                className="inline-flex min-h-11 items-center justify-center rounded px-6 py-3 text-sm font-bold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: '#00D4FF', color: '#0A0F2C' }}
              >
                Call Us Anytime
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center justify-center rounded border px-6 py-3 text-sm font-bold transition-colors duration-200 hover:bg-slate-100"
                style={{ borderColor: '#00D4FF', color: '#0A0F2C' }}
              >
                Book Service
              </a>
            </div>
          </motion.div>

          {/* ── Right: 2×2 feature cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,212,255,0.10)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                className="p-6 rounded-2xl cursor-default"
                style={{
                  backgroundColor: '#F5F7FA',
                  border: '1px solid #E5E7EB',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#0A0F2C', color: '#00D4FF' }}
                >
                  {f.icon}
                </div>
                <h3
                  className="font-heading font-bold text-lg uppercase mb-2"
                  style={{ color: '#0A0F2C' }}
                >
                  {f.title}
                </h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
