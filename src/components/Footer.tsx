import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--mono-text-muted)] transition-colors duration-200 hover:text-[var(--mono-accent)]"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-[var(--mono-border)] bg-[var(--mono-surface)]">
      <div className="px-6 py-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/articles">Articles</NavLink>
            <NavLink href="/projects">Projects</NavLink>
          </div>
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--mono-text-muted)]">
            &copy; {new Date().getFullYear()} Andrew Wilkinson
            <span className="ml-2 inline-block text-[var(--mono-text-muted)] opacity-0 transition-opacity duration-300 hover:opacity-100">Davy Jones</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
