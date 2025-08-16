import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: "Projects I've worked on including DeFi protocols, tools, and applications.",
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}