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
  UsersIcon,
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
  GlobeIcon,
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
    name: 'Galleon DAO',
    desc: 'DeFi protocol managing $20M+ in structured products and 6,000+ member community',
    url: 'https://github.com/GalleonDAO',
    icon: TreasureIcon,
    tags: ['DeFi', 'DAO'],
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
}: {
  project: ProjectType
  index: number
  baseDelay?: number
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
        className="flex items-center gap-3 py-3 -mx-2 px-2 rounded-lg transition-all duration-200 hover:bg-[var(--text-primary)]/[0.03]"
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {/* Icon */}
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-[var(--surface-muted)] flex items-center justify-center ring-1 ring-[var(--border-default)]/10 transition-all duration-300 group-hover:scale-105 group-hover:ring-[var(--accent-primary)]/20">
          <IconComponent
            size={20}
            className="text-[var(--text-muted)] transition-colors duration-200 group-hover:text-[var(--accent-primary)]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)]">
              {project.name}
            </span>
            {isExternal && (
              <ExternalLinkIcon
                size={12}
                className="text-[var(--text-muted)] opacity-0 transition-all duration-200 group-hover:opacity-50"
              />
            )}
            {/* Tags inline with title */}
            <div className="hidden sm:flex items-center gap-1.5">
              {project.tags.slice(0, 2).map(tag => (
                <span
                  key={tag}
                  className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--text-primary)]/[0.05] text-[var(--text-muted)] transition-colors duration-200 group-hover:bg-[var(--accent-primary)]/10 group-hover:text-[var(--accent-primary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="text-sm text-[var(--text-muted)] line-clamp-2">{project.desc}</span>
        </div>
      </Link>
    </li>
  )
}

function ExpandButton({
  expanded,
  onClick,
  showMoreText,
  showLessText,
}: {
  expanded: boolean
  onClick: () => void
  showMoreText: string
  showLessText: string
}) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-1 text-xs text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-primary)] pt-3"
    >
      <span>{expanded ? showLessText : showMoreText}</span>
      <ArrowRightIcon
        size={10}
        className={`transition-transform duration-200 ${expanded ? 'rotate-[-90deg]' : 'rotate-90'}`}
      />
    </button>
  )
}

export default function Projects() {
  const [showAllCurrent, setShowAllCurrent] = useState(false)
  const [showPast, setShowPast] = useState(false)

  const visibleCurrentProjects = showAllCurrent ? currentProjects : currentProjects.slice(0, 4)

  return (
    <SimpleLayout
      icon={HelmIcon}
      title="Projects"
      intro="Things I've built—DeFi protocols, trading tools, and side projects."
    >
      {/* Current Projects */}
      <ul className="space-y-0">
        {visibleCurrentProjects.map((project, index) => (
          <ProjectItem key={project.name} project={project} index={index} />
        ))}
      </ul>
      {currentProjects.length > 4 && (
        <ExpandButton
          expanded={showAllCurrent}
          onClick={() => setShowAllCurrent(!showAllCurrent)}
          showMoreText={`Show ${currentProjects.length - 4} more`}
          showLessText="Show less"
        />
      )}

      {/* Past Projects Section */}
      <div className="mt-10 pt-8 border-t border-[var(--border-default)]/10">
        <button
          onClick={() => setShowPast(!showPast)}
          className="group flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
        >
          <span className="font-medium">Past Projects</span>
          <span className="text-xs opacity-60">({pastProjects.length})</span>
          <ArrowRightIcon
            size={12}
            className={`transition-transform duration-200 ${showPast ? 'rotate-90' : ''}`}
          />
        </button>

        {showPast && (
          <ul className="space-y-0 mt-4">
            {pastProjects.map((project, index) => (
              <ProjectItem
                key={project.name}
                project={project}
                index={index}
                baseDelay={50}
              />
            ))}
          </ul>
        )}
      </div>
    </SimpleLayout>
  )
}
