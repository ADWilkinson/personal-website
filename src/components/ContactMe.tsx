import Link from 'next/link'
import { LinkedInIcon, TelegramIcon } from '@/components/SocialIcons'

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
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
        Contact
      </h2>
      <p className="mt-6 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        Let's connect about crypto, work, or collaborations.
      </p>
      <div className="mt-8 space-y-4">
        <Link
          href="https://www.linkedin.com/in/andrew-d-wilkinson"
          className="flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon className="h-4 w-4 flex-none fill-current" />
          <span className="ml-3">Connect on LinkedIn</span>
        </Link>
        <Link
          href="mailto:gm@andrewwilkinson.io"
          className="flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          <MailIcon className="h-4 w-4 flex-none" />
          <span className="ml-3">Send an email</span>
        </Link>
        <Link
          href="https://t.me/DavyJones_0x"
          className="flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon className="h-4 w-4 flex-none fill-current" />
          <span className="ml-3">Message on Telegram</span>
        </Link>
      </div>
    </div>
  )
}