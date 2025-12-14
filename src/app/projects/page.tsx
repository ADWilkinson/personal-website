'use client'

import { useState } from 'react'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import {
  HelmIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  ChartIcon,
  AnchorIcon,
  CoinIcon,
  MusicIcon,
  TreasureIcon,
  MoonIcon,
  BotIcon,
  TerminalIcon,
  ServerIcon,
  CodeIcon,
  ImageIcon,
  ListIcon,
  ZapIcon,
  TrendingIcon,
  CubeIcon,
} from '@/components/Icons'

// Current active projects
const currentProjects = [
  {
    name: 'PeerLytics',
    desc: 'ZKP2P liquidity intelligence dashboard with Envio-backed analytics APIs and realtime 3D visualization',
    url: 'https://peerlytics.xyz',
    icon: ChartIcon,
    tags: ['Analytics', 'WebGL'],
  },
  {
    name: 'Privateer',
    desc: 'Hyperliquid trading automation and strategy execution',
    url: 'https://hlprivateer.xyz',
    icon: AnchorIcon,
    tags: ['Trading', 'Automation'],
  },
  {
    name: 'usdctofiat',
    desc: 'Sell USDC and receive fiat via ZK proofs',
    url: 'https://usdctofiat.xyz',
    icon: CoinIcon,
    tags: ['Payments', 'ZK'],
  },
  {
    name: 'Piggy DAO',
    desc: 'Official website for Piggy DAO, a DeFAI agent developed by Superform with real-time analytics',
    url: 'https://piggyonchain.xyz',
    icon: CubeIcon,
    tags: ['AI', 'DAO'],
  },
  {
    name: 'Davy Jones Intern',
    desc: 'Claude Code SDK-powered Slack bot managing GitHub PRs, builds, and development workflows',
    url: '/articles/building-davy-jones-intern',
    icon: TerminalIcon,
    tags: ['AI', 'Automation'],
    isInternal: true,
  },
  {
    name: 'ChordCraft',
    desc: 'AI chord progression generator helping musicians create compelling harmonic sequences',
    url: 'https://chordcraft.io',
    icon: MusicIcon,
    tags: ['AI', 'Music'],
  },
]

// Past projects
const pastProjects = [
  {
    name: 'Galleon DAO',
    desc: 'DeFi protocol managing $20M+ in structured products and 6,000+ member community',
    url: 'https://github.com/GalleonDAO',
    icon: TreasureIcon,
    tags: ['DeFi', 'DAO'],
  },
  {
    name: 'Elune',
    desc: 'Automated DeFi yield strategies with gas sponsorship for easy onchain earning',
    url: 'https://tryelune.com',
    icon: MoonIcon,
    tags: ['DeFi', 'Automation'],
  },
  {
    name: 'Barbossa Engineer',
    desc: 'Automated server manager and AI engineer performing infrastructure upgrades and project work',
    url: 'https://github.com/ADWilkinson/barbossa-engineer',
    icon: ServerIcon,
    tags: ['AI', 'Infrastructure'],
  },
  {
    name: 'The Flying Dutchman Theme',
    desc: 'Dark VS Code theme inspired by maritime legends with careful syntax highlighting',
    url: 'https://github.com/ADWilkinson/the-flying-dutchman-theme',
    icon: CodeIcon,
    tags: ['VS Code'],
  },
  {
    name: 'Wojak Jones',
    desc: 'AI-powered yield farming assistant delivering real-time DeFi opportunities',
    url: 'https://wojakjones.xyz',
    icon: BotIcon,
    tags: ['AI', 'DeFi'],
  },
  {
    name: 'Ultrasoundapps',
    desc: 'Curated platform for discovering and exploring the best decentralized applications',
    url: 'https://ultrasoundapps.com',
    icon: ZapIcon,
    tags: ['DeFi'],
  },
  {
    name: 'Privateer Capital',
    desc: 'Automated trading bot implementing correlation and mean reversion strategies on Hyperliquid',
    url: 'https://github.com/ADWilkinson/privateer-capital',
    icon: TrendingIcon,
    tags: ['Trading', 'Automation'],
  },
  {
    name: 'SaylorMemes Archive',
    desc: 'Firebase-backed media library with search, tagging, and analytics for the Bitcoin meme community',
    url: 'https://saylormemes.com',
    icon: ImageIcon,
    tags: ['Firebase', 'React'],
  },
  {
    name: 'CryptoTierList',
    desc: 'Community-driven platform enabling collaborative ranking of cryptocurrency projects',
    url: 'https://github.com/ADWilkinson/CryptoTierList',
    icon: ListIcon,
    tags: ['Community'],
  },
  {
    name: 'PineScript Indicators',
    desc: 'Open-source technical analysis indicators for TradingView written in PineScript',
    url: 'https://github.com/ADWilkinson/pinescript-indicators',
    icon: TrendingIcon,
    tags: ['Trading', 'Analytics'],
  },
]

type ProjectType = {
  name: string
  desc: string
  url: string
  icon: typeof ChartIcon
  tags: string[]
  isInternal?: boolean
}

function ProjectItem({
  project,
  index,
  baseDelay = 100,
  variant = 'current',
}: {
  project: ProjectType
  index: number
  baseDelay?: number
  variant?: 'current' | 'past'
}) {
  const IconComponent = project.icon
  const isExternal = !project.isInternal

  return (
    <li
      className="group opacity-0 animate-fade-up-subtle"
      style={{ animationDelay: `${baseDelay + index * 40}ms`, animationFillMode: 'forwards' }}
    >
      <Link
        href={project.url}
        className="flex items-center gap-3 py-3 -mx-2 px-2 rounded-lg transition-all duration-300 ease-out hover:bg-[var(--text-primary)]/[0.03] hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {/* Icon */}
        <div className={`relative h-10 w-10 shrink-0 overflow-hidden rounded-lg flex items-center justify-center ring-1 transition-all duration-300 ease-out ${
          variant === 'past'
            ? 'bg-[var(--surface-muted)] ring-[var(--border-default)]/5 group-hover:ring-[var(--accent-primary)]/15'
            : 'bg-[var(--surface-muted)] ring-[var(--border-default)]/10 group-hover:ring-[var(--accent-primary)]/25 group-hover:scale-105'
        }`}>
          <IconComponent
            size={20}
            className={`transition-all duration-300 ease-out ${
              variant === 'past'
                ? 'text-[var(--text-muted)] opacity-50 group-hover:opacity-80 group-hover:text-[var(--accent-primary)]'
                : 'text-[var(--text-muted)] opacity-70 group-hover:text-[var(--accent-primary)] group-hover:rotate-3'
            }`}
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col min-w-0">
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium transition-colors duration-200 ${
              variant === 'past'
                ? 'text-[var(--text-primary)] opacity-70 group-hover:opacity-100 group-hover:text-[var(--accent-primary)]'
                : 'text-[var(--text-primary)] group-hover:text-[var(--accent-primary)]'
            }`}>
              {project.name}
            </span>
            {isExternal && (
              <ExternalLinkIcon
                size={12}
                className="text-[var(--text-muted)] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-50 group-hover:translate-x-0"
              />
            )}
            {/* Tags inline with title */}
            <div className="hidden sm:flex items-center gap-1.5 ml-auto">
              {project.tags.slice(0, 2).map((tag, tagIndex) => (
                <span
                  key={tag}
                  className={`text-[10px] px-1.5 py-0.5 rounded-md border transition-all duration-200 ${
                    variant === 'past'
                      ? 'bg-transparent border-[var(--border-default)]/10 text-[var(--text-muted)] opacity-50 group-hover:opacity-70 group-hover:border-[var(--accent-primary)]/20 group-hover:text-[var(--accent-primary)]'
                      : 'bg-[var(--text-primary)]/[0.03] border-[var(--border-default)]/10 text-[var(--text-muted)] opacity-60 group-hover:bg-[var(--accent-primary)]/10 group-hover:border-[var(--accent-primary)]/20 group-hover:text-[var(--accent-primary)] group-hover:opacity-100'
                  }`}
                  style={{ transitionDelay: `${tagIndex * 30}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className={`text-sm text-[var(--text-muted)] line-clamp-2 ${
            variant === 'past' ? 'opacity-60' : 'opacity-80'
          }`}>{project.desc}</span>
        </div>
      </Link>
    </li>
  )
}

export default function Projects() {
  const [showPast, setShowPast] = useState(false)

  return (
    <SimpleLayout
      icon={HelmIcon}
      title="Projects"
      intro="Things I've built: AI tools, DeFi protocols, trading systems, and side projects."
    >
      {/* Current Projects - show all */}
      <ul className="space-y-0">
        {currentProjects.map((project, index) => (
          <ProjectItem key={project.name} project={project} index={index} />
        ))}
      </ul>

      {/* Past Projects Section */}
      <div className="mt-12 pt-8 border-t border-[var(--border-default)]/10">
        <button
          onClick={() => setShowPast(!showPast)}
          className="group flex items-center gap-2.5 text-sm text-[var(--text-muted)] opacity-70 transition-all duration-200 hover:opacity-100 hover:text-[var(--text-primary)]"
        >
          <span className="font-medium tracking-tight">Past Projects</span>
          <span className="text-[11px] px-1.5 py-0.5 rounded bg-[var(--text-primary)]/[0.04] tabular-nums">
            {pastProjects.length}
          </span>
          <ArrowRightIcon
            size={12}
            className={`transition-all duration-300 ease-out ${showPast ? 'rotate-90 text-[var(--accent-primary)]' : 'group-hover:translate-x-0.5'}`}
          />
        </button>

        {/* Expandable section with smooth animation */}
        <div
          className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
            showPast ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <ul className="space-y-0 mt-4 overflow-hidden">
            {pastProjects.map((project, index) => (
              <ProjectItem
                key={project.name}
                project={project}
                index={index}
                baseDelay={showPast ? 50 : 0}
                variant="past"
              />
            ))}
          </ul>
        </div>
      </div>
    </SimpleLayout>
  )
}
