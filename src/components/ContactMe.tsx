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
    <div className="border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] p-6 shadow-[4px_4px_0_var(--mono-border-muted)] transition-transform duration-150 hover:-translate-y-1">
      <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[var(--mono-text)]">
        Contact
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-[var(--mono-text-muted)]">
        Let's connect about crypto, work, or collaborations.
      </p>
      <div className="mt-4 space-y-3">
        <Link
          href="https://www.linkedin.com/in/andrew-d-wilkinson"
          className="group flex items-center justify-between border-b border-dashed border-[var(--mono-border-muted)] pb-2 text-[0.75rem] uppercase tracking-[0.1em] text-[var(--mono-text)] transition-colors duration-150 hover:text-[var(--mono-accent)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center gap-2"><LinkedInIcon className="h-4 w-4 flex-none fill-current" /> LinkedIn</span>
          <span className="text-[0.6rem] tracking-[0.12em] text-[var(--mono-text-muted)] group-hover:text-[var(--mono-text)]">/in/andrew</span>
        </Link>
        <Link
          href="mailto:gm@andrewwilkinson.io"
          className="group flex items-center justify-between border-b border-dashed border-[var(--mono-border-muted)] pb-2 text-[0.75rem] uppercase tracking-[0.1em] text-[var(--mono-text)] transition-colors duration-150 hover:text-[var(--mono-accent)]"
        >
          <span className="flex items-center gap-2"><MailIcon className="h-4 w-4 flex-none" /> Email</span>
          <span className="text-[0.6rem] tracking-[0.12em] text-[var(--mono-text-muted)] group-hover:text-[var(--mono-text)]">gm@andrewwilkinson.io</span>
        </Link>
        <Link
          href="https://t.me/DavyJones_0x"
          className="group flex items-center justify-between text-[0.75rem] uppercase tracking-[0.1em] text-[var(--mono-text)] transition-colors duration-150 hover:text-[var(--mono-accent)]"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="flex items-center gap-2"><TelegramIcon className="h-4 w-4 flex-none fill-current" /> Telegram</span>
          <span className="text-[0.6rem] tracking-[0.12em] text-[var(--mono-text-muted)] group-hover:text-[var(--mono-text)]">@DavyJones_0x</span>
        </Link>
      </div>
    </div>
  )
}
