'use client'

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { CompanyLogo } from '@/components/CompanyLogo'
import { GitHubIcon } from '@/components/SocialIcons'
import { ProjectFilter } from '@/components/ProjectFilter'
import { useProjectFilter, type Project } from '@/hooks/useProjectFilter'
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

const productionApps: Project[] = [
  {
    name: 'Elune',
    description:
      'Automated DeFi yield strategies with gas sponsorship for easy onchain earning.',
    link: { href: 'https://tryelune.com', label: 'tryelune.com', type: 'website' },
    icon: CurrencyDollarIcon,
    image: eluneImage,
    tags: ['DeFi', 'Automation'],
    category: 'production' as const,
  },
  {
    name: 'PeerLytics',
    description:
      'ZKP2P liquidity intelligence dashboard with Envio-backed analytics APIs and realtime 3D network visualization.',
    link: { href: 'https://peerlytics.xyz', label: 'peerlytics.xyz', type: 'website' },
    icon: ChartBarIcon,
    tags: ['Analytics', 'WebGL'],
    category: 'production' as const,
  },
  {
    name: 'Piggy DAO',
    description:
      'Official website for Piggy DAO, a DeFAI agent developed by Superform with real-time analytics.',
    link: { href: 'https://piggyonchain.xyz', label: 'piggyonchain.xyz', type: 'website' },
    icon: CubeIcon,
    image: piggyImage,
    tags: ['AI', 'DAO'],
    category: 'production' as const,
  },
  {
    name: 'Davy Jones Intern',
    description:
      'Claude Code SDK-powered Slack bot managing GitHub PRs, builds, and development workflows for ZKP2P.',
    link: { href: '/articles/building-davy-jones-intern', label: 'Read article', type: 'article' },
    icon: CommandLineIcon,
    tags: ['AI', 'Automation'],
    category: 'production' as const,
  },
  {
    name: 'ChordCraft',
    description:
      'AI chord progression generator helping musicians create compelling harmonic sequences.',
    link: { href: 'https://chordcraft.io', label: 'chordcraft.io', type: 'website' },
    icon: MusicalNoteIcon,
    image: chordImage,
    tags: ['AI', 'Music'],
    category: 'production' as const,
  },
]

const projects: Project[] = [
  {
    name: 'Barbossa Engineer',
    description:
      'Automated server manager and AI engineer performing infrastructure upgrades and project work.',
    link: { href: 'https://github.com/ADWilkinson/barbossa-engineer', label: 'barbossa-engineer', type: 'github' },
    icon: ServerIcon,
    tags: ['AI', 'Infrastructure'],
    category: 'other' as const,
  },
  {
    name: 'The Flying Dutchman Theme',
    description:
      'Dark VS Code theme inspired by maritime legends with careful syntax highlighting.',
    link: { href: 'https://github.com/ADWilkinson/the-flying-dutchman-theme', label: 'the-flying-dutchman-theme', type: 'github' },
    icon: CodeBracketIcon,
    tags: ['VS Code'],
    category: 'other' as const,
  },
  {
    name: 'Galleon DAO',
    description:
      'DeFi protocol managing $20M+ in structured products and 6,000+ member community.',
    link: { href: 'https://github.com/GalleonDAO', label: 'GalleonDAO', type: 'github' },
    icon: GlobeAltIcon,
    image: galleonImage,
    tags: ['DeFi', 'DAO'],
    category: 'other' as const,
  },
  {
    name: 'Wojak Jones',
    description:
      'AI-powered yield farming assistant delivering real-time DeFi opportunities.',
    link: { href: 'https://wojakjones.xyz', label: 'wojakjones.xyz', type: 'website' },
    icon: ChartBarIcon,
    image: wojakImage,
    tags: ['AI', 'DeFi'],
    category: 'other' as const,
  },
  {
    name: 'Ultrasoundapps',
    description:
      'Curated platform for discovering and exploring the best decentralized applications.',
    link: { href: 'https://ultrasoundapps.com', label: 'ultrasoundapps.com', type: 'website' },
    icon: BoltIcon,
    image: ultrasoundImage,
    tags: ['DeFi'],
    category: 'other' as const,
  },
  {
    name: 'Privateer',
    description:
      'Automated trading bot implementing correlation and mean reversion strategies on Hyperliquid.',
    link: { href: 'https://github.com/ADWilkinson/privateer-capital', label: 'privateer-capital', type: 'github' },
    icon: CurrencyDollarIcon,
    image: privateerImage,
    tags: ['Trading', 'Automation'],
    category: 'other' as const,
  },
  {
    name: 'SaylorMemes Archive',
    description:
      'Firebase-backed media library with search, tagging, and analytics for the wider Bitcoin meme community.',
    link: { href: 'https://saylormemes.com', label: 'saylormemes.com', type: 'website' },
    icon: PhotoIcon,
    tags: ['Firebase', 'React'],
    category: 'other' as const,
  },
  {
    name: 'CryptoTierList',
    description:
      'Community-driven platform enabling collaborative ranking of cryptocurrency projects.',
    link: { href: 'https://github.com/ADWilkinson/CryptoTierList', label: 'CryptoTierList', type: 'github' },
    icon: ListBulletIcon,
    tags: ['Community'],
    category: 'other' as const,
  },
  {
    name: 'PineScript Indicators',
    description:
      'Open-source technical analysis indicators for TradingView written in PineScript.',
    link: { href: 'https://github.com/ADWilkinson/pinescript-indicators', label: 'pinescript-indicators', type: 'github' },
    icon: ArrowTrendingUpIcon,
    tags: ['Trading', 'Analytics'],
    category: 'other' as const,
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

// Metadata is moved to layout.tsx for client components

function ProjectCard({ project }: { project: Project }) {
  return (
    <li className="group relative">
      <div className="relative border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]">
        {/* Status badge for production apps */}
        {project.category === 'production' && (
          <div className="absolute right-2 top-2 z-10 text-[0.5rem] font-bold uppercase tracking-[0.15em] text-[var(--mono-text)]">
            [LIVE]
          </div>
        )}

        <div className="relative p-4">
          <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--mono-text)]">
            <Link href={project.link.href}>
              <span className="absolute inset-0" />
              {project.name}
            </Link>
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[var(--mono-text-muted)]">
            {project.description}
          </p>

          {/* Technology tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {project.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="border border-[var(--mono-border-muted)] bg-[var(--mono-surface-alt)] px-2 py-0.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--mono-text)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Link */}
          <p className="mt-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--mono-text-muted)]">
            {project.link.type === 'github' ? (
              <GitHubIcon className="h-3 w-3 flex-none fill-current" />
            ) : project.link.type === 'article' ? (
              <span className="text-[0.6rem]">📖</span>
            ) : (
              <ExternalLinkIcon className="h-3 w-3 flex-none" />
            )}
            <span>{project.link.label}</span>
          </p>
        </div>
      </div>
    </li>
  )
}

export default function Projects() {
  // Combine all projects for filtering
  const allProjects = [...productionApps, ...projects]
  
  const {
    filters,
    setFilters,
    availableTags,
    filteredProjects,
    totalCount,
    filteredCount
  } = useProjectFilter(allProjects)

  // Separate filtered projects by category
  const filteredProductionApps = filteredProjects.filter(p => p.category === 'production')
  const filteredOtherProjects = filteredProjects.filter(p => p.category === 'other')

  return (
    <SimpleLayout
      title="Projects I've created"
      intro="A selection of DeFi protocols, tools, and applications I've built."
    >
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Filter Component */}
        <ProjectFilter
          filters={filters}
          onFiltersChange={setFilters}
          availableTags={availableTags}
        />
        

        {/* No Results */}
        {filteredCount === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-500 dark:text-zinc-400">No projects found matching your filters.</p>
            <button
              onClick={() => setFilters({
                searchTerm: '',
                selectedTags: [],
                selectedType: 'all',
                sortBy: 'name'
              })}
              className="mt-2 text-[var(--mono-accent)] hover:underline transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Show filtered results based on type filter */}
        {filters.selectedType === 'all' && (
          <div className="space-y-20">
            {filteredProductionApps.length > 0 && (
              <section>
                <div className="mb-6">
                  <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--mono-text)]">
                    Current Apps ({filteredProductionApps.length})
                  </h2>
                  <div className="mt-2 text-[var(--mono-border)]">
                    ─────────────────────────────────────────
                  </div>
                </div>
                <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredProductionApps.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </ul>
              </section>
            )}

            {filteredOtherProjects.length > 0 && (
              <section>
                <div className="mb-6">
                  <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--mono-text)]">
                    Other Projects ({filteredOtherProjects.length})
                  </h2>
                  <div className="mt-2 text-[var(--mono-border)]">
                    ─────────────────────────────────────────
                  </div>
                </div>
                <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredOtherProjects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </ul>
              </section>
            )}
          </div>
        )}

        {/* Show single category when filtered */}
        {filters.selectedType !== 'all' && filteredCount > 0 && (
          <section>
            <div className="mb-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--mono-text)]">
                {filters.selectedType === 'production' ? 'Current Apps' : 'Other Projects'} ({filteredCount})
              </h2>
              <div className="mt-2 text-[var(--mono-border)]">
                ─────────────────────────────────────────
              </div>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </ul>
          </section>
        )}
      </div>
    </SimpleLayout>
  )
}
