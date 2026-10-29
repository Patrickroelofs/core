import { createFileRoute } from '@tanstack/react-router'
import { seo } from '../seo/pages'

function Home() {
  return <></>
}

export const Route = createFileRoute('/')({ component: Home, head: () => seo('/') })
