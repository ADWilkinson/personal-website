import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { QuillIcon, ArrowRightIcon } from '@/components/Icons'
import { getAllArticles } from '@/lib/articles'
import type { ArticleWithSlug } from '@/lib/articles'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

function ArticleItem({
  article,
  index,
}: {
  article: ArticleWithSlug
  index: number
}) {
  return (
    <li
      className="group opacity-0 animate-fade-up-subtle"
      style={{ animationDelay: `${100 + index * 50}ms`, animationFillMode: 'forwards' }}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="block py-4 -mx-2 px-2 rounded-lg transition-all duration-200 hover:bg-[var(--text-primary)]/[0.03] hover:-translate-y-px"
      >
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)]">
            {article.title}
          </span>
          <time
            className="text-xs text-[var(--text-muted)] opacity-60 tabular-nums shrink-0 transition-opacity duration-200 group-hover:opacity-80"
            dateTime={article.date}
          >
            {formatDate(article.date)}
          </time>
        </div>
        <p className="mt-1.5 text-sm text-[var(--text-muted)] opacity-80 line-clamp-2">
          {article.description}
        </p>
        <span className="inline-flex items-center gap-1 mt-2.5 text-xs text-[var(--accent-primary)] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          Read more
          <ArrowRightIcon size={10} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </Link>
    </li>
  )
}

export default async function ArticlesIndex() {
  const articles = await getAllArticles()

  return (
    <SimpleLayout
      icon={QuillIcon}
      title="Writing"
      intro="Thoughts on building products, blockchain, and DeFi."
    >
      <ul className="space-y-0">
        {articles.map((article, index) => (
          <ArticleItem key={article.slug} article={article} index={index} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
