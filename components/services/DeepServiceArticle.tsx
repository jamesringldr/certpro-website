import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import BookServiceButton from '@/components/booking/BookServiceButton'
import type { DeepSection, DeepServicePage } from '@/data/service-pages/types'

type DeepServiceArticleProps = {
  content: DeepServicePage
}

function LinkedText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (!match) {
          return <span key={index}>{part}</span>
        }

        const label = match[1]
        const href = match[2]
        if (!label || !href) {
          return <span key={index}>{part}</span>
        }

        return (
          <Link key={index} href={href} className="font-semibold text-brand-secondary hover:text-white">
            {label}
          </Link>
        )
      })}
    </>
  )
}

function Paragraph({ children }: { children: ReactNode }) {
  return <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{children}</p>
}

function SectionBlock({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mt-6 rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6">
      <h2 className="text-xl font-bold text-white md:text-2xl">{heading}</h2>
      {children}
    </section>
  )
}

function DeepSectionView({ section }: { section: DeepSection }) {
  switch (section.kind) {
    case 'prose':
      return (
        <SectionBlock heading={section.heading}>
          {section.paragraphs.map((paragraph) => (
            <Paragraph key={paragraph.slice(0, 48)}>
              <LinkedText text={paragraph} />
            </Paragraph>
          ))}
        </SectionBlock>
      )
    case 'steps':
      return (
        <SectionBlock heading={section.heading}>
          {section.intro ? (
            <Paragraph>
              <LinkedText text={section.intro} />
            </Paragraph>
          ) : null}
          <ol className="mt-4 space-y-3">
            {section.items.map((item, index) => (
              <li key={item.title} className="rounded-md border border-brand-border bg-brand-bg p-4">
                <p className="text-sm font-semibold text-white">
                  {index + 1}. {item.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  <LinkedText text={item.body} />
                </p>
              </li>
            ))}
          </ol>
        </SectionBlock>
      )
    case 'bullets':
      return (
        <SectionBlock heading={section.heading}>
          {section.intro ? (
            <Paragraph>
              <LinkedText text={section.intro} />
            </Paragraph>
          ) : null}
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
            {section.items.map((item) => (
              <li key={item.slice(0, 48)}>
                <LinkedText text={item} />
              </li>
            ))}
          </ul>
        </SectionBlock>
      )
    case 'compare':
      return (
        <SectionBlock heading={section.heading}>
          {section.intro ? (
            <Paragraph>
              <LinkedText text={section.intro} />
            </Paragraph>
          ) : null}
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full border-collapse text-left text-sm text-slate-300">
              <thead>
                <tr className="border-b border-brand-border text-xs uppercase tracking-[0.12em] text-brand-secondary">
                  <th className="py-2 pr-4 font-semibold">Decision</th>
                  <th className="py-2 pr-4 font-semibold">{section.columns[0]}</th>
                  <th className="py-2 font-semibold">{section.columns[1]}</th>
                </tr>
              </thead>
              <tbody>
                {section.rows.map((row) => (
                  <tr key={row.factor} className="border-b border-brand-border/70 align-top">
                    <td className="py-3 pr-4 font-semibold text-white">{row.factor}</td>
                    <td className="py-3 pr-4">
                      <LinkedText text={row.left} />
                    </td>
                    <td className="py-3">
                      <LinkedText text={row.right} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SectionBlock>
      )
    case 'places':
      return (
        <SectionBlock heading={section.heading}>
          {section.intro ? (
            <Paragraph>
              <LinkedText text={section.intro} />
            </Paragraph>
          ) : null}
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {section.places.map((place) => (
              <article key={place.name} className="rounded-md border border-brand-border bg-brand-bg p-4">
                <h3 className="text-lg font-bold text-white">{place.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  <LinkedText text={place.body} />
                </p>
              </article>
            ))}
          </div>
        </SectionBlock>
      )
    case 'image':
      return (
        <SectionBlock heading={section.heading}>
          <div className="relative mt-4 aspect-[16/10] w-full overflow-hidden rounded-lg border border-brand-border">
            <Image
              src={section.image.src}
              alt={section.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 900px"
            />
          </div>
          {section.caption ? (
            <p className="mt-3 text-sm leading-6 text-slate-400">
              <LinkedText text={section.caption} />
            </p>
          ) : null}
        </SectionBlock>
      )
    case 'cta':
      return (
        <SectionBlock heading={section.heading}>
          <Paragraph>
            <LinkedText text={section.body} />
          </Paragraph>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href="tel:+18164540247"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
            >
              Call (816) 454-0247
            </a>
            <BookServiceButton entrypoint="service_cta">Book Service</BookServiceButton>
          </div>
        </SectionBlock>
      )
  }
}

export default function DeepServiceArticle({ content }: DeepServiceArticleProps) {
  return (
    <article className="py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-secondary">{content.eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-3xl font-bold text-white md:text-4xl">{content.h1}</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          <LinkedText text={content.lede} />
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="tel:+18164540247"
            className="inline-flex min-h-11 items-center rounded-md bg-brand-primary px-5 py-2 text-sm font-semibold text-white"
          >
            Call Now
          </a>
          <BookServiceButton entrypoint="service_cta">Book Service</BookServiceButton>
        </div>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl border border-brand-border">
          <Image
            src={content.heroImage.src}
            alt={content.heroImage.alt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
        </div>

        {content.sections.map((section) => (
          <DeepSectionView key={section.id} section={section} />
        ))}

        <section className="mt-6 rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6">
          <h2 className="text-xl font-bold text-white md:text-2xl">Questions homeowners ask</h2>
          <div className="mt-4 space-y-3">
            {content.faqs.map((faq) => (
              <details key={faq.question} className="rounded-md border border-brand-border bg-brand-bg p-3">
                <summary className="cursor-pointer text-sm font-semibold text-white">{faq.question}</summary>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  <LinkedText text={faq.answer} />
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-brand-border bg-brand-surface p-5 md:p-6">
          <h2 className="text-xl font-bold text-white md:text-2xl">Related services</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {content.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-brand-border px-3 py-1.5 text-sm text-slate-200 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  )
}
