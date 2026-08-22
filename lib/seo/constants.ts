import {
  SERVICE_COUNTIES_KANSAS,
  SERVICE_COUNTIES_MISSOURI,
} from '@/data/services'

export const SITE_URL = 'https://www.certproplumbingkc.com'

export const BUSINESS_NAME = 'CertPro Plumbing'
export const LEGAL_NAME = 'CertPro Plumbing LLC'
export const PHONE_DISPLAY = '(816) 454-0247'
export const PHONE_E164 = '+1-816-454-0247'
export const PHONE_TEL = '+18164540247'
export const EMAIL = 'info@certproplumbing.com'

export const SERVICE_AREA_LABEL = 'Kansas City metro'
export const LOCALITY = 'North Kansas City'
export const REGION = 'MO'
export const COUNTRY = 'US'

/** Chamber-listed weekday hours. Emergency dispatch is by phone, not 24/7. */
export const HOURS_DISPLAY = 'Monday–Friday 7:00 AM–6:00 PM'
export const HOURS_SPEC = {
  days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as const,
  opens: '07:00',
  closes: '18:00',
}

export const AFTER_HOURS_POLICY =
  'After-hours emergencies: call (816) 454-0247. Dispatch depends on technician availability—we do not claim 24/7 coverage.'

export const SAME_AS = [
  'https://www.linkedin.com/company/certpro-plumbing-llc',
  'https://libertyareachamberofcommerce.growthzoneapp.com/directory/Details/certpro-plumbing-llc-4906935',
] as const

export const LOGO_PATH = '/icon.png'
export const IMAGE_PATH = '/images/sections/why-choose-vehicle.jpg'
export const OG_IMAGE_PATH = '/images/og/og-default.jpg'

export const PLUMBER_ID = `${SITE_URL}/#plumber`
export const WEBSITE_ID = `${SITE_URL}/#website`

export const AREA_SERVED = [
  ...SERVICE_COUNTIES_MISSOURI.map((name) => ({ name: `${name}, MO` })),
  ...SERVICE_COUNTIES_KANSAS.map((name) => ({ name: `${name}, KS` })),
] as const

export const INDEXABLE_PATHS = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/privacy',
  '/terms',
] as const
