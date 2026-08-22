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
            <div className={styles.socialRow}>
              <a
                href="https://www.linkedin.com/company/certpro-plumbing-llc"
                className={styles.socialLink}
                aria-label="CertPro Plumbing on LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
              >
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
                Contact
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
            <span className={styles.contactText}>CertPro Plumbing LLC</span>
            <span className={styles.contactText}>Kansas City metro — we come to you</span>
            <span className={styles.contactText}>Monday–Friday 7:00 AM–6:00 PM</span>
            <a href="tel:+18164540247" className={styles.contactText}>
              (816) 454-0247
            </a>
            <a href="mailto:info@certproplumbing.com" className={styles.contactText}>
              info@certproplumbing.com
            </a>
            <span className={styles.contactText}>
              After-hours emergencies: call for dispatch. Availability depends on the technician on call.
            </span>
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.bottomRow}>
          <span>©Copyright 2026, All Rights Reserved</span>
          <div className={styles.legalLinks}>
            <Link href="/terms" className={styles.legalLink}>
              Terms of Service
            </Link>
            <Link href="/privacy" className={styles.legalLink}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
