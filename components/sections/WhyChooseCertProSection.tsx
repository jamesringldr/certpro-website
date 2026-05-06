import Image from 'next/image'

const BENEFITS = [
  {
    title: 'Predictable Pricing',
    description: 'Upfront recommendations and clear estimates before any repair work starts.',
  },
  {
    title: 'Rapid Emergency Response',
    description: '24/7 dispatch support to reduce damage and restore plumbing service quickly.',
  },
  {
    title: 'Certified Workmanship',
    description: 'Licensed and insured technicians focused on durable, code-aligned repairs.',
  },
]

export default function WhyChooseCertProSection() {
  return (
    <section className="bg-brand-bg py-14 md:py-16 lg:py-20">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-4 sm:px-6 lg:grid-cols-[0.9fr_0.9fr_1.2fr] lg:items-center lg:gap-8 lg:px-8">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Why choose
            <br />
            <span className="text-brand-secondary">CertPro</span>
          </h2>
          <p className="mt-6 max-w-sm text-base leading-7 text-slate-300">
            We blend trusted local service with modern diagnostic tools so every plumbing fix is fast, reliable, and
            built to last.
          </p>
        </div>

        <article className="relative mx-auto h-[330px] w-full max-w-sm overflow-hidden rounded-3xl border border-brand-border">
          <Image
            src="/images/sections/why-choose-plumber.png"
            alt="CertPro plumbing technician ready for service"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 32vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/35 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-lg font-bold text-white">
            ↗
          </div>
        </article>

        <div className="space-y-4">
          {BENEFITS.map((benefit) => (
            <article key={benefit.title} className="flex gap-4 rounded-2xl border border-brand-border bg-brand-surface p-4">
              <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-brand-border bg-brand-bg text-brand-secondary">
                <span className="text-lg">▢</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-300">{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
