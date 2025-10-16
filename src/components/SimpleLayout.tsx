export function SimpleLayout({
  title,
  intro,
  children,
  icon,
}: {
  title: string
  intro: string
  icon?: React.ReactNode
  children?: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-4xl animate-fade-in">
      <header className="mb-10 sm:mb-14">
        {icon && (
          <div className="mb-4">
            {icon}
          </div>
        )}
        <h1 className="font-display mb-3 text-[1.75rem] font-semibold tracking-tight text-[var(--text-primary)] sm:text-[2rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed tracking-[0.01em] text-[var(--text-muted)]">
          {intro}
        </p>
      </header>
      {children && <div className="animate-slide-in">{children}</div>}
    </div>
  )
}
