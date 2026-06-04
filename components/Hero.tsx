'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const STATS = [
  { value: '4.5K+', label: 'Projects Done' },
  { value: '13K+',  label: 'Satisfied Customers' },
  { value: '30+',   label: 'Years of Experience' },
]

const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay } },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      style={{
        background:
          'linear-gradient(140deg, #0A0F2C 0%, #0D1535 45%, #112048 75%, #0A0F2C 100%)',
      }}
    >
      {/* Radial glow accent */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 40%, rgba(0,212,255,0.08) 0%, transparent 70%), ' +
            'radial-gradient(ellipse 40% 40% at 10% 70%, rgba(26,37,85,0.5) 0%, transparent 60%)',
        }}
      />
      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,212,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* ── Mascot — absolute, fills the full right half of the section ── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute right-0 z-10 pointer-events-none"
        style={{ top: '64px', height: 'calc(100vh - 64px)', width: 'clamp(440px, 48%, 720px)' }}
      >
        {/* Soft glow at the mascot's feet */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-32 blur-3xl opacity-30"
          style={{ backgroundColor: '#00D4FF' }}
        />
        <Image
          src="/mascot-hero.png"
          alt="CertPro Plumbing professional mascot"
          fill
          priority
          sizes="(min-width: 1024px) 48vw, 0px"
          className="object-contain object-bottom"
        />

        {/* Fast rapid response badge — anchored to bottom-right of mascot area */}
        <div
          className="pointer-events-auto absolute bottom-12 right-8 flex max-w-[9.5rem] flex-col items-center justify-center rounded-2xl px-2 py-2.5 text-center shadow-2xl"
          style={{ backgroundColor: '#00D4FF' }}
        >
          <span className="font-heading text-[11px] font-black uppercase leading-snug sm:text-xs" style={{ color: '#0A0F2C' }}>
            Fast Rapid Response
          </span>
          <span className="font-body mt-1 text-[9px] font-bold uppercase tracking-wide" style={{ color: '#0A0F2C' }}>
            Emergency
          </span>
        </div>

        {/* Decorative ring — top-right corner of mascot area */}
        <div
          className="absolute top-8 right-8 w-24 h-24 rounded-full opacity-15 border-4"
          style={{ borderColor: '#00D4FF' }}
        />
      </motion.div>

      {/* ── Left content — constrained to left half on desktop ── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:max-w-[52%]">

          {/* Eyebrow */}
          <motion.div
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2.5 mb-6"
          >
            <span className="h-px w-8" style={{ backgroundColor: '#00D4FF' }} />
            <span
              className="font-body font-semibold text-xs tracking-[0.22em] uppercase"
              style={{ color: '#00D4FF' }}
            >
              Professional Plumbing Services
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
            className="font-heading font-black text-5xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-white mb-6"
          >
            FAST,{' '}
            <span style={{ color: '#00D4FF' }}>AFFORDABLE</span>
            {' '}&#38; ENERGY EFFICIENT
            <span className="block mt-1">PLUMBING SERVICES</span>
          </motion.h1>

          {/* Body copy */}
          <motion.p
            variants={fadeUp(0.2)}
            initial="hidden"
            animate="visible"
            className="font-body text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
          >
            Serving homeowners and businesses across Kansas City with certified,
            reliable plumbing solutions. From emergency repairs to full installations —
            we&apos;re here when you need us most. Your call is answered by real people.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 mb-6"
          >
            <a
              href="tel:+18164540247"
              className="font-body font-bold text-sm px-9 py-4 text-center rounded transition-all duration-200 hover:brightness-110 active:scale-95 cursor-pointer"
              style={{ backgroundColor: '#00D4FF', color: '#0A0F2C' }}
            >
              Call Emergency Line
            </a>
            <a
              href="#contact"
              className="font-body font-bold text-sm px-9 py-4 text-center rounded border transition-all duration-200 hover:bg-white/10 text-white cursor-pointer"
              style={{ borderColor: '#00D4FF' }}
            >
              Book Service
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp(0.35)}
            initial="hidden"
            animate="visible"
            className="mb-16 flex flex-wrap gap-3"
          >
            <a
              href="#emergency-service"
              className="rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-white/10"
              style={{ borderColor: 'rgba(0,212,255,0.5)' }}
            >
              Burst Pipe Help
            </a>
            <a
              href="#services"
              className="rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-white/10"
              style={{ borderColor: 'rgba(0,212,255,0.5)' }}
            >
              View Services
            </a>
            <a
              href="#about"
              className="rounded-full border px-4 py-2 font-body text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:bg-white/10"
              style={{ borderColor: 'rgba(0,212,255,0.5)' }}
            >
              Why Homeowners Trust Us
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-3 gap-0"
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`${i > 0 ? 'border-l pl-5 sm:pl-7' : ''}`}
                style={{ borderColor: '#1A2555' }}
              >
                <div
                  className="font-heading font-black text-3xl sm:text-4xl leading-none"
                  style={{ color: '#00D4FF' }}
                >
                  {stat.value}
                </div>
                <div className="font-body text-xs sm:text-sm text-gray-500 mt-1.5 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Section transition wave */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="w-full block">
          <path d="M0,56 L0,28 Q360,0 720,28 Q1080,56 1440,28 L1440,56 Z" fill="#F5F7FA" />
        </svg>
      </div>
    </section>
  )
}
