'use client'

import { motion } from 'framer-motion'

const REVIEWS = [
  {
    name:    'Sarah Mitchell',
    role:    'Homeowner, Overland Park',
    text:    'CertPro fixed our burst pipe at 2 AM on a Sunday. Fast, professional, and the price was completely fair. I won\u2019t call anyone else.',
    initials: 'SM',
    color:   '#1A2555',
  },
  {
    name:    'David Chen',
    role:    'Restaurant Owner, KC',
    text:    'They handle all of our commercial plumbing. The team is punctual, their work is immaculate, and they always go the extra mile.',
    initials: 'DC',
    color:   '#2A3570',
  },
  {
    name:    'Patricia Okafor',
    role:    'Homeowner, Lee\u2019s Summit',
    text:    'Had a tricky leak behind drywall. Marcus and his team found it in under 20 minutes and fixed it cleanly. Highly recommend.',
    initials: 'PO',
    color:   '#0D1535',
  },
  {
    name:    'James Thornton',
    role:    'Property Manager',
    text:    'Managing 12 rental units means I need reliable contractors. CertPro has been my go-to for 4 years running. They never disappoint.',
    initials: 'JT',
    color:   '#1A2555',
  },
  {
    name:    'Lisa Fontaine',
    role:    'Homeowner, Blue Springs',
    text:    'Installed a new water heater and re-piped part of our basement. Clean work, great communication throughout, zero mess left behind.',
    initials: 'LF',
    color:   '#2A3570',
  },
]

const Star = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#F5C518">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
)

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2.5 mb-5">
            <span className="h-px w-8" style={{ backgroundColor: '#00D4FF' }} />
            <span
              className="font-body font-semibold text-xs tracking-[0.22em] uppercase"
              style={{ color: '#00D4FF' }}
            >
              Testimonials
            </span>
            <span className="h-px w-8" style={{ backgroundColor: '#00D4FF' }} />
          </div>
          <h2
            className="font-heading font-black text-4xl sm:text-5xl uppercase"
            style={{ color: '#0A0F2C' }}
          >
            WHAT OUR CUSTOMERS SAY
          </h2>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {[...Array(5)].map((_, i) => <Star key={i} />)}
            <span className="font-body font-bold text-sm ml-1" style={{ color: '#0A0F2C' }}>
              4.9 / 5.0
            </span>
            <span className="font-body text-sm text-gray-500">(13,000+ reviews)</span>
          </div>
        </motion.div>

        {/* Review grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              className="p-6 rounded-2xl cursor-default"
              style={{
                backgroundColor: '#F5F7FA',
                border: '1px solid #E5E7EB',
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} />)}
              </div>

              {/* Quote mark */}
              <div
                className="font-heading font-black text-5xl leading-none mb-2 -mt-2"
                style={{ color: '#00D4FF', opacity: 0.25 }}
              >
                &ldquo;
              </div>

              {/* Review text */}
              <p className="font-body text-gray-600 text-sm leading-relaxed mb-6">
                {r.text}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: r.color }}
                >
                  <span className="font-body font-bold text-sm" style={{ color: '#00D4FF' }}>
                    {r.initials}
                  </span>
                </div>
                <div>
                  <div className="font-body font-bold text-sm" style={{ color: '#0A0F2C' }}>
                    {r.name}
                  </div>
                  <div className="font-body text-xs text-gray-500">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
