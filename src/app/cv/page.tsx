import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import { CompanyLogo } from '@/components/CompanyLogo'
import {
  COMPANY_LOGOS,
  WORK_EXPERIENCE,
  SOCIAL_LINKS,
  SITE_CONFIG,
} from '@/lib/constants'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Senior Software Engineer at ZKP2P, Former VC-backed Founder',
}

const headingMd =
  'font-display text-[1.2rem] font-semibold tracking-tight text-[var(--text-primary)]'
const headingSm =
  'font-display text-[1rem] font-semibold tracking-tight text-[var(--text-primary)]'
const bodyText = 'text-sm leading-relaxed text-[var(--text-muted)]'
const metaText = 'text-[0.65rem] uppercase tracking-[0.14em] text-[var(--text-secondary)]'
const linkText =
  'inline-flex items-center gap-1 text-[var(--accent-primary)] transition-colors duration-150 hover:text-[var(--text-primary)]'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className={`${headingMd} mb-6`}>{title}</h2>
      {children}
    </div>
  )
}

function JobTitle({ 
  title, 
  company, 
  period, 
  description,
  logo
}: { 
  title: string; 
  company: string; 
  period: string; 
  description?: string;
  logo?: any;
}) {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h3 className={headingSm}>{title}</h3>
        <span className={metaText}>{period}</span>
      </div>
      <div className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--text-primary)]">
        {logo ? <CompanyLogo name={company} logo={logo} /> : company}
      </div>
      {description && <div className={`${bodyText} italic mb-4`}>{description}</div>}
    </div>
  )
}

function JobDescription({ children }: { children: React.ReactNode }) {
  return <div className={`${bodyText} mb-4`}>{children}</div>
}

function ProjectItem({ 
  title, 
  description, 
  link, 
  github 
}: { 
  title: string; 
  description: string; 
  link?: string; 
  github?: string 
}) {
  return (
    <div className="mb-4">
      <h3 className={`${headingSm} mb-1`}>{title}</h3>
      <div className="flex space-x-3 mb-2">
        {link && (
          <Link 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${linkText} text-sm`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Website
          </Link>
        )}
        {github && (
          <Link 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${linkText} text-sm`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
            GitHub
          </Link>
        )}
      </div>
      <p className={bodyText}>{description}</p>
    </div>
  )
}

export default function CV() {
  return (
    <SimpleLayout
      title="Curriculum Vitae"
      intro="Senior Software Engineer at ZKP2P. Former VC-backed Founder."
    >
      <div className="space-y-10">
        <div className="flex flex-col gap-3 rounded-sm border border-[var(--border-default)]/20 bg-[var(--surface-muted)]/70 p-5 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[var(--accent-primary)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <Link href={`mailto:${SITE_CONFIG.email}`} className={linkText}>
              {SITE_CONFIG.email}
            </Link>
          </div>
          <div className="flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-4">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[var(--accent-primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <Link
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkText}
              >
                LinkedIn
              </Link>
              <span className="text-[var(--border-default)]/40">/</span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 text-[var(--accent-primary)]"
              >
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
              </svg>
              <Link
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className={linkText}
              >
                Twitter
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[var(--accent-primary)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-[var(--text-primary)]">London, UK</span>
            </div>
          </div>
        </div>

        <Section title="Summary">
          <p className={bodyText}>
            Product-focused Engineering Manager with 8+ years building across blockchain, DeFi, and fintech. Founded and scaled products managing $20M+ in value, raised $3M+ venture funding, and excel at 0-to-1 execution.
          </p>
        </Section>

        <Section title="Skills">
          <div className="space-y-4">
            <div>
              <h3 className={`${headingSm} mb-2`}>Leadership Skills</h3>
              <ul className="list-disc space-y-2 pl-5 text-[var(--text-muted)]">
                <li><strong className="text-[var(--text-primary)]">Team Management</strong> – Scaled teams 0-8, managed up to 12 engineers</li>
                <li><strong className="text-[var(--text-primary)]">Stakeholder Management</strong> – VCs, investors, C-suite alignment</li>
                <li><strong className="text-[var(--text-primary)]">Strategic Planning</strong> – Product roadmaps, technical architecture</li>
                <li><strong className="text-[var(--text-primary)]">Community & Growth</strong> – Built 6,000+ member community, drove $20M+ TVL</li>
              </ul>
            </div>
            <div>
              <h3 className={`${headingSm} mb-2`}>Technical Skills</h3>
              <ul className="list-disc space-y-2 pl-5 text-[var(--text-muted)]">
                <li><strong className="text-[var(--text-primary)]">Languages:</strong> TypeScript, C#, Solidity, HTML, CSS</li>
                <li><strong className="text-[var(--text-primary)]">Frontend:</strong> React, Next.js, Redux, Tailwind, Vite</li>
                <li><strong className="text-[var(--text-primary)]">Backend:</strong> Node.js, Express, REST APIs</li>
                <li><strong className="text-[var(--text-primary)]">Cloud & DevOps:</strong> Firebase, GCP, Cloudflare, Docker, Vercel, Netlify, GitHub Actions</li>
                <li><strong className="text-[var(--text-primary)]">Tools:</strong> Git, NPM, Yarn, Telegram API, OpenAI API, Web3.js, ethers.js, Viem, Wagmi, Hardhat, EVM</li>
                <li><strong className="text-[var(--text-primary)]">AI Tools:</strong> Claude Code, Windsurf, Cursor</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="Key Achievements / Projects">
          <div className="space-y-4">
            <div>
              <h3 className={`${headingSm} mb-2`}>Galleon DAO - DAO Founder & Raise</h3>
              <p className={bodyText}>Built DeFi investment products securing $1M from 1kx and notable angels. Grew community 0-6,000+ members, driving $20M+ TVL.</p>
            </div>
            <div>
              <h3 className={`${headingSm} mb-2`}>Brava - MVP Delivery to Seed Raise</h3>
              <p className={bodyText}>Shipped MVP in 6 months securing £2M seed funding. Integrated Circle CCTP V2, Fireblocks, Safe for institutional DeFi platform.</p>
            </div>
          </div>
        </Section>
        
        <Section title="Experience">
          <div className="space-y-8">
            <div>
              <JobTitle 
                title="Senior Software Engineer" 
                company="ZKP2P" 
                period="Jun 2025 – Present" 
                description="A trust-minimized, noncustodial protocol enabling fiat-to-crypto onramps via zkTLS proofs"
                logo={COMPANY_LOGOS.zkp2p}
              />
              <JobDescription>
                Building ZKP2P V2 Protocol for trust-minimized fiat-to-crypto onramps. Smart contract escrow, zkTLS integration, supporting 20+ fiat currencies across Venmo, Revolut, Wise, Cash App.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Head of Brava & Engineering Manager" 
                company="Brava Labs" 
                period="Dec 2024 – Jun 2025" 
                description="A DeFi protocol focused on creating risk-adjusted onchain yield strategies"
                logo={COMPANY_LOGOS.brava}
              />
              <JobDescription>
                Delivered MVP securing £2M seed funding. Led 10-person team launching institutional yield platform. Integrated Circle CCTP V2, Fireblocks, Safe.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Advisor" 
                company="Brava Labs" 
                period="Oct 2024 – Dec 2024"
                logo={COMPANY_LOGOS.brava}
              />
              <JobDescription>
                Strategic guidance on crypto-native positioning and community-building strategies.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Software Engineer" 
                company="NashPoint" 
                period="Oct 2024 – Dec 2024" 
                description="Institutional Grade Asset Management Onchain"
              />
              <JobDescription>
                Built DeFi web application integrating smart contracts and KYC via Persona for RWA-based strategies.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Founder" 
                company="Galleon DAO" 
                period="Jan 2022 – May 2023" 
                description="A DeFi DAO creating onchain yield and leverage structured products on Ethereum"
                logo={COMPANY_LOGOS.galleon}
              />
              <JobDescription>
                Founded and scaled DeFi DAO to $20M+ TVL. Secured $1M from 1kx and DeFi leaders. Hired 6-person team, built 6,000+ community. Partnerships with Lido, Arbitrum, Aave.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Advisor" 
                company="Set Labs" 
                period="Feb 2022 – Aug 2022" 
                description="A leading DeFi protocol for creating, managing, and trading tokenized structured products"
                logo={COMPANY_LOGOS.set}
              />
              <JobDescription>
                Community engagement and DeFi strategy. Strategic partnerships and integrations.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Growth Lead & Community Strategy" 
                company="Set Labs" 
                period="Apr 2021 – Feb 2022"
                logo={COMPANY_LOGOS.set}
              />
              <JobDescription>
                Drove adoption to $600M+ TVL. Managed 50k+ member community. Led communications and business development securing strategic partnerships.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Solutions Engineer" 
                company="R3" 
                period="Feb 2021 – Nov 2021" 
                description="An enterprise DLT and confidential computing company developing Corda"
                logo={COMPANY_LOGOS.r3}
              />
              <JobDescription>
                Designed custom DLT applications using Corda and Conclave. Built privacy-preserving PoCs for enterprise clients.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Blockchain Application Architect" 
                company="Worldpay" 
                period="Feb 2020 – Feb 2021" 
                description="A leading payment processing company providing technology solutions worldwide"
                logo={COMPANY_LOGOS.worldpay}
              />
              <JobDescription>
                Led architecture for Corda-based B2B payment system. Managed 12 engineers. Technical lead for SAFe planning.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Blockchain Software Engineer & Scrum Master" 
                company="Worldpay" 
                period="Jun 2019 – Feb 2020"
                logo={COMPANY_LOGOS.worldpay}
              />
              <JobDescription>
                Delivered enterprise DLT features. Established development standards for distributed team. Scrum Master for SAFe transition.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Software Engineer" 
                company="Sky" 
                period="Oct 2016 – Jun 2019" 
                description="A leading media company providing TV, broadband, and mobile services"
                logo={COMPANY_LOGOS.sky}
              />
              <JobDescription>
                Built advertising analytics portal serving millions. Implemented audience segmentation. Scalable Vue/Node.js applications.
              </JobDescription>
            </div>
          </div>
        </Section>
        
        <Section title="Education">
          <p className={bodyText}>
            Bachelor's Degree with Honours in Biological Sciences (2.1), University of Brighton (2012 – 2015)
          </p>
        </Section>
        
        <Section title="Hobby Projects">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectItem 
              title="Elune"
              description="Simple yield farming platform for non-crypto native users with automated DeFi strategies (Base smart wallets, Superform SuperUSDC)"
              link="https://tryelune.com"
            />
            
            <ProjectItem 
              title="Wojak Jones"
              description="DeFi Assistant with 50+ active users (Firebase, Telegram API, Virtuals, Twitter API)"
              link="https://wojakjones.xyz"
            />
            
            <ProjectItem 
              title="ChordCraft"
              description="AI music tool generating 1000s of chord progressions with a clean, minimalistic UI (React, OpenAI, Firebase)"
              link="https://chordcraft.io"
            />
            
            <ProjectItem 
              title="PiggyOnchain"
              description="Themed app based on Superform Piggy AI Agent token with custom charts, data storage, and analytics (Vite, Firebase, Apex Charts)"
              link="https://piggyonchain.xyz"
            />
            
            <ProjectItem 
              title="Ultrasoundapps"
              description="Crypto app directory (React, Firebase)"
              link="https://ultrasoundapps.com"
            />
            
            <ProjectItem 
              title="Privateer"
              description="Algorithmic trading bot with live capital (Python, Trading APIs)"
              github="https://github.com/ADWilkinson/privateer-capital"
            />
            
            <ProjectItem 
              title="SaylorMemes"
              description="Content curation platform (Vite, Firebase)"
              github="https://github.com/ADWilkinson/saylormemes"
            />
            
            <ProjectItem 
              title="CryptoTierList"
              description="Project ranking system (Next.js, MongoDB)"
              github="https://github.com/ADWilkinson/CryptoTierList"
            />
          </div>
        </Section>
        
        <Section title="Interests">
          <p className={bodyText}>
            Music, travel, algorithmic trading, emerging tech
          </p>
        </Section>
      </div>
    </SimpleLayout>
  )
}
