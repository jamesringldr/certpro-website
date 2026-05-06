import Image from 'next/image'
import Link from 'next/link'
import styles from '@/components/layout/SiteFooter.module.css'

export default function SiteFooter() {
  return (
    <footer id="site-footer" className={styles.footer}>
      <div className={styles.fadeTop} aria-hidden />
      <div className={styles.panel}>
        <div className={styles.container}>
          <div>
            <Link href="/" className={styles.brand}>
              <Image
                src="/brand/logo-full-white.png"
                alt="CertPro logo"
                width={210}
                height={46}
                className={styles.brandLogo}
              />
            </Link>
            <p className={styles.copy}>
              Family-owned plumbing support for Kansas City metro homes and businesses with reliable response.
            </p>
            <div className={styles.newsletterWrap}>
              <input className={styles.newsletterInput} type="email" placeholder="Enter your email address" />
              <button className={styles.newsletterButton} type="button" aria-label="Submit email">
                ↗
              </button>
            </div>
            <div className={styles.socialRow}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <Image src="/brand/icon-white.png" alt="" width={14} height={14} className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <Image src="/brand/icon-white.png" alt="" width={14} height={14} className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Image src="/brand/icon-white.png" alt="" width={14} height={14} className={styles.socialIcon} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <Image src="/brand/icon-white.png" alt="" width={14} height={14} className={styles.socialIcon} />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <div className={styles.linkList}>
              <Link href="/about" className={styles.link}>
                About Us
              </Link>
              <Link href="/services" className={styles.link}>
                Our Services
              </Link>
              <Link href="/contact" className={styles.link}>
                Testimonials
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Services</h3>
            <div className={styles.linkList}>
              <Link href="/services/emergency-plumbing" className={styles.link}>
                Emergency Plumbing
              </Link>
              <Link href="/services/water-heater-repair" className={styles.link}>
                Water Heater
              </Link>
              <Link href="/services/sewer-line-repair" className={styles.link}>
                Sewer Line
              </Link>
              <Link href="/services/commercial-plumbing" className={styles.link}>
                Commercial Plumbing
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <span className={styles.contactText}>Kansas City Metro</span>
            <a href="tel:+18165550192" className={styles.contactText}>
              (816) 555-0192
            </a>
            <a href="mailto:info@certproplumbing.com" className={styles.contactText}>
              info@certproplumbing.com
            </a>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.bottomRow}>
          <span>©Copyright 2026, All Rights Reserved</span>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>
              Term of Service
            </a>
            <a href="#" className={styles.legalLink}>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
