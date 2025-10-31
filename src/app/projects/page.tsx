'use client'

import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
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
  CodeBracketIcon
} from '@heroicons/react/24/solid'

const productionApps: Project[] = [
  {
    name: 'PeerLytics',
    description:
      'ZKP2P liquidity analytics dashboard and explorer powered by Envio-backed APIs.',
    link: { href: 'https://peerlytics.xyz', label: 'peerlytics.xyz', type: 'website' },
    icon: ChartBarIcon,
    tags: ['Analytics', 'Explorer', 'ZKP2P'],
    category: 'production' as const,
  },
  {
    name: 'Privateer',
    description:
      'Webhook-to-Hyperliquid trading automation with SaaS UI for signals, risk, and execution.',
    link: { href: 'https://hlprivateer.xyz', label: 'hlprivateer.xyz', type: 'website' },
    icon: CurrencyDollarIcon,
    tags: ['Hyperliquid', 'Trading', 'Automation'],
    category: 'production' as const,
  },
  {
    name: 'Piggy DAO',
    description:
      'Official website for Piggy DAO, a DeFAI agent developed by Superform with real-time analytics.',
    link: { href: 'https://piggyonchain.xyz', label: 'piggyonchain.xyz', type: 'website' },
    icon: CubeIcon,
    tags: ['AI', 'DAO'],
    category: 'production' as const,
  },
  {
    name: 'ChordCraft',
    description:
      'AI chord progression generator helping musicians create compelling harmonic sequences.',
    link: { href: 'https://chordcraft.io', label: 'chordcraft.io', type: 'website' },
    icon: MusicalNoteIcon,
    tags: ['AI', 'Music'],
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
    name: 'usdctofiat',
    description:
      'Sell USDC, Receive Fiat. Deposit USDC, set your fiat payout details, and wait for buyers to fill your order via zero-knowledge proofs.',
    link: { href: 'https://usdctofiat.xyz', label: 'usdctofiat.xyz', type: 'website' },
    icon: CurrencyDollarIcon,
    tags: ['ZKP2P', 'Payments'],
    category: 'production' as const,
  },
]

const projects: Project[] = [
  {
    name: 'Elune',
    description:
      'Simple yield farming platform for non-crypto native users with automated DeFi strategies.',
    link: { href: 'https://tryelune.com', label: 'tryelune.com', type: 'website' },
    icon: CurrencyDollarIcon,
    tags: ['DeFi', 'Yield'],
    category: 'other' as const,
  },
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
    tags: ['DeFi', 'DAO'],
    category: 'other' as const,
  },
  {
    name: 'Wojak Jones',
    description:
      'AI-powered yield farming assistant delivering real-time DeFi opportunities.',
    link: { href: 'https://wojakjones.xyz', label: 'wojakjones.xyz', type: 'website' },
    icon: ChartBarIcon,
    tags: ['AI', 'DeFi'],
    category: 'other' as const,
  },
  {
    name: 'Ultrasoundapps',
    description:
      'Curated platform for discovering and exploring the best decentralized applications.',
    link: { href: 'https://ultrasoundapps.com', label: 'ultrasoundapps.com', type: 'website' },
    icon: BoltIcon,
    tags: ['DeFi'],
    category: 'other' as const,
  },
  {
    name: 'Privateer Capital',
    description:
      'Automated trading bot implementing correlation and mean reversion strategies on Hyperliquid.',
    link: { href: 'https://github.com/ADWilkinson/privateer-capital', label: 'privateer-capital', type: 'github' },
    icon: CurrencyDollarIcon,
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      as="li"
      className="h-full bg-[var(--surface-muted)] shadow-[var(--shadow-xs)] transition-[background-color,border-color,box-shadow] duration-90 ease-out hover:border-[var(--accent-primary)] hover:bg-[var(--surface-elevated)] hover:shadow-[var(--shadow-brand-soft)] dark:hover:border-[var(--accent-hover)]"
    >
      <div className="flex items-start justify-between gap-3">
        <Card.Title as="h3" href={project.link.href}>
          {project.name}
        </Card.Title>
        {project.category === 'production' && (
          <span className="rounded-md border border-[var(--accent-primary)] bg-[var(--dj-navigator)] px-2 py-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-[var(--dj-canvas)]">
            Live
          </span>
        )}
      </div>
      <p className="text-sm leading-relaxed text-[var(--text-muted)]">
        {project.description}
      </p>
      {project.tags && project.tags.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[var(--border-default)] bg-[var(--surface-elevated)] px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.12em] text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <p className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.14em] text-[var(--text-muted)]">
        {project.link.type === 'github' ? (
          <GitHubIcon className="h-3 w-3 flex-none fill-current" />
        ) : project.link.type === 'article' ? (
          <span aria-hidden="true">▻</span>
        ) : (
          <ExternalLinkIcon className="h-3 w-3 flex-none" />
        )}
        <span>{project.link.label}</span>
      </p>
    </Card>
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

  // Apply custom display order for production apps
  const productionOrder = ['PeerLytics', 'Privateer', 'Piggy DAO', 'ChordCraft', 'Davy Jones Intern']
  const orderedFilteredProductionApps = [...filteredProductionApps].sort((a, b) => {
    const ai = productionOrder.indexOf(a.name)
    const bi = productionOrder.indexOf(b.name)
    return (ai === -1 ? Number.MAX_SAFE_INTEGER : ai) - (bi === -1 ? Number.MAX_SAFE_INTEGER : bi)
  })

  return (
    <SimpleLayout
      icon={
        <div className="relative h-10 w-10">
          <Image
            src="/brand/icons/Application-Icon.png"
            alt="Projects icon"
            width={40}
            height={40}
            className="h-full w-full dark:hidden"
            priority
          />
          <Image
            src="/brand/icons/Application-Icon-Dark.png"
            alt=""
            width={40}
            height={40}
            className="hidden h-full w-full dark:block"
            priority
          />
        </div>
      }
      title="Projects I've created"
      intro="A selection of DeFi protocols, tools, and applications I've built."
    >
      <div className="mx-auto max-w-5xl space-y-10">
        {/* Filter Component */}
        <ProjectFilter
          filters={filters}
          onFiltersChange={setFilters}
          availableTags={availableTags}
        />


        {/* No Results */}
        {filteredCount === 0 && (
          <div className="py-12 text-center">
            <p className="text-[var(--text-muted)]">No projects found matching your filters.</p>
            <button
              onClick={() => setFilters({
                searchTerm: '',
                selectedTags: [],
                selectedType: 'all',
                sortBy: 'name'
              })}
              className="mt-2 text-[0.7rem] uppercase tracking-[0.12em] text-[var(--accent-primary)] hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Show filtered results based on type filter */}
        {filters.selectedType === 'all' && (
          <div className="space-y-16">
            {filteredProductionApps.length > 0 && (
              <section className="space-y-8">
                <div className="flex flex-col gap-2 border-b border-[var(--border-default)]/15 pb-4">
                  <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                    Current Apps
                  </h2>
                  <p className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {filteredProductionApps.length} shipped and maintained
                  </p>
                </div>
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {orderedFilteredProductionApps.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                  ))}
                </ul>
              </section>
            )}

            {filteredOtherProjects.length > 0 && (
              <section className="space-y-8">
                <div className="flex flex-col gap-2 border-b border-[var(--border-default)]/15 pb-4">
                  <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                    Other Projects
                  </h2>
                  <p className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                    {filteredOtherProjects.length} explorations and experiments
                  </p>
                </div>
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <section className="space-y-8">
            <div className="flex flex-col gap-2 border-b border-[var(--border-default)]/15 pb-4">
              <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)]">
                {filters.selectedType === 'production' ? 'Current Apps' : 'Other Projects'}
              </h2>
              <p className="text-[0.6rem] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                {filteredCount} results
              </p>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(filters.selectedType === 'production' ? orderedFilteredProductionApps : filteredProjects).map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </ul>
          </section>
        )}
      </div>
    </SimpleLayout>
  )
}
