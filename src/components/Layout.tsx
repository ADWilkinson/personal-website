import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 border border-[var(--border-default)] bg-[var(--surface-muted)] px-4 py-2 text-[var(--text-primary)] shadow-[var(--shadow-sm)] transition-transform focus:-translate-y-1"
      >
        Skip to main content
      </a>

      <div className="relative min-h-screen">
        <div className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 pb-10 pt-8 sm:px-10 lg:px-12">
          <Header />
          <main
            id="main-content"
            className="flex-1 py-12 sm:py-16"
            role="main"
          >
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
