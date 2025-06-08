import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { CompanyLogo } from '@/components/CompanyLogo'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import davyjonesImage from '@/images/galleon/davyjones.png'
import logoGalleon from '@/images/logos/web-galleon.png'
import logoR3 from '@/images/logos/web-r3.png'
import logoSet from '@/images/logos/web-set.jpg'
import logoSky from '@/images/logos/web-sky.png'
import logoWorldpay from '@/images/logos/web-worldpay.jpg'
import logoBrava from '@/images/logos/web-brava.jpg'

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
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
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
    "I'm Andrew, an Engineering and Product manager, Former VC-backed Founder, and DeFi Builder.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none group relative">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 transition-opacity duration-300 dark:group-hover:opacity-0"
              quality={100}
              priority
            />
            <Image
              src={davyjonesImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 absolute top-0 left-0 opacity-0 transition-opacity duration-300 dark:group-hover:opacity-100"
              quality={100}
              priority
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Andrew.<br />
            Engineering and Product manager, Former VC-backed Founder.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Current Leadership</h3>
            <p>
              Currently, I'm Head of Brava & Engineering Manager at <CompanyLogo name="Brava Labs" logo={logoBrava} />, where we're building risk-adjusted yield strategies for DeFi. I led the team that shipped our MVP, which helped us secure £2M in seed funding. Day-to-day, I work with a cross-functional team of 10, balancing technical implementation with product strategy.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Founder Experience</h3>
            <p>
              As the Founder of <CompanyLogo name="Galleon DAO" logo={logoGalleon} />, I built automated DeFi strategies that abstracted complexity away from everyday users. We raised $1M+ from investors including 1kx and notable figures like the Bankless founders and Anthony Sassano. I wore many hats - writing smart contracts, building the frontend, hiring our core team of 6, and growing our community to over 6,000 members. At our peak, we managed over $20M in user funds.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">0-to-1 Product & Engineering</h3>
            <p>
              I've spent 8+ years building in blockchain and fintech, with a particular focus on early-stage products. I enjoy the challenge of going from idea to launch, whether that's founding my own protocol or joining an early team. My background spans both startups and larger companies, where I've led engineering teams of various sizes - from small founding teams to groups of 12+ at enterprise scale.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Industry Experience</h3>
            <p>
              My journey in blockchain started at traditional companies like <CompanyLogo name="Sky" logo={logoSky} /> and <CompanyLogo name="Worldpay" logo={logoWorldpay} />, before moving into the DeFi space with <CompanyLogo name="R3" logo={logoR3} /> and <CompanyLogo name="Set Labs" logo={logoSet} />. Each role taught me something different - from building scalable systems to understanding complex financial protocols. This diverse background helps me bridge the gap between technical implementation and business strategy, whether I'm working on smart contracts or planning go-to-market approaches.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Side Projects</h3>
            <p>
              In my spare time, I enjoy creating micro apps when I get inspired. For details on my various side projects, please visit my <Link href="/projects" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">Projects page</Link>.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://github.com/ADWilkinson" icon={GitHubIcon}>
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/andrew-d-wilkinson" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink href="https://x.com/davyjones0x" icon={XIcon} className="mt-4">
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
    </Container>
  )
}