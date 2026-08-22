export type DeepFaq = {
  question: string
  answer: string
}

export type DeepRelatedLink = {
  href: string
  label: string
}

export type DeepImage = {
  src: string
  alt: string
}

export type DeepProseSection = {
  id: string
  heading: string
  kind: 'prose'
  paragraphs: string[]
}

export type DeepStepsSection = {
  id: string
  heading: string
  kind: 'steps'
  intro?: string
  items: Array<{ title: string; body: string }>
}

export type DeepBulletsSection = {
  id: string
  heading: string
  kind: 'bullets'
  intro?: string
  items: string[]
}

export type DeepCompareSection = {
  id: string
  heading: string
  kind: 'compare'
  intro?: string
  columns: [string, string]
  rows: Array<{ factor: string; left: string; right: string }>
}

export type DeepPlacesSection = {
  id: string
  heading: string
  kind: 'places'
  intro?: string
  places: Array<{ name: string; body: string }>
}

export type DeepImageSection = {
  id: string
  heading: string
  kind: 'image'
  image: DeepImage
  caption?: string
}

export type DeepCtaSection = {
  id: string
  heading: string
  kind: 'cta'
  body: string
}

export type DeepSection =
  | DeepProseSection
  | DeepStepsSection
  | DeepBulletsSection
  | DeepCompareSection
  | DeepPlacesSection
  | DeepImageSection
  | DeepCtaSection

export type DeepServicePage = {
  slug: string
  eyebrow: string
  h1: string
  lede: string
  heroImage: DeepImage
  sections: DeepSection[]
  faqs: DeepFaq[]
  related: DeepRelatedLink[]
}
