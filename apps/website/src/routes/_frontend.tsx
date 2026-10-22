import '@fontsource-variable/onest'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SiteNav } from '../components/site-nav'
import siteCss from '../styles.css?url'

export const Route = createFileRoute('/_frontend')({
  head: () => ({
    links: [{ rel: 'stylesheet', href: siteCss }],
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
