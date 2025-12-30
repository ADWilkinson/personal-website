'use client'

import { useEffect, useState } from 'react'
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
  StarIcon,
  MenuIcon,
  XIcon,
} from '@/components/Icons'

const sections = [
  { id: 'agents', label: 'Barbossa System' },
  { id: 'claude-code', label: 'Claude Code', isHeader: true },
  { id: 'types', label: 'Tool Types' },
  { id: 'subagents', label: 'Subagents' },
  { id: 'skills', label: 'Skills' },
  { id: 'commands', label: 'Commands' },
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
          <div key={id} className="pt-4 pb-1">
            <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)] opacity-60">
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
                ? 'border-[var(--text-primary)]/30 text-[var(--text-primary)] font-medium'
                : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--border-default)]/50'
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
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 p-3 bg-[var(--bg-primary)] border border-[var(--border-default)]/20 rounded-full shadow-lg"
        aria-label="Open navigation"
      >
        <MenuIcon size={20} className="text-[var(--text-primary)]" />
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-[var(--bg-primary)] border-t border-[var(--border-default)]/20 rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-[var(--text-primary)]">Navigate</p>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                aria-label="Close navigation"
              >
                <XIcon size={20} />
              </button>
            </div>
            <SideNav activeSection={activeSection} onNavigate={() => setIsOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}

const INSTALL_COMMAND = `git clone https://github.com/ADWilkinson/claude-code-tools.git && cd claude-code-tools && ./install.sh`

function InstallButton() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={copy}
      className={clsx(
        'inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-lg transition-all',
        copied
          ? 'bg-green-500/10 text-green-600'
          : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--text-primary)]/[0.03] hover:bg-[var(--text-primary)]/[0.06]'
      )}
    >
      {copied ? (
        <>
          <CheckIcon size={12} />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <CopyIcon size={12} />
          <span>Copy install command</span>
        </>
      )}
    </button>
  )
}

function CodeBlock({ children, id }: { children: string; id: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative">
      <pre className="overflow-x-auto rounded-lg bg-zinc-900 p-4 text-xs leading-relaxed">
        <code className="text-zinc-400">{children}</code>
      </pre>
      <button
        onClick={copy}
        className={clsx(
          'absolute top-2.5 right-2.5 p-1.5 rounded transition-opacity duration-200',
          'opacity-0 group-hover:opacity-100',
          copied ? 'text-green-400' : 'text-zinc-500 hover:text-zinc-300'
        )}
        aria-label={copied ? 'Copied' : 'Copy'}
      >
        {copied ? <CheckIcon size={14} /> : <CopyIcon size={14} />}
      </button>
    </div>
  )
}

function ToolSection({
  title,
  description,
  icon: Icon,
  url,
  children,
}: {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  url?: string
  children?: React.ReactNode
}) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--text-primary)]/[0.03]">
          <Icon size={18} className="text-[var(--text-muted)]" />
        </div>
        <div className="space-y-1 pt-0.5">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium text-[var(--text-primary)]">
              {title}
            </h3>
            {url && (
              <Link
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] opacity-50 hover:opacity-100 transition-opacity"
              >
                <ExternalLinkIcon size={12} />
              </Link>
            )}
          </div>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      {children && <div className="pl-12">{children}</div>}
    </div>
  )
}

const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/ADWilkinson/claude-code-tools/main'

const subagents = [
  { name: 'backend-developer', desc: 'Express/Node.js, REST APIs, authentication, webhooks' },
  { name: 'blockchain-specialist', desc: 'Solidity, Wagmi, multi-chain, gas optimization' },
  { name: 'database-manager', desc: 'PostgreSQL, Prisma ORM, query optimization' },
  { name: 'devops-engineer', desc: 'CI/CD, Docker, GitHub Actions, cloud deployment' },
  { name: 'extension-developer', desc: 'Chrome Manifest V3, service workers, messaging' },
  { name: 'firebase-specialist', desc: 'Firestore, Cloud Functions, FCM, security rules' },
  { name: 'frontend-developer', desc: 'React, Next.js, TanStack Query, Tailwind' },
  { name: 'indexer-developer', desc: 'Envio, The Graph, GraphQL, event handlers' },
  { name: 'mobile-developer', desc: 'React Native, Expo, biometrics, push notifications' },
  { name: 'performance-engineer', desc: 'Profiling, caching, load testing, optimization' },
  { name: 'testing-specialist', desc: 'Jest, Playwright, E2E, mocking strategies' },
  { name: 'zk-specialist', desc: 'ZK circuits, Circom/Noir, trusted setup' },
]

export default function AI() {
  const activeSection = useActiveSection()

  return (
    <div className="relative w-[100vw] -ml-[calc((100vw-100%)/2)] px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
                AI Tools
              </h1>
              <p className="mt-2 text-sm text-[var(--text-muted)] max-w-lg leading-relaxed">
                Tools and automation I build for AI-assisted development.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <InstallButton />
              <Link
                href="https://github.com/ADWilkinson/claude-code-tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text-primary)] bg-[var(--text-primary)]/[0.03] hover:bg-[var(--text-primary)]/[0.06] rounded-lg transition-all"
              >
                <GitHubIcon size={14} />
                <span>GitHub</span>
              </Link>
            </div>
          </div>

          </div>

        {/* Layout */}
        <div className="flex gap-16">
          {/* Sidebar */}
          <aside className="hidden lg:block w-40 shrink-0">
            <div className="sticky top-8">
              <SideNav activeSection={activeSection} />
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-20">
            {/* Agents */}
            <section id="agents" className="scroll-mt-8">
              <ToolSection
                title="Barbossa"
                description="5-agent system that discovers issues, plans features, writes code, reviews PRs, and merges—all automatically."
                icon={ServerIcon}
                url="https://barbossa.dev"
              >
                <div className="space-y-4">
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Built with Claude Agent SDK. Agents coordinate through GitHub and Linear,
                    each handling a phase: discovery, planning, implementation, review, merge.
                  </p>
                  <Link
                    href="https://barbossa.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    <span className="link-underline">Documentation</span>
                    <ExternalLinkIcon size={12} />
                  </Link>
                </div>
              </ToolSection>
            </section>

            {/* Claude Code Section */}
            <section id="claude-code" className="scroll-mt-8 pt-8 border-t border-[var(--border-default)]/20">
              <div className="space-y-2 mb-8">
                <h2 className="text-lg font-medium text-[var(--text-primary)]">Claude Code Tools</h2>
                <p className="text-sm text-[var(--text-muted)]">
                  Requires{' '}
                  <Link
                    href="https://github.com/anthropics/claude-code"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors"
                  >
                    Claude Code
                  </Link>
                  {' '}to be installed.
                </p>
              </div>
            </section>

            {/* Tool Types Explainer */}
            <section id="types" className="scroll-mt-8">
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-[var(--text-primary)]">
                  Understanding Tool Types
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-[var(--text-primary)]/[0.02] border border-[var(--border-default)]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <CodeIcon size={14} className="text-[var(--text-muted)]" />
                      <p className="text-xs font-medium text-[var(--text-primary)]">Subagents</p>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      Invoked automatically by Claude via the Task tool when domain expertise is needed.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--text-primary)]/[0.02] border border-[var(--border-default)]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <ServerIcon size={14} className="text-[var(--text-muted)]" />
                      <p className="text-xs font-medium text-[var(--text-primary)]">Skills</p>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      Auto-invoked when your request matches trigger words. No slash command needed.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-[var(--text-primary)]/[0.02] border border-[var(--border-default)]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <TerminalIcon size={14} className="text-[var(--text-muted)]" />
                      <p className="text-xs font-medium text-[var(--text-primary)]">Commands</p>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed">
                      Manually triggered with slash notation like <code className="font-medium text-[var(--text-primary)]">/repo-polish</code>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Subagents */}
            <section id="subagents" className="scroll-mt-8 pt-8">
              <ToolSection
                title="Claude Code Subagents"
                description="12 specialized subagents for Claude Code. Each brings deep expertise in a specific domain."
                icon={CodeIcon}
                url="https://github.com/ADWilkinson/claude-code-tools/tree/main/agents"
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                    {subagents.map((agent) => (
                      <div key={agent.name} className="py-1.5 flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-sm text-[var(--text-primary)] font-mono">
                            {agent.name}
                          </p>
                          <p className="text-xs text-[var(--text-muted)]">
                            {agent.desc}
                          </p>
                        </div>
                        <a
                          href={`${GITHUB_RAW_BASE}/agents/${agent.name}.md`}
                          download={`${agent.name}.md`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 p-1 text-[var(--text-muted)] opacity-40 hover:opacity-100 hover:text-[var(--text-primary)] transition-all"
                          title={`Download ${agent.name}.md`}
                        >
                          <DownloadIcon size={14} />
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 pt-2">
                    <div className="space-y-1.5">
                      <p className="text-xs text-[var(--text-muted)]">Quick Install (all tools)</p>
                      <CodeBlock id="subagents-install">{`git clone https://github.com/ADWilkinson/claude-code-tools.git && \\
  cd claude-code-tools && ./install.sh`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </ToolSection>
            </section>

            {/* Skills */}
            <section id="skills" className="scroll-mt-8 pt-8">
              <ToolSection
                title="Linear"
                description="Auto-invoked skill for Linear task management. Just mention tasks or issues in natural language."
                icon={ServerIcon}
                url="https://github.com/ADWilkinson/claude-code-tools/tree/main/skills/linear"
              >
                <div className="space-y-6">
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Skills are automatically invoked by Claude when your request matches their description.
                    No slash command needed—just talk naturally.
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs font-medium text-[var(--text-primary)]">Usage Examples</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="bg-zinc-900 rounded px-3 py-2 text-zinc-400">"show my tasks"</div>
                      <div className="bg-zinc-900 rounded px-3 py-2 text-zinc-400">"search rebrand issues"</div>
                      <div className="bg-zinc-900 rounded px-3 py-2 text-zinc-400">"show my backlog"</div>
                      <div className="bg-zinc-900 rounded px-3 py-2 text-zinc-400">"mark ENG-123 done"</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <p className="text-xs text-[var(--text-muted)]">Install</p>
                      <CodeBlock id="linear-install">{`git clone https://github.com/ADWilkinson/claude-code-tools.git && \\
  cd claude-code-tools/skills/linear && ./install.sh`}</CodeBlock>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-xs text-[var(--text-muted)]">Configure (add to ~/.zshrc)</p>
                      <CodeBlock id="linear-config">{`export LINEAR_API_KEY="lin_api_..."`}</CodeBlock>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--text-muted)]">
                    Get your API key from Linear → Settings → Security & access → Personal API keys
                  </p>
                </div>
              </ToolSection>
            </section>

            {/* Commands */}
            <section id="commands" className="scroll-mt-8 space-y-12 pt-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--text-primary)]/[0.03]">
                      <TerminalIcon size={18} className="text-[var(--text-muted)]" />
                    </div>
                    <div className="space-y-1 pt-0.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-medium text-[var(--text-primary)]">
                          /repo-polish
                        </h3>
                        <a
                          href={`${GITHUB_RAW_BASE}/commands/repo-polish.md`}
                          download="repo-polish.md"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 p-1 text-[var(--text-muted)] opacity-40 hover:opacity-100 hover:text-[var(--text-primary)] transition-all"
                          title="Download repo-polish.md"
                        >
                          <DownloadIcon size={14} />
                        </a>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        Fire-and-forget repository cleanup. Creates a branch, fixes issues, opens a PR.
                      </p>
                    </div>
                  </div>
                  <div className="pl-12 space-y-4">
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      Scans for unused imports, debug statements, type gaps, and outdated docs.
                      Commits atomically and verifies tests pass.
                    </p>
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <p className="text-xs text-[var(--text-muted)]">Install</p>
                        <CodeBlock id="repo-polish-install">{`mkdir -p ~/.claude/commands && curl -o ~/.claude/commands/repo-polish.md \\
  ${GITHUB_RAW_BASE}/commands/repo-polish.md`}</CodeBlock>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs text-[var(--text-muted)]">Run</p>
                        <CodeBlock id="repo-polish-run">{`/repo-polish`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--text-primary)]/[0.03]">
                      <CodeIcon size={18} className="text-[var(--text-muted)]" />
                    </div>
                    <div className="space-y-1 pt-0.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-medium text-[var(--text-primary)]">
                          /update-claudes
                        </h3>
                        <a
                          href={`${GITHUB_RAW_BASE}/commands/update-claudes.md`}
                          download="update-claudes.md"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 p-1 text-[var(--text-muted)] opacity-40 hover:opacity-100 hover:text-[var(--text-primary)] transition-all"
                          title="Download update-claudes.md"
                        >
                          <DownloadIcon size={14} />
                        </a>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        Generates CLAUDE.md files throughout your project for AI context.
                      </p>
                    </div>
                  </div>
                  <div className="pl-12 space-y-4">
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      Analyzes structure, spawns specialized agents, creates documentation
                      at root and component levels.
                    </p>
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <p className="text-xs text-[var(--text-muted)]">Install</p>
                        <CodeBlock id="update-claudes-install">{`mkdir -p ~/.claude/commands && curl -o ~/.claude/commands/update-claudes.md \\
  ${GITHUB_RAW_BASE}/commands/update-claudes.md`}</CodeBlock>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs text-[var(--text-muted)]">Run</p>
                        <CodeBlock id="update-claudes-run">{`/update-claudes`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--text-primary)]/[0.03]">
                      <CodeIcon size={18} className="text-[var(--text-muted)]" />
                    </div>
                    <div className="space-y-1 pt-0.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-medium text-[var(--text-primary)]">
                          /minimize-ui
                        </h3>
                        <a
                          href={`${GITHUB_RAW_BASE}/commands/minimize-ui.md`}
                          download="minimize-ui.md"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 p-1 text-[var(--text-muted)] opacity-40 hover:opacity-100 hover:text-[var(--text-primary)] transition-all"
                          title="Download minimize-ui.md"
                        >
                          <DownloadIcon size={14} />
                        </a>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        Systematic UI minimalization through ruthless reduction. Remove before polish.
                      </p>
                    </div>
                  </div>
                  <div className="pl-12 space-y-4">
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      7-phase workflow that audits your UI, identifies bloat, and removes everything
                      that doesn't serve the user's core journey. Creates branch, captures before/after
                      screenshots, and opens PR with visual comparison.
                    </p>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-[var(--text-primary)]">Workflow</p>
                      <ul className="text-xs text-[var(--text-muted)] space-y-1 list-disc list-inside">
                        <li>Creates dedicated branch (minimize-ui/timestamp)</li>
                        <li>Runs dev server and captures before screenshots</li>
                        <li>Audits UI against 6 reduction categories</li>
                        <li>Executes changes grouped by impact (HIGH → MEDIUM → LOW)</li>
                        <li>Applies design principles (spacing, hierarchy, consistency)</li>
                        <li>Captures after screenshots and generates side-by-side HTML</li>
                        <li>Opens PR with metrics (element count, color reduction, etc.)</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-[var(--text-primary)]">Design Principles Applied</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="text-[var(--text-muted)]">
                          <span className="font-medium text-[var(--text-primary)]">Proximity:</span> Inner spacing &lt; outer
                        </div>
                        <div className="text-[var(--text-muted)]">
                          <span className="font-medium text-[var(--text-primary)]">Fitts's Law:</span> Bigger targets easier to hit
                        </div>
                        <div className="text-[var(--text-muted)]">
                          <span className="font-medium text-[var(--text-primary)]">Emphasis:</span> One focal point per screen
                        </div>
                        <div className="text-[var(--text-muted)]">
                          <span className="font-medium text-[var(--text-primary)]">White Space:</span> Premium feel through spacing
                        </div>
                        <div className="text-[var(--text-muted)]">
                          <span className="font-medium text-[var(--text-primary)]">Consistency:</span> System of rules across UI
                        </div>
                        <div className="text-[var(--text-muted)]">
                          <span className="font-medium text-[var(--text-primary)]">Modularity:</span> Grid-aligned rectangles
                        </div>
                        <div className="text-[var(--text-muted)]">
                          <span className="font-medium text-[var(--text-primary)]">Anchor Objects:</span> Corners/center placement
                        </div>
                        <div className="text-[var(--text-muted)]">
                          <span className="font-medium text-[var(--text-primary)]">Z/F Patterns:</span> Natural eye scanning flow
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <p className="text-xs text-[var(--text-muted)]">Install</p>
                        <CodeBlock id="minimize-ui-install">{`mkdir -p ~/.claude/commands && curl -o ~/.claude/commands/minimize-ui.md \\
  ${GITHUB_RAW_BASE}/commands/minimize-ui.md`}</CodeBlock>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs text-[var(--text-muted)]">Run</p>
                        <CodeBlock id="minimize-ui-run">{`/minimize-ui`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </div>
            </section>

            {/* Statusline */}
            <section id="statusline" className="scroll-mt-8 pt-8">
              <ToolSection
                title="Flying Dutchman Statusline"
                description="Custom Claude Code statusline showing git branch, activity icons, cost tracking, and lines changed."
                icon={TerminalIcon}
                url="https://github.com/ADWilkinson/claude-code-tools/tree/main/statusline"
              >
                <div className="space-y-4">
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    Displays current folder, git branch with dirty indicator, active tool icons,
                    cumulative cost, and code diff stats. Pairs with the Flying Dutchman theme.
                  </p>
                  <div className="space-y-3">
                    <div className="space-y-1.5">
                      <p className="text-xs text-[var(--text-muted)]">Install</p>
                      <CodeBlock id="statusline-install">{`curl -o ~/.claude/flying-dutchman-statusline.sh \\
  https://raw.githubusercontent.com/ADWilkinson/claude-code-tools/main/statusline/flying-dutchman-statusline.sh && \\
  chmod +x ~/.claude/flying-dutchman-statusline.sh`}</CodeBlock>
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-xs text-[var(--text-muted)]">Configure (add to ~/.claude/settings.json)</p>
                      <CodeBlock id="statusline-config">{`"statusline": "~/.claude/flying-dutchman-statusline.sh"`}</CodeBlock>
                    </div>
                  </div>
                </div>
              </ToolSection>
            </section>

            {/* Footer */}
            <div className="pt-6 border-t border-[var(--border-default)]/10 space-y-4">
              <p className="text-sm text-[var(--text-muted)]">
                More tools in progress.{' '}
                <Link
                  href="https://x.com/davyjones0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-[var(--text-primary)] transition-colors"
                >
                  Follow for updates
                </Link>
                .
              </p>
              <p className="text-xs text-[var(--text-muted)] opacity-70">
                Using Claude Code?{' '}
                <Link
                  href="https://github.com/ADWilkinson/the-flying-dutchman-theme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline hover:text-[var(--text-primary)] transition-colors"
                >
                  Try the Flying Dutchman theme
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav activeSection={activeSection} />
    </div>
  )
}
