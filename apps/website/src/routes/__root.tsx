/// <reference types="vite/client" />

import css from '@core/ui/styles.css?url'
import { createRootRoute, HeadContent, Outlet, Scripts, useMatches } from '@tanstack/react-router'
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

declare module '@tanstack/react-router' {
  interface StaticDataRouteOption {
    hideHeaderOnScroll?: boolean
  }
}

function Root() {
  const hideOnScroll = useMatches({ select: (matches) => matches.some((m) => m.staticData.hideHeaderOnScroll) })
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteNav hideOnScroll={hideOnScroll} />
        <Outlet />
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}
