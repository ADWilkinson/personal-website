import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { ContactMe } from '@/components/ContactMe'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  TelegramIcon,
} from '@/components/SocialIcons'
import {
  MailIcon,
  BriefcaseIcon,
  ArrowDownIcon,
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
      className="group inline-flex h-10 w-10 items-center justify-center border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] shadow-[3px_3px_0_var(--mono-border-muted)] transition-transform duration-150 hover:-translate-y-0.5"
      {...props}
    >
      <Icon className="h-4 w-4 fill-[var(--mono-text)] transition-colors duration-150 group-hover:fill-[var(--mono-accent)]" />
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
    <li className="flex gap-4 border-b border-dashed border-[var(--mono-border-muted)] pb-4 last:border-b-0 last:pb-0">
      <div className="relative mt-1 flex h-12 w-12 flex-none items-center justify-center border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] shadow-[4px_4px_0_var(--mono-border-muted)]">
        <Image 
          src={role.logo} 
          alt={`${role.company} company logo`} 
          className="h-8 w-8 object-contain grayscale" 
          width={28}
          height={28}
          sizes="28px"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[var(--mono-text)]">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-[0.7rem] uppercase tracking-[0.18em] text-[var(--mono-text-muted)]">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-[0.65rem] uppercase tracking-[0.18em] text-[var(--mono-text-muted)]"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
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
    <div className="border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] p-6 shadow-[4px_4px_0_var(--mono-border-muted)]">
      <h2 className="flex items-center gap-3 text-[0.75rem] font-semibold uppercase tracking-[0.28em] text-[var(--mono-text)]">
        <BriefcaseIcon className="h-5 w-5 flex-none" />
        Work Log
      </h2>
      <ol className="mt-6 space-y-5">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      {/* <Button href="/cv" variant="secondary" className="group mt-6 w-full">
        View Full CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <div className="mx-auto max-w-5xl space-y-12">
      {/* Hero Section */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-2xl font-bold uppercase tracking-[0.08em] text-[var(--mono-text)] sm:text-3xl">
            Senior Software Engineer<br />
            Former VC-backed Founder
          </h1>
          <p className="text-sm leading-relaxed tracking-[0.02em] text-[var(--mono-text-muted)]">
            Building trust-minimized fiat-to-crypto onramps using zkTLS. Previously shipped MVPs that raised $3M+ combined, managed $20M+ in value, and built a 6,000+ member community. Specialize in 0-to-1 products with hands-on technical execution.
          </p>
          <div className="flex gap-3">
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
        <div className="lg:col-span-1">
          <ContactMe />
        </div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Articles */}
        <div className="space-y-4">
          <h2 className="text-[0.625rem] font-bold uppercase tracking-[0.15em] text-[var(--mono-text)]">
            Latest Articles
          </h2>
          <div className="space-y-4">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div className="space-y-4">
          <h2 className="text-[0.625rem] font-bold uppercase tracking-[0.15em] text-[var(--mono-text)]">
            Experience
          </h2>
          <Resume />
        </div>
      </div>
    </div>
  )
}
