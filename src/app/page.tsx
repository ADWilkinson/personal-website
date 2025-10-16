import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { ContactMe } from '@/components/ContactMe'
import {
  GitHubIcon,
  XIcon,
} from '@/components/SocialIcons'
import {
  BriefcaseIcon,
} from '@/components/Icons'
import { SOCIAL_LINKS, WORK_EXPERIENCE } from '@/lib/constants'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'


function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-default)]/20 bg-[var(--surface-muted)]/60 transition-transform duration-150 hover:-translate-y-0.5"
      {...props}
    >
      <Icon className="h-3.5 w-3.5 fill-[var(--text-muted)] transition-colors duration-150 group-hover:fill-[var(--accent-primary)]" />
    </Link>
  )
}


interface Role {
  company: string
  title: string
  logo: string | ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="grid grid-cols-[auto_1fr] items-start gap-x-3 gap-y-1 py-3 first:pt-0 last:pb-0">
      <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[var(--border-default)]/20 bg-[var(--surface-muted)]">
        <Image
          src={role.logo}
          alt={`${role.company} company logo`}
          className="h-6 w-6 object-contain grayscale"
          width={24}
          height={24}
          sizes="24px"
        />
      </div>
      <dl className="grid grid-cols-1 gap-y-1 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <dt className="sr-only">Company</dt>
          <dd className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[var(--text-primary)]">
            {role.company}
          </dd>
          <dt className="sr-only">Role</dt>
          <dd className="text-[0.62rem] uppercase tracking-[0.16em] text-[var(--text-muted)]">
            {role.title}
          </dd>
        </div>
        <div className="sm:text-right">
          <dt className="sr-only">Date</dt>
          <dd
            className="text-[0.58rem] uppercase tracking-[0.16em] text-[var(--text-muted)]"
            aria-label={`${startLabel} until ${endLabel}`}
          >
            <time dateTime={startDate}>{startLabel}</time>{' '}
            <span aria-hidden="true">—</span>{' '}
            <time dateTime={endDate}>{endLabel}</time>
          </dd>
        </div>
      </dl>
    </li>
  )
}

function Resume() {
  // Transform WORK_EXPERIENCE to match the Role interface
  let resume: Array<Role> = WORK_EXPERIENCE.map(exp => ({
    ...exp,
    end: exp.end === 'Present' 
      ? { label: 'Present', dateTime: new Date().getFullYear().toString() }
      : exp.end
  }))

  return (
    <div className="rounded-sm border border-[var(--border-default)]/20 bg-[var(--surface-muted)]/70 p-6">
      <h2 className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-primary)]">
        <BriefcaseIcon className="h-5 w-5 flex-none" />
        Work Log
      </h2>
      <ol className="mt-4 divide-y divide-[var(--border-default)]/15">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <div className="mx-auto max-w-5xl space-y-16">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <p className="text-[0.6rem] uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Senior Software Engineer · Founder · Product Builder
          </p>
          <h1 className="font-display text-[2rem] font-semibold tracking-tight text-[var(--text-primary)] sm:text-[2.4rem] sm:leading-[1.1]">
            Shipping trust-minimized finance with hands-on execution.
          </h1>
          <p className="max-w-2xl text-sm leading-relaxed tracking-[0.01em] text-[var(--text-muted)]">
            Building zkTLS-powered fiat-to-crypto onramps at ZKP2P. Previously shipped MVPs that raised $3M+, managed $20M+ in value, and guided a 6,000+ member community. I thrive in the messy zero-to-one with product instincts and engineering ownership.
          </p>
          <div className="flex items-center gap-2">
            <SocialLink
              href={SOCIAL_LINKS.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={SOCIAL_LINKS.twitter}
              aria-label="Follow on Twitter"
              icon={XIcon}
            />
          </div>
        </div>
        <div className="space-y-6">
          <ContactMe />
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <section className="space-y-5">
          <div className="flex flex-col gap-2 border-b border-[var(--border-default)]/15 pb-3">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-primary)]">
              Latest Articles
            </h2>
          </div>
          <div className="space-y-4">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </section>
        <section className="space-y-5">
          <div className="flex flex-col gap-2 border-b border-[var(--border-default)]/15 pb-3">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[var(--text-primary)]">
              Experience
            </h2>
          </div>
          <Resume />
        </section>
      </div>
    </div>
  )
}
