import Link from 'next/link'
import BookServiceButton from '@/components/booking/BookServiceButton'
import JsonLd from '@/components/seo/JsonLd'
import DeepServiceArticle from '@/components/services/DeepServiceArticle'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SERVICES, getServiceBySlug } from '@/data/services'
import { getDeepServicePage } from '@/data/service-pages'
import { buildPageMetadata, SERVICE_DESCRIPTIONS, servicePageTitle } from '@/lib/seo/metadata'
import { servicePageJsonLd } from '@/lib/seo/schema'

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

  return buildPageMetadata({
    title: servicePageTitle(service.name),
    description: SERVICE_DESCRIPTIONS[service.slug] ?? service.shortDescription,
    path: `/services/${service.slug}`,
  })
}

export default async function ServiceTemplatePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const deep = getDeepServicePage(slug)

  if (deep) {
    return (
      <>
        <JsonLd data={servicePageJsonLd(service)} />
        <DeepServiceArticle content={deep} />
      </>
    )
  }

  return (
    <article className="py-14 md:py-16 lg:py-20">
      <JsonLd data={servicePageJsonLd(service)} />
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">North Kansas City</p>
        <h1 className="mt-3 text-3xl font-bold text-white md:text-4xl">{service.name}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{service.shortDescription}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+18164540247"
            className="inline-flex min-h-11 items-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            Call Now
          </a>
          <BookServiceButton entrypoint="service_cta">Book Service</BookServiceButton>
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
              href="tel:+18164540247"
              className="inline-flex min-h-11 items-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
            >
              Call Now
            </a>
            <BookServiceButton entrypoint="service_cta">Book Service</BookServiceButton>
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
            <BookServiceButton
              entrypoint="service_cta"
              className="rounded-full border border-brand-border px-3 py-1.5 text-sm font-normal text-slate-200 hover:text-white"
            >
              Request Dispatch
            </BookServiceButton>
          </div>
        </section>
      </div>
    </article>
  )
}
