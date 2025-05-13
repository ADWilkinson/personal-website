import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import Link from 'next/link'
import { CompanyLogo } from '@/components/CompanyLogo'
import logoGalleon from '@/images/logos/web-galleon.png'
import logoR3 from '@/images/logos/web-r3.png'
import logoSet from '@/images/logos/web-set.jpg'
import logoSky from '@/images/logos/web-sky.png'
import logoWorldpay from '@/images/logos/web-worldpay.jpg'
import logoBrava from '@/images/logos/web-brava.jpg'

export const metadata: Metadata = {
  title: 'CV',
  description: 'Product & Engineering Manager | Former VC-backed Founder | DeFi Builder',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">{title}</h2>
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
    <div className="mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">{title}</h3>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{period}</span>
      </div>
      <div className="mb-2 text-lg font-medium text-teal-500 dark:text-teal-400">
        {logo ? <CompanyLogo name={company} logo={logo} /> : company}
      </div>
      {description && <div className="text-zinc-600 dark:text-zinc-400 italic mb-4">{description}</div>}
    </div>
  )
}

function JobDescription({ children }: { children: React.ReactNode }) {
  return <div className="text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">{children}</div>
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
      <div className="flex flex-wrap items-baseline mb-1">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mr-2">{title}</h3>
        <div className="space-x-3">
          {link && (
            <Link 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 inline-flex items-center"
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
              className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              GitHub
            </Link>
          )}
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{description}</p>
    </div>
  )
}

export default function CV() {
  return (
    <SimpleLayout
      title="Curriculum Vitae"
      intro="Product & Engineering Manager. Former VC-backed Founder. DeFi Builder."
    >
      <div className="space-y-12">
        <div className="text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-800/50 p-4 rounded-lg border border-zinc-100 dark:border-zinc-700/40 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-2 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <Link href="mailto:gm@andrewwilkinson.io" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
              gm@andrewwilkinson.io
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <Link href="https://www.linkedin.com/in/andrew-d-wilkinson" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
                LinkedIn
              </Link>
              <span className="mx-2 text-zinc-400">|</span>
              <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 mr-2 text-teal-500 fill-current">
                <path d="M13.3174 10.7749L19.1457 4H17.7646L12.7039 9.88256L8.66193 4H4L10.1122 12.8955L4 20H5.38119L10.7254 13.7878L14.994 20H19.656L13.3171 10.7749H13.3174ZM11.4257 12.9738L10.8064 12.0881L5.87886 5.03974H8.00029L11.9769 10.728L12.5962 11.6137L17.7652 19.0075H15.6438L11.4257 12.9742V12.9738Z" />
              </svg>
              <Link href="https://x.com/davyjones0x" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
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
            I am a Product & Engineering Manager with 8+ years of experience in the DeFi ecosystem, where I have built and scaled innovative products and led engineering teams. Currently as Head of Brava at Brava Labs, I define product vision and lead cross-functional teams to deliver DeFi yield strategies. At Galleon DAO, I secured $1M+ in funding from top VCs and industry angels, managed $20M+ in investment strategies, and grew a community to over 6,000 members. My leadership approach combines technical expertise with strategic vision, empowering teams to deliver impactful solutions while maintaining a user-centered focus. I excel at translating complex technical concepts into accessible products that drive real adoption.
          </p>
        </Section>
        
        <Section title="Skills">
          <ul className="list-disc pl-5 space-y-3 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <li><strong className="text-zinc-800 dark:text-zinc-100">Product Leadership</strong> – Experience defining product vision, roadmaps, and go-to-market strategies for blockchain applications with a focus on user experience and adoption</li>
            <li><strong className="text-zinc-800 dark:text-zinc-100">Team Leadership</strong> – Led cross-functional teams of engineers, designers, and growth specialists across different companies, with a collaborative and outcome-focused approach</li>
            <li><strong className="text-zinc-800 dark:text-zinc-100">Strategic Vision</strong> – Ability to identify market opportunities and align technical capabilities with business objectives for maximum impact</li>
            <li><strong className="text-zinc-800 dark:text-zinc-100">DeFi & Crypto Expertise</strong> – Deep understanding of blockchain protocols, smart contracts, and the broader DeFi ecosystem with 8+ years of hands-on experience</li>
            <li><strong className="text-zinc-800 dark:text-zinc-100">Growth & Community</strong> – Created and executed strategies resulting in significant user adoption and community growth through novel DeFi incentives and partnerships</li>
            <li><strong className="text-zinc-800 dark:text-zinc-100">Full-Stack Development</strong> – Advanced skills in Typescript, React, Node.js, HTML/CSS, and Cloud Technologies (Firebase, GCP, Cloudflare), and AI tooling</li>
          </ul>
        </Section>
        
        <Section title="Experience">
          <div className="space-y-10">
            <div>
              <JobTitle 
                title="Head of Brava" 
                company="Brava Labs" 
                period="Dec 2024 – Present" 
                description="A DeFi protocol focused on creating risk-adjusted onchain yield strategies"
                logo={logoBrava}
              />
              <JobDescription>
                I defined the MVP of Brava's stablecoin yield platform and product roadmap for risk-adjusted onchain yield strategies. Led a cross-functional team of engineers, growth specialists, and designers to execute the product vision. Managed stakeholder relationships and reporting while ensuring the alignment of business objectives with technical feasibility. Defined and created product requirements for our long-term roadmap that integrated key technologies (e.g., Circle CCTP V2).
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Advisor" 
                company="Brava Labs" 
                period="Oct 2024 – Dec 2024"
                logo={logoBrava}
              />
              <JobDescription>
                Provided strategic guidance on how to navigate and effectively connect with crypto-natives as a new project. Advised on community-building strategies and market positioning within the competitive DeFi landscape.
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
                Contributed to building the technical foundation for NashPoint's web application. Implemented KYC whitelisting integration to ensure regulatory compliance. Developed functionality for interaction with smart contracts deployed on the EVM. Optimized frontend performance and user experience for blockchain interactions.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Founder" 
                company="Galleon DAO" 
                period="Jan 2022 – May 2023" 
                description="A DeFi protocol creating structured products and automated investment strategies"
                logo={logoGalleon}
              />
              <JobDescription>
                I led product strategy and full-stack development from concept to launch, securing $1M in funding. Founded and guided the project through initial development, hiring and managing six core team members while transitioning to a tokenised DAO with onchain governance. Built a community of over 6,000 members and onboarded 10+ DAO contributors. Attracted $20M+ in product investments while ensuring protocol security and reliability. Established strategic partnerships and integrations within the broader DeFi ecosystem.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Advisor" 
                company="Set Labs" 
                period="Feb 2022 – Aug 2022" 
                description="A leading DeFi protocol for creating, managing, and trading tokenized structured products"
                logo={logoSet}
              />
              <JobDescription>
                Advised on community engagement strategies and governance mechanisms. Assisted in identifying potential partnerships and integration opportunities within the DeFi ecosystem.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Growth Lead & Community Strategy" 
                company="Set Labs" 
                period="Apr 2021 – Feb 2022"
                logo={logoSet}
              />
              <JobDescription>
                Spearheaded growth initiatives resulting in measurable increases in user adoption and token utilization. Developed and executed community management strategies across Twitter, Discord, and other platforms. Created engaging educational content to improve user understanding of Set Protocol's offerings. Identified and pursued business development opportunities, resulting in new strategic partnerships.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Solutions Engineer" 
                company="R3" 
                period="Feb 2021 – Nov 2021" 
                description="An enterprise DLT and confidential computing company developing Corda"
                logo={logoR3}
              />
              <JobDescription>
                Designed and implemented custom DLT applications using R3 Corda and Conclave frameworks. Collaborated with clients to translate complex business requirements into technical solutions. Contributed to product strategy and engineering planning for enterprise blockchain applications. Developed proof-of-concept applications showcasing privacy-preserving technologies.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Blockchain Application Architect" 
                company="Worldpay" 
                period="Feb 2020 – Feb 2021" 
                description="A leading payment processing company providing technology solutions worldwide"
                logo={logoWorldpay}
              />
              <JobDescription>
                Led architectural design of a Corda-based DLT system to improve B2B payment processes. Managed a team of 12 engineers, overseeing development and testing efforts. Served as subject matter expert for SAFe planning events, bridging product and technical requirements. Influenced framework, tool, and design choices as the project technology lead.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Blockchain Software Engineer & Scrum Master" 
                company="Worldpay" 
                period="Jun 2019 – Feb 2020"
                logo={logoWorldpay}
              />
              <JobDescription>
                Delivered full-stack product features for a Corda-based DLT system, including API and UI development. Established development standards and best practices for a new team within Worldpay. Facilitated the transition to the SAFe framework as acting Scrum Master.
              </JobDescription>
            </div>
            
            <div>
              <JobTitle 
                title="Software Engineer" 
                company="Sky" 
                period="Oct 2016 – Jun 2019" 
                description="A leading media company providing TV, broadband, and mobile services"
                logo={logoSky}
              />
              <JobDescription>
                Developed 'Sky Analytics', an end-to-end advertising and analytics portal for campaign planning. Implemented highly flexible audience segmentation features for targeted advertising. Used JavaScript, React, and Node.js to create responsive and scalable web applications.
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
          <div className="bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg border border-zinc-100 dark:border-zinc-700/40 mb-8">
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
              I enjoy creating micro apps when I get inspired. Using my web and cloud technologies expertise, I leverage agent-style coding tools such as Claude Code and Windsurf & Cursor to build, deploy, and host in production environments rapidly. Check out my <Link href="/projects" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">Projects page</Link> for more details.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectItem 
              title="Wojak Jones - Yield Farming DeFi Assistant"
              description="Developed a Virtuals agent integrated with Telegram that provides real-time yield farming opportunities and DeFi analytics. Built with Firebase, Telegram API, and Virtuals Framework."
              link="https://wojakjones.xyz"
              github="https://t.me/WojakJonesBot"
            />
            
            <ProjectItem 
              title="ChordCraft - AI Chord Progression Generator"
              description="Created an AI tool that generates unique chord progressions based on musical style preferences. Built with React, Firebase, and OpenAI API."
              link="https://chordcraft.io"
              github="https://github.com/ADWilkinson/chordcraft-app"
            />
            
            <ProjectItem 
              title="Ultrasoundapps - Crypto Apps Homepage"
              description="Built a centralized platform showcasing various DeFi and cryptocurrency applications. Created with React and Firebase."
              link="https://ultrasoundapps.com"
              github="https://github.com/galleonlabs/ultrasoundapps"
            />
            
            <ProjectItem 
              title="Privateer - Pairs Trading Bot"
              description="Designed a hyperliquid-based trading bot using correlation/mean reversion strategies. Built with Python, Trading APIs, and Data Analysis tools."
              github="https://github.com/ADWilkinson/privateer-capital"
            />
          </div>
        </Section>
        
        <Section title="Leadership Approach">
          <div className="text-zinc-600 dark:text-zinc-400 mb-6">
            <p className="mb-3">My leadership philosophy is built on three core principles:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Vision-Driven Execution</strong> – I combine big-picture strategic thinking with practical implementation by setting clear objectives and empowering teams to find innovative solutions.</li>
              <li><strong>User-Centered Product Development</strong> – I focus on translating complex technical capabilities into intuitive user experiences, prioritizing adoption and real-world utility.</li>
              <li><strong>Collaborative Team Building</strong> – I build high-performing cross-functional teams by fostering ownership, clear communication, and by connecting individual contributions to larger project goals.</li>
            </ul>
          </div>
        </Section>
        
        <Section title="Technical Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-zinc-50 dark:bg-zinc-800/50 p-6 rounded-lg border border-zinc-100 dark:border-zinc-700/40">
            <div className="text-zinc-600 dark:text-zinc-400">
              <h4 className="text-zinc-800 dark:text-zinc-100 font-semibold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Languages & Frameworks
              </h4>
              <p className="mb-4 ml-7 leading-relaxed">TypeScript, JavaScript, Python, Solidity, React, Node.js, Next.js</p>
              
              <h4 className="text-zinc-800 dark:text-zinc-100 font-semibold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                Web3 Technologies
              </h4>
              <p className="mb-4 ml-7 leading-relaxed">Web3.js, ethers.js, Viem, Wagmi, Hardhat, EVM</p>
              
              <h4 className="text-zinc-800 dark:text-zinc-100 font-semibold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                Cloud & Infrastructure
              </h4>
              <p className="ml-7 leading-relaxed">Firebase, AWS, GCP, Cloudflare, Docker, CI/CD, GitHub Actions</p>
            </div>
            
            <div className="text-zinc-600 dark:text-zinc-400">
              <h4 className="text-zinc-800 dark:text-zinc-100 font-semibold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                Frontend & Design
              </h4>
              <p className="mb-4 ml-7 leading-relaxed">HTML, CSS, Tailwind CSS, Material UI, Chakra UI</p>
              
              <h4 className="text-zinc-800 dark:text-zinc-100 font-semibold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                Data & APIs
              </h4>
              <p className="mb-4 ml-7 leading-relaxed">REST APIs, GraphQL, MongoDB, PostgreSQL, NoSQL</p>
              
              <h4 className="text-zinc-800 dark:text-zinc-100 font-semibold mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
                Developer Tools
              </h4>
              <p className="ml-7 leading-relaxed">Git, Vite, Webpack, Jest, React Testing Library, Vercel, Netlify, NPM, Yarn, AI-tools (Claude Code, Windsurf, Cursor)</p>
            </div>
          </div>
        </Section>
        
        <Section title="Languages & Interests">
          <div className="text-zinc-600 dark:text-zinc-400">
            <p className="mb-2"><span className="font-semibold">Languages:</span> English (Native)</p>
            <p><span className="font-semibold">Interests:</span> Music (piano & guitar), travel & socialising, algorithmic trading, emerging technologies</p>
          </div>
        </Section>
      </div>
    </SimpleLayout>
  )
}