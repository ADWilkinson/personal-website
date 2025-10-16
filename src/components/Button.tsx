import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary:
    'bg-[var(--accent-primary)] text-[var(--dj-canvas)] transition-colors duration-90 hover:bg-[var(--accent-hover)] hover:text-[var(--dj-charcoal)] active:translate-y-[1px]',
  secondary:
    'border border-[var(--border-default)] bg-[var(--surface-muted)] text-[var(--text-primary)] transition-colors duration-90 hover:bg-[var(--surface-elevated)] active:translate-y-[1px]',
  ghost:
    'text-[var(--text-primary)] transition-colors duration-90 hover:text-[var(--accent-primary)]',
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
)

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition-transform duration-180 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-hover)]',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
