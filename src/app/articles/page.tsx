import { type Metadata } from 'next'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <article className="relative group">
      <div className="flex flex-col space-y-1">
        <time className="text-xs text-zinc-400 dark:text-zinc-500" dateTime={article.date}>
          {formatDate(article.date)}
        </time>
        <h2 className="text-base font-medium text-zinc-800 dark:text-zinc-100">
          <Link href={`/articles/${article.slug}`}>
            <span className="absolute inset-0" />
            {article.title}
          </Link>
        </h2>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {article.description}
        </p>
      </div>
      <div className="mt-3">
        <Link 
          href={`/articles/${article.slug}`}
          className="text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          Read article →
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
      <div className="max-w-2xl">
        <div className="flex flex-col space-y-8">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
