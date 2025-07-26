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
        className="flex text-sm font-medium text-zinc-800 hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-400"
      >
        <Icon className="h-5 w-5 flex-none fill-zinc-500" />
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
      title="I'm Andrew. Senior Software Engineer at ZKP2P, Former VC-backed Founder."
      intro="">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="Professional portrait of Andrew Wilkinson"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              quality={85}
              priority
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Current Role</h3>
            <p>
              Senior Software Engineer at <CompanyLogo name="ZKP2P" logo={COMPANY_LOGOS.zkp2p} />, building trust-minimized fiat-to-crypto onramps using zkTLS proofs across 20+ payment platforms.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Recent Leadership Experience</h3>
            <p>
              Previously Head of Brava at <CompanyLogo name="Brava Labs" logo={COMPANY_LOGOS.brava} />, where I led a 10-person team shipping an MVP that secured £2M seed funding.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Founder Experience</h3>
            <p>
              Founded <CompanyLogo name="Galleon DAO" logo={COMPANY_LOGOS.galleon} />, raising $1M+ from 1kx and DeFi leaders. Built the protocol, hired 6-person team, grew 6,000+ member community, and managed $20M+ in user funds.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">0-to-1 Product & Engineering</h3>
            <p>
              8+ years building blockchain and fintech products from 0-to-1. Led teams from founding stage to 12+ engineers at enterprise scale.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Industry Experience</h3>
            <p>
              Started at <CompanyLogo name="Sky" logo={COMPANY_LOGOS.sky} /> and <CompanyLogo name="Worldpay" logo={COMPANY_LOGOS.worldpay} />, then moved to DeFi with <CompanyLogo name="R3" logo={COMPANY_LOGOS.r3} /> and <CompanyLogo name="Set Labs" logo={COMPANY_LOGOS.set} />. Bridge technical implementation with business strategy across smart contracts and go-to-market.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Side Projects</h3>
            <p>
              Build micro apps in my spare time. See my <Link href="/projects" className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 underline">Projects page</Link> for details.
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
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              gm@andrewwilkinson.io
            </SocialLink>
          </ul>
        </div>
      </div>
    </SimpleLayout>
  )
}