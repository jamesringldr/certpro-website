import Image from 'next/image'
import Link from 'next/link'

const ARTICLES = [
  {
    title: 'Why Basement Drains Back Up in Liberty MO',
    excerpt: 'Common causes, warning signs, and the first response steps before water damage spreads.',
    imageSrc: '/images/articles/article-basement-drains.png',
    date: 'Jan 8, 2026',
  },
  {
    title: 'Clay Sewer Lines in Gladstone Neighborhoods',
    excerpt: 'How older clay lines fail, what camera inspections reveal, and when repair is the safer option.',
    imageSrc: '/images/articles/article-sewer.png',
    date: 'Jan 5, 2026',
  },
  {
    title: 'How To Guide for Dishwasher Cleaning',
    excerpt: 'A practical maintenance checklist to reduce odor, improve drainage, and extend appliance life.',
    imageSrc: '/images/articles/article-dishwasher.png',
    date: 'Jan 12, 2026',
  },
]

export default function ArticlesSection() {
  return (
    <section className="bg-brand-bg py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl">
              Latest Plumbing <span className="text-brand-secondary">Insights</span>
            </h2>
            <p className="mt-2 max-w-xl text-base leading-7 text-slate-300">
              Helpful plumbing tips for Kansas City metro homeowners, from prevention guidance to repair planning.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-full border border-brand-secondary bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            View All Articles
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/40 text-xs">↗</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <article key={article.title} className="overflow-hidden rounded-2xl border border-brand-border bg-brand-surface">
              <div className="relative h-56">
                <Image src={article.imageSrc} alt={article.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-4">
                <p className="text-sm text-slate-400">{article.date}</p>
                <h3 className="mt-2 text-2xl font-semibold leading-tight text-white">{article.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{article.excerpt}</p>
                <button
                  type="button"
                  className="mt-4 inline-flex min-h-10 items-center rounded-full border border-brand-secondary px-4 py-1.5 text-sm font-semibold text-brand-secondary"
                >
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
