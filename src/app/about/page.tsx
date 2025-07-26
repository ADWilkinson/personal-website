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
              className="aspect-square bg-zinc-100 object-cover dark:bg-zinc-800"
              quality={85}
              priority
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <div className="space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Current Role</h3>
            <p>
              I'm currently a Senior Software Engineer at <CompanyLogo name="ZKP2P" logo={COMPANY_LOGOS.zkp2p} />, where we're building trust-minimized, noncustodial fiat-to-crypto onramps using zkTLS proofs. We're enabling seamless exchanges between any offchain digital asset (like fiat currencies) and onchain assets (like USDC, ETH, SOL) across multiple payment platforms including Venmo, Revolut, Wise, and Cash App.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Recent Leadership Experience</h3>
            <p>
              Previously, I was Head of Brava & Engineering Manager at <CompanyLogo name="Brava Labs" logo={COMPANY_LOGOS.brava} />, where we built risk-adjusted yield strategies for DeFi. I led the team that shipped our MVP, which helped us secure £2M in seed funding. Day-to-day, I worked with a cross-functional team of 10, balancing technical implementation with product strategy.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Founder Experience</h3>
            <p>
              As the Founder of <CompanyLogo name="Galleon DAO" logo={COMPANY_LOGOS.galleon} />, I built automated DeFi strategies that abstracted complexity away from everyday users. We raised $1M+ from investors including 1kx and notable figures like the Bankless founders and Anthony Sassano. I wore many hats - writing smart contracts, building the frontend, hiring our core team of 6, and growing our community to over 6,000 members. At our peak, we managed over $20M in user funds.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">0-to-1 Product & Engineering</h3>
            <p>
              I've spent 8+ years building in blockchain and fintech, with a particular focus on early-stage products. I enjoy the challenge of going from idea to launch, whether that's founding my own protocol or joining an early team. My background spans both startups and larger companies, where I've led engineering teams of various sizes - from small founding teams to groups of 12+ at enterprise scale.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Industry Experience</h3>
            <p>
              My journey in blockchain started at traditional companies like <CompanyLogo name="Sky" logo={COMPANY_LOGOS.sky} /> and <CompanyLogo name="Worldpay" logo={COMPANY_LOGOS.worldpay} />, before moving into the DeFi space with <CompanyLogo name="R3" logo={COMPANY_LOGOS.r3} /> and <CompanyLogo name="Set Labs" logo={COMPANY_LOGOS.set} />. Each role taught me something different - from building scalable systems to understanding complex financial protocols. This diverse background helps me bridge the gap between technical implementation and business strategy, whether I'm working on smart contracts or planning go-to-market approaches.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Side Projects</h3>
            <p>
              In my spare time, I enjoy creating micro apps when I get inspired. For details on my various side projects, please visit my <Link href="/projects" className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100 underline">Projects page</Link>.
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