import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Tools',
  description: 'AI tools, Claude Code skills, and automation I build and maintain.',
}

export default function AILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
