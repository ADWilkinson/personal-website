import { Container } from '@/components/Container'

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
    <Container className="mt-14 sm:mt-24 animate-fade-in">
      <header className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--mono-text)] sm:text-4xl">
          {title}
        </h1>
        <p className="text-sm leading-6 tracking-[0.02em] text-[var(--mono-text-muted)]">
          {intro}
        </p>
      </header>
      {children && <div className="mt-14 sm:mt-16">{children}</div>}
    </Container>
  )
}
