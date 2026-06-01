import Link from 'next/link'
import Image from 'next/image'

const TRUST_CARDS = [
  {
    imageSrc: '/images/trust/plumbing-trust-1.png',
    stat: '30+',
    label: 'Years experience',
  },
  {
    imageSrc: '/images/trust/plumbing-trust-2.png',
    stat: 'Fast Rapid Response',
    label: 'Emergency dispatch',
  },
  {
    imageSrc: '/images/trust/plumbing-trust-3.png',
    stat: '100%',
    label: 'Licensed and insured',
  },
]

export default function SocialProofTrustSection() {
  return (
    <section id="trust-proof" className="bg-brand-bg pb-14 pt-8 md:pb-16 md:pt-10 lg:pb-20 lg:pt-12">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
            Delivering expertise
            <br />
            in <span className="text-brand-secondary">plumbing services</span>
          </h2>
          <Link
            href="/services"
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            Learn More
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/40 text-xs">↗</span>
          </Link>
        </div>

        <div>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-300">
            We&apos;ve completed thousands of plumbing jobs across the Kansas City metro. From urgent leak repairs to
            system upgrades, our family-owned team delivers fast rapid response, licensed workmanship, and clear
            communication from first call to final check. Your call is answered by real people—not a robot menu.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {TRUST_CARDS.map((card) => (
              <article key={card.label} className="relative min-h-44 overflow-hidden rounded-2xl border border-brand-border">
                <Image src={card.imageSrc} alt={card.label} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p
                    className={`font-bold leading-tight text-white ${
                      card.stat.length > 6 ? 'text-2xl sm:text-3xl' : 'text-4xl'
                    }`}
                  >
                    {card.stat}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-200">{card.label}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">
            <span className="rounded-full border border-brand-border bg-brand-surface px-3 py-1.5">Family-Owned</span>
            <span className="rounded-full border border-brand-border bg-brand-surface px-3 py-1.5">Fast Rapid Response</span>
            <span className="rounded-full border border-brand-border bg-brand-surface px-3 py-1.5">Licensed &amp; Insured</span>
          </div>
        </div>
      </div>
    </section>
  )
}
