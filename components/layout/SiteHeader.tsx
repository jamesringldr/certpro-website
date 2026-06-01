'use client'

import Image from 'next/image'
import Link from 'next/link'
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
  return (
    <header id="site-header" className={styles.header}>
      <Ga4Bootstrap />
      <div className={styles.container}>
        <Link href="/" className={styles.brand}>
          <Image
            src="/brand/logo-full-white.png"
            alt="CertPro logo"
            width={230}
            height={50}
            className={styles.brandLogo}
            priority
          />
        </Link>
        <nav aria-label="Primary" className={styles.nav}>
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={styles.utilityBar}>
        <div className={styles.utilityInner}>
          <div className={styles.utilityMessaging}>
            <span>Fast Rapid Response</span>
            <span className={styles.utilitySubline}>Your call is answered by real people.</span>
          </div>
          <a
            href="tel:+18165550192"
            className={styles.callLink}
            onClick={() => {
              trackGa4Event('call_click', {
                entrypoint: 'header_cta',
                page_path: window.location.pathname,
              })
            }}
          >
            Call (816) 555-0192
          </a>
        </div>
      </div>
    </header>
  )
}
