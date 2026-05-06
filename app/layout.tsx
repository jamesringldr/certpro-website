import type { Metadata } from 'next'
import './globals.css'
import LayoutShell from '@/components/layout/LayoutShell'

export const metadata: Metadata = {
  title: 'CertPro Plumbing | 24/7 North KC Plumbing',
  description:
    'Mobile-first plumbing website for emergency response, service booking, and free estimate capture across North Kansas City.',
  keywords:
    'plumbing, Kansas City, emergency plumbing, drain cleaning, water heater repair, licensed plumber, north kansas city',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-brand-bg text-brand-body">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  )
}
