import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: 'CV',
  description: 'My professional experience, skills, and education.',
}

export default function CV() {
  return (
    <SimpleLayout
      title="Curriculum Vitae"
      intro="My professional experience, skills, and education in blockchain, DeFi, and technology."
    >
      <div className="prose dark:prose-invert">
        <h2>Andrew Wilkinson</h2>
        <p><a href="mailto:gm@andrewwilkinson.io">gm@andrewwilkinson.io</a> | <a href="https://www.linkedin.com/in/andrew-d-wilkinson" target="_blank" rel="noopener noreferrer">linkedin.com/in/andrew-d-wilkinson</a>, London</p>
        
        <h2>Summary</h2>
        <p>
          I am a Product and Technology Leader with 8+ years of experience across blockchain, DeFi, and fintech sectors, where I have built and scaled innovative products and led engineering teams. At Galleon DAO, I secured $1M+ in funding from top VCs and industry angels, managed $20M+ in investment strategies, and grew a community to over 6,000 members. Throughout my career, I've successfully combined technical expertise with strategic thinking to deliver impactful solutions across various technology domains, consistently translating complex business requirements into successful products.
        </p>
        
        <h2>Skills</h2>
        <ul>
          <li><strong>Product & Strategy</strong> – Experience defining product vision, roadmaps, and strategies for blockchain applications in the Ethereum ecosystem</li>
          <li><strong>Team Leadership</strong> – Led engineering, growth, and product teams across different companies and domains to deliver on their respective roadmaps</li>
          <li><strong>DeFi & Crypto Expertise</strong> – Deep understanding of blockchain protocols, smart contracts, and the broader DeFi ecosystem</li>
          <li><strong>Growth & Community</strong> – Created and executed strategies resulting in significant user adoption and community growth through novel DeFi incentives and partnerships</li>
          <li><strong>Full-Stack Development</strong> – Advanced skills in Typescript, React, Node.js, HTML/CSS, and Cloud Technologies (Firebase, GCP, Cloudflare), and AI tooling</li>
        </ul>
        
        <h2>Experience</h2>
        
        <h3>Brava Labs</h3>
        <p><strong>Head of Brava</strong> (Dec 2024 – Present)</p>
        <p><em>A DeFi protocol focused on creating risk-adjusted onchain yield strategies.</em></p>
        <p>
          I defined the MVP of Brava's stablecoin yield platform and product roadmap for risk-adjusted onchain yield strategies. Led a cross-functional team of engineers, growth specialists, and designers to execute the product vision. Managed stakeholder relationships and reporting while ensuring the alignment of business objectives with technical feasibility. Defined and created product requirements for our long-term roadmap that integrated key technologies (e.g., Circle CCTP V2).
        </p>
        
        <p><strong>Advisor</strong> (Oct 2024 – Dec 2024)</p>
        <p>
          Provided strategic guidance on how to navigate and effectively connect with crypto-natives as a new project. Advised on community-building strategies and market positioning within the competitive DeFi landscape.
        </p>
        
        <h3>NashPoint</h3>
        <p><strong>Software Engineer</strong> (Oct 2024 – Dec 2024)</p>
        <p><em>Institutional Grade Asset Management Onchain</em></p>
        <p>
          Contributed to building the technical foundation for NashPoint's web application. Implemented KYC whitelisting integration to ensure regulatory compliance. Developed functionality for interaction with smart contracts deployed on the EVM. Optimized frontend performance and user experience for blockchain interactions.
        </p>
        
        <h3>Galleon DAO</h3>
        <p><strong>Founder</strong> (01/2022 – 05/2023)</p>
        <p><em>A DeFi protocol creating structured products and automated investment strategies.</em></p>
        <p>
          I led product strategy and full-stack development from concept to launch, securing $1M in funding. Founded and guided the project through initial development, hiring and managing six core team members while transitioning to a tokenised DAO with onchain governance. Built a community of over 6,000 members and onboarded 10+ DAO contributors. Attracted $20M+ in product investments while ensuring protocol security and reliability. Established strategic partnerships and integrations within the broader DeFi ecosystem.
        </p>
        
        <h3>Set Labs</h3>
        <p><strong>Advisor</strong> (02/2022 – 08/2022)</p>
        <p><em>A leading DeFi protocol for creating, managing, and trading tokenized structured products.</em></p>
        <p>
          Advised on community engagement strategies and governance mechanisms. Assisted in identifying potential partnerships and integration opportunities within the DeFi ecosystem.
        </p>
        
        <p><strong>Growth Lead & Community Strategy</strong> (04/2021 – 02/2022)</p>
        <p>
          Spearheaded growth initiatives resulting in measurable increases in user adoption and token utilization. Developed and executed community management strategies across Twitter, Discord, and other platforms. Created engaging educational content to improve user understanding of Set Protocol's offerings. Identified and pursued business development opportunities, resulting in new strategic partnerships.
        </p>
        
        <h3>R3</h3>
        <p><strong>Solutions Engineer</strong> (02/2021 – 11/2021)</p>
        <p><em>An enterprise DLT and confidential computing company developing Corda.</em></p>
        <p>
          Designed and implemented custom DLT applications using R3 Corda and Conclave frameworks. Collaborated with clients to translate complex business requirements into technical solutions. Contributed to product strategy and engineering planning for enterprise blockchain applications. Developed proof-of-concept applications showcasing privacy-preserving technologies.
        </p>
        
        <h3>Worldpay</h3>
        <p><strong>Blockchain Application Architect</strong> (02/2020 – 02/2021)</p>
        <p><em>A leading payment processing company providing technology solutions worldwide.</em></p>
        <p>
          Led architectural design of a Corda-based DLT system to improve B2B payment processes. Managed a team of 12 engineers, overseeing development and testing efforts. Served as subject matter expert for SAFe planning events, bridging product and technical requirements. Influenced framework, tool, and design choices as the project technology lead.
        </p>
        
        <p><strong>Blockchain Software Engineer & Scrum Master</strong> (06/2019 – 02/2020)</p>
        <p>
          Delivered full-stack product features for a Corda-based DLT system, including API and UI development. Established development standards and best practices for a new team within Worldpay. Facilitated the transition to the SAFe framework as acting Scrum Master.
        </p>
        
        <h3>Sky</h3>
        <p><strong>Software Engineer</strong> (10/2016 – 06/2019)</p>
        <p><em>A leading media company providing TV, broadband, and mobile services.</em></p>
        <p>
          Developed 'Sky Analytics', an end-to-end advertising and analytics portal for campaign planning. Implemented highly flexible audience segmentation features for targeted advertising. Used JavaScript, React, and Node.js to create responsive and scalable web applications.
        </p>
        
        <h2>Education</h2>
        <p>Bachelor's Degree with Honours in Biological Sciences (2.1), University of Brighton (09/2012 – 06/2015)</p>
        
        <h2>Hobby Projects</h2>
        <p>I enjoy creating micro apps when I get inspired. Using my web and cloud technologies expertise, I leverage agent-style coding tools such as Claude Code and Windsurf & Cursor to build, deploy, and host in production environments rapidly.</p>
        
        <ul>
          <li><strong>Wojak Jones</strong> - Yield Farming DeFi Assistant (Firebase, Telegram API, Virtuals Framework)<br />
          Developed a Virtuals agent integrated with Telegram that provides real-time yield farming opportunities and DeFi analytics. <a href="https://wojakjones.xyz" target="_blank" rel="noopener noreferrer">wojakjones.xyz</a> | <a href="https://t.me/WojakJonesBot" target="_blank" rel="noopener noreferrer">t.me/WojakJonesBot</a></li>
          
          <li><strong>ChordCraft</strong> - AI Chord Progression Generator (React, Firebase, OpenAI API)<br />
          Created an AI tool that generates unique chord progressions based on musical style preferences. <a href="https://chordcraft.io" target="_blank" rel="noopener noreferrer">chordcraft.io</a> | <a href="https://github.com/ADWilkinson/chordcraft-app" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          
          <li><strong>Ultrasoundapps</strong> - Crypto Apps Homepage (React, Firebase)<br />
          Built a centralized platform showcasing various DeFi and cryptocurrency applications. <a href="https://ultrasoundapps.com" target="_blank" rel="noopener noreferrer">ultrasoundapps.com</a> | <a href="https://github.com/galleonlabs/ultrasoundapps" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          
          <li><strong>Privateer</strong> - Pairs Trading Bot (Python, Trading APIs, Data Analysis)<br />
          Designed a hyperliquid-based trading bot using correlation/mean reversion strategies. <a href="https://github.com/ADWilkinson/privateer-capital" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        </ul>
        
        <h2>Technical Skills</h2>
        <p>TypeScript, JavaScript, Python, Solidity, React, Node.js, Next.js, Firebase, MongoDB, Web3.js, ethers.js, HTML, CSS, Tailwind CSS, REST APIs, GraphQL, AWS, GCP, Cloudflare, Git, GitHub Actions, CI/CD, Docker, EVM, Telegram API, OpenAI API, PostgreSQL, Redux, Express, OAuth, JWT, NoSQL, Material UI, Chakra UI, Vite, Webpack, Jest, React Testing Library, Vercel, Netlify, NPM, Yarn, Viem, Web3, Ethers, Wagmi, Hardhat, AI-tools (Claude Code, Windsurf, Cursor)</p>
        
        <h2>Languages & Interests</h2>
        <p><strong>Languages:</strong> English (Native)<br />
        <strong>Interests:</strong> Music (piano & guitar), travel & socialising, algorithmic trading, emerging technologies</p>
      </div>
    </SimpleLayout>
  )
}