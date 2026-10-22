/// <reference types="vite/client" />

import { withPayloadRoot } from '@payloadcms/tanstack-start/client'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Website' },
    ],
  }),
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
