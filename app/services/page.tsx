import type { Metadata } from 'next'
import Link from 'next/link'
import BookServiceButton from '@/components/booking/BookServiceButton'
import JsonLd from '@/components/seo/JsonLd'
import { SERVICES } from '@/data/services'
import { buildPageMetadata, CORE_PAGE_SEO } from '@/lib/seo/metadata'
import { webPageJsonLd } from '@/lib/seo/schema'

const pageSeo = CORE_PAGE_SEO.services

export const metadata: Metadata = buildPageMetadata(pageSeo)

export default function ServicesPage() {
  return (
    <section className="py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <JsonLd data={webPageJsonLd(pageSeo.title, pageSeo.path, pageSeo.description)} />
        <h1 className="text-3xl font-bold text-white md:text-4xl">All Plumbing Services</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">
          Licensed plumbing for homes and businesses across North Kansas City—emergency dispatch, drains, sewers, water
          heaters, and more. Pick a service to see how we diagnose and fix it.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+18164540247"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            Call Now for Fast Dispatch
          </a>
          <BookServiceButton entrypoint="service_cta">Book Service</BookServiceButton>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <article key={service.slug} className="rounded-xl border border-brand-border bg-brand-surface p-5">
              <h2 className="text-lg font-bold text-white">{service.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">{service.shortDescription}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex min-h-11 items-center rounded-md bg-brand-primary px-4 py-2 text-sm font-semibold text-white"
                >
                  Open Service Page
                </Link>
                <a
                  href="tel:+18164540247"
                  className="inline-flex min-h-11 items-center rounded-md border border-brand-secondary px-4 py-2 text-sm font-semibold text-brand-secondary"
                >
                  Call Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
