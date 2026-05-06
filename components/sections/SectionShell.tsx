import { ReactNode } from 'react'
import styles from '@/components/sections/SectionShell.module.css'

type SectionShellProps = {
  id?: string
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

export default function SectionShell({ id, eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
          <h2 className={styles.title}>{title}</h2>
          {description ? <p className={styles.description}>{description}</p> : null}
        </header>
        <div className={styles.content}>{children}</div>
      </div>
    </section>
  )
}
