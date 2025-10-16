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
      className="text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] transition-colors duration-90 hover:text-[var(--text-primary)]"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border-muted)] pt-6">
      <div className="flex flex-col gap-4 text-center text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-start">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/articles">Articles</NavLink>
          <NavLink href="/projects">Projects</NavLink>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Andrew Wilkinson
          <span className="ml-2 hidden text-[var(--text-muted)] transition-opacity duration-90 dark:inline-block dark:opacity-0 dark:hover:opacity-80">
            Davy Jones
          </span>
        </p>
      </div>
    </footer>
  )
}
