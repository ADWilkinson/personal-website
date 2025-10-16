import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { SimpleLayout } from '@/components/SimpleLayout'
import { CompanyLogo } from '@/components/CompanyLogo'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import davyjonesImage from '@/images/galleon/davyjones.png'
import { COMPANY_LOGOS, SOCIAL_LINKS } from '@/lib/constants'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex items-center text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors duration-90 hover:text-[var(--accent-primary)]"
      >
        <Icon className="h-4 w-4 flex-none fill-[var(--text-muted)] transition-colors duration-90 group-hover:fill-[var(--accent-primary)]" />
        <span className="ml-3">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Andrew. Senior Software Engineer at ZKP2P, Former VC-backed Founder.",
}

export default function About() {
  return (
    <SimpleLayout
      icon={(
        <div className="relative h-7 w-7">
          <Image
            src="/brand/icons/About-Icon.png"
            alt="About icon"
            width={28}
            height={28}
            className="h-full w-full dark:hidden"
            priority
          />
          <Image
            src="/brand/icons/About-Icon-Dark.png"
            alt=""
            width={28}
            height={28}
            className="hidden h-full w-full dark:block"
            priority
          />
        </div>
      )}
      title="I'm Andrew, a builder at heart."
      intro="Democratizing finance through accessible DeFi solutions.">
      <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-16">
        <div className="lg:order-2">
          <div className="group relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-lg border border-[var(--border-muted)] bg-[var(--surface-muted)] lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Professional portrait of Andrew Wilkinson"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="h-full w-full object-cover grayscale contrast-110 transition-opacity duration-180 dark:group-hover:opacity-0"
              quality={85}
              priority
            />
            <Image
              src={davyjonesImage}
              alt="Artistic representation of Davy Jones character"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-110 opacity-0 transition-opacity duration-180 dark:group-hover:opacity-100"
              quality={85}
            />
          </div>
        </div>
        <div className="lg:order-1">
          <div className="space-y-6 text-sm text-[var(--text-muted)]">
            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)] mt-6 mb-2">What I'm Building Now</h3>
            <p>
              At <CompanyLogo name="ZKP2P" logo={COMPANY_LOGOS.zkp2p} />, I'm making crypto accessible to everyone. We use zero-knowledge proofs to let people buy crypto with Venmo, PayPal, and 20+ other payment apps—no centralized exchange needed.
            </p>

            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)] mt-6 mb-2">Leadership Experience</h3>
            <p>
              As Head of Brava at <CompanyLogo name="Brava Labs" logo={COMPANY_LOGOS.brava} />, I led a 10-person engineering team to ship an MVP that secured £2M in seed funding from European investors.
            </p>

            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)] mt-6 mb-2">Founder Experience</h3>
            <p>
              Founded <CompanyLogo name="Galleon DAO" logo={COMPANY_LOGOS.galleon} /> and raised $1M+ from 1kx and other DeFi investors. Built the protocol from scratch, grew a 6,000+ member community, and managed $20M+ in total value locked at peak.
            </p>

            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)] mt-6 mb-2">Building From Zero</h3>
            <p>
              Throughout my career, I've been the engineer founders call when they need someone to turn napkin sketches into production systems. I've scaled teams from just me to 12+ engineers, and products from idea to enterprise.
            </p>

            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)] mt-6 mb-2">Career Path</h3>
            <p>
              Started at <CompanyLogo name="Sky" logo={COMPANY_LOGOS.sky} /> and <CompanyLogo name="Worldpay" logo={COMPANY_LOGOS.worldpay} /> building large-scale systems. Moved into blockchain at <CompanyLogo name="R3" logo={COMPANY_LOGOS.r3} /> and <CompanyLogo name="Set Labs" logo={COMPANY_LOGOS.set} />, focusing on making DeFi products that people actually understand and use.
            </p>

            <h3 className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[var(--text-primary)] mt-6 mb-2">Side Projects</h3>
            <p>
              I build tools and applications in my free time—from AI-powered DeFi assistants to music creation tools. These projects let me experiment with new technologies and solve interesting problems. See my <Link href="/projects" className="text-[var(--accent-primary)] underline transition-colors duration-90 hover:text-[var(--text-primary)]">projects page</Link> for more.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-[var(--border-default)] pt-8">
        <ul role="list" className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0">
            <SocialLink href={SOCIAL_LINKS.github} icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href={SOCIAL_LINKS.linkedin} icon={LinkedInIcon}>
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href={SOCIAL_LINKS.twitter} icon={XIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="mailto:gm@andrewwilkinson.io"
              icon={MailIcon}
            >
              gm@andrewwilkinson.io
            </SocialLink>
          </ul>
      </div>
    </SimpleLayout>
  )
}
