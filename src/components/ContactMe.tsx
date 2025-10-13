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
        className="fill-[var(--mono-surface)] stroke-[var(--mono-border)]"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-[var(--mono-border)]"
      />
    </svg>
  )
}

export function ContactMe() {
  return (
    <div className="rounded-sm border border-[var(--mono-border)]/20 bg-[var(--mono-surface)]/70 p-6">
      <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[var(--mono-text)]">
        Contact
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-[var(--mono-text-muted)]">
        Let's connect about crypto, work, or collaborations.
      </p>
      <div className="mt-5 divide-y divide-[var(--mono-border)]/15">
        <Link
          href="https://www.linkedin.com/in/andrew-d-wilkinson"
          className="flex items-center justify-between py-2 text-[0.7rem] uppercase tracking-[0.1em] text-[var(--mono-text)] transition-colors duration-150 hover:text-[var(--mono-accent)] first:pt-0 last:pb-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center gap-2"><LinkedInIcon className="h-4 w-4 flex-none fill-current" /> LinkedIn</span>
          <span className="text-[0.6rem] tracking-[0.12em] text-[var(--mono-text-muted)]">/in/andrew</span>
        </Link>
        <Link
          href="mailto:gm@andrewwilkinson.io"
          className="flex items-center justify-between py-2 text-[0.7rem] uppercase tracking-[0.1em] text-[var(--mono-text)] transition-colors duration-150 hover:text-[var(--mono-accent)] first:pt-0 last:pb-0"
        >
          <span className="flex items-center gap-2"><MailIcon className="h-4 w-4 flex-none" /> Email</span>
          <span className="text-[0.6rem] tracking-[0.12em] text-[var(--mono-text-muted)]">gm@andrewwilkinson.io</span>
        </Link>
        <Link
          href="https://t.me/DavyJones_0x"
          className="flex items-center justify-between py-2 text-[0.7rem] uppercase tracking-[0.1em] text-[var(--mono-text)] transition-colors duration-150 hover:text-[var(--mono-accent)] first:pt-0 last:pb-0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center gap-2"><TelegramIcon className="h-4 w-4 flex-none fill-current" /> Telegram</span>
          <span className="text-[0.6rem] tracking-[0.12em] text-[var(--mono-text-muted)]">@DavyJones_0x</span>
        </Link>
      </div>
    </div>
  )
}
