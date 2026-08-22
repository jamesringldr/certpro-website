import Image from 'next/image'
import Link from 'next/link'

const GUIDES = [
  {
    href: '/services/emergency-plumbing',
    title: 'Emergency plumbing in North Kansas City',
    excerpt: 'What to shut off before we arrive, when a night dispatch is warranted, and how freeze failures show up in Clay County homes.',
    imageSrc: '/images/sections/why-choose-vehicle.jpg',
    imageAlt: 'CertPro Plumbing van used for emergency dispatch in the Northland',
    cta: 'Open emergency guide',
  },
  {
    href: '/services/sewer-line-repair',
    title: 'Sewer backups in Liberty and Gladstone',
    excerpt: 'Camera-first diagnosis, clay laterals, basement floor drains, and when a spot repair beats a full replacement.',
    imageSrc: '/images/articles/article-sewer.jpg',
    imageAlt: 'Sewer line conditions typical of North Kansas City metro laterals',
    cta: 'Open sewer guide',
  },
  {
    href: '/services/water-heater-repair',
    title: 'Water heater repair vs replacement',
    excerpt: 'Tank and tankless diagnosis, hard-water wear, and how closet and garage installs differ across the Northland.',
    imageSrc: '/images/sections/why-choose-plumber.jpg',
    imageAlt: 'CertPro plumber diagnosing a residential water heater',
    cta: 'Open water heater guide',
  },
] as const

export default function ServiceGuidesSection() {
  return (
    <section className="bg-brand-bg py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Northland service <span className="text-brand-secondary">guides</span>
            </h2>
            <p className="mt-2 max-w-xl text-base leading-7 text-slate-300">
              Practical pages for the jobs we actually run—emergency leaks, sewer laterals, and water heaters—not a placeholder blog.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-brand-secondary bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            All services
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/40 text-xs">↗</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {GUIDES.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface text-inherit no-underline transition-colors hover:border-brand-secondary"
            >
              <div className="relative h-56">
                <Image src={guide.imageSrc} alt={guide.imageAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-4">
                <h3 className="text-2xl font-semibold leading-tight text-white">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{guide.excerpt}</p>
                <span className="mt-4 inline-flex min-h-10 items-center rounded-full border border-brand-secondary px-4 py-1.5 text-sm font-semibold text-brand-secondary">
                  {guide.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
