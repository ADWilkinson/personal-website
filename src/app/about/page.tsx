import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { CompanyLogo } from '@/components/CompanyLogo'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
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
    "I'm Andrew Wilkinson, a Product & Engineering Manager, Former VC-backed Founder, and DeFi Builder.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Andrew Wilkinson.<br />
            Product & Engineering Manager · Former VC-backed Founder · DeFi Builder
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Current Leadership</h3>
            <p>
              Currently, I'm serving as Head of Brava at <CompanyLogo name="Brava Labs" logo={logoBrava} />, a DeFi protocol focused on creating risk-adjusted onchain yield strategies. I define the product vision and MVP, establish the strategic roadmap, and manage a cross-functional team to bring the product to market.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Founder Experience</h3>
            <p>
              As the Founder of <CompanyLogo name="Galleon DAO" logo={logoGalleon} />, I led the development of composable, automated strategy tokens on Ethereum, allowing users to access complex DeFi strategies through a single token. I secured $1M+ in funding from top VCs (1kx) and industry angels (Bankless, Anthony Sassano). Starting from a concept, I led the full-stack development, implemented smart contracts, built the Web3 frontend interface, and scaled the project to manage $20M+ in investment strategies. I hired and managed a core team of 6 members while transitioning into a tokenised DAO with onchain governance and growing a community of over 6,000 members.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Product & Strategy Expertise</h3>
            <p>
              With 8+ years of experience building in the blockchain and DeFi space, my core expertise includes defining product vision, roadmaps, and strategies for blockchain applications in the Ethereum ecosystem. I've led engineering, growth, and product teams across different companies and domains while translating complex business requirements into successful products that solve real user problems.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Industry Experience</h3>
            <p>
              I have a deep understanding of blockchain protocols, smart contracts, and the broader DeFi ecosystem. Prior to my work at <CompanyLogo name="Galleon DAO" logo={logoGalleon} /> and <CompanyLogo name="Brava Labs" logo={logoBrava} />, I worked at <CompanyLogo name="Set Labs" logo={logoSet} />, <CompanyLogo name="R3" logo={logoR3} />, <CompanyLogo name="Worldpay" logo={logoWorldpay} />, and <CompanyLogo name="Sky" logo={logoSky} />. Throughout my career, I've created and executed strategies resulting in significant user adoption and community growth through novel DeFi incentives and partnerships.
            </p>
            
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-8 mb-2">Side Projects</h3>
            <p>
              In my spare time, I enjoy creating micro apps when I get inspired. Using my web and cloud technologies expertise, I leverage agent-style coding tools to build, deploy, and host projects in production environments rapidly. Some of my hobby projects include Wojak Jones (a yield farming DeFi assistant), ChordCraft (an AI chord progression generator), and Ultrasoundapps (a crypto apps homepage).
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