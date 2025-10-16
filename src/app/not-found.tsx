import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center text-center">
        <p className="text-base font-semibold text-[var(--text-secondary)]">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base text-[var(--text-muted)]">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
      </div>
    </Container>
  )
}
