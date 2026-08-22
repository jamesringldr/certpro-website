import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { BadgeDollarSign, ShieldCheck, Zap } from 'lucide-react'

const BENEFITS: {
  title: string
  description: string
  icon: LucideIcon
}[] = [
  {
    title: 'Predictable Pricing',
    description: 'Upfront recommendations and clear estimates before any repair work starts.',
    icon: BadgeDollarSign,
  },
  {
    title: 'Rapid Emergency Response',
    description:
      'Fast rapid response and live dispatch support to reduce damage and restore plumbing service quickly. Real people answer your call.',
    icon: Zap,
  },
  {
    title: 'Certified Workmanship',
    description: 'Licensed and insured technicians focused on durable, code-aligned repairs.',
    icon: ShieldCheck,
  },
]

export default function WhyChooseCertProSection() {
  return (
    <section className="bg-brand-bg py-14 md:py-16 lg:py-20">
      {/*
        Mobile order: title → subtitle → benefits → photo
        Desktop: title + subtitle full width; photo | benefits row (1.8fr / 1.2fr)
      */}
      <div className="mx-auto grid max-w-[1200px] gap-6 px-4 sm:px-6 lg:grid-cols-[1.8fr_1.2fr] lg:items-start lg:gap-x-8 lg:gap-y-6 lg:px-8">
        <h2 className="order-1 text-4xl font-bold leading-tight text-white sm:text-5xl lg:col-span-2">
          Why choose
          <br />
          <span className="text-brand-secondary">CertPro</span>
        </h2>

        <p className="order-2 max-w-3xl text-base leading-7 text-slate-300 lg:col-span-2">
          We blend trusted local service with modern diagnostic tools so every plumbing fix is fast, reliable, and built
          to last.
        </p>

        <div className="order-3 space-y-4 lg:order-4 lg:col-start-2">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon

            return (
              <article key={benefit.title} className="flex gap-4 rounded-2xl border border-brand-border bg-brand-surface p-4">
                <div
                  className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-border bg-brand-bg text-brand-secondary"
                  aria-hidden
                >
                  <Icon size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{benefit.description}</p>
                </div>
              </article>
            )
          })}
        </div>

        <article className="relative order-4 aspect-[658/497] w-full overflow-hidden rounded-3xl border border-brand-border lg:order-3 lg:col-start-1">
          <Image
            src="/images/sections/why-choose-vehicle.jpg"
            alt="CertPro Plumbing service vehicle"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/35 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-lg font-bold text-white">
            ↗
          </div>
        </article>
      </div>
    </section>
  )
}
