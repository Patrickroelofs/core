import { createFileRoute } from '@tanstack/react-router'
import { HeroIntro } from '../../blocks/hero-intro/hero-intro'

function Home() {
  return (
    <main className="flex flex-col gap-fluid-3xl max-w-site mx-auto p-gutter pt-fluid-3xl">
      <HeroIntro />
    </main>
  )
}

export const Route = createFileRoute('/_frontend/')({ component: Home })
