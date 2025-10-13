import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="group relative">
      <div className="border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]">
        {/* Date badge with terminal styling */}
        <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[var(--mono-text-muted)]">
          <span>[</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>]</span>
        </div>

        {/* Title */}
        <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--mono-text)]">
          <Card.Title href={`/articles/${article.slug}`}>
            {article.title}
          </Card.Title>
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-[var(--mono-text-muted)]">
          {article.description}
        </p>

        {/* CTA */}
        <div className="mt-3 text-xs font-bold uppercase tracking-[0.15em]">
          <Card.Cta>Read article</Card.Cta>
        </div>
      </div>
    </article>
  )
}

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Articles about blockchain, DeFi, and technology projects I have worked on.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Articles on Blockchain, DeFi, and Technology"
      intro="My thoughts and experiences in blockchain, DeFi, and technology projects."
    >
      <div className="mx-auto max-w-2xl">
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div key={article.slug}>
              {index > 0 && (
                <div className="mb-6 text-center text-[var(--mono-border)] opacity-50">
                  ─────────────────────────
                </div>
              )}
              <Article article={article} />
            </div>
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
