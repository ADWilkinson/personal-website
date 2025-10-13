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
      <header className="mb-10 sm:mb-14">
        <h1 className="mb-3 text-[1.75rem] font-medium tracking-tight text-[var(--mono-text)] sm:text-[2rem]">
          {title}
        </h1>
        <p className="max-w-2xl text-sm leading-relaxed tracking-[0.01em] text-[var(--mono-text-muted)]">
          {intro}
        </p>
      </header>
      {children && <div className="animate-slide-in">{children}</div>}
    </div>
  )
}
