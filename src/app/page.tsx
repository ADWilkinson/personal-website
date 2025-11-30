'use client'

import { useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import {
  GitHubIcon,
  XIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import {
  AnchorIcon,
  ArrowRightIcon,
  MailIcon,
} from '@/components/Icons'
import { SOCIAL_LINKS, WORK_EXPERIENCE } from '@/lib/constants'

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string
  end: string
}

function Role({ role, index }: { role: Role; index: number }) {
  return (
    <li
      className="group flex gap-3 py-3 first:pt-0 last:pb-0 opacity-0 animate-fade-up-subtle"
      style={{ animationDelay: `${100 + index * 50}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-default)]/20 bg-[var(--surface-muted)] transition-transform duration-300 group-hover:scale-105">
        <Image
          src={role.logo}
          alt={role.company}
          className="h-6 w-6 object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
          width={24}
          height={24}
          sizes="24px"
        />
      </div>
      <div className="flex flex-1 flex-col min-w-0">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)]">
            {role.company}
          </span>
          <span className="text-xs text-[var(--text-muted)] opacity-40 tabular-nums shrink-0">
            {role.start}–{role.end}
          </span>
        </div>
        <span className="text-sm text-[var(--text-muted)]">{role.title}</span>
      </div>
    </li>
  )
}

function SocialLink({
  href,
  icon: Icon,
  children,
  delay,
}: {
  href: string
  icon: React.ComponentType<{ className?: string; size?: number }>
  children: React.ReactNode
  delay: number
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-primary)] opacity-0 animate-fade-up-subtle"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-4 w-4 fill-current transition-transform duration-200 group-hover:scale-110" />
      <span>{children}</span>
    </Link>
  )
}

function SectionHeader({
  icon: Icon,
  children,
  delay,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>
  children: React.ReactNode
  delay: number
}) {
  return (
    <h2
      className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] opacity-0 animate-fade-up-subtle"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <Icon size={16} className="text-[var(--text-muted)] opacity-50" />
      {children}
    </h2>
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
      className="group inline-flex items-center gap-1 text-xs text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-primary)] pt-2"
    >
      <span>{expanded ? showLessText : showMoreText}</span>
      <ArrowRightIcon
        size={10}
        className={`transition-transform duration-200 ${expanded ? 'rotate-[-90deg]' : 'rotate-90'}`}
      />
    </button>
  )
}

export default function Home() {
  const [showAllExperience, setShowAllExperience] = useState(false)

  const resume: Array<Role> = WORK_EXPERIENCE.map(exp => ({
    ...exp,
    logo: exp.logo,
  }))

  const visibleExperience = showAllExperience ? resume : resume.slice(0, 4)

  return (
    <div className="space-y-14">
      {/* Hero Section */}
      <section className="space-y-5">
        <h1
          className="font-display text-2xl font-semibold text-[var(--text-primary)] opacity-0 animate-fade-up"
          style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
        >
          Andrew Wilkinson
        </h1>
        <p
          className="text-sm leading-relaxed text-[var(--text-muted)] opacity-0 animate-fade-up-subtle"
          style={{ animationDelay: '50ms', animationFillMode: 'forwards' }}
        >
          Software engineer building zkTLS-powered fiat-to-crypto onramps at ZKP2P.
          Previously shipped MVPs that raised $3M+, managed $20M+ in value, and guided a 6,000+ member community.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-4 pt-1">
          <SocialLink href={SOCIAL_LINKS.github} icon={GitHubIcon} delay={100}>
            GitHub
          </SocialLink>
          <SocialLink href={SOCIAL_LINKS.twitter} icon={XIcon} delay={150}>
            Twitter
          </SocialLink>
          <SocialLink href={SOCIAL_LINKS.linkedin} icon={LinkedInIcon} delay={200}>
            LinkedIn
          </SocialLink>
          <Link
            href="mailto:gm@andrewwilkinson.io"
            className="group flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-primary)] opacity-0 animate-fade-up-subtle"
            style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}
          >
            <MailIcon size={16} className="transition-transform duration-200 group-hover:scale-110" />
            <span>Email</span>
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-4">
        <SectionHeader icon={AnchorIcon} delay={80}>
          Experience
        </SectionHeader>
        <ul className="space-y-0">
          {visibleExperience.map((role, i) => (
            <Role key={`${role.company}-${role.title}`} role={role} index={i} />
          ))}
        </ul>
        {resume.length > 4 && (
          <ExpandButton
            expanded={showAllExperience}
            onClick={() => setShowAllExperience(!showAllExperience)}
            showMoreText={`Show ${resume.length - 4} more`}
            showLessText="Show less"
          />
        )}
      </section>
    </div>
  )
}
