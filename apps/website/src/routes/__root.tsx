/// <reference types="vite/client" />

import fontLatin from '@fontsource-variable/onest/files/onest-latin-wght-normal.woff2?url'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { SiteNav } from '../components/site-nav'
import { siteName } from '../seo/pages'
import siteCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#f0f0f0' },
      { name: 'color-scheme', content: 'light' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-title', content: siteName },
      { title: siteName },
    ],
    links: [
      // the latin subset is on every page: start it before the CSS has been parsed
      { rel: 'preload', href: fontLatin, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: siteCss },
      { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
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
