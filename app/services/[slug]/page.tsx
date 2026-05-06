import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SERVICES, getServiceBySlug } from '@/data/services'

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {}
  }

  return {
    title: `${service.name} | CertPro Plumbing`,
    description: service.shortDescription,
  }
}

export default async function ServiceTemplatePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <article className="py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">Service Template</p>
        <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">{service.name}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{service.shortDescription}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+18165550192"
            className="inline-flex min-h-11 items-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            Call Now
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-md border border-brand-secondary px-5 py-2 text-sm font-semibold text-brand-secondary"
          >
            Book Service
          </Link>
        </div>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-brand-border bg-brand-surface p-5">
            <h2 className="text-lg font-bold text-white">Common Problem</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{service.problem}</p>
          </div>
          <div className="rounded-xl border border-brand-border bg-brand-surface p-5">
            <h2 className="text-lg font-bold text-white">Our Solution</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{service.solution}</p>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-brand-border bg-brand-surface p-5">
          <h2 className="text-lg font-bold text-white">Response Promise</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">{service.responseTime}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="tel:+18165550192"
              className="inline-flex min-h-11 items-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
            >
              Call Now
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-md border border-brand-secondary px-5 py-2 text-sm font-semibold text-brand-secondary"
            >
              Book Service
            </Link>
          </div>
        </section>

        <section className="mt-4 rounded-xl border border-brand-border bg-brand-surface p-5">
          <h2 className="text-lg font-bold text-white">FAQs</h2>
          <div className="mt-3 space-y-3">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="rounded-md border border-brand-border bg-brand-bg p-3">
                <summary className="cursor-pointer text-sm font-semibold text-white">{faq.question}</summary>
                <p className="mt-2 text-sm leading-6 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="mt-4 rounded-xl border border-brand-border bg-brand-surface p-5">
          <h2 className="text-lg font-bold text-white">Related High-Intent Services</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link href="/services/emergency-plumbing" className="rounded-full border border-brand-border px-3 py-1.5 text-sm text-slate-200 hover:text-white">
              Emergency Plumbing
            </Link>
            <Link href="/services" className="rounded-full border border-brand-border px-3 py-1.5 text-sm text-slate-200 hover:text-white">
              All Services
            </Link>
            <Link href="/contact" className="rounded-full border border-brand-border px-3 py-1.5 text-sm text-slate-200 hover:text-white">
              Request Dispatch
            </Link>
          </div>
        </section>
      </div>
    </article>
  )
}
