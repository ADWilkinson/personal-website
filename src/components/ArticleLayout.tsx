'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  article,
  children,
}: {
  article: ArticleWithSlug
  children: React.ReactNode
}) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="mx-auto max-w-2xl">
        {/* Back button - inline on mobile, separate row on desktop */}
        {previousPathname && (
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back to articles"
            className="group mb-8 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[var(--border-default)]/20 bg-[var(--surface-elevated)] shadow-sm transition-all duration-200 hover:-translate-y-px hover:shadow-md"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-[var(--text-muted)] transition-colors duration-150 group-hover:stroke-[var(--text-primary)]" />
          </button>
        )}
        <article>
          <header className="flex flex-col">
            <time
              dateTime={article.date}
              className="flex items-center text-sm text-[var(--text-muted)]"
            >
              <span className="h-5 w-0.5 rounded-full bg-[var(--accent-primary)]/50" />
              <span className="ml-3 opacity-70 tabular-nums">
                {formatDate(article.date)}
              </span>
            </time>
            <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              {article.title}
            </h1>
          </header>
          <Prose className="mt-10" data-mdx-content>
            {children}
          </Prose>
        </article>
      </div>
    </Container>
  )
}
