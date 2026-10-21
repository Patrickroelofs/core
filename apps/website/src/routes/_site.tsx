import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SiteFooter } from '../components/site-footer'
import { SiteNav } from '../components/site-nav'

export const Route = createFileRoute('/_site')({ component: Site })

function Site() {
  return (
    <>
      <SiteNav />
      <Outlet />
      <SiteFooter />
    </>
  )
}
