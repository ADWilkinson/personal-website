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
    <article className="group relative py-10 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
      <time className="text-xs text-zinc-400 dark:text-zinc-500">
        {formatDate(article.date)}
      </time>
      <h3 className="mt-3 text-base font-medium text-zinc-800 dark:text-zinc-100">
        <Link href={`/articles/${article.slug}`}>
          <span className="absolute inset-0" />
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {article.description}
      </p>
    </article>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="-m-1 p-1" {...props}>
      <Icon className="h-5 w-5 fill-zinc-600 dark:fill-zinc-400" />
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
    <li className="flex gap-4 py-6 first:pt-0 last:pb-0">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800 overflow-hidden">
        <Image 
          src={role.logo} 
          alt={`${role.company} company logo`} 
          className="h-7 w-7 object-contain rounded-full" 
          width={28}
          height={28}
          sizes="28px"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
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
    <div>
      <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
        Work
      </h2>
      <div className="mt-8">
        <ol className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
        <Link 
          href="/cv" 
          className="inline-block mt-8 text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          View Full CV →
        </Link>
      </div>
    </div>
  )
}


export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-16 sm:mt-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-medium tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
              Senior Software Engineer at ZKP2P. Former VC-backed Founder.
            </h1>
            <p className="mt-6 text-sm leading-loose text-zinc-600 dark:text-zinc-400">
              Building trust-minimized fiat-to-crypto onramps using zkTLS. Previously shipped MVPs that raised $3M+ combined, managed $20M+ in value, and built a 6,000+ member community. Specialize in 0-to-1 products with hands-on technical execution.
            </p>
            <div className="mt-8 flex gap-6">
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
            <div className="mt-0 lg:mt-6">
              <ContactMe />
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-32">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}