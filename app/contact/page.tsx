export default function ContactPage() {
  return (
    <section className="py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">Contact CertPro Plumbing</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          For immediate issues call our 24/7 line at (816) 555-0192, or submit a request on the home page estimate
          form for standard scheduling.
        </p>
        <div className="mt-6 grid gap-3 sm:max-w-xl sm:grid-cols-2">
          <a
            href="tel:+18165550192"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            Call Emergency Line
          </a>
          <a
            href="mailto:info@certproplumbing.com"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-secondary px-5 py-2 text-sm font-semibold text-brand-secondary"
          >
            Book by Email
          </a>
        </div>
        <div className="mt-5 rounded-xl border border-brand-border bg-brand-surface p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-secondary">High-intent links</p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-200">
            <a href="/services/emergency-plumbing" className="rounded-full border border-brand-border px-3 py-1.5 hover:text-white">
              Emergency Plumbing
            </a>
            <a href="/services/drain-cleaning" className="rounded-full border border-brand-border px-3 py-1.5 hover:text-white">
              Drain Cleaning
            </a>
            <a href="/services" className="rounded-full border border-brand-border px-3 py-1.5 hover:text-white">
              All Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
