import '@fontsource-variable/onest'
import { createFileRoute, Outlet } from '@tanstack/react-router'
import siteCss from '../../styles.css?url'
import { SiteNav } from '../components/site-nav'

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
