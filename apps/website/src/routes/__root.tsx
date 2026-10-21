/// <reference types="vite/client" />

import css from '@core/ui/styles.css?url'
import { withPayloadRoot } from '@payloadcms/tanstack-start/client'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import '@fontsource-variable/onest'
import siteCss from '../../styles.css?url'

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
  // Payload renders its own document on /admin, ours everywhere else
  shellComponent: withPayloadRoot(Shell),
})

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
