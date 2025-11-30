interface IconProps {
  size?: number
  className?: string
}

export function SimpleLayout({
  title,
  intro,
  icon: Icon,
  children,
}: {
  title: string
  intro: string
  icon?: React.ComponentType<IconProps>
  children?: React.ReactNode
}) {
  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <h1
          className="flex items-center gap-2.5 font-display text-2xl font-semibold text-[var(--text-primary)] opacity-0 animate-fade-up"
          style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
        >
          {Icon && <Icon size={22} className="text-[var(--text-muted)] opacity-50" />}
          {title}
        </h1>
        <p
          className="text-sm leading-relaxed text-[var(--text-muted)] max-w-md opacity-0 animate-fade-up-subtle"
          style={{ animationDelay: '50ms', animationFillMode: 'forwards' }}
        >
          {intro}
        </p>
      </header>
      <div
        className="opacity-0 animate-fade-up-subtle"
        style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
      >
        {children}
      </div>
    </div>
  )
}
