'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { QuillIcon, ArrowRightIcon } from '@/components/Icons'

// Static article data (in a real app, this would come from getAllArticles)
const ARTICLES = [
  {
    slug: 'stablecoin-summer',
    title: 'Stablecoin Summer',
    description: 'Why 2025 might be the year stablecoins go mainstream, and what that means for crypto.',
    date: '2025-02-05'
  },
  {
    slug: 'building-davy-jones-intern',
    title: 'Building Davy Jones Intern',
    description: 'How I built a Telegram bot to help manage a DeFi community using Claude and Firebase.',
    date: '2025-01-18'
  },
  {
    slug: 'crypto-journey',
    title: 'My Crypto Journey',
    description: 'From curious developer to DeFi founder: lessons learned along the way.',
    date: '2024-09-05'
  },
  {
    slug: 'building-an-automated-trading-system',
    title: 'Building an Automated Trading System',
    description: 'Technical deep-dive into building a trading bot with Python and various APIs.',
    date: '2024-06-24'
  },
]

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
  article: typeof ARTICLES[0]
  index: number
}) {
  return (
    <li
      className="group opacity-0 animate-fade-up-subtle"
      style={{ animationDelay: `${100 + index * 50}ms`, animationFillMode: 'forwards' }}
    >
      <Link
        href={`/articles/${article.slug}`}
        className="block py-4 -mx-2 px-2 rounded-lg transition-all duration-200 hover:bg-[var(--text-primary)]/[0.03] hover:shadow-sm hover:-translate-y-px"
      >
        <div className="flex items-baseline justify-between gap-4">
          <span className="text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 group-hover:text-[var(--accent-primary)]">
            {article.title}
          </span>
          <time
            className="text-xs text-[var(--text-primary)] opacity-50 tabular-nums shrink-0"
            dateTime={article.date}
          >
            {formatDate(article.date)}
          </time>
        </div>
        <p className="mt-1.5 text-sm text-[var(--text-muted)] line-clamp-2 transition-colors duration-200 group-hover:text-[var(--text-muted)]/80">
          {article.description}
        </p>
        <span className="inline-flex items-center gap-1 mt-2 text-xs text-[var(--accent-primary)] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
          Read more
          <ArrowRightIcon size={10} />
        </span>
      </Link>
    </li>
  )
}

function ExpandButton({
  expanded,
  onClick,
  showMoreText,
  showLessText,
}: {
  expanded: boolean
  onClick: () => void
  showMoreText: string
  showLessText: string
}) {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-1 text-xs text-[var(--text-muted)] transition-colors duration-200 hover:text-[var(--accent-primary)] pt-3"
    >
      <span>{expanded ? showLessText : showMoreText}</span>
      <ArrowRightIcon
        size={10}
        className={`transition-transform duration-200 ${expanded ? 'rotate-[-90deg]' : 'rotate-90'}`}
      />
    </button>
  )
}

export default function ArticlesIndex() {
  const [showAll, setShowAll] = useState(false)
  const visibleArticles = showAll ? ARTICLES : ARTICLES.slice(0, 4)

  return (
    <SimpleLayout
      icon={QuillIcon}
      title="Writing"
      intro="Thoughts on building products, blockchain, and DeFi."
    >
      <ul className="space-y-0">
        {visibleArticles.map((article, index) => (
          <ArticleItem key={article.slug} article={article} index={index} />
        ))}
      </ul>
      {ARTICLES.length > 4 && (
        <ExpandButton
          expanded={showAll}
          onClick={() => setShowAll(!showAll)}
          showMoreText={`Show ${ARTICLES.length - 4} more articles`}
          showLessText="Show less"
        />
      )}
    </SimpleLayout>
  )
}
