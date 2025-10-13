import Link from 'next/link'
import clsx from 'clsx'

function ChevronRightIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card<T extends React.ElementType = 'div'>({
  as,
  className,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'className'> & {
  as?: T
  className?: string
}) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        'group relative flex flex-col items-start border-2 border-[var(--mono-border)] bg-[var(--mono-surface)] p-4 shadow-[4px_4px_0_var(--mono-border-muted)] transition-transform duration-150 hover:-translate-y-1',
        className,
      )}
    >
      {children}
    </Component>
  )
}

Card.Link = function CardLink({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link {...props}>
      <span className="absolute inset-0 z-20" />
      <span className="relative z-10">{children}</span>
    </Link>
  )
}

Card.Title = function CardTitle<T extends React.ElementType = 'h2'>({
  as,
  href,
  children,
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'href'> & {
  as?: T
  href?: string
}) {
  let Component = as ?? 'h2'

  return (
    <Component className="text-sm font-semibold tracking-[0.08em] text-[var(--mono-text)] transition-colors duration-150 group-hover:text-[var(--mono-accent)]">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

Card.Description = function CardDescription({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <p className="relative z-10 mt-3 text-sm leading-relaxed text-[var(--mono-text-muted)]">
      {children}
    </p>
  )
}

Card.Cta = function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 sm:mt-6 flex items-center text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--mono-accent)] transition-colors duration-200 group-hover:text-[var(--mono-text)]"
    >
      {children}
      <ChevronRightIcon className="ml-2 h-3 w-3 stroke-current stroke-2 transition-transform duration-300 ease-out group-hover:translate-x-1" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow<T extends React.ElementType = 'p'>({
  as,
  decorate = false,
  className,
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'decorate'> & {
  as?: T
  decorate?: boolean
}) {
  let Component = as ?? 'p'

  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-4 flex items-center text-[0.65rem] uppercase tracking-[0.12em] text-[var(--mono-text-muted)]',
        decorate && 'pl-3.5',
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 bg-[var(--mono-border)]" />
        </span>
      )}
      {children}
    </Component>
  )
}
