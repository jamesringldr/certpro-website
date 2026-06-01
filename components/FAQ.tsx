'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'How quickly can you respond to a plumbing emergency?',
    a: 'Our emergency response team delivers fast rapid response and aims to arrive within 60 minutes of your call anywhere in the Kansas City metro. Your call is answered by real people. For burst pipes, flooding, or gas leaks, we prioritize your safety and respond immediately.',
  },
  {
    q: 'Are your plumbers licensed and insured?',
    a: 'Absolutely. Every CertPro technician holds a valid Missouri state plumbing license and is fully covered by general liability and workers\u2019 compensation insurance. We carry and present our credentials on every job without being asked.',
  },
  {
    q: 'Do you provide free estimates?',
    a: 'Yes, we offer free on-site estimates for non-emergency work. For after-hours emergency calls, a diagnostic fee may apply — however, that fee is credited toward your final invoice if you proceed with the repair.',
  },
  {
    q: 'What areas of Kansas City do you serve?',
    a: "We serve the full Kansas City metropolitan area including the Northland, Overland Park, Lee\u2019s Summit, Blue Springs, Independence, Raytown, and Lenexa. Contact us to confirm service availability for your specific zip code.",
  },
  {
    q: 'Do you offer maintenance plans for homeowners?',
    a: 'Yes! Our annual CertPro Care Plan includes a full plumbing inspection, water heater flush and check, drain cleaning on two fixtures, and priority scheduling for any repairs. It\u2019s the best way to prevent costly emergencies before they happen.',
  },
]

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const toggle = (i: number) => setActiveIdx(prev => (prev === i ? null : i))

  return (
    <section
      id="faq"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#F5F7FA' }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

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
              FAQ
            </span>
            <span className="h-px w-8" style={{ backgroundColor: '#00D4FF' }} />
          </div>
          <h2
            className="font-heading font-black text-4xl sm:text-5xl uppercase"
            style={{ color: '#0A0F2C' }}
          >
            HAVE QUESTIONS?<br className="hidden sm:block" /> WE&apos;VE GOT ANSWERS
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3 mb-14">
          {FAQS.map((faq, i) => {
            const isOpen = activeIdx === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <div
                  className="rounded-xl overflow-hidden cursor-pointer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${isOpen ? '#00D4FF' : '#E5E7EB'}`,
                    boxShadow: isOpen ? '0 4px 24px rgba(0,212,255,0.08)' : 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}
                  onClick={() => toggle(i)}
                >
                  <div className="flex items-center gap-4 px-5 py-4">
                    <h3 className="font-body font-bold text-gray-800 text-base flex-1">
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: isOpen ? '#00D4FF' : '#F5F7FA',
                        color: isOpen ? '#0A0F2C' : '#6B7280',
                        border: '1px solid',
                        borderColor: isOpen ? '#00D4FF' : '#E5E7EB',
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </motion.div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p
                          className="font-body text-gray-600 leading-relaxed px-5 pb-5 text-sm"
                          style={{ borderTop: '1px solid #F5F7FA' }}
                        >
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center rounded-2xl p-8"
          style={{ backgroundColor: '#0A0F2C' }}
        >
          <h3 className="font-heading font-bold text-2xl uppercase text-white mb-1">
            Still have questions?
          </h3>
          <p className="font-body text-gray-500 text-sm mb-7">
            Our team is ready to help you — day or night.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center gap-2 font-body font-bold text-sm px-6 py-3 rounded cursor-pointer transition-all duration-200 hover:brightness-110"
              style={{ backgroundColor: '#00D4FF', color: '#0A0F2C' }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              Call (555) 123-4567
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 font-body font-bold text-sm px-6 py-3 rounded text-white border cursor-pointer transition-all duration-200 hover:bg-white/10"
              style={{ borderColor: 'rgba(0,212,255,0.5)' }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
              Send a Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
