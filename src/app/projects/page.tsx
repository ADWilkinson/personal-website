import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { CompanyLogo } from '@/components/CompanyLogo'
import { GitHubIcon } from '@/components/SocialIcons'
import { 
  GlobeAltIcon, 
  ChartBarIcon, 
  MusicalNoteIcon, 
  BoltIcon, 
  CurrencyDollarIcon, 
  PhotoIcon, 
  ListBulletIcon,
  ArrowTrendingUpIcon,
  CubeIcon,
  CommandLineIcon,
  ServerIcon,
  CodeBracketIcon,
  BeakerIcon
} from '@heroicons/react/24/solid'

import galleonImage from '@/images/projects/galleon.png'
import wojakImage from '@/images/projects/wojak.png'
import chordImage from '@/images/projects/chord.png'
import piggyImage from '@/images/projects/piggy.png'
import ultrasoundImage from '@/images/projects/ultrasound.png'
import privateerImage from '@/images/projects/priv.png'
import saylorImage from '@/images/projects/saylor.png'
import eluneImage from '@/images/projects/elune.png'

const productionApps = [
  {
    name: 'Elune',
    description:
      'Automated DeFi yield strategies with gas sponsorship for easy onchain earning.',
    link: { href: 'https://tryelune.com', label: 'tryelune.com', type: 'website' },
    icon: CurrencyDollarIcon,
    image: eluneImage,
  },
  {
    name: 'Piggy DAO',
    description:
      'Official website for Piggy DAO, a DeFAI agent developed by Superform with real-time analytics.',
    link: { href: 'https://piggyonchain.xyz', label: 'piggyonchain.xyz', type: 'website' },
    icon: CubeIcon,
    image: piggyImage,
  },
  {
    name: 'Davy Jones Intern',
    description:
      'Claude Code SDK-powered Slack bot managing GitHub PRs, builds, and development workflows for ZKP2P.',
    link: { href: '/articles/building-davy-jones-intern', label: 'Read article', type: 'article' },
    icon: CommandLineIcon,
  },
  {
    name: 'SaylorMemes',
    description:
      'Cryptocurrency meme generator featuring customizable templates and editing tools.',
    link: { href: 'https://saylormemes.com', label: 'saylormemes.com', type: 'website' },
    icon: PhotoIcon,
    image: saylorImage,
  },
  {
    name: 'ChordCraft',
    description:
      'AI chord progression generator helping musicians create compelling harmonic sequences.',
    link: { href: 'https://chordcraft.io', label: 'chordcraft.io', type: 'website' },
    icon: MusicalNoteIcon,
    image: chordImage,
  },
]

const projects = [
  {
    name: 'Barbossa Engineer',
    description:
      'Automated server manager and AI engineer performing infrastructure upgrades and project work.',
    link: { href: 'https://github.com/ADWilkinson/barbossa-engineer', label: 'barbossa-engineer', type: 'github' },
    icon: ServerIcon,
  },
  {
    name: 'The Flying Dutchman Theme',
    description:
      'Dark VS Code theme inspired by maritime legends with careful syntax highlighting.',
    link: { href: 'https://github.com/ADWilkinson/the-flying-dutchman-theme', label: 'the-flying-dutchman-theme', type: 'github' },
    icon: CodeBracketIcon,
  },
  {
    name: 'Galleon DAO',
    description:
      'DeFi protocol managing $20M+ in structured products and 6,000+ member community.',
    link: { href: 'https://github.com/GalleonDAO', label: 'GalleonDAO', type: 'github' },
    icon: GlobeAltIcon,
    image: galleonImage,
  },
  {
    name: 'Wojak Jones',
    description:
      'AI-powered yield farming assistant delivering real-time DeFi opportunities.',
    link: { href: 'https://wojakjones.xyz', label: 'wojakjones.xyz', type: 'website' },
    icon: ChartBarIcon,
    image: wojakImage,
  },
  {
    name: 'Ultrasoundapps',
    description:
      'Curated platform for discovering and exploring the best decentralized applications.',
    link: { href: 'https://ultrasoundapps.com', label: 'ultrasoundapps.com', type: 'website' },
    icon: BoltIcon,
    image: ultrasoundImage,
  },
  {
    name: 'Privateer',
    description:
      'Automated trading bot implementing correlation and mean reversion strategies on Hyperliquid.',
    link: { href: 'https://github.com/ADWilkinson/privateer-capital', label: 'privateer-capital', type: 'github' },
    icon: CurrencyDollarIcon,
    image: privateerImage,
  },
  {
    name: 'CryptoTierList',
    description:
      'Community-driven platform enabling collaborative ranking of cryptocurrency projects.',
    link: { href: 'https://github.com/ADWilkinson/CryptoTierList', label: 'CryptoTierList', type: 'github' },
    icon: ListBulletIcon,
  },
  {
    name: 'PineScript Indicators',
    description:
      'Open-source technical analysis indicators for TradingView written in PineScript.',
    link: { href: 'https://github.com/ADWilkinson/pinescript-indicators', label: 'pinescript-indicators', type: 'github' },
    icon: ArrowTrendingUpIcon,
  },
]

function ExternalLinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
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
      intro="A selection of DeFi protocols, tools, and applications I've built."
    >
      <div className="space-y-20">
        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
            Current Apps
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {productionApps.map((project) => (
              <li key={project.name} className="group relative rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 transition-all duration-200 hover:shadow-md hover:border-zinc-200 dark:hover:border-zinc-600 hover:scale-[1.02]">
                <h3 className="text-base font-medium text-zinc-800 group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400 transition-colors duration-200">
                  <Link href={project.link.href}>
                    <span className="absolute inset-0" />
                    {project.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-4 flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors duration-200">
                  {project.link.type === 'github' ? (
                    <GitHubIcon className="h-3.5 w-3.5 flex-none fill-current" />
                  ) : project.link.type === 'article' ? (
                    <span className="text-xs">📖</span>
                  ) : (
                    <ExternalLinkIcon className="h-3.5 w-3.5 flex-none" />
                  )}
                  <span>{project.link.label}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 mb-8">
            Other Projects
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <li key={project.name} className="group relative rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 transition-all duration-200 hover:shadow-md hover:border-zinc-200 dark:hover:border-zinc-600 hover:scale-[1.02]">
                <h3 className="text-base font-medium text-zinc-800 group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400 transition-colors duration-200">
                  <Link href={project.link.href}>
                    <span className="absolute inset-0" />
                    {project.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-4 flex items-center gap-1.5 text-xs text-zinc-400 group-hover:text-zinc-500 dark:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors duration-200">
                  {project.link.type === 'github' ? (
                    <GitHubIcon className="h-3.5 w-3.5 flex-none fill-current" />
                  ) : project.link.type === 'article' ? (
                    <span className="text-xs">📖</span>
                  ) : (
                    <ExternalLinkIcon className="h-3.5 w-3.5 flex-none" />
                  )}
                  <span>{project.link.label}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </SimpleLayout>
  )
}