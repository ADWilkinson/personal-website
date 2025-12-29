'use client'

import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import clsx from 'clsx'

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        d="m6 6 8 8M14 6l-8 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        d="M3 5h14M3 10h14M3 15h14"
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
  onClick,
  children,
  index = 0,
}: {
  href: string
  isActive: boolean
  onClick: () => void
  children: React.ReactNode
  index?: number
}) {
  return (
    <li
      className="opacity-0 animate-fade-up-subtle"
      style={{
        animationDelay: `${80 + index * 40}ms`,
        animationFillMode: 'forwards',
      }}
    >
      <Link
        href={href}
        onClick={onClick}
        className={clsx(
          'block py-3 text-sm rounded-md -mx-2 px-2',
          'transition-[color,background-color] duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-inset',
          isActive
            ? 'text-[var(--text-primary)] font-medium'
            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--text-primary)]/[0.03]',
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      >
        {children}
      </Link>
    </li>
  )
}

function MobileNavigation({
  currentPath,
}: {
  currentPath: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  const closeMenu = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu on escape key and lock body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeMenu])

  const menuContent = isOpen ? (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 animate-menu-backdrop"
        style={{ zIndex: 99998 }}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className="fixed left-4 right-4 top-4 rounded-xl border border-[var(--border-default)]/20 bg-[#f4eee8] p-6 shadow-2xl dark:bg-[#27272a] animate-menu-panel"
        style={{ zIndex: 99999 }}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between">
          <span
            className="text-xs text-[var(--text-muted)] opacity-0 animate-fade-in"
            style={{ animationDelay: '50ms', animationFillMode: 'forwards' }}
          >
            Navigation
          </span>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="rounded-full p-2 text-[var(--text-muted)] hover:bg-[var(--text-primary)]/5 hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-inset"
            style={{
              transitionProperty: 'color, background-color',
              transitionDuration: '200ms',
              transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            <CloseIcon className="h-5 w-5 transition-transform duration-200 hover:rotate-90" style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }} />
          </button>
        </div>
        <nav className="mt-4">
          <ul className="divide-y divide-[var(--border-default)]/10">
            <MobileNavItem href="/" isActive={currentPath === '/'} onClick={closeMenu} index={0}>
              Home
            </MobileNavItem>
            <MobileNavItem href="/about" isActive={currentPath === '/about'} onClick={closeMenu} index={1}>
              About
            </MobileNavItem>
            <MobileNavItem href="/articles" isActive={currentPath.startsWith('/articles')} onClick={closeMenu} index={2}>
              Writing
            </MobileNavItem>
            <MobileNavItem href="/projects" isActive={currentPath.startsWith('/projects')} onClick={closeMenu} index={3}>
              Projects
            </MobileNavItem>
            <MobileNavItem href="/ai" isActive={currentPath.startsWith('/ai')} onClick={closeMenu} index={4}>
              AI Tools
            </MobileNavItem>
          </ul>
        </nav>
      </div>
    </>
  ) : null

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-1.5 rounded-lg border border-[var(--border-default)]/20 bg-[var(--surface-muted)] px-3 py-2 text-sm text-[var(--text-primary)] hover:border-[var(--border-default)]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-default)]"
        style={{
          transitionProperty: 'border-color, box-shadow',
          transitionDuration: '200ms',
          transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}
        aria-label="Open menu"
      >
        <span>Menu</span>
        <ChevronDownIcon
          className="h-2.5 w-2.5 stroke-current stroke-2 transition-transform duration-200 group-hover:translate-y-0.5"
          style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
        />
      </button>

      {mounted && menuContent && createPortal(menuContent, document.body)}
    </>
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
          'relative text-sm group py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-default)] rounded-sm',
          'transition-[color,transform] duration-200',
          isActive
            ? 'text-[var(--text-primary)]'
            : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]',
          !isActive && 'hover:-translate-y-px',
        )}
        style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
      >
        {children}
        {/* Animated underline with refined easing */}
        <span
          className={clsx(
            'absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-[var(--accent-primary)] rounded-full',
            'transition-[transform,opacity] duration-300',
            isActive
              ? 'opacity-50 scale-x-100'
              : 'opacity-0 scale-x-0 group-hover:opacity-35 group-hover:scale-x-100',
          )}
          style={{
            transformOrigin: 'left',
            transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
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
        <NavItem
          href="/ai"
          isActive={currentPath.startsWith('/ai')}
        >
          AI Tools
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
    'group inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-muted)] hover:bg-[var(--text-primary)]/5 hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-default)]'

  const iconTransition = {
    transitionProperty: 'transform',
    transitionDuration: '300ms',
    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  }

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
        <SunIcon
          className="h-5 w-5 stroke-current group-hover:rotate-[30deg] group-hover:scale-110"
          style={iconTransition}
        />
      ) : (
        <MoonIcon
          className="h-5 w-5 stroke-current fill-none group-hover:-rotate-12 group-hover:scale-110"
          style={iconTransition}
        />
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
