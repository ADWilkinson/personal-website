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
  return <div className="text-zinc-600 dark:text-zinc-400 mb-4">{children}</div>
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
      <div className="flex items-baseline">
        <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{title}</h3>
        <div className="ml-2 space-x-2">
          {link && (
            <Link 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
            >
              Website
            </Link>
          )}
          {github && (
            <Link 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
      <p className="text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  )
}

export default function CV() {
  return (
    <SimpleLayout
      title="Curriculum Vitae"
      intro="Product & Engineering Manager | Former VC-backed Founder | DeFi Builder"
    >
      <div className="space-y-12">
        <div className="text-zinc-600 dark:text-zinc-400">
          <Link href="mailto:gm@andrewwilkinson.io" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
            gm@andrewwilkinson.io
          </Link> | {" "}
          <Link href="https://www.linkedin.com/in/andrew-d-wilkinson" target="_blank" rel="noopener noreferrer" className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300">
            linkedin.com/in/andrew-d-wilkinson
          </Link>, London
        </div>
        
        <Section title="Summary">
          <p className="text-zinc-600 dark:text-zinc-400">
            I am a Product & Engineering Manager with 8+ years of experience in the DeFi ecosystem, where I have built and scaled innovative products and led engineering teams. Currently as Head of Brava at Brava Labs, I define product vision and lead cross-functional teams to deliver DeFi yield strategies. At Galleon DAO, I secured $1M+ in funding from top VCs and industry angels, managed $20M+ in investment strategies, and grew a community to over 6,000 members. My leadership approach combines technical expertise with strategic vision, empowering teams to deliver impactful solutions while maintaining a user-centered focus. I excel at translating complex technical concepts into accessible products that drive real adoption.
          </p>
        </Section>
        
        <Section title="Skills">
          <ul className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400">
            <li><strong>Product Leadership</strong> – Experience defining product vision, roadmaps, and go-to-market strategies for blockchain applications with a focus on user experience and adoption</li>
            <li><strong>Team Leadership</strong> – Led cross-functional teams of engineers, designers, and growth specialists across different companies, with a collaborative and outcome-focused approach</li>
            <li><strong>Strategic Vision</strong> – Ability to identify market opportunities and align technical capabilities with business objectives for maximum impact</li>
            <li><strong>DeFi & Crypto Expertise</strong> – Deep understanding of blockchain protocols, smart contracts, and the broader DeFi ecosystem with 8+ years of hands-on experience</li>
            <li><strong>Growth & Community</strong> – Created and executed strategies resulting in significant user adoption and community growth through novel DeFi incentives and partnerships</li>
            <li><strong>Full-Stack Development</strong> – Advanced skills in Typescript, React, Node.js, HTML/CSS, and Cloud Technologies (Firebase, GCP, Cloudflare), and AI tooling</li>
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
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            I enjoy creating micro apps when I get inspired. Using my web and cloud technologies expertise, I leverage agent-style coding tools such as Claude Code and Windsurf & Cursor to build, deploy, and host in production environments rapidly.
          </p>
          
          <div className="space-y-6">
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
          <div className="text-zinc-600 dark:text-zinc-400">
            <p className="mb-3"><span className="font-semibold">Languages & Frameworks:</span> TypeScript, JavaScript, Python, Solidity, React, Node.js, Next.js</p>
            <p className="mb-3"><span className="font-semibold">Web3 Technologies:</span> Web3.js, ethers.js, Viem, Wagmi, Hardhat, EVM</p>
            <p className="mb-3"><span className="font-semibold">Cloud & Infrastructure:</span> Firebase, AWS, GCP, Cloudflare, Docker, CI/CD, GitHub Actions</p>
            <p className="mb-3"><span className="font-semibold">Frontend & Design:</span> HTML, CSS, Tailwind CSS, Material UI, Chakra UI</p>
            <p className="mb-3"><span className="font-semibold">Data & APIs:</span> REST APIs, GraphQL, MongoDB, PostgreSQL, NoSQL</p>
            <p><span className="font-semibold">Developer Tools:</span> Git, Vite, Webpack, Jest, React Testing Library, Vercel, Netlify, NPM, Yarn, AI-tools (Claude Code, Windsurf, Cursor)</p>
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