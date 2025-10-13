import { type Metadata } from 'next'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="grid gap-y-3 py-6 first:pt-0 last:pb-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-x-8">
      <time
        dateTime={article.date}
        className="text-[0.6rem] uppercase tracking-[0.16em] text-[var(--mono-text-muted)]"
      >
        {formatDate(article.date)}
      </time>
      <div className="space-y-2">
        <h2 className="text-sm font-semibold tracking-[0.08em] text-[var(--mono-text)]">
          {article.title}
        </h2>
        <p className="text-sm leading-relaxed text-[var(--mono-text-muted)]">
          {article.description}
        </p>
        <Link href={`/articles/${article.slug}`} className="inline-flex items-center">
          <Card.Cta>Read article</Card.Cta>
        </Link>
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
      <div className="mx-auto max-w-3xl divide-y divide-[var(--mono-border)]/12">
        {articles.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </div>
    </SimpleLayout>
  )
}
