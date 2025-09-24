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
      className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--mono-text-muted)] transition-colors duration-150 hover:text-[var(--mono-accent)]"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 flex-none">
      <ContainerOuter>
        <div className="border-t-2 border-[var(--mono-border)] pb-12 pt-8">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[var(--mono-text)]">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
              </div>
              <p className="text-[0.65rem] uppercase tracking-[0.12em] text-[var(--mono-text-muted)]">
                &copy; {new Date().getFullYear()} Andrew Wilkinson · All rights reserved.
                <span className="ml-2 text-[var(--mono-text-muted)] opacity-0 transition-opacity duration-300 hover:opacity-100">Davy Jones</span>
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
