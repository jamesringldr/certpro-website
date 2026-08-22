import type { Metadata } from 'next'
import './globals.css'
import LayoutShell from '@/components/layout/LayoutShell'
import JsonLd from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/seo/constants'
import { buildPageMetadata, CORE_PAGE_SEO } from '@/lib/seo/metadata'
import { siteGraphJsonLd } from '@/lib/seo/schema'

const homeSeo = CORE_PAGE_SEO.home

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata(homeSeo),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  keywords:
    'plumbing, Kansas City, emergency plumbing, drain cleaning, water heater repair, licensed plumber, north kansas city',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-bg text-brand-body">
        <JsonLd data={siteGraphJsonLd()} />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
