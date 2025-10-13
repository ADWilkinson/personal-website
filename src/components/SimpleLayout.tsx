export function SimpleLayout({
  title,
  intro,
  children,
}: {
  title: string
  intro: string
  children?: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-4xl animate-fade-in">
      <header className="mb-8 sm:mb-12">
        <h1 className="mb-3 text-xl font-bold uppercase tracking-[0.08em] text-[var(--mono-text)] sm:text-2xl">
          {title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed tracking-[0.02em] text-[var(--mono-text-muted)]">
          {intro}
        </p>
      </header>
      {children && <div className="animate-slide-in">{children}</div>}
    </div>
  )
}
