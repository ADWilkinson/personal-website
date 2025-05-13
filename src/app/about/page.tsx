import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

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
    "I'm Andrew Wilkinson, a Product and Technology Leader with 8+ years of experience across blockchain, DeFi, and fintech sectors.",
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
            I'm Andrew Wilkinson, a Product and Technology Leader specializing in blockchain, DeFi, and fintech.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am a Product and Technology Leader with 8+ years of experience across blockchain, DeFi, and fintech sectors, where I have built and scaled innovative products and led engineering teams. At Galleon DAO, I secured $1M+ in funding from top VCs and industry angels, managed $20M+ in investment strategies, and grew a community to over 6,000 members.
            </p>
            <p>
              My experience includes defining product vision, roadmaps, and strategies for blockchain applications in the Ethereum ecosystem. I've led engineering, growth, and product teams across different companies and domains to deliver on their respective roadmaps.
            </p>
            <p>
              I have a deep understanding of blockchain protocols, smart contracts, and the broader DeFi ecosystem. I've created and executed strategies resulting in significant user adoption and community growth through novel DeFi incentives and partnerships.
            </p>
            <p>
              Currently, I'm serving as Head of Brava at Brava Labs, a DeFi protocol focused on creating risk-adjusted onchain yield strategies. I define the product vision and MVP, establish the strategic roadmap, and manage a cross-functional team to bring the product to market.
            </p>
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
              href="mailto:hello@andrewwilkinson.me"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hello@andrewwilkinson.me
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}