/// <reference types="vite/client" />

import '@fontsource-variable/onest'
import fontLatin from '@fontsource-variable/onest/files/onest-latin-wght-normal.woff2?url'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { SiteNav } from '../components/site-nav'
import siteCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Website' },
    ],
    links: [
      // the latin subset is on every page: start it before the CSS has been parsed
      { rel: 'preload', href: fontLatin, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: siteCss },
    ],
  }),
  shellComponent: Shell,
})

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteNav />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
