import { type Metadata } from 'next'

import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
  title: "You're subscribed",
  description: 'Thanks for subscribing to my newsletter.',
}

export default function ThankYou() {
  return (
    <SimpleLayout
      title="Thanks for subscribing."
      intro="I'll send you updates when I publish new articles, launch new projects, or have interesting insights to share about blockchain, DeFi, and fintech. You can unsubscribe at any time."
    />
  )
}