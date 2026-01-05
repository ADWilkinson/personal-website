import { type Metadata, type Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { DavyJonesEasterEgg } from '@/components/DavyJonesEasterEgg'

import '@/styles/tailwind.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://andrewwilkinson.io'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4eee8' },
    { media: '(prefers-color-scheme: dark)', color: '#27272a' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s - Andrew Wilkinson',
    default: 'Andrew Wilkinson - Senior Software Engineer at ZKP2P',
  },
  description:
    'Senior Software Engineer at ZKP2P building zkTLS-powered fiat-to-crypto onramps. Former VC-backed founder. 8+ years building products across blockchain, DeFi, and fintech.',
  keywords: [
    'Andrew Wilkinson',
    'Software Engineer',
    'ZKP2P',
    'DeFi',
    'Blockchain',
    'Web3',
    'zkTLS',
    'Zero Knowledge',
    'Fintech',
  ],
  authors: [{ name: 'Andrew Wilkinson', url: siteUrl }],
  creator: 'Andrew Wilkinson',
  publisher: 'Andrew Wilkinson',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': `${siteUrl}/feed.xml`,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Andrew Wilkinson',
    title: 'Andrew Wilkinson - Senior Software Engineer at ZKP2P',
    description:
      'Senior Software Engineer at ZKP2P building zkTLS-powered fiat-to-crypto onramps. Former VC-backed founder.',
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Andrew Wilkinson - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Wilkinson - Senior Software Engineer at ZKP2P',
    description:
      'Senior Software Engineer at ZKP2P building zkTLS-powered fiat-to-crypto onramps. Former VC-backed founder.',
    creator: '@davyjones0x',
    images: [`${siteUrl}/images/og-image.png`],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon/favicon.ico',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
          {/* Preload critical fonts for faster LCP */}
          <link
            rel="preload"
            href="/_next/static/media/wigrumweb-regular.d043d0e0.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/_next/static/media/wigrumweb-medium.1434c689.woff"
            as="font"
            type="font/woff"
            crossOrigin="anonymous"
          />
        </head>
      <body className="relative min-h-screen w-full">
        <Providers>
          <div className="w-full">
            <Layout>{children}</Layout>
            <DavyJonesEasterEgg />
          </div>
        </Providers>
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  )
}
