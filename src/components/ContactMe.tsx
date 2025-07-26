import { Card } from '@/components/Card'
import Link from 'next/link'
import { LinkedInIcon, TelegramIcon } from '@/components/SocialIcons'

function ContactIcon({
  icon: Icon,
  href,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="flex items-center rounded-lg border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800/50 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-4 w-4 flex-none fill-current" />
      <span className="ml-3 text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {children}
      </span>
    </Link>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

export function ContactMe() {
  return (
    <div className="border-l border-zinc-100 pl-6 dark:border-zinc-800">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M8 5H5a2 2 0 00-2 2v10a2 2 0 002 2h3m8-14h3a2 2 0 012 2v10a2 2 0 01-2 2h-3"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          />
          <path
            d="M12 8a2 2 0 100 4 2 2 0 000-4z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          />
          <path 
            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          />
        </svg>
        <span className="ml-3">Contact</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Interested in discussing crypto, work  opportunities, or collaborations? Reach out through any of these channels.
      </p>
      <div className="mt-4 flex flex-col gap-2">
        <ContactIcon href="https://www.linkedin.com/in/andrew-d-wilkinson" icon={LinkedInIcon}>
          Connect on LinkedIn
        </ContactIcon>
        <ContactIcon href="mailto:gm@andrewwilkinson.io" icon={MailIcon}>
          Send an email
        </ContactIcon>
        <ContactIcon href="https://t.me/DavyJones_0x" icon={TelegramIcon}>
          Message on Telegram
        </ContactIcon>
      </div>
    </div>
  )
}