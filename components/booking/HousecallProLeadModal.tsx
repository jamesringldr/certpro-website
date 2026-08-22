'use client'

import Script from 'next/script'
import { useEffect, useId, useRef } from 'react'
import { HOUSECALL_PRO_LEAD_IFRAME_SRC, HOUSECALL_PRO_SCRIPT_SRC } from '@/lib/integrations/housecall-pro'
import styles from '@/components/booking/HousecallProLeadModal.module.css'

type HousecallProLeadModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function HousecallProLeadModal({ isOpen, onClose }: HousecallProLeadModalProps) {
  const titleId = useId()
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) {
    return null
  }

  return (
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <Script src={HOUSECALL_PRO_SCRIPT_SRC} strategy="lazyOnload" />
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Book with CertPro</p>
            <h2 id={titleId} className={styles.title}>
              Request service
            </h2>
          </div>
          <button ref={closeButtonRef} type="button" className={styles.closeButton} onClick={onClose} aria-label="Close booking form">
            <span aria-hidden="true">&times;</span>
          </button>
        </header>
        <div className={styles.frameWrap}>
          <iframe
            id="hcp-lead-iframe"
            title="CertPro Plumbing booking form"
            src={HOUSECALL_PRO_LEAD_IFRAME_SRC}
            className={styles.frame}
          />
        </div>
      </div>
    </div>
  )
}
