import type { ReactNode } from 'react'

type LegalPageProps = {
  title: string
  updated: string
  children: ReactNode
}

export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <article className="py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-slate-400">Last updated {updated}</p>
        <div className="mt-8 space-y-8 text-base leading-7 text-slate-300">{children}</div>
      </div>
    </article>
  )
}

type LegalSectionProps = {
  heading: string
  children: ReactNode
}

export function LegalSection({ heading, children }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-xl font-bold text-white">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  )
}
