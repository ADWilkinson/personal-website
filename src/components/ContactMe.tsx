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
        className="fill-[var(--surface-muted)] stroke-[var(--border-default)]"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-[var(--border-default)]"
      />
    </svg>
  )
}

function ContactLink({
  href,
  icon: Icon,
  label,
  handle,
  external = false,
}: {
  href: string
  icon: React.ComponentType<{ className?: string }>
  label: string
  handle: string
  external?: boolean
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 py-2.5 first:pt-0 last:pb-0"
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      <Icon className="h-4 w-4 flex-none fill-[var(--text-muted)] transition-colors duration-150 group-hover:fill-[var(--text-primary)]" />
      <span className="flex-1 text-sm text-[var(--text-primary)] transition-colors duration-150 group-hover:text-[var(--accent-primary)]">
        {label}
      </span>
      <span className="text-xs text-[var(--text-muted)]">
        {handle}
      </span>
    </Link>
  )
}

export function ContactMe() {
  return (
    <div className="rounded-lg border border-[var(--border-muted)] p-5">
      <h2 className="mb-4 text-sm font-medium text-[var(--text-primary)]">
        Contact
      </h2>
      <div className="space-y-0">
        <ContactLink
          href="https://www.linkedin.com/in/andrew-d-wilkinson"
          icon={LinkedInIcon}
          label="LinkedIn"
          handle="/in/andrew"
          external
        />
        <ContactLink
          href="mailto:gm@andrewwilkinson.io"
          icon={MailIcon}
          label="Email"
          handle="gm@andrewwilkinson.io"
        />
        <ContactLink
          href="https://t.me/DavyJones_0x"
          icon={TelegramIcon}
          label="Telegram"
          handle="@DavyJones_0x"
          external
        />
      </div>
    </div>
  )
}
