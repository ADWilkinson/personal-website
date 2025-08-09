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
    <Link className="group -m-1 p-1 transition-transform duration-200 hover:scale-110" {...props}>
      <Icon className="h-5 w-5 fill-zinc-500 transition-all duration-200 group-hover:fill-teal-500 dark:fill-zinc-400 dark:group-hover:fill-teal-400" />
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
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition-all duration-200 hover:shadow-lg hover:ring-zinc-900/10 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:hover:border-zinc-600">
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
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
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
    <>
      <Container className="mt-9">
        <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-medium tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
              Senior Software Engineer at ZKP2P.<br />
              Former VC-backed Founder.
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              Building trust-minimized fiat-to-crypto onramps using zkTLS. Previously shipped MVPs that raised $3M+ combined, managed $20M+ in value, and built a 6,000+ member community. Specialize in 0-to-1 products with hands-on technical execution.
            </p>
            <div className="mt-6 flex gap-6">
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
            <div className="mt-6 lg:mt-0">
              <ContactMe />
            </div>
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}