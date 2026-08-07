'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import Ga4Bootstrap from '@/components/analytics/Ga4Bootstrap'
import { trackGa4Event } from '@/lib/analytics/ga4'
import styles from '@/components/layout/SiteHeader.module.css'

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    if (!menuOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header id="site-header" className={styles.header}>
      <Ga4Bootstrap />
      <div className={styles.container}>
        <Link href="/" className={styles.brand} onClick={() => setMenuOpen(false)}>
          <Image
            src="/brand/logo-full-white.png"
            alt="CertPro logo"
            width={230}
            height={50}
            className={styles.brandLogo}
            priority
          />
        </Link>

        <nav aria-label="Primary" className={styles.navDesktop}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} strokeWidth={2} /> : <Menu size={22} strokeWidth={2} />}
        </button>
      </div>

      {menuOpen ? (
        <nav id={menuId} aria-label="Mobile" className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}

      {/* Desktop-only call strip — mobile uses bottom sticky CTAs instead */}
      <div className={styles.utilityBar}>
        <div className={styles.utilityInner}>
          <div className={styles.utilityMessaging}>
            <span className={styles.utilityHeadline}>Fast Rapid Response</span>
            <span className={styles.utilitySubline}>Your call is answered by real people.</span>
          </div>
          <a
            href="tel:+18164540247"
            className={styles.callButton}
            onClick={() => {
              trackGa4Event('call_click', {
                entrypoint: 'header_cta',
                page_path: window.location.pathname,
              })
            }}
          >
            Call (816) 454-0247
          </a>
        </div>
      </div>
    </header>
  )
}
