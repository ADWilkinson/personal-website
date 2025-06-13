// Centralized constants for the website
import logoGalleon from '@/images/logos/web-galleon.png'
import logoSet from '@/images/logos/web-set.jpg'
import logoWorldpay from '@/images/logos/web-worldpay.jpg'
import logoR3 from '@/images/logos/web-r3.png'
import logoBrava from '@/images/logos/web-brava.jpg'
import logoSky from '@/images/logos/web-sky.png'

export const SITE_CONFIG = {
  name: 'Andrew Wilkinson',
  email: 'gm@andrewwilkinson.io',
  description: 'AI & Crypto OG',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://andrewwilkinson.io',
}

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/davyjones0x',
  github: 'https://github.com/ADWilkinson',
  linkedin: 'https://www.linkedin.com/in/andrew-d-wilkinson/',
  instagram: 'https://instagram.com/adwilkinson_',
}

export const COMPANY_LOGOS = {
  galleon: logoGalleon,
  set: logoSet,
  worldpay: logoWorldpay,
  r3: logoR3,
  brava: logoBrava,
  sky: logoSky,
}

export const WORK_EXPERIENCE = [
  {
    company: 'Brava Labs',
    title: 'Head of Brava & Engineering Manager',
    logo: COMPANY_LOGOS.brava,
    start: '2024',
    end: 'Present',
  },
  {
    company: 'Galleon DAO',
    title: 'Founder',
    logo: COMPANY_LOGOS.galleon,
    start: '2022',
    end: '2023',
  },
  {
    company: 'Set Labs',
    title: 'Growth Lead & Advisor',
    logo: COMPANY_LOGOS.set,
    start: '2021',
    end: '2022',
  },
  {
    company: 'R3',
    title: 'Solutions Engineer',
    logo: COMPANY_LOGOS.r3,
    start: '2021',
    end: '2021',
  },
  {
    company: 'Worldpay',
    title: 'Blockchain Application Architect',
    logo: COMPANY_LOGOS.worldpay,
    start: '2020',
    end: '2021',
  },
  {
    company: 'Sky',
    title: 'Software Engineer',
    logo: COMPANY_LOGOS.sky,
    start: '2016',
    end: '2019',
  },
]