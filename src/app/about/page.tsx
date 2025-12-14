import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { SpyglassIcon, ArrowRightIcon, MailIcon } from '@/components/Icons'
import { GitHubIcon, XIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import davyjonesImage from '@/images/galleon/davyjones.png'
import { SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description: "I'm Andrew. Software Engineer at ZKP2P, Former VC-backed Founder.",
}

function SocialLink({
  href,
  icon: Icon,
  children,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-primary)]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-4 w-4 fill-current transition-transform duration-200 group-hover:scale-110" />
      <span className="link-underline">{children}</span>
    </Link>
  )
}

export default function About() {
  return (
    <SimpleLayout
      icon={SpyglassIcon}
      title="About"
      intro="Software engineer and builder focused on making finance more accessible."
    >
      <div className="space-y-8">
        {/* Portrait with Davy Jones Easter Egg */}
        <div className="group relative w-32 h-32 overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
          {/* Normal portrait - grayscale, shows color on hover */}
          <Image
            src={portraitImage}
            alt="Andrew Wilkinson"
            className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 dark:group-hover:opacity-0"
            fill
            sizes="128px"
            priority
          />
          {/* Davy Jones - only visible on dark mode hover */}
          <Image
            src={davyjonesImage}
            alt="Davy Jones"
            className="absolute inset-0 h-full w-full object-cover opacity-0 scale-105 transition-all duration-500 ease-out dark:group-hover:opacity-100 dark:group-hover:scale-100"
            fill
            sizes="128px"
          />
          {/* Subtle hint text */}
          <span className="absolute bottom-1.5 right-1.5 text-[8px] font-medium tracking-wide text-[var(--dj-canvas)] opacity-0 transition-all duration-400 dark:group-hover:opacity-70 pointer-events-none select-none">
            ahoy
          </span>
        </div>

        <div className="space-y-4 text-sm leading-relaxed text-[var(--text-muted)]">
          <p>
            I'm currently at ZKP2P, building zkTLS-powered fiat-to-crypto onramps. We use zero-knowledge proofs to let people buy crypto with Venmo, PayPal, and 20+ payment apps without centralized exchanges.
          </p>

          <p>
            Previously, I led a 10-person engineering team at Brava Labs, shipping an MVP that secured £2M in seed funding. Before that, I founded Galleon DAO, raised $1M+ from 1kx, grew a 6,000+ member community, and managed $20M+ TVL at peak.
          </p>

          <p>
            I've spent my career turning napkin sketches into production systems. Started at Sky and Worldpay building large-scale infrastructure, then moved into blockchain at R3 and Set Labs to focus on DeFi products people can actually use.
          </p>

          <p>
            Outside work, I run a home server with AI systems I built—a Claude-powered assistant that handles PRs and builds for my team, and an autonomous layer that ships features on side projects without prompting. I also build supporting tools for projects I work on, like{' '}
            <Link
              href="https://peerlytics.xyz"
              className="text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--accent-primary)] link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              analytics dashboards
            </Link>{' '}
            and{' '}
            <Link
              href="https://usdctofiat.xyz"
              className="text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--accent-primary)] link-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              peer-to-peer off-ramps
            </Link>
            . See my{' '}
            <Link
              href="/projects"
              className="group/link inline-flex items-center gap-0.5 text-[var(--text-primary)] transition-colors duration-200 hover:text-[var(--accent-primary)]"
            >
              <span className="link-underline">projects</span>
              <ArrowRightIcon size={10} className="opacity-40 transition-all duration-200 group-hover/link:opacity-70 group-hover/link:translate-x-0.5" />
            </Link>{' '}
            for more.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <SocialLink href={SOCIAL_LINKS.github} icon={GitHubIcon}>
            GitHub
          </SocialLink>
          <SocialLink href={SOCIAL_LINKS.twitter} icon={XIcon}>
            Twitter
          </SocialLink>
          <SocialLink href={SOCIAL_LINKS.linkedin} icon={LinkedInIcon}>
            LinkedIn
          </SocialLink>
          <Link
            href="mailto:gm@andrewwilkinson.io"
            className="group flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-primary)]"
          >
            <MailIcon size={16} className="transition-transform duration-200 group-hover:scale-110" />
            <span className="link-underline">Email</span>
          </Link>
        </div>
      </div>
    </SimpleLayout>
  )
}
