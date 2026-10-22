import '@fontsource-variable/onest'
import fontLatin from '@fontsource-variable/onest/files/onest-latin-wght-normal.woff2?url'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SiteNav } from '../components/site-nav'
import siteCss from '../styles.css?url'

export const Route = createFileRoute('/_frontend')({
  head: () => ({
    links: [
      // the latin subset is on every page: start it before the CSS has been parsed
      { rel: 'preload', href: fontLatin, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'stylesheet', href: siteCss },
    ],
  }),
  component: Site,
})

function Site() {
  return (
    <>
      <SiteNav />
      <Outlet />
    </>
  )
}
