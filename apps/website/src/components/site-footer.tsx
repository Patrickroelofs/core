import { Footer } from '@core/ui/footer/footer'
import { css } from '../../styled-system/css'

const wrap = css({ maxW: '[1400px]', mx: 'auto', p: 'gutter' })

// TODO: mock data, replace with real content
export function SiteFooter() {
  return (
    <div className={wrap}>
      <Footer variant="split">
        <Footer.Door data-surface="navy" render={<a href="mailto:hello@example.com" />}>
          <Footer.Label>Available from Feb 2027</Footer.Label>
          <Footer.Title>Hire me</Footer.Title>
          <span>hello@example.com</span>
        </Footer.Door>
        <Footer.Door data-surface="plum" render={<a href="/hello" />}>
          <Footer.Label>No project needed</Footer.Label>
          <Footer.Title>Say hi</Footer.Title>
          <span>GitHub · LinkedIn</span>
        </Footer.Door>
        <Footer.Bar>
          <span>© 2026 Patrick Roelofs</span>
          <span>Pick a side</span>
        </Footer.Bar>
      </Footer>
    </div>
  )
}
