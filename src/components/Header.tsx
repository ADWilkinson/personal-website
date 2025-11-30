'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        d="m6 6 8 8M14 6l-8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 6h12M4 10h12M4 14h12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

function SunIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({
  href,
  isActive,
  children,
  index,
}: {
  href: string
  isActive: boolean
  children: React.ReactNode
  index: number
}) {
  return (
    <li
      className="opacity-0 animate-fade-up-subtle"
      style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
    >
      <PopoverButton
        as={Link}
        href={href}
        className={clsx(
          'block py-2.5 text-sm transition-colors duration-200',
          isActive
            ? 'text-[var(--text-primary)]'
            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]',
        )}
      >
        {children}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation({
  currentPath,
}: {
  currentPath: string
}) {
  return (
    <Popover>
      <PopoverButton className="group flex items-center gap-2 text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]">
        <MenuIcon className="h-5 w-5" />
        <span>Menu</span>
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-40 bg-[var(--dj-charcoal)]/60 backdrop-blur-sm duration-200 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-6 top-6 z-50 origin-top rounded-lg border border-[var(--border-muted)]/20 bg-[var(--surface-elevated)] p-6 shadow-lg duration-200 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-muted)] opacity-60">Navigation</span>
          <PopoverButton
            aria-label="Close menu"
            className="rounded-full p-1.5 text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--text-primary)]"
          >
            <CloseIcon className="h-5 w-5" />
          </PopoverButton>
        </div>
        <nav className="mt-4">
          <ul className="space-y-1">
            <MobileNavItem href="/" isActive={currentPath === '/'} index={0}>
              Home
            </MobileNavItem>
            <MobileNavItem href="/about" isActive={currentPath === '/about'} index={1}>
              About
            </MobileNavItem>
            <MobileNavItem href="/articles" isActive={currentPath.startsWith('/articles')} index={2}>
              Writing
            </MobileNavItem>
            <MobileNavItem href="/projects" isActive={currentPath.startsWith('/projects')} index={3}>
              Projects
            </MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function NavItem({
  href,
  isActive,
  children,
}: {
  href: string
  isActive: boolean
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          'relative text-sm transition-colors duration-200',
          isActive
            ? 'text-[var(--text-primary)]'
            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]',
        )}
      >
        {children}
        {isActive && (
          <span className="absolute -bottom-1 left-0 h-px w-full bg-[var(--accent-primary)] opacity-60" />
        )}
      </Link>
    </li>
  )
}

function DesktopNavigation({
  currentPath,
  ...props
}: {
  currentPath: string
} & React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex items-center gap-6">
        <NavItem href="/" isActive={currentPath === '/'}>
          Home
        </NavItem>
        <NavItem href="/about" isActive={currentPath === '/about'}>
          About
        </NavItem>
        <NavItem
          href="/articles"
          isActive={currentPath.startsWith('/articles')}
        >
          Writing
        </NavItem>
        <NavItem
          href="/projects"
          isActive={currentPath.startsWith('/projects')}
        >
          Projects
        </NavItem>
      </ul>
    </nav>
  )
}

function ThemeToggle() {
  let { resolvedTheme, setTheme } = useTheme()
  let otherTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  let [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const baseClasses =
    'group inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-muted)] transition-all duration-200 hover:text-[var(--text-primary)]'

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={baseClasses}
      >
        <SunIcon className="h-5 w-5 stroke-current" />
      </button>
    )
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${otherTheme} theme`}
      className={baseClasses}
      onClick={() => setTheme(otherTheme)}
    >
      {resolvedTheme === 'dark' ? (
        <SunIcon className="h-5 w-5 stroke-current transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <MoonIcon className="h-5 w-5 stroke-current fill-none transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  )
}

export function Header() {
  const currentPath = usePathname() ?? '/'

  return (
    <header className="flex items-center justify-between pb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
      <div className="hidden md:block">
        <DesktopNavigation currentPath={currentPath} />
      </div>
      <div className="md:hidden">
        <MobileNavigation currentPath={currentPath} />
      </div>
      <ThemeToggle />
    </header>
  )
}
