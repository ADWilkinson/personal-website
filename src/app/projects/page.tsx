import { type Metadata } from 'next'
import Image from 'next/image'

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
  ListBulletIcon 
} from '@heroicons/react/24/solid'

const projects = [
  {
    name: 'Galleon DAO',
    description:
      'A DeFi protocol creating structured products and automated investment strategies. Secured $1M in funding, built a community of over 6,000 members, and managed $20M+ in product investments. Founded by Davy Jones.',
    link: { href: 'https://github.com/galleonlabs', label: 'github.com/galleonlabs' },
    icon: GlobeAltIcon,
    color: 'bg-indigo-900 text-white',
  },
  {
    name: 'Wojak Jones',
    description:
      'A yield farming DeFi assistant built with Firebase, Telegram API, and Virtuals Framework. Provides real-time yield farming opportunities and DeFi analytics.',
    link: { href: 'https://wojakjones.xyz', label: 'wojakjones.xyz' },
    icon: ChartBarIcon,
    color: 'bg-amber-500 text-white',
  },
  {
    name: 'ChordCraft',
    description:
      'An AI chord progression generator created with React, Firebase, and the OpenAI API. Generates unique chord progressions based on musical style preferences.',
    link: { href: 'https://chordcraft.io', label: 'chordcraft.io' },
    icon: MusicalNoteIcon,
    color: 'bg-indigo-500 text-white',
  },
  {
    name: 'Ultrasoundapps',
    description:
      'A centralized platform showcasing various DeFi and cryptocurrency applications. Built with React and Firebase.',
    link: { href: 'https://ultrasoundapps.com', label: 'ultrasoundapps.com' },
    icon: BoltIcon,
    color: 'bg-emerald-500 text-white',
  },
  {
    name: 'Privateer',
    description:
      'A hyperliquid-based trading bot using correlation/mean reversion strategies. Designed with Python and Trading APIs for data analysis.',
    link: { href: 'https://github.com/ADWilkinson/privateer-capital', label: 'github.com/ADWilkinson/privateer-capital' },
    icon: CurrencyDollarIcon,
    color: 'bg-slate-800 text-white',
  },
  {
    name: 'SaylorMemes',
    description:
      'A meme generator app built with Vite and Firebase for creating and sharing cryptocurrency-themed memes.',
    link: { href: 'https://github.com/galleonlabs/saylormemes', label: 'github.com/galleonlabs/saylormemes' },
    icon: PhotoIcon,
    color: 'bg-amber-600 text-white',
  },
  {
    name: 'CryptoTierList',
    description:
      'A platform for creating and sharing tier lists of cryptocurrency projects. Built with Next.js and MongoDB.',
    link: { href: 'https://github.com/ADWilkinson/CryptoTierList', label: 'github.com/ADWilkinson/CryptoTierList' },
    icon: ListBulletIcon,
    color: 'bg-indigo-400 text-white',
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
          <Card as="li" key={project.name}>
            <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-xl ${project.color} shadow-md shadow-zinc-800/5`}>
              <project.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}