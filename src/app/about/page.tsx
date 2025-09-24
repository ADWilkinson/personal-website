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
        className="group flex text-sm font-medium text-zinc-800 transition-colors duration-200 hover:text-teal-600 dark:text-zinc-200 dark:hover:text-teal-400"
      >
        <Icon className="h-5 w-5 flex-none fill-zinc-500 transition-colors duration-200 group-hover:fill-teal-500 dark:group-hover:fill-teal-400" />
        <span className="ml-4">{children}</span>
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
      title="I'm Andrew, a builder at heart."
      intro="Democratizing finance through accessible DeFi solutions.">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="group relative aspect-square w-full max-w-xs overflow-hidden border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] shadow-[6px_6px_0_var(--mono-border-muted)] lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Professional portrait of Andrew Wilkinson"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="h-full w-full object-cover grayscale contrast-110 transition-opacity duration-300 dark:group-hover:opacity-0"
              quality={85}
              priority
            />
            <Image
              src={davyjonesImage}
              alt="Artistic representation of Davy Jones character"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="absolute inset-0 h-full w-full object-cover grayscale contrast-110 opacity-0 transition-opacity duration-300 dark:group-hover:opacity-100"
              quality={85}
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-3">What I'm Building Now</h3>
            <p>
              At <CompanyLogo name="ZKP2P" logo={COMPANY_LOGOS.zkp2p} />, I'm making crypto accessible to everyone. We use zero-knowledge proofs to let people buy crypto with Venmo, PayPal, and 20+ other payment apps—no centralized exchange needed.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-3">Leadership Experience</h3>
            <p>
              As Head of Brava at <CompanyLogo name="Brava Labs" logo={COMPANY_LOGOS.brava} />, I led a 10-person engineering team to ship an MVP that secured £2M in seed funding from European investors.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-3">Founder Experience</h3>
            <p>
              Founded <CompanyLogo name="Galleon DAO" logo={COMPANY_LOGOS.galleon} /> and raised $1M+ from 1kx and other DeFi investors. Built the protocol from scratch, grew a 6,000+ member community, and managed $20M+ in total value locked at peak.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-3">Building From Zero</h3>
            <p>
              Throughout my career, I've been the engineer founders call when they need someone to turn napkin sketches into production systems. I've scaled teams from just me to 12+ engineers, and products from idea to enterprise.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-3">Career Path</h3>
            <p>
              Started at <CompanyLogo name="Sky" logo={COMPANY_LOGOS.sky} /> and <CompanyLogo name="Worldpay" logo={COMPANY_LOGOS.worldpay} /> building large-scale systems. Moved into blockchain at <CompanyLogo name="R3" logo={COMPANY_LOGOS.r3} /> and <CompanyLogo name="Set Labs" logo={COMPANY_LOGOS.set} />, focusing on making DeFi products that people actually understand and use.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-3">Side Projects</h3>
            <p>
              I build tools and applications in my free time—from AI-powered DeFi assistants to music creation tools. These projects let me experiment with new technologies and solve interesting problems. See my <Link href="/projects" className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 underline">projects page</Link> for more.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href={SOCIAL_LINKS.github} icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href={SOCIAL_LINKS.linkedin} icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href={SOCIAL_LINKS.twitter} icon={XIcon} className="mt-4">
              Follow on Twitter
            </SocialLink>
            <SocialLink
              href="mailto:gm@andrewwilkinson.io"
              icon={MailIcon}
              className="mt-6 border-t border-zinc-100 pt-6 dark:border-zinc-700/40"
            >
              gm@andrewwilkinson.io
            </SocialLink>
          </ul>
        </div>
      </div>
    </SimpleLayout>
  )
}
