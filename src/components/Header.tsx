'use client'

import { useEffect, useRef, useState } from 'react'
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

import { Container } from '@/components/Container'

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
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
        d="M1.75 1.75 4 4.25l2.25-2.5"
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
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <PopoverButton
        as={Link}
        href={href}
        className="block border-l-2 border-transparent px-3 py-2 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--mono-text)] transition-all duration-200 hover:border-[var(--mono-accent)] hover:text-[var(--mono-accent)]"
      >
        {children}
      </PopoverButton>
    </li>
  )
}

function MobileNavigation(
  props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
  return (
    <Popover {...props}>
      <PopoverButton className="group flex items-center border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] px-3 py-2 text-[0.625rem] font-bold uppercase tracking-[0.12em] text-[var(--mono-text)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]">
        Menu
        <ChevronDownIcon className="ml-2 h-3 w-3 stroke-[var(--mono-text)] stroke-2" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-[var(--mono-border)]/40 backdrop-blur-sm duration-200 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-4 z-50 origin-top border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] p-4 shadow-[var(--shadow-lg)] duration-200 data-closed:scale-95 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-[0.625rem] font-bold uppercase tracking-[0.15em] text-[var(--mono-text)]">
            Navigation
          </h2>
          <PopoverButton aria-label="Close menu" className="p-1">
            <CloseIcon className="h-5 w-5 text-[var(--mono-text)]" />
          </PopoverButton>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <MobileNavItem href="/about">About</MobileNavItem>
            <MobileNavItem href="/articles">Articles</MobileNavItem>
            <MobileNavItem href="/projects">Projects</MobileNavItem>
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  let isActive = usePathname() === href

  return (
    <li className="relative">
      <Link
        href={href}
        className={clsx(
          'block px-4 py-3 text-[0.625rem] font-bold uppercase tracking-[0.12em] transition-colors duration-200',
          isActive
            ? 'bg-[var(--mono-border)] text-[var(--mono-surface)]'
            : 'text-[var(--mono-text)] hover:bg-[var(--mono-surface-alt)]',
        )}
      >
        {children}
      </Link>
    </li>
  )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul className="flex items-center border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] shadow-[var(--shadow-md)]">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
      </ul>
    </nav>
  )
}

function HomePill() {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] text-[var(--mono-text)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
    >
      <span className="text-lg font-bold leading-none">⌂</span>
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

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] shadow-[var(--shadow-sm)]"
      >
        <SunIcon className="h-4 w-4 stroke-[var(--mono-text)]" />
      </button>
    )
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${otherTheme} theme`}
      className="inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] text-[var(--mono-text)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
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

function clamp(number: number, a: number, b: number) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

export function Header() {
  return (
    <header className="border-b-2 border-[var(--mono-border)] bg-[var(--mono-surface)]">
      <div className="px-6 py-4 sm:px-8 lg:px-12">
        <nav className="flex items-center justify-between">
          {/* Home button */}
          <HomePill />

          {/* Desktop navigation - centered */}
          <div className="hidden md:block">
            <DesktopNavigation />
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Mobile menu */}
            <div className="md:hidden">
              <MobileNavigation />
            </div>
            {/* Theme toggle */}
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}
