import { createFileRoute } from '@tanstack/react-router'
import { Contact as Links } from '../components/about/contact'
import { Intro } from '../components/contact/intro'
import { Reasons } from '../components/contact/reasons'
import { DarkSlabFooter } from '../components/dark-slab-footer'
import { seo } from '../seo/pages'

function Contact() {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <Intro />
        <Reasons />
        <Links />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export const Route = createFileRoute('/contact')({ component: Contact, head: () => seo('/contact') })
