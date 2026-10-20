/// <reference types="vite/client" />

import css from '@core/ui/styles.css?url'
import { createRootRoute, HeadContent, Outlet, Scripts } from '@tanstack/react-router'
import '@fontsource-variable/onest'
import siteCss from '../../styles.css?url'
import { SiteFooter } from '../components/site-footer'
import { SiteNav } from '../components/site-nav'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Website' },
    ],
    links: [
      { rel: 'stylesheet', href: css },
      { rel: 'stylesheet', href: siteCss },
    ],
  }),
  component: Root,
})

function Root() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteNav />
        <Outlet />
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}
