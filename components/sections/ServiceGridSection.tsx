import Link from 'next/link'
import SectionShell from '@/components/sections/SectionShell'
import styles from '@/components/sections/ServiceGridSection.module.css'
import type { LucideIcon } from 'lucide-react'
import { AlertTriangle, Building2, Cog, Droplets, Flame, Waves } from 'lucide-react'

const FEATURED_SERVICE_SPECS = [
  {
    slug: 'emergency-plumbing',
    label: 'Emergency Plumbing',
    description: 'Rapid-response support for active leaks and urgent plumbing failures.',
    icon: AlertTriangle,
  },
  {
    slug: 'water-heater-repair',
    label: 'Water Heater',
    description: 'Restore dependable hot water with repair and replacement guidance.',
    icon: Flame,
  },
  {
    slug: 'sewer-line-repair',
    label: 'Sewer Line',
    description: 'Targeted diagnostics and repair plans for recurring backups and odors.',
    icon: Waves,
  },
  {
    slug: 'pipe-repair-repiping',
    label: 'Piping',
    description: 'Repair worn lines or repipe critical areas for long-term reliability.',
    icon: Cog,
  },
  {
    slug: 'leak-detection',
    label: 'Leak Repair',
    description: 'Find and resolve hidden leaks before structural damage escalates.',
    icon: Droplets,
  },
  {
    slug: 'commercial-plumbing',
    label: 'Commercial Plumbing',
    description: 'Priority plumbing service for offices, retail, and managed properties.',
    icon: Building2,
  },
]

const FEATURED_SERVICES = FEATURED_SERVICE_SPECS.map((item) => ({
  slug: item.slug,
  name: item.label,
  description: item.description,
  icon: item.icon as LucideIcon,
}))

const CAROUSEL_SERVICES = [...FEATURED_SERVICES, ...FEATURED_SERVICES]

export default function ServiceGridSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="Core Services"
      title="Plumbing services built for fast decisions"
    >
      <div className={styles.carouselViewport}>
        <div className={styles.carouselTrack}>
          {CAROUSEL_SERVICES.map((service, index) => (
            <Link
              key={`${service.slug}-${index}`}
              href={`/services/${service.slug}`}
              className={`${styles.carouselCard} rounded-xl border border-brand-border bg-brand-surface p-5 shadow-sm transition-colors hover:border-brand-secondary`}
            >
              <span className={styles.iconTile} aria-hidden>
                <service.icon size={18} strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{service.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </SectionShell>
  )
}
