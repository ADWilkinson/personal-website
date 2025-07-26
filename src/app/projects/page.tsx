import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { CompanyLogo } from '@/components/CompanyLogo'
import { 
  GlobeAltIcon, 
  ChartBarIcon, 
  MusicalNoteIcon, 
  BoltIcon, 
  CurrencyDollarIcon, 
  PhotoIcon, 
  ListBulletIcon,
  ArrowTrendingUpIcon,
  CubeIcon
} from '@heroicons/react/24/solid'

import galleonImage from '@/images/projects/galleon.png'
import wojakImage from '@/images/projects/wojak.png'
import chordImage from '@/images/projects/chord.png'
import piggyImage from '@/images/projects/piggy.png'
import ultrasoundImage from '@/images/projects/ultrasound.png'
import privateerImage from '@/images/projects/priv.png'
import saylorImage from '@/images/projects/saylor.png'
import eluneImage from '@/images/projects/elune.png'

const projects = [
  {
    name: 'Elune',
    description:
      'A simple way to earn yield onchain. Allocate funds to automated yield strategies across leading DeFi protocols, built for non-crypto native users with Base smart wallets and sponsored transactions.',
    link: { href: 'https://tryelune.com', label: 'tryelune.com' },
    icon: CurrencyDollarIcon,
    image: eluneImage,
  },
  {
    name: 'Galleon DAO',
    description:
      'A DeFi protocol creating structured products and automated investment strategies. Secured $1M in funding, built a community of over 6,000 members, and managed $20M+ in product investments.',
    link: { href: 'https://github.com/GalleonDAO', label: 'GitHub' },
    icon: GlobeAltIcon,
    image: galleonImage,
  },
  {
    name: 'Wojak Jones',
    description:
      'A yield farming DeFi assistant built with Firebase, Telegram API, and Virtuals Framework. Provides real-time yield farming opportunities and DeFi analytics for users.',
    link: { href: 'https://wojakjones.xyz', label: 'wojakjones.xyz' },
    icon: ChartBarIcon,
    image: wojakImage,
  },
  {
    name: 'ChordCraft',
    description:
      'An AI chord progression generator created with React, Firebase, and the OpenAI API. Generates unique chord progressions based on musical style preferences and creative input.',
    link: { href: 'https://chordcraft.io', label: 'chordcraft.io' },
    icon: MusicalNoteIcon,
    image: chordImage,
  },
  {
    name: 'PiggyOnchain',
    description:
      'A themed chart & analytics dashboard dedicated to the Superforms PIGGY AI Agent project, featuring real-time data visualization and comprehensive performance metrics.',
    link: { href: 'https://piggyonchain.xyz', label: 'piggyonchain.xyz' },
    icon: CubeIcon,
    image: piggyImage,
  },
  {
    name: 'Ultrasoundapps',
    description:
      'A centralized platform showcasing various DeFi and cryptocurrency applications. Built with React and Firebase to provide seamless access to multiple tools.',
    link: { href: 'https://ultrasoundapps.com', label: 'ultrasoundapps.com' },
    icon: BoltIcon,
    image: ultrasoundImage,
  },
  {
    name: 'Privateer',
    description:
      'A hyperliquid-based trading bot using correlation/mean reversion strategies. Designed with Python and Trading APIs for advanced data analysis and execution.',
    link: { href: 'https://github.com/ADWilkinson/privateer-capital', label: 'GitHub' },
    icon: CurrencyDollarIcon,
    image: privateerImage,
  },
  {
    name: 'SaylorMemes',
    description:
      'A meme generator app built with Vite and Firebase for creating and sharing cryptocurrency-themed memes. Features templates and custom editing capabilities.',
    link: { href: 'https://github.com/galleonlabs/saylormemes', label: 'GitHub' },
    icon: PhotoIcon,
    image: saylorImage,
  },
  {
    name: 'CryptoTierList',
    description:
      'A platform for creating and sharing tier lists of cryptocurrency projects. Built with Next.js and MongoDB to enable community-driven project rankings.',
    link: { href: 'https://github.com/ADWilkinson/CryptoTierList', label: 'GitHub' },
    icon: ListBulletIcon,
  },
  {
    name: 'PineScript Indicators',
    description:
      'Open-source library of TradingView indicators created for technical analysis. Includes Colour Trend, Momentum, and Volatility Map indicators in Pine Script language.',
    link: { href: 'https://github.com/ADWilkinson/pinescript-indicators', label: 'GitHub' },
    icon: ArrowTrendingUpIcon,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: "Projects I've worked on including DeFi protocols, tools, and applications.",
}

export default function Projects() {
  const projectImages = projects.filter(p => p.image).map(p => ({
    src: p.image!,
    alt: p.name,
    name: p.name
  }))

  return (
    <SimpleLayout
      title="Projects I've created"
      intro="I've built various projects throughout my career, from DeFi protocols to tools and applications. Here's a selection of my work - including professional ventures and personal hobby projects."
    >

      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <li key={project.name} className="group relative rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="text-base font-medium text-zinc-800 dark:text-zinc-100">
              <Link href={project.link.href}>
                <span className="absolute inset-0" />
                {project.name}
              </Link>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
            <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-500">
              {project.link.label}
            </p>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}