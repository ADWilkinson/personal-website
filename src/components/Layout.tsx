import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Skip link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-zinc-900 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
      >
        Skip to main content
      </a>
      
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <main id="main-content" className="flex-auto" role="main">
          {children}
        </main>
        <Footer />
      </div>
      
      {/* Hidden description for external links */}
      <div id="external-link-description" className="sr-only">
        Opens in a new tab
      </div>
    </>
  )
}
