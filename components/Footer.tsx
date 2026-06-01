'use client'

import { motion } from 'framer-motion'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Why Trust CertPro', href: '#about' },
  { label: 'Emergency Plumbing', href: '#emergency-service' },
  { label: 'All Services', href: '#services' },
  { label: 'Customer Reviews', href: '#testimonials' },
  { label: 'Contact / Booking', href: '#contact' },
]

const HOURS = [
  { day: 'Mon – Fri',  hours: '7:00 AM – 6:00 PM',  accent: false },
  { day: 'Saturday',   hours: '8:00 AM – 4:00 PM',  accent: false },
  { day: 'Sunday',     hours: 'Emergency Only',       accent: false },
  { day: 'Emergency',  hours: 'Fast Rapid Response', accent: true  },
]

const SOCIALS = [
  {
    label: 'Facebook',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="#0A0F2C" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#0A0F2C" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" style={{ backgroundColor: '#0A0F2C' }}>
      {/* Wave top */}
      <div className="leading-none" style={{ backgroundColor: '#F5F7FA' }}>
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full block" style={{ display: 'block' }}>
          <path d="M0,0 L0,48 L1440,48 L1440,0 Q1080,48 720,24 Q360,0 0,0 Z" fill="#0A0F2C" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Col 1: Logo + tagline + socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="flex flex-col leading-none mb-4 select-none" aria-label="CertPro Plumbing">
              <div className="flex items-baseline">
                <span className="font-heading font-black text-2xl text-white">Cert</span>
                <span className="font-heading font-black text-2xl" style={{ color: '#00D4FF' }}>Pro</span>
              </div>
              <span className="font-body text-[10px] tracking-[0.22em] uppercase" style={{ color: '#4A5568' }}>
                Plumbing
              </span>
            </a>

            <p className="font-body text-gray-500 text-sm leading-relaxed mb-6">
              Fast, affordable, and certified plumbing services for homes and businesses
              across the Kansas City metro area.
            </p>

            <div className="flex gap-2">
              {SOCIALS.map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-gray-500 hover:text-white transition-colors duration-200 cursor-pointer"
                  style={{ backgroundColor: '#1A2555' }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Col 2: Working hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h4 className="font-heading font-bold text-base uppercase text-white tracking-wide mb-5">
              Working Hours
            </h4>
            <ul className="space-y-3">
              {HOURS.map(({ day, hours, accent }) => (
                <li key={day} className="flex items-center justify-between">
                  <span className="font-body text-sm text-gray-500">{day}</span>
                  <span
                    className="font-body text-sm font-semibold"
                    style={{ color: accent ? '#00D4FF' : '#FFFFFF' }}
                  >
                    {hours}
                  </span>
                </li>
              ))}
            </ul>

            {/* Emergency badge */}
            <div
              className="mt-5 px-3 py-2.5 rounded-xl"
              style={{ backgroundColor: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#00D4FF' }} />
                <span className="font-body font-semibold text-xs" style={{ color: '#00D4FF' }}>
                  Emergency line always open
                </span>
              </div>
            </div>
          </motion.div>

          {/* Col 3: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
          >
            <h4 className="font-heading font-bold text-base uppercase text-white tracking-wide mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gray-500 hover:text-white flex items-center gap-2 transition-colors duration-200 cursor-pointer group"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200"
                      style={{ backgroundColor: '#2A3570' }}
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4: Contact + map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <h4 className="font-heading font-bold text-base uppercase text-white tracking-wide mb-5">
              Contact Us
            </h4>

            <div className="mb-5 flex flex-col gap-2">
              <a
                href="tel:+15551234567"
                className="inline-flex min-h-11 items-center justify-center rounded px-4 py-2 text-sm font-bold transition-all duration-200 hover:brightness-110"
                style={{ backgroundColor: '#00D4FF', color: '#0A0F2C' }}
              >
                Call Now
              </a>
              <a
                href="mailto:info@certproplumbing.com"
                className="inline-flex min-h-11 items-center justify-center rounded border px-4 py-2 text-sm font-bold text-white transition-colors duration-200 hover:bg-white/10"
                style={{ borderColor: 'rgba(0,212,255,0.35)' }}
              >
                Book by Email
              </a>
            </div>

            <ul className="space-y-4 mb-5">
              <li className="flex gap-3">
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0 mt-0.5" fill="#00D4FF">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="font-body text-sm text-gray-500 leading-snug">
                  1234 Pipeline Ave<br />Kansas City, MO 64101
                </span>
              </li>

              <li className="flex gap-3 items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="#00D4FF">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a
                  href="tel:+15551234567"
                  className="font-body text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
                >
                  (555) 123-4567
                </a>
              </li>

              <li className="flex gap-3 items-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="#00D4FF">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:info@certproplumbing.com"
                  className="font-body text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
                >
                  info@certproplumbing.com
                </a>
              </li>
            </ul>

            {/* Google Maps placeholder */}
            <div
              className="h-28 rounded-xl flex flex-col items-center justify-center gap-1"
              style={{ backgroundColor: '#1A2555', border: '1px solid #2A3570' }}
            >
              <svg viewBox="0 0 24 24" className="w-8 h-8 opacity-30" fill="#00D4FF">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span className="font-body text-xs text-gray-600">Google Maps Embed</span>
            </div>
          </motion.div>

        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid #1A2555' }}
        >
          <span className="font-body text-xs text-gray-600">
            &copy; {year} CertPro Plumbing. All rights reserved.
          </span>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(link => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-gray-600 hover:text-gray-400 transition-colors cursor-pointer"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
