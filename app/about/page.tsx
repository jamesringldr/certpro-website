export default function AboutPage() {
  return (
    <section className="py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">About CertPro Plumbing</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          CertPro is a family-owned plumbing company focused on fast rapid response, clear communication, and dependable
          workmanship across North Kansas City. Your call is answered by real people—not a robot menu.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+18165550192"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            Call Emergency Line
          </a>
          <a
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-brand-secondary px-5 py-2 text-sm font-semibold text-brand-secondary"
          >
            Book Service
          </a>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
          <a href="/services/emergency-plumbing" className="rounded-full border border-brand-border px-3 py-1.5 hover:text-white">
            Emergency Plumbing
          </a>
          <a href="/services" className="rounded-full border border-brand-border px-3 py-1.5 hover:text-white">
            Explore Services
          </a>
          <a href="/contact" className="rounded-full border border-brand-border px-3 py-1.5 hover:text-white">
            Get Fast Dispatch
          </a>
        </div>
      </div>
    </section>
  )
}
