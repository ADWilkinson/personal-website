import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Skip link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] px-4 py-2 text-[var(--mono-text)] shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow"
      >
        Skip to main content
      </a>

      <div className="relative min-h-screen flex items-center justify-center">
        {/* Centered card container */}
        <div className="w-full max-w-6xl mx-auto p-8">
          {/* Main card */}
          <div className="relative flex min-h-[calc(100vh-8rem)] flex-col border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] shadow-[var(--shadow-lg)]">
            {/* Top accent bar */}
            <div className="h-1 bg-[var(--mono-border)] opacity-90" aria-hidden="true" />

            {/* Header */}
            <Header />

            {/* Main content area */}
            <main
              id="main-content"
              className="flex-1 px-6 py-8 sm:px-8 lg:px-12"
              role="main"
            >
              {children}
            </main>

            {/* Footer */}
            <Footer />
          </div>
        </div>
      </div>

      {/* Hidden description for external links */}
      <div id="external-link-description" className="sr-only">
        Opens in a new tab
      </div>
    </>
  )
}
