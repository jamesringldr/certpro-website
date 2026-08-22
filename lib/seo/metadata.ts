import type { Metadata } from 'next'
import { LOCALITY, OG_IMAGE_PATH, SITE_URL } from '@/lib/seo/constants'

export type PageSeo = {
  title: string
  description: string
  path: string
}

export const CORE_PAGE_SEO: Record<'home' | 'about' | 'contact' | 'services' | 'privacy' | 'terms', PageSeo> = {
  home: {
    title: 'CertPro Plumbing | Fast Rapid Response North KC Plumbing',
    description:
      'Family-owned plumbers in North Kansas City for emergency dispatch, drain cleaning, and water heater repair. Call (816) 454-0247—real people answer.',
    path: '/',
  },
  about: {
    title: 'About CertPro Plumbing | North Kansas City Plumbers',
    description:
      'CertPro Plumbing LLC is a family-owned North Kansas City plumber with 30+ years of experience. Licensed, bonded, and insured—real people answer every call.',
    path: '/about',
  },
  contact: {
    title: 'Contact CertPro Plumbing | North KC Dispatch',
    description:
      'Call CertPro at (816) 454-0247 for North Kansas City dispatch, or book online. Monday–Friday 7 AM–6 PM; after-hours emergencies are answered by real people.',
    path: '/contact',
  },
  services: {
    title: 'Plumbing Services in North Kansas City | CertPro',
    description:
      'Browse CertPro plumbing in North Kansas City: emergency plumbing, drain cleaning, sewer repair, water heaters, and more. Licensed techs and free estimates.',
    path: '/services',
  },
  privacy: {
    title: 'Privacy Policy | CertPro Plumbing',
    description:
      'How CertPro Plumbing LLC collects and uses contact, booking, and analytics information on certproplumbingkc.com. We do not sell personal information.',
    path: '/privacy',
  },
  terms: {
    title: 'Terms of Service | CertPro Plumbing',
    description:
      'Terms for using the CertPro Plumbing website and requesting service in the Kansas City metro, including hours, estimates, and emergency dispatch.',
    path: '/terms',
  },
}

export const SERVICE_DESCRIPTIONS: Record<string, string> = {
  'emergency-plumbing':
    'Need an emergency plumber in North Kansas City? CertPro dispatches licensed techs for burst pipes, leaks, and water damage. Call (816) 454-0247 now.',
  'drain-cleaning':
    'Clear slow sinks, showers, and main-line clogs with CertPro drain cleaning in North Kansas City. Same-day appointments available. Call (816) 454-0247.',
  'sewer-line-repair':
    'Stop recurring backups with sewer line diagnostics and repair in North Kansas City. CertPro locates the fault and explains options. Call (816) 454-0247.',
  'water-heater-repair':
    'No hot water in North Kansas City? CertPro repairs tank and tankless water heaters with clear pricing before work starts. Call (816) 454-0247 today.',
  'water-heater-installation':
    'Get a properly sized water heater installed in North Kansas City. CertPro handles tank and tankless upgrades to code. Call (816) 454-0247 today.',
  'leak-detection':
    'Find hidden leaks in North Kansas City before they ruin floors and walls. CertPro pinpoints the source and maps a direct repair. Call (816) 454-0247.',
  'pipe-repair-repiping':
    'Repair leaking pipes or repipe aging homes in North Kansas City. CertPro explains material options and phases work by priority. Call (816) 454-0247.',
  'fixture-installation':
    'Install sinks, faucets, toilets, and showers in North Kansas City with clean, leak-free finishes. CertPro verifies every fixture. Call (816) 454-0247.',
  'toilet-repair':
    'Fix a running, leaking, or clogged toilet in North Kansas City the same day. CertPro repairs the cause, not just the symptom. Call (816) 454-0247.',
  'garbage-disposal-service':
    'Repair or replace a jammed or leaking garbage disposal in North Kansas City. CertPro sizes the unit and installs it correctly. Call (816) 454-0247.',
  'backflow-testing':
    'Protect potable water with certified backflow testing in North Kansas City. CertPro documents results and services prevention devices. Call (816) 454-0247.',
  'commercial-plumbing':
    'Keep offices, retail, and multi-units running with commercial plumbing in North Kansas City. Priority dispatch for business downtime. Call (816) 454-0247.',
}

export function servicePageTitle(serviceName: string): string {
  return `${serviceName} in ${LOCALITY} | CertPro`
}

export function absoluteUrl(path: string): string {
  if (path === '/') {
    return SITE_URL
  }
  return `${SITE_URL}${path}`
}

export function buildPageMetadata({ title, description, path }: PageSeo): Metadata {
  const url = absoluteUrl(path)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'CertPro Plumbing',
      locale: 'en_US',
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: 'CertPro Plumbing service van — North Kansas City',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  }
}
