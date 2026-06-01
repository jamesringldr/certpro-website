'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SERVICES = [
  {
    id: 1,
    title: 'Commercial Plumbing Services',
    summary: 'Full-scale plumbing solutions for offices, restaurants, retail, and industrial facilities.',
    detail:
      'We design, install, and maintain comprehensive plumbing systems for commercial properties of any size. Services include large-diameter pipe installation, grease trap maintenance, backflow prevention, commercial water heaters, and scheduled preventive maintenance contracts tailored to your business operations.',
    tags: ['#Commercial', '#LargeScale', '#Maintenance', '#Backflow'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8v-2h8v2zm0-4h-8v-2h8v2zm0-4h-8V9h8v2z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Residential Installation & Repair',
    summary: 'Expert plumbing for new builds, renovations, and everyday repairs in your home.',
    detail:
      'From water heater installation to whole-house re-piping, drain cleaning, fixture upgrades, and leak detection — our licensed plumbers handle every residential need with minimal disruption. We use camera inspection technology to diagnose hidden problems fast and accurately.',
    tags: ['#Residential', '#FastService', '#Licensed', '#LeakDetection'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Emergency Plumbing & Maintenance',
    summary: 'Fast rapid response for burst pipes, flooding, sewer backups, and gas leaks.',
    detail:
      'Our rapid response team is dispatched within the hour when you need help most. We handle burst pipes, severe leaks, sewer backups, and flooding with urgency and precision. We also offer annual maintenance plans — the smartest way to prevent costly emergency calls before they happen.',
    tags: ['#Emergency', '#FastRapidResponse', '#RapidResponse', '#MaintenancePlan'],
    icon: (
      <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
      </svg>
    ),
  },
]

export default function Services() {
  const [activeId, setActiveId] = useState<number | null>(1)

  const toggle = (id: number) => setActiveId(prev => (prev === id ? null : id))

  return (
    <section
      id="services"
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#0A0F2C' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
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
              Our Services
            </span>
            <span className="h-px w-8" style={{ backgroundColor: '#00D4FF' }} />
          </div>
          <h2 className="font-heading font-black text-4xl sm:text-5xl uppercase text-white">
            COMPREHENSIVE PLUMBING SERVICES
          </h2>
        </motion.div>

        <div
          className="mb-8 rounded-2xl border p-5 sm:p-6"
          style={{ backgroundColor: '#0D1535', borderColor: '#2A3570' }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-heading text-xl font-black uppercase text-white">Need help now?</p>
              <p className="mt-1 font-body text-sm text-gray-400">
                Jump straight to the service you need and contact us in one tap.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="#emergency-service"
                className="rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(0,212,255,0.5)' }}
              >
                Emergency Repair
              </a>
              <a
                href="#services"
                className="rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(0,212,255,0.5)' }}
              >
                Residential
              </a>
              <a
                href="#contact"
                className="rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(0,212,255,0.5)' }}
              >
                Schedule Visit
              </a>
            </div>
          </div>
        </div>

        {/* Accordion cards */}
        <div className="space-y-4">
          {SERVICES.map((svc, i) => {
            const isOpen = activeId === svc.id
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  id={svc.id === 3 ? 'emergency-service' : undefined}
                  className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: '#1A2555',
                    border: `1px solid ${isOpen ? '#00D4FF' : '#2A3570'}`,
                    boxShadow: isOpen ? '0 4px 32px rgba(0,212,255,0.10)' : 'none',
                  }}
                  onClick={() => toggle(svc.id)}
                >
                  {/* Header row */}
                  <div className="flex items-center gap-5 p-5 sm:p-6">
                    {/* Icon block */}
                    <div
                      className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{
                        background: isOpen
                          ? 'linear-gradient(135deg, #0099BB 0%, #00D4FF 100%)'
                          : 'linear-gradient(135deg, #0D1535 0%, #2A3570 100%)',
                        color: isOpen ? '#0A0F2C' : '#00D4FF',
                      }}
                    >
                      {svc.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl uppercase text-white leading-tight">
                        {svc.title}
                      </h3>
                      <p className="font-body text-sm text-gray-500 mt-0.5 hidden sm:block">
                        {svc.summary}
                      </p>
                    </div>

                    {/* Tags — desktop */}
                    <div className="hidden lg:flex flex-wrap gap-2 flex-shrink-0">
                      {svc.tags.slice(0, 2).map(tag => (
                        <span
                          key={tag}
                          className="font-body text-xs px-2.5 py-1 rounded-full"
                          style={{
                            backgroundColor: '#0A0F2C',
                            color: '#00D4FF',
                            border: '1px solid rgba(0,212,255,0.35)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Toggle button */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.22 }}
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: isOpen ? '#00D4FF' : '#0A0F2C',
                        color: isOpen ? '#0A0F2C' : '#00D4FF',
                        border: '1px solid rgba(0,212,255,0.4)',
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Expandable body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="body"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                        style={{ borderTop: '1px solid #2A3570' }}
                      >
                        <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-6 items-start">
                          {/* Expanded image placeholder */}
                          <div
                            className="w-full sm:w-36 h-24 rounded-xl flex-shrink-0 flex items-center justify-center"
                            style={{
                              background: 'linear-gradient(135deg, #0A0F2C 0%, #2A3570 100%)',
                              border: '1px solid #2A3570',
                            }}
                          >
                            <div style={{ color: '#00D4FF', opacity: 0.3 }}>{svc.icon}</div>
                          </div>

                          <div className="flex-1">
                            <p className="font-body text-gray-400 leading-relaxed text-sm mb-4">
                              {svc.detail}
                            </p>

                            {/* All tags */}
                            <div className="flex flex-wrap gap-2 mb-5">
                              {svc.tags.map(tag => (
                                <span
                                  key={tag}
                                  className="font-body text-xs px-2.5 py-1 rounded-full"
                                  style={{
                                    backgroundColor: '#0A0F2C',
                                    color: '#00D4FF',
                                    border: '1px solid rgba(0,212,255,0.35)',
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row">
                              <a
                                href="tel:+15551234567"
                                className="inline-flex min-h-11 items-center justify-center rounded px-6 py-2.5 text-sm font-bold transition-all duration-200 hover:brightness-110"
                                style={{ backgroundColor: '#00D4FF', color: '#0A0F2C' }}
                              >
                                Call for Fast Dispatch
                              </a>
                              <a
                                href="#contact"
                                className="inline-flex min-h-11 items-center justify-center rounded border px-6 py-2.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
                                style={{ borderColor: 'rgba(0,212,255,0.5)' }}
                              >
                                Book This Service
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
