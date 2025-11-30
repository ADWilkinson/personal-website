import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 bg-[var(--surface-muted)] px-4 py-2 text-[var(--text-primary)]"
      >
        Skip to main content
      </a>

      <div className="mx-auto flex min-h-screen max-w-xl flex-col px-6 py-8">
        <Header />
        <main id="main-content" className="flex-1 py-12" role="main">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
