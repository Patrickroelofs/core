import { createFileRoute } from '@tanstack/react-router'
import { HeroIntro } from '../../blocks/hero-intro/hero-intro'

function Home() {
  return (
    <main className="flex justify-center items-center pt-fluid-2xl max-w-site mx-auto">
      <HeroIntro />
    </main>
  )
}

export const Route = createFileRoute('/_frontend/')({ component: Home })
