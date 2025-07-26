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
    <Container className="mt-8 sm:mt-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-medium tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-8 sm:mt-12">{children}</div>}
    </Container>
  )
}
