'use client'

import { useEffect, useState, useMemo } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

import {
  ExternalLinkIcon,
  ServerIcon,
  TerminalIcon,
  CodeIcon,
  CopyIcon,
  CheckIcon,
  DownloadIcon,
  GitHubIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from '@/components/Icons'

const sections = [
  { id: 'agents', label: 'Barbossa System' },
  { id: 'claude-code', label: 'Claude Code', isHeader: true },
  { id: 'types', label: 'Tool Types' },
  { id: 'subagents', label: 'Subagents' },
  { id: 'skills', label: 'Skills' },
  { id: 'commands', label: 'Commands' },
  { id: 'hooks', label: 'Hooks' },
  { id: 'statusline', label: 'Statusline' },
]

function useActiveSection() {
  const [activeSection, setActiveSection] = useState('agents')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return activeSection
}

function SideNav({ activeSection, onNavigate }: { activeSection: string; onNavigate?: () => void }) {
  return (
    <nav className="space-y-1">
      {sections.map(({ id, label, isHeader }) => (
        isHeader ? (
          <div key={id} className="pt-5 pb-2">
            <p className="text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)] opacity-50">
              {label}
            </p>
          </div>
        ) : (
          <a
            key={id}
            href={`#${id}`}
            onClick={onNavigate}
            className={clsx(
              'block py-1.5 pl-3 text-sm border-l-2 transition-all duration-200',
              activeSection === id
                ? 'border-[var(--accent-primary)] text-[var(--text-primary)] font-medium'
                : 'border-transparent text-[var(--text-muted)] opacity-60 hover:opacity-100 hover:text-[var(--text-primary)] hover:border-[var(--border-default)]/30'
            )}
          >
            {label}
          </a>
        )
      ))}
    </nav>
  )
}

function MobileNav({ activeSection }: { activeSection: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 p-3.5 bg-[var(--surface-default)] border border-[var(--border-default)]/20 rounded-full shadow-lg backdrop-blur-sm"
        aria-label="Open navigation"
      >
        <MenuIcon size={18} className="text-[var(--text-primary)]" />
      </button>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[var(--surface-default)] border-t border-[var(--border-default)]/20 rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-[var(--text-primary)]">Navigate</p>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] rounded-lg hover:bg-[var(--text-primary)]/5 transition-colors"
                aria-label="Close navigation"
              >
                <XIcon size={18} />
              </button>
            </div>
            <SideNav activeSection={activeSection} onNavigate={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}

const PLUGIN_INSTALL_COMMANDS = `/plugin marketplace add ADWilkinson/claude-code-tools
/plugin install cct@cct`

const SCRIPT_INSTALL_COMMAND = `git clone https://github.com/ADWilkinson/claude-code-tools.git && cd claude-code-tools && ./install.sh`

function InstallButton() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(PLUGIN_INSTALL_COMMANDS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className={clsx(
        'inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-200',
        copied
          ? 'bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]'
          : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--text-primary)]/[0.03] hover:bg-[var(--text-primary)]/[0.06]'
      )}
    >
      {copied ? (
        <>
          <CheckIcon size={13} />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <CopyIcon size={13} />
          <span>Copy plugin install</span>
        </>
      )}
    </button>
  )
}

function CodeBlock({ children, id, label }: { children: string; id: string; label?: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative">
      {label && (
        <div className="absolute -top-2.5 left-3 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] bg-[var(--surface-default)] border border-[var(--border-default)]/10 rounded">
          {label}
        </div>
      )}
      <pre className={clsx(
        "overflow-x-auto rounded-lg bg-[var(--dj-charcoal)] p-4 text-xs leading-relaxed font-mono",
        label && "pt-5"
      )}>
        <code className="text-[var(--dj-canvas)] opacity-70">{children}</code>
      </pre>
      <button
        onClick={copy}
        className={clsx(
          'absolute top-3 right-3 p-1.5 rounded-md transition-all duration-200',
          'opacity-0 group-hover:opacity-100',
          copied
            ? 'text-[var(--accent-primary)] bg-[var(--accent-primary)]/10'
            : 'text-[var(--dj-canvas)] opacity-50 hover:opacity-80 hover:bg-[var(--dj-canvas)]/10'
        )}
        aria-label={copied ? 'Copied' : 'Copy'}
      >
        {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
      </button>
    </div>
  )
}

function SectionHeader({
  title,
  badge,
  children
}: {
  title: string
  badge?: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-6">
      <div className="space-y-1">
        <div className="flex items-center gap-3">
          <h3 className="text-base font-semibold text-[var(--text-primary)] tracking-tight">
            {title}
          </h3>
          {badge && (
            <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 rounded-full">
              {badge}
            </span>
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

function ToolCard({
  title,
  description,
  icon: Icon,
  url,
  downloadUrl,
  children,
  expandable = false,
  defaultExpanded = false,
}: {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  url?: string
  downloadUrl?: string
  children?: React.ReactNode
  expandable?: boolean
  defaultExpanded?: boolean
}) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)
  const showContent = !expandable || isExpanded

  return (
    <div className="group">
      <div
        className={clsx(
          "flex items-start gap-4",
          expandable && "cursor-pointer"
        )}
        onClick={expandable ? () => setIsExpanded(!isExpanded) : undefined}
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--text-primary)]/[0.04] group-hover:bg-[var(--text-primary)]/[0.07] transition-colors">
          <Icon size={18} className="text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors" />
        </div>
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-semibold text-[var(--text-primary)] tracking-tight">
              {title}
            </h4>
            {url && (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] opacity-40 hover:opacity-100 transition-opacity"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLinkIcon size={12} />
              </Link>
            )}
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] opacity-40 hover:opacity-100 transition-opacity"
                title="Download"
                onClick={(e) => e.stopPropagation()}
              >
                <DownloadIcon size={12} />
              </a>
            )}
            {expandable && (
              <ChevronDownIcon
                size={14}
                className={clsx(
                  "text-[var(--text-muted)] opacity-40 transition-transform duration-200 ml-auto",
                  isExpanded && "rotate-180"
                )}
              />
            )}
          </div>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {children && showContent && (
        <div className={clsx(
          "mt-4 pl-14",
          expandable && "animate-fade-in"
        )}>
          {children}
        </div>
      )}
    </div>
  )
}

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/ADWilkinson/claude-code-tools/main'

// Compact command data for grid display
const commands = [
  { name: '/deslop', desc: 'Remove AI slop from diffs', detail: 'Extra comments, defensive checks, type escapes' },
  { name: '/repo-polish', desc: 'Autonomous cleanup → PR', detail: 'Unused imports, debug statements, type gaps' },
  { name: '/update-claudes', desc: 'Generate CLAUDE.md files', detail: 'Multi-agent codebase documentation' },
  { name: '/minimize-ui', desc: 'Systematic UI reduction', detail: '7-phase: branch → audit → reduce → PR' },
  { name: '/design-audit', desc: 'Accessibility & visual audit', detail: 'WCAG compliance, scoring, auto-fix' },
  { name: '/lighthouse', desc: 'Web performance optimization', detail: 'Iterative fixes with progress tracking' },
  { name: '/generate-precommit-hooks', desc: 'Auto-detect stack, install hooks', detail: 'husky, lint-staged, ruff, etc.' },
  { name: '/xml', desc: 'Convert prompts to XML', detail: 'Structured prompts for Claude' },
]

function CommandCard({ name, desc, detail }: { name: string; desc: string; detail: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(name)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="group relative p-4 rounded-lg bg-[var(--text-primary)]/[0.02] border border-[var(--border-default)]/10 hover:border-[var(--border-default)]/20 transition-all cursor-pointer"
      onClick={copy}
    >
      <div className="flex items-start justify-between gap-2 mb-1.5">
        <code className="text-sm font-semibold text-[var(--text-primary)] font-mono">
          {name}
        </code>
        <span className={clsx(
          "text-[10px] px-1.5 py-0.5 rounded transition-all",
          copied
            ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/10"
            : "text-[var(--text-muted)] opacity-0 group-hover:opacity-50"
        )}>
          {copied ? 'copied!' : 'click to copy'}
        </span>
      </div>
      <p className="text-xs text-[var(--text-muted)] leading-relaxed">
        {desc}
      </p>
      <p className="text-[10px] text-[var(--text-muted)] opacity-50 mt-1">
        {detail}
      </p>
      <a
        href={`${GITHUB_RAW_BASE}/commands/${name.slice(1)}.md`}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 text-[var(--text-muted)] opacity-0 group-hover:opacity-40 hover:!opacity-100 transition-opacity"
        onClick={(e) => e.stopPropagation()}
        title="Download"
      >
        <DownloadIcon size={12} />
      </a>
    </div>
  )
}

// Categorized subagents for better scannability
const subagentCategories = [
  {
    label: 'Core',
    agents: [
      { name: 'frontend-developer', desc: 'React, Vue, Angular, Svelte, state management' },
      { name: 'backend-developer', desc: 'Node, Python, Go, Rust, Ruby - REST/GraphQL APIs' },
      { name: 'database-manager', desc: 'SQL & NoSQL, Prisma, Drizzle, SQLAlchemy, GORM' },
      { name: 'mobile-developer', desc: 'React Native, Flutter, Swift, Kotlin, cross-platform' },
    ]
  },
  {
    label: 'Web3',
    agents: [
      { name: 'blockchain-specialist', desc: 'Solidity, Wagmi, multi-chain, gas optimization' },
      { name: 'indexer-developer', desc: 'Envio, The Graph, GraphQL, event handlers' },
    ]
  },
  {
    label: 'Infrastructure',
    agents: [
      { name: 'devops-engineer', desc: 'CI/CD, Docker, GitHub Actions, deployment' },
      { name: 'firebase-specialist', desc: 'Firestore, Cloud Functions, FCM, security rules' },
      { name: 'extension-developer', desc: 'Chrome Manifest V3, service workers, messaging' },
      { name: 'mcp-developer', desc: 'MCP servers, tool definitions, LLM integrations' },
    ]
  },
  {
    label: 'Quality',
    agents: [
      { name: 'testing-specialist', desc: 'Jest, Playwright, E2E, mocking strategies' },
      { name: 'performance-engineer', desc: 'Profiling, caching, load testing, optimization' },
      { name: 'debugger', desc: 'Root cause analysis, error tracing, systematic debugging' },
      { name: 'refactoring-specialist', desc: 'Code smells, simplification, safe transformations' },
    ]
  },
]

function SubagentCard({ name, desc }: { name: string; desc: string }) {
  return (
    <a
      href={`${GITHUB_RAW_BASE}/agents/${name}.md`}
      download={`${name}.md`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 py-1.5 px-2 -mx-2 rounded-md hover:bg-[var(--text-primary)]/[0.03] transition-colors"
      title={`Download ${name}.md`}
    >
      <span className="text-sm font-medium text-[var(--text-primary)] font-mono tracking-tight group-hover:text-[var(--accent-primary)] transition-colors shrink-0">
        {name}
      </span>
      <span className="text-xs text-[var(--text-muted)] truncate">
        {desc}
      </span>
      <DownloadIcon size={12} className="shrink-0 text-[var(--text-muted)] opacity-30 group-hover:opacity-100 group-hover:text-[var(--accent-primary)] transition-all ml-auto" />
    </a>
  )
}

export default function AI() {
  const activeSection = useActiveSection()
  const totalAgents = useMemo(() =>
    subagentCategories.reduce((acc, cat) => acc + cat.agents.length, 0),
    []
  )

  return (
    <div className="relative w-[100vw] -ml-[calc((100vw-100%)/2)] px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="mb-16 space-y-3">
          <div
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 opacity-0 animate-fade-up"
            style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
          >
            <div className="space-y-3">
              <h1 className="font-display text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
                AI Tools
              </h1>
              <p className="text-sm text-[var(--text-muted)] max-w-md leading-relaxed">
                Tools and automation for AI-assisted development.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <InstallButton />
              <Link
                href="https://github.com/ADWilkinson/claude-code-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--text-primary)]/[0.03] hover:bg-[var(--text-primary)]/[0.06] rounded-lg transition-all"
              >
                <GitHubIcon size={14} />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Layout */}
        <div className="flex gap-20">
          {/* Sidebar */}
          <aside className="hidden lg:block w-44 shrink-0">
            <div className="sticky top-8">
              <SideNav activeSection={activeSection} />
            </div>
          </aside>

          {/* Content */}
          <div
            className="flex-1 min-w-0 space-y-24 opacity-0 animate-fade-up-subtle"
            style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
          >
            {/* Barbossa */}
            <section id="agents" className="scroll-mt-8">
              <div className="p-6 rounded-xl bg-[var(--text-primary)]/[0.02] border border-[var(--border-default)]/10">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-primary)]/10">
                    <ServerIcon size={22} className="text-[var(--accent-primary)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] tracking-tight">
                        Barbossa
                      </h3>
                      <Link
                        href="https://barbossa.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--text-muted)] opacity-50 hover:opacity-100 transition-opacity"
                      >
                        <ExternalLinkIcon size={14} />
                      </Link>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] mt-1">
                      Autonomous 5-agent AI development team
                    </p>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                  Built with Claude Agent SDK. Coordinates through GitHub and Linear to ship code 24/7 without human intervention.
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {['Discovery', 'Planning', 'Implementation', 'Review', 'Merge'].map((phase, i) => (
                    <div key={phase} className="flex items-center gap-1.5">
                      <span className="text-xs font-medium text-[var(--text-primary)] bg-[var(--text-primary)]/[0.04] px-2 py-1 rounded-md">
                        {phase}
                      </span>
                      {i < 4 && <span className="text-[var(--text-muted)] opacity-30">→</span>}
                    </div>
                  ))}
                </div>

                <Link
                  href="https://barbossa.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 hover:bg-[var(--accent-primary)]/15 rounded-lg transition-colors"
                >
                  <span>View documentation</span>
                  <ExternalLinkIcon size={12} />
                </Link>
              </div>
            </section>

            {/* Claude Code Section */}
            <section id="claude-code" className="scroll-mt-8">
              <div className="pb-8 mb-8 border-b border-[var(--border-default)]/10">
                <h2 className="text-xl font-semibold text-[var(--text-primary)] tracking-tight mb-2">
                  Claude Code Tools
                </h2>
                <p className="text-sm text-[var(--text-muted)] mb-6">
                  Requires{' '}
                  <Link
                    href="https://github.com/anthropics/claude-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--text-primary)] opacity-70 hover:opacity-100 underline underline-offset-2 transition-opacity"
                  >
                    Claude Code
                  </Link>
                  {' '}to be installed.
                </p>

                <div className="p-5 rounded-xl bg-[var(--accent-primary)]/5 border border-[var(--accent-primary)]/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--accent-primary)] bg-[var(--accent-primary)]/10 rounded-full">
                      Recommended
                    </span>
                    <p className="text-sm font-medium text-[var(--text-primary)]">Install as Plugin</p>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mb-4">
                    Get all 14 agents, 8 commands, 3 skills, and 2 hooks in one install. Commands namespaced as <code className="font-mono text-[var(--text-primary)]">/cct:*</code>. Also supports Cursor, Windsurf, Cline.
                  </p>
                  <CodeBlock id="plugin-install" label="Plugin install">{PLUGIN_INSTALL_COMMANDS}</CodeBlock>
                  <p className="text-[10px] text-[var(--text-muted)] opacity-60 mt-3">
                    Or use the install script for short command names: <code className="font-mono">./install.sh</code>
                  </p>
                </div>
              </div>
            </section>

            {/* Tool Types */}
            <section id="types" className="scroll-mt-8 -mt-16">
              <SectionHeader title="Understanding Tool Types" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    icon: CodeIcon,
                    title: 'Subagents',
                    desc: 'Invoked automatically via Task tool when domain expertise is needed.',
                    trigger: 'Auto'
                  },
                  {
                    icon: ServerIcon,
                    title: 'Skills',
                    desc: 'Auto-invoked when your request matches trigger patterns.',
                    trigger: 'Pattern'
                  },
                  {
                    icon: TerminalIcon,
                    title: 'Commands',
                    desc: 'Manually triggered with slash notation.',
                    trigger: 'Manual'
                  },
                ].map((type) => (
                  <div
                    key={type.title}
                    className="relative p-5 rounded-xl bg-[var(--text-primary)]/[0.02] border border-[var(--border-default)]/10 hover:border-[var(--border-default)]/20 transition-colors"
                  >
                    <span className="absolute top-3 right-3 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] opacity-40">
                      {type.trigger}
                    </span>
                    <div className="flex items-center gap-2.5 mb-3">
                      <type.icon size={16} className="text-[var(--text-muted)]" />
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{type.title}</p>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Subagents */}
            <section id="subagents" className="scroll-mt-8">
              <SectionHeader title="Subagents" badge={`${totalAgents} agents`}>
                <p className="text-sm text-[var(--text-muted)]">
                  Specialized agents for Claude Code, organized by domain.
                </p>
              </SectionHeader>

              <div className="space-y-5">
                {subagentCategories.map((category) => (
                  <div key={category.label}>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-[var(--text-muted)] opacity-50 mb-2">
                      {category.label}
                    </p>
                    <div className="space-y-0">
                      {category.agents.map((agent) => (
                        <SubagentCard key={agent.name} {...agent} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border-default)]/10">
                <p className="text-xs text-[var(--text-muted)] mb-3">Quick install (plugin includes all agents)</p>
                <CodeBlock id="subagents-install">{PLUGIN_INSTALL_COMMANDS}</CodeBlock>
              </div>
            </section>

            {/* Skills */}
            <section id="skills" className="scroll-mt-8">
              <SectionHeader title="Skills">
                <p className="text-sm text-[var(--text-muted)]">
                  Auto-invoked when your request matches their description.
                </p>
              </SectionHeader>

              <ToolCard
                title="Linear"
                description="Natural language task management. Prefers MCP when available, falls back to CLI."
                icon={ServerIcon}
                url="https://github.com/ADWilkinson/claude-code-tools/tree/main/skills/linear"
                expandable
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] opacity-50">Example prompts</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {['"show my tasks"', '"search rebrand issues"', '"show my backlog"', '"mark ENG-123 done"'].map((example) => (
                        <div key={example} className="bg-[var(--dj-charcoal)] rounded-md px-3 py-2 text-xs font-mono" style={{ color: 'rgba(244, 238, 232, 0.8)' }}>
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] opacity-50">Tool priority</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Uses Linear MCP server if configured, otherwise falls back to CLI script.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <CodeBlock id="linear-install" label="Install">{`git clone https://github.com/ADWilkinson/claude-code-tools.git && \\
  cd claude-code-tools/skills/linear && ./install.sh`}</CodeBlock>
                    <CodeBlock id="linear-config" label="CLI fallback config">{`export LINEAR_API_KEY="lin_api_..."`}</CodeBlock>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] opacity-70">
                    CLI fallback requires API key from Linear → Settings → Security & access → Personal API keys
                  </p>
                </div>
              </ToolCard>

              <div className="mt-8" />

              <ToolCard
                title="verify-changes"
                description="Run tests, builds, and checks with scored output (100-point scale)."
                icon={CodeIcon}
                url="https://github.com/ADWilkinson/claude-code-tools/tree/main/skills/verify-changes"
                expandable
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] opacity-50">When to use</p>
                    <div className="grid grid-cols-2 gap-1.5">
                      {['"verify my changes"', '"run the tests"', '"check if this works"', '"before I commit"'].map((example) => (
                        <div key={example} className="bg-[var(--dj-charcoal)] rounded-md px-3 py-2 text-xs font-mono" style={{ color: 'rgba(244, 238, 232, 0.8)' }}>
                          {example}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] opacity-50">Supported stacks</p>
                    <div className="flex flex-wrap gap-1.5">
                      {['TypeScript/Node', 'Python', 'Rust', 'Go', 'Solidity'].map((stack) => (
                        <span key={stack} className="px-2 py-1 text-xs rounded bg-[var(--text-primary)]/[0.06] text-[var(--text-muted)]">
                          {stack}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <CodeBlock id="verify-install" label="Install">{`mkdir -p ~/.claude/skills/verify-changes && \\
curl -o ~/.claude/skills/verify-changes/SKILL.md \\
  ${GITHUB_RAW_BASE}/skills/verify-changes/SKILL.md`}</CodeBlock>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] opacity-70">
                    Returns scored results with severity tiers (Critical/Serious/Moderate). Ready for commit at ≥70 points with no critical issues.
                  </p>
                </div>
              </ToolCard>

              <div className="mt-8" />

              <ToolCard
                title="clarify-before-implementing"
                description="Ask targeted questions before coding to avoid wrong work."
                icon={CodeIcon}
                url="https://github.com/ADWilkinson/claude-code-tools/tree/main/skills/clarify-before-implementing"
                expandable
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] opacity-50">Triggers on</p>
                    <p className="text-xs text-[var(--text-muted)]">
                      Underspecified implementation requests - when scope, acceptance criteria, or constraints are unclear.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] opacity-50">Example behavior</p>
                    <div className="bg-[var(--dj-charcoal)] rounded-md px-3 py-2 text-xs font-mono" style={{ color: 'rgba(244, 238, 232, 0.8)' }}>
                      {`1) Scope? a) Minimal (default) b) Refactor too\n2) Compatibility? a) Current defaults b) Support older\n\nReply: defaults or 1a 2b`}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <CodeBlock id="clarify-install" label="Install">{`mkdir -p ~/.claude/skills/clarify-before-implementing && \\
curl -o ~/.claude/skills/clarify-before-implementing/SKILL.md \\
  ${GITHUB_RAW_BASE}/skills/clarify-before-implementing/SKILL.md`}</CodeBlock>
                  </div>

                  <p className="text-xs text-[var(--text-muted)] opacity-70">
                    Prevents wrong work by asking 1-5 multiple-choice questions with defaults before implementing.
                  </p>
                </div>
              </ToolCard>

            </section>

            {/* Commands */}
            <section id="commands" className="scroll-mt-8">
              <SectionHeader title="Slash Commands" badge={`${commands.length} commands`}>
                <p className="text-sm text-[var(--text-muted)]">
                  Manually triggered with <code className="text-xs font-semibold text-[var(--text-primary)] bg-[var(--text-primary)]/[0.06] px-1.5 py-0.5 rounded font-mono">/command</code>. Click to copy.
                </p>
              </SectionHeader>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {commands.map((cmd) => (
                  <CommandCard key={cmd.name} {...cmd} />
                ))}
              </div>

              <div className="pt-6 border-t border-[var(--border-default)]/10">
                <p className="text-xs text-[var(--text-muted)] mb-3">Install all commands (plugin includes all)</p>
                <CodeBlock id="commands-install-all">{PLUGIN_INSTALL_COMMANDS}</CodeBlock>
                <p className="text-[10px] text-[var(--text-muted)] opacity-50 mt-3">
                  Plugin commands: <code className="font-mono">/cct:deslop</code>, <code className="font-mono">/cct:lighthouse</code>, <code className="font-mono">/cct:xml</code>, etc.
                </p>
              </div>
            </section>

            {/* Hooks */}
            <section id="hooks" className="scroll-mt-8">
              <SectionHeader title="Hooks">
                <p className="text-sm text-[var(--text-muted)]">
                  Shell scripts that run at specific points in Claude Code's lifecycle.
                </p>
              </SectionHeader>

              <ToolCard
                title="auto-format.sh"
                description="Format code after Claude writes it."
                icon={TerminalIcon}
                url="https://github.com/ADWilkinson/claude-code-tools/tree/main/hooks"
              >
                <div className="space-y-4">
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    PostToolUse hook. Supports Prettier, Ruff, gofmt, rustfmt, forge fmt.
                  </p>
                  <CodeBlock id="hooks-install" label="Install">{`mkdir -p ~/.claude/hooks && \\
curl -o ~/.claude/hooks/auto-format.sh ${GITHUB_RAW_BASE}/hooks/auto-format.sh && \\
chmod +x ~/.claude/hooks/auto-format.sh`}</CodeBlock>
                </div>
              </ToolCard>

              <div className="mt-8" />

              <ToolCard
                title="constraint-persistence.sh"
                description="Detect rules and persist them to CLAUDE.md."
                icon={TerminalIcon}
                url="https://github.com/ADWilkinson/claude-code-tools/tree/main/hooks"
              >
                <div className="space-y-4">
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    UserPromptSubmit hook. Detects phrases like "from now on", "always do", "never do" and prompts Claude to save them.
                  </p>
                  <CodeBlock id="constraint-install" label="Install">{`curl -o ~/.claude/hooks/constraint-persistence.sh \\
  ${GITHUB_RAW_BASE}/hooks/constraint-persistence.sh && \\
chmod +x ~/.claude/hooks/constraint-persistence.sh`}</CodeBlock>
                </div>
              </ToolCard>
            </section>

            {/* Statusline */}
            <section id="statusline" className="scroll-mt-8">
              <ToolCard
                title="Flying Dutchman Statusline"
                description="Git branch, tool icons, cost, diff stats."
                icon={TerminalIcon}
                url="https://github.com/ADWilkinson/claude-code-tools/tree/main/statusline"
              >
                <div className="space-y-3">
                  <CodeBlock id="statusline-install" label="Install">{`curl -o ~/.claude/flying-dutchman-statusline.sh \\
  ${GITHUB_RAW_BASE}/statusline/flying-dutchman-statusline.sh && \\
  chmod +x ~/.claude/flying-dutchman-statusline.sh`}</CodeBlock>
                  <CodeBlock id="statusline-config" label="Configure">{`"statusline": "~/.claude/flying-dutchman-statusline.sh"`}</CodeBlock>
                </div>
              </ToolCard>
            </section>

            {/* Footer */}
            <footer className="pt-8 pb-4 border-t border-[var(--border-default)]/10 space-y-3">
              <p className="text-sm text-[var(--text-muted)]">
                More tools in progress.{' '}
                <Link
                  href="https://x.com/davyjones0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[var(--text-primary)] opacity-70 hover:opacity-100 transition-opacity"
                >
                  Follow for updates
                </Link>
              </p>
              <p className="text-xs text-[var(--text-muted)] opacity-60">
                Using Claude Code?{' '}
                <Link
                  href="https://github.com/ADWilkinson/the-flying-dutchman-theme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--text-primary)] transition-colors"
                >
                  Try the Flying Dutchman theme
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </div>

      <MobileNav activeSection={activeSection} />
    </div>
  )
}
