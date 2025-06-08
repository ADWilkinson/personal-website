import { type Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { DavyJonesEasterEgg } from '@/components/DavyJonesEasterEgg'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Andrew Wilkinson',
    default:
      'Andrew Wilkinson - Engineering and product leader | Former VC-backed Founder | DeFi Builder',
  },
  description:
    "I'm Andrew, an Engineering and product leader with 8+ years building and scaling products across blockchain, DeFi, and fintech. Former founder who raised venture funding and built products managing $20M+ in value.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head />
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
            <DavyJonesEasterEgg />
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}