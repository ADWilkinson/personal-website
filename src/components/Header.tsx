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

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.5 1.5 4 4.25 6.5 1.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
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
}: {
  href: string
  isActive: boolean
  children: React.ReactNode
}) {
  return (
    <li>
      <PopoverButton
        as={Link}
        href={href}
        className={clsx(
          'group flex w-full items-center justify-between px-3 py-2 text-[0.65rem] font-medium uppercase tracking-[0.12em] transition-colors duration-150',
          isActive
            ? 'text-[var(--mono-text)]'
            : 'text-[var(--mono-text-muted)] hover:text-[var(--mono-text)]',
        )}
      >
        {children}
        <span
          aria-hidden="true"
          className={clsx(
            'ml-3 h-px flex-1 bg-[var(--mono-border)] transition-opacity duration-150',
            isActive ? 'opacity-50' : 'opacity-0 group-hover:opacity-30',
          )}
        />
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
      <PopoverButton className="flex items-center gap-2 rounded-sm border border-[var(--mono-border)]/25 bg-[var(--mono-surface)]/70 px-3 py-2 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--mono-text)] shadow-[var(--shadow-sm)] transition-colors duration-150 hover:text-[var(--mono-accent)]">
        Menu
        <ChevronDownIcon className="h-3 w-3 stroke-[var(--mono-text)] stroke-2" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-40 bg-[var(--mono-border)]/10 backdrop-blur-sm duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-6 top-5 z-50 origin-top rounded-sm border border-[var(--mono-border)]/20 bg-[var(--mono-panel)]/90 p-4 shadow-[var(--shadow-lg)] backdrop-blur-sm duration-150 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-[var(--mono-text-muted)]">
            Navigation
          </h2>
          <PopoverButton
            aria-label="Close menu"
            className="rounded-sm p-1 text-[var(--mono-text-muted)] transition-colors duration-150 hover:text-[var(--mono-text)]"
          >
            <CloseIcon className="h-4 w-4" />
          </PopoverButton>
        </div>
        <nav className="mt-3">
          <ul className="space-y-1.5">
            <MobileNavItem href="/about" isActive={currentPath === '/about'}>
              About
            </MobileNavItem>
            <MobileNavItem
              href="/articles"
              isActive={currentPath.startsWith('/articles')}
            >
              Articles
            </MobileNavItem>
            <MobileNavItem
              href="/projects"
              isActive={currentPath.startsWith('/projects')}
            >
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
          'group inline-flex items-center text-[0.65rem] font-medium uppercase tracking-[0.14em] transition-colors duration-150',
          isActive
            ? 'text-[var(--mono-text)]'
            : 'text-[var(--mono-text-muted)] hover:text-[var(--mono-text)]',
        )}
      >
        {children}
        <span
          aria-hidden="true"
          className={clsx(
            'ml-1 h-px w-6 bg-[var(--mono-border)] transition-opacity duration-150',
            isActive ? 'opacity-50' : 'opacity-0 group-hover:opacity-25',
          )}
        />
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
      <ul className="flex items-center gap-7">
        <NavItem href="/about" isActive={currentPath === '/about'}>
          About
        </NavItem>
        <NavItem
          href="/articles"
          isActive={currentPath.startsWith('/articles')}
        >
          Articles
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

function BrandMark() {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--mono-text)] transition-colors duration-150 hover:text-[var(--mono-accent)]"
    >
      Andrew Wilkinson
    </Link>
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
    'inline-flex h-9 w-9 items-center justify-center rounded-sm border border-[var(--mono-border)]/25 bg-[var(--mono-surface)]/80 text-[var(--mono-text)] shadow-[var(--shadow-sm)] transition-colors duration-150 hover:text-[var(--mono-accent)]'

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className={baseClasses}
      >
        <SunIcon className="h-4 w-4 stroke-[var(--mono-text)]" />
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
        <SunIcon className="h-4 w-4 stroke-[var(--mono-text)] stroke-2" />
      ) : (
        <MoonIcon className="h-4 w-4 stroke-[var(--mono-text)] stroke-2" />
      )}
    </button>
  )
}

export function Header() {
  const currentPath = usePathname() ?? '/'

  return (
    <header className="relative">
      <div className="flex items-center justify-between gap-4 border-b border-[var(--mono-border)]/25 pb-6">
        <BrandMark />
        <div className="hidden items-center gap-8 md:flex">
          <DesktopNavigation currentPath={currentPath} />
        </div>
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <MobileNavigation currentPath={currentPath} />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
