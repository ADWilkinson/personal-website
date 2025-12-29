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
} from '@/components/Icons'

const sections = [
  { id: 'agents', label: 'Agents' },
  { id: 'skills', label: 'Skills' },
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

function SideNav({ activeSection }: { activeSection: string }) {
  return (
    <nav className="space-y-1">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={clsx(
            'block py-1.5 pl-3 text-sm border-l transition-colors duration-200',
            activeSection === id
              ? 'border-[var(--text-primary)] text-[var(--text-primary)]'
              : 'border-[var(--border-default)]/30 text-[var(--text-muted)] hover:text-[var(--text-primary)]'
          )}
        >
          {label}
        </a>
      ))}
    </nav>
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

export default function AI() {
  const activeSection = useActiveSection()

  return (
    <div className="relative w-[100vw] -ml-[calc((100vw-100%)/2)] px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
            AI Tools
          </h1>
          <p className="mt-2 text-sm text-[var(--text-muted)] max-w-lg leading-relaxed">
            Tools and automation I build for AI-assisted development.
          </p>
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

            {/* Skills */}
            <section id="skills" className="scroll-mt-8 space-y-12">
                <ToolSection
                  title="/repo-polish"
                  description="Fire-and-forget repository cleanup. Creates a branch, fixes issues, opens a PR."
                  icon={TerminalIcon}
                >
                  <div className="space-y-4">
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      Scans for unused imports, debug statements, type gaps, and outdated docs.
                      Commits atomically and verifies tests pass.
                    </p>
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <p className="text-xs text-[var(--text-muted)]">Install</p>
                        <CodeBlock id="repo-polish-install">{`mkdir -p ~/.claude/commands && curl -o ~/.claude/commands/repo-polish.md \\
  https://raw.githubusercontent.com/ADWilkinson/claude-skills/main/repo-polish.md`}</CodeBlock>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs text-[var(--text-muted)]">Run</p>
                        <CodeBlock id="repo-polish-run">{`/repo-polish`}</CodeBlock>
                      </div>
                    </div>
                  </div>
                </ToolSection>

                <ToolSection
                  title="/update-claudes"
                  description="Generates CLAUDE.md files throughout your project for AI context."
                  icon={CodeIcon}
                >
                  <div className="space-y-4">
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      Analyzes structure, spawns specialized agents, creates documentation
                      at root and component levels.
                    </p>
                    <div className="space-y-3">
                      <div className="space-y-1.5">
                        <p className="text-xs text-[var(--text-muted)]">Install</p>
                        <CodeBlock id="update-claudes-install">{`mkdir -p ~/.claude/commands && curl -o ~/.claude/commands/update-claudes.md \\
  https://raw.githubusercontent.com/ADWilkinson/claude-skills/main/update-claudes.md`}</CodeBlock>
                      </div>
                      <div className="space-y-1.5">
                        <p className="text-xs text-[var(--text-muted)]">Run</p>
                        <CodeBlock id="update-claudes-run">{`/update-claudes`}</CodeBlock>
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
    </div>
  )
}
