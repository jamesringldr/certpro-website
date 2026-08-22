import type { Service } from '@/data/services'
import { SERVICES } from '@/data/services'
import {
  AFTER_HOURS_POLICY,
  AREA_SERVED,
  BUSINESS_NAME,
  COUNTRY,
  EMAIL,
  HOURS_DISPLAY,
  HOURS_SPEC,
  IMAGE_PATH,
  LEGAL_NAME,
  LOCALITY,
  LOGO_PATH,
  PHONE_E164,
  PLUMBER_ID,
  REGION,
  SAME_AS,
  SERVICE_AREA_LABEL,
  SITE_URL,
  WEBSITE_ID,
} from '@/lib/seo/constants'
import { absoluteUrl, SERVICE_DESCRIPTIONS } from '@/lib/seo/metadata'

type JsonLdObject = Record<string, unknown>

function areaServedNodes(): JsonLdObject[] {
  return AREA_SERVED.map((area) => ({
    '@type': 'AdministrativeArea',
    name: area.name,
  }))
}

export function plumberNode(): JsonLdObject {
  return {
    '@type': 'Plumber',
    '@id': PLUMBER_ID,
    name: BUSINESS_NAME,
    legalName: LEGAL_NAME,
    url: SITE_URL,
    telephone: PHONE_E164,
    email: EMAIL,
    image: absoluteUrl(IMAGE_PATH),
    logo: absoluteUrl(LOGO_PATH),
    description: `Family-owned plumbing company serving the ${SERVICE_AREA_LABEL}. ${HOURS_DISPLAY}. ${AFTER_HOURS_POLICY}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: LOCALITY,
      addressRegion: REGION,
      addressCountry: COUNTRY,
    },
    areaServed: areaServedNodes(),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...HOURS_SPEC.days],
      opens: HOURS_SPEC.opens,
      closes: HOURS_SPEC.closes,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: PHONE_E164,
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'English',
    },
    sameAs: [...SAME_AS],
    knowsAbout: SERVICES.map((service) => service.name),
  }
}

export function websiteNode(): JsonLdObject {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: BUSINESS_NAME,
    publisher: { '@id': PLUMBER_ID },
    inLanguage: 'en-US',
  }
}

export function siteGraphJsonLd(): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@graph': [plumberNode(), websiteNode()],
  }
}

export function serviceJsonLd(service: Service): JsonLdObject {
  const path = `/services/${service.slug}`
  const url = absoluteUrl(path)

  return {
    '@type': 'Service',
    '@id': `${url}#service`,
    name: service.name,
    serviceType: service.name,
    description: SERVICE_DESCRIPTIONS[service.slug] ?? service.shortDescription,
    url,
    provider: { '@id': PLUMBER_ID },
    areaServed: areaServedNodes(),
  }
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>): JsonLdObject {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function servicePageJsonLd(service: Service): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      serviceJsonLd(service),
      breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: service.name, path: `/services/${service.slug}` },
      ]),
    ],
  }
}

export function webPageJsonLd(name: string, path: string, description: string): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': path === '/contact' ? 'ContactPage' : 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': PLUMBER_ID },
  }
}
