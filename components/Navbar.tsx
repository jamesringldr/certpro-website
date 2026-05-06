'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Emergency', href: '#emergency-service' },
  { label: 'Services', href: '#services' },
  { label: 'Trust', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen,   setIsOpen]   = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setIsOpen(false)

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: '#0A0F2C',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        borderBottom: '1px solid rgba(26,37,85,0.6)',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 select-none" aria-label="CertPro Plumbing home">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image src="/icon.png" alt="CertPro icon" fill className="object-contain" sizes="40px" />
            </div>
            <div className="flex flex-col leading-none">
              <div className="flex items-baseline">
                <span className="font-heading font-black text-2xl tracking-tight text-white">Cert</span>
                <span className="font-heading font-black text-2xl tracking-tight" style={{ color: '#00D4FF' }}>Pro</span>
              </div>
              <span className="font-body text-[10px] tracking-[0.22em] uppercase" style={{ color: '#4A5568' }}>
                Plumbing
              </span>
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-body font-semibold text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+15551234567"
              className="inline-block font-body font-bold text-sm px-6 py-2.5 rounded transition-all duration-200 hover:brightness-110 active:scale-95 cursor-pointer"
              style={{ backgroundColor: '#00D4FF', color: '#0A0F2C' }}
            >
              Call Now
            </a>
            <a
              href="#contact"
              className="inline-block font-body font-bold text-sm px-6 py-2.5 rounded border text-white transition-colors duration-200 hover:bg-white/10 cursor-pointer"
              style={{ borderColor: 'rgba(0,212,255,0.5)' }}
            >
              Book Service
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(o => !o)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="md:hidden p-2 flex flex-col gap-1.5 cursor-pointer"
          >
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
              style={{ transform: isOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              style={{ opacity: isOpen ? 0 : 1 }}
            />
            <span
              className="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"
              style={{ transform: isOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: '#0A0F2C', borderTop: '1px solid #1A2555' }}
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={close}
                  className="font-body font-semibold text-base text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {label}
                </a>
              ))}
              <a
                href="tel:+15551234567"
                onClick={close}
                className="mt-1 text-center font-body font-bold text-sm py-3 rounded cursor-pointer"
                style={{ backgroundColor: '#00D4FF', color: '#0A0F2C' }}
              >
                Call Now
              </a>
              <a
                href="#contact"
                onClick={close}
                className="text-center font-body font-bold text-sm py-3 rounded border text-white cursor-pointer"
                style={{ borderColor: 'rgba(0,212,255,0.5)' }}
              >
                Book Service
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
