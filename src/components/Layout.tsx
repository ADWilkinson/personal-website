import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Skip link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 rounded-sm bg-[var(--mono-border)] px-4 py-2 text-[var(--mono-surface)] shadow-[2px_2px_0_var(--mono-border-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--mono-accent)]"
      >
        Skip to main content
      </a>
      
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 py-8 sm:px-8 sm:py-12">
        <div className="relative flex w-full flex-1 flex-col border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] px-4 pb-8 pt-6 text-[var(--mono-text)] shadow-[6px_6px_0_var(--mono-border-muted)] transition-colors duration-300 sm:px-8 sm:pb-12 sm:pt-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[var(--mono-border)] opacity-80 dark:opacity-60" aria-hidden="true" />
          <Header />
          <main id="main-content" className="flex-auto" role="main">
            {children}
          </main>
          <Footer />
        </div>
      </div>
      
      {/* Hidden description for external links */}
      <div id="external-link-description" className="sr-only">
        Opens in a new tab
      </div>
    </>
  )
}
