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
      className="group flex gap-3 py-3.5 first:pt-0 last:pb-0 -mx-2 px-2 rounded-md transition-colors duration-150 hover:bg-[var(--text-primary)]/[0.02] opacity-0 animate-fade-up-subtle"
      style={{ animationDelay: `${150 + index * 60}ms`, animationFillMode: 'forwards' }}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--border-default)]/15 bg-white shadow-xs transition-all duration-250 group-hover:scale-[1.03] group-hover:shadow-sm group-hover:border-[var(--border-default)]/25">
        <Image
          src={role.logo}
          alt={role.company}
          className="h-7 w-7 rounded-sm object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
          width={28}
          height={28}
          sizes="28px"
        />
      </div>
      <div className="flex flex-1 flex-col min-w-0 justify-center">
        <div className="flex items-baseline justify-between gap-2">
          <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-150 group-hover:text-[var(--accent-primary)]">
            {role.company}
          </span>
          <span className="text-xs text-[var(--text-primary)]/45 tabular-nums shrink-0 tracking-wide">
            {role.start}–{role.end}
          </span>
        </div>
        <span className="text-sm text-[var(--text-muted)]/70 leading-snug">{role.title}</span>
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
      className="group flex items-center gap-1.5 text-sm text-[var(--text-muted)]/80 transition-all duration-150 hover:text-[var(--accent-primary)] focus-visible:text-[var(--accent-primary)] opacity-0 animate-fade-up-subtle"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-4 w-4 fill-current transition-transform duration-200 ease-out group-hover:scale-105" />
      <span className="link-underline">{children}</span>
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
      className="flex items-center gap-2.5 text-sm font-medium tracking-wide text-[var(--text-primary)] opacity-0 animate-fade-up-subtle"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <Icon size={15} className="text-[var(--text-muted)]/50" />
      <span className="uppercase text-xs">{children}</span>
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
      className="group inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)]/70 transition-all duration-150 hover:text-[var(--accent-primary)] focus-visible:text-[var(--accent-primary)] pt-3 -ml-0.5 rounded-sm"
    >
      <span className="tracking-wide">{expanded ? showLessText : showMoreText}</span>
      <ArrowRightIcon
        size={10}
        className={`transition-transform duration-200 ease-out ${expanded ? 'rotate-[-90deg]' : 'rotate-90'} group-hover:translate-y-0.5`}
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
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1
          className="font-display text-2xl font-semibold tracking-tight text-[var(--text-primary)] opacity-0 animate-fade-up"
          style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
        >
          Andrew Wilkinson
        </h1>
        <p
          className="text-sm leading-[1.7] text-[var(--text-muted)]/85 opacity-0 animate-fade-up-subtle"
          style={{ animationDelay: '60ms', animationFillMode: 'forwards' }}
        >
          Software engineer building zkTLS-powered fiat-to-crypto onramps at ZKP2P.
          Previously shipped MVPs that raised $3M+, managed $20M+ in value, and guided a 6,000+ member community.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
          <SocialLink href={SOCIAL_LINKS.github} icon={GitHubIcon} delay={120}>
            GitHub
          </SocialLink>
          <SocialLink href={SOCIAL_LINKS.twitter} icon={XIcon} delay={160}>
            Twitter
          </SocialLink>
          <SocialLink href={SOCIAL_LINKS.linkedin} icon={LinkedInIcon} delay={200}>
            LinkedIn
          </SocialLink>
          <Link
            href="mailto:gm@andrewwilkinson.io"
            className="group flex items-center gap-1.5 text-sm text-[var(--text-muted)]/80 transition-all duration-150 hover:text-[var(--accent-primary)] focus-visible:text-[var(--accent-primary)] opacity-0 animate-fade-up-subtle"
            style={{ animationDelay: '240ms', animationFillMode: 'forwards' }}
          >
            <MailIcon size={16} className="transition-transform duration-200 ease-out group-hover:scale-105" />
            <span className="link-underline">Email</span>
          </Link>
        </div>
      </section>

      {/* Experience Section */}
      <section className="space-y-5">
        <SectionHeader icon={AnchorIcon} delay={100}>
          Experience
        </SectionHeader>
        <ul className="space-y-0.5">
          {resume.slice(0, 4).map((role, i) => (
            <Role key={`${role.company}-${role.title}`} role={role} index={i} />
          ))}
        </ul>
        {/* Expandable section with animation */}
        <div
          className={`grid transition-all duration-300 ease-out ${
            showAllExperience ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <ul className="space-y-0.5 overflow-hidden">
            {resume.slice(4).map((role, i) => (
              <Role key={`${role.company}-${role.title}`} role={role} index={i + 4} />
            ))}
          </ul>
        </div>
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
