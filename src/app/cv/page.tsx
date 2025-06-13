import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import { CompanyLogo } from '@/components/CompanyLogo'
import { COMPANY_LOGOS, WORK_EXPERIENCE, SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants'
import { typography, getHeadingStyles, getBodyStyles, getMetaStyles, getLinkStyles } from '@/lib/typography'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Engineering and Product Manager with 8+ years building and scaling products across blockchain, DeFi, and fintech',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className={`${getHeadingStyles('h2')} mb-6`}>{title}</h2>
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
        <h3 className={getHeadingStyles('h3')}>{title}</h3>
        <span className={getMetaStyles()}>{period}</span>
      </div>
      <div className="mb-2 text-lg font-medium text-teal-500 dark:text-teal-400">
        {logo ? <CompanyLogo name={company} logo={logo} /> : company}
      </div>
      {description && <div className={`${getBodyStyles()} italic mb-4`}>{description}</div>}
    </div>
  )
}

function JobDescription({ children }: { children: React.ReactNode }) {
  return <div className={`${getBodyStyles()} mb-4 ${typography.lineHeight.relaxed}`}>{children}</div>
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
    <div className="mb-6">
      <h3 className={`${getHeadingStyles('h4')} mb-1`}>{title}</h3>
      <div className="flex space-x-3 mb-2">
        {link && (
          <Link 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${getLinkStyles()} text-sm inline-flex items-center`}
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
            className={`${getLinkStyles()} text-sm inline-flex items-center`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
            </svg>
            GitHub
          </Link>
        )}
      </div>
      <p className={`${getBodyStyles()} ${typography.lineHeight.relaxed}`}>{description}</p>
    </div>
  )
}

export default function CV() {
  return (
    <SimpleLayout
      title="Curriculum Vitae"
      intro="Engineering and Product Manager with 8+ years building and scaling products across blockchain, DeFi, and fintech."
    >
      <div className="space-y-12">
        <div className="text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-zinc-100 dark:border-zinc-700/40 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <Link href={`mailto:${SITE_CONFIG.email}`} className={getLinkStyles()}>
              {SITE_CONFIG.email}
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <Link href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className={getLinkStyles()}>
                LinkedIn
              </Link>
              <span className="mx-2 text-zinc-400">|</span>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 mr-2 text-teal-500 fill-current">
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
              </svg>
              <Link href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className={getLinkStyles()}>
                Twitter
              </Link>
            </div>
            <div className="flex items-center md:ml-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>London, UK</span>
            </div>
          </div>
        </div>
        
        <Section title="Summary">
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
            I'm a product-focused Engineering Manager with 8+ years of experience building and scaling products across blockchain, DeFi, and fintech.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
            From founding an Ethereum DAO to managing teams at established enterprises, I've shipped products managing $20M+ in value, and raised $2M+ venture funding.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
            I excel at taking products from 0-to-1, combining hands-on technical expertise with strategic product vision.
          </p>
        </Section>
        
        <Section title="Skills">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">Leadership Skills</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <li><strong className="text-zinc-800 dark:text-zinc-100">Team Management</strong> – Founded and scaled teams from 0-8 at Galleon DAO, while managing up to 12 engineers at enterprise scale</li>
                <li><strong className="text-zinc-800 dark:text-zinc-100">Stakeholder Management</strong> – Managed relationships with VCs, investors, and C-suite executives while aligning technical execution with business objectives</li>
                <li><strong className="text-zinc-800 dark:text-zinc-100">Strategic Planning</strong> – Led Scrum & SAFe planning events, defined product roadmaps, and established technical architectures for novel products</li>
                <li><strong className="text-zinc-800 dark:text-zinc-100">Community & Growth</strong> – Built 6,000+ member community from scratch, creating an engaged user base that drove $20M+ protocol adoption</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">Technical Skills</h3>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <li><strong className="text-zinc-800 dark:text-zinc-100">Languages:</strong> TypeScript, C#, Solidity, HTML, CSS</li>
                <li><strong className="text-zinc-800 dark:text-zinc-100">Frontend:</strong> React, Next.js, Redux, Tailwind, Vite</li>
                <li><strong className="text-zinc-800 dark:text-zinc-100">Backend:</strong> Node.js, Express, REST APIs</li>
                <li><strong className="text-zinc-800 dark:text-zinc-100">Cloud & DevOps:</strong> Firebase, GCP, Cloudflare, Docker, Vercel, Netlify, GitHub Actions</li>
                <li><strong className="text-zinc-800 dark:text-zinc-100">Tools:</strong> Git, NPM, Yarn, Telegram API, OpenAI API, Web3.js, ethers.js, Viem, Wagmi, Hardhat, EVM</li>
                <li><strong className="text-zinc-800 dark:text-zinc-100">AI Tools:</strong> Claude Code, Windsurf, Cursor</li>
              </ul>
            </div>
          </div>
        </Section>
        
        <Section title="Key Achievements / Projects">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Galleon DAO - DAO Founder & Raise</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">I built DeFi investment products that democratized yield and leveraged strategies through simple tokens that secured $1M in funding from 1kx and notable angels, including Bankless and Anthony Sassano.</p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">I grew and led a community from 0 to 6,000+ members, driving $20M+ in TVL across protocol products through hands-on growth execution and strategic engagement within the ecosystem.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">Brava - MVP Delivery to Seed Raise</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">I built and launched the MVP in 6 months that secured £2M seed funding for an institutional DeFi yield platform, integrating Circle CCTP V2, Fireblocks, and Safe while leading cross-functional delivery from roadmap to market launch.</p>
            </div>
          </div>
        </Section>
        
        <Section title="Experience">
          <div className="space-y-10">
            <div>
              <JobTitle 
                title="Head of Brava & Engineering Manager" 
                company="Brava Labs" 
                period="Dec 2024 – Jun 2025" 
                description="A DeFi protocol focused on creating risk-adjusted onchain yield strategies"
                logo={COMPANY_LOGOS.brava}
              />
              <JobDescription>
                Defined and delivered an MVP and product roadmap that secured £2M seed funding. Led a 10-person cross-functional team to launch an MVP serving institutional clients. Created detailed technical requirements integrating Circle CCTP V2, Fireblocks, and Safe. Managed stakeholder relationships and reporting with our CEO & Founder.
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
                Provided strategic guidance on crypto-native market positioning. Advised on community-building strategies for a competitive DeFi landscape.
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
                Short-term contract to help build the technical foundation and architecture for a DeFi web application, integrating deployed smart contracts, crypto-wallet features, and third-party frameworks. Implemented KYC and whitelisting via Persona, ensuring the regulatory compliance required to access certain features, such as RWA-based strategies.
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
                Founded and scaled a DeFi DAO from concept to $20M+ TVL. Secured $1M funding from leading VCs (1kx) and DeFi thought leaders (Bankless, Anthony Sassano). Hired and managed 6 core team members across engineering and growth. Built a community of 6,000+ members and onboarded 10+ DAO contributors. Led full-stack development of smart contracts and Web3 interfaces. Established strategic partnerships and initiatives within the DeFi ecosystem with notable names such as Lido, Arbitrum & Aave.
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
                Advised on community engagement and DeFi strategy. Identified strategic partnerships and integration opportunities within crypto.
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
                Drove user adoption and protocol TVL that peaked at over $600M. Managed community across Twitter and Discord, reaching 50k+ members. Created public communications for all announcements, initiatives, and educational content, translating complex DeFi concepts into understandable information. Secured strategic partnerships with crypto-native projects and traditional finance entities looking to onboard into DeFi through business development initiatives.
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
                Designed custom DLT applications using Corda and Conclave frameworks. Developed privacy-preserving proof-of-concepts that leverage Conclave for prospective customers of R3 wanting to adopt the technology. Contributed to product strategy specific to a client's use case.
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
                Led architectural design of Corda-based B2B payment system. Managed a team of 12 engineers through the development lifecycle. Served as technical lead for SAFe planning events. Influenced technology stack decisions and framework choices.
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
                Delivered full-stack features for an enterprise DLT system. Established development standards for the new blockchain team based in India, optimised for asynchronous working. Facilitated transition to the SAFe framework as Scrum Master.
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
                Developed an end-to-end advertising analytics portal serving millions of users. Implemented flexible audience segmentation for targeted campaigns. Built scalable Vue/Node.js applications handling high traffic loads.
              </JobDescription>
            </div>
          </div>
        </Section>
        
        <Section title="Education">
          <p className="text-zinc-600 dark:text-zinc-400">
            Bachelor's Degree with Honours in Biological Sciences (2.1), University of Brighton (2012 – 2015)
          </p>
        </Section>
        
        <Section title="Hobby Projects">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              github="https://github.com/galleonlabs/saylormemes"
            />
            
            <ProjectItem 
              title="CryptoTierList"
              description="Project ranking system (Next.js, MongoDB)"
              github="https://github.com/ADWilkinson/CryptoTierList"
            />
          </div>
        </Section>
        
        <Section title="Interests">
          <p className="text-zinc-600 dark:text-zinc-400">
            Music (piano & guitar), travel & socialising, algorithmic trading, emerging technologies
          </p>
        </Section>
      </div>
    </SimpleLayout>
  )
}