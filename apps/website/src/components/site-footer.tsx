import { Footer } from '@core/ui/footer/footer'
import { Label } from '@core/ui/label/label'
import { css } from '../../styled-system/css'

const wrap = css({ '& > footer': { borderRadius: '[0]' } })

// TODO: mock data, replace with real content
export function SiteFooter() {
  return (
    <div className={wrap}>
      <Footer variant="split">
        <Footer.Door data-surface="navy" render={<a href="mailto:hello@example.com" />}>
          <Label render={<span />} size="xs">
            Available from Feb 2027
          </Label>
          <Footer.Title>Hire me</Footer.Title>
          <span>hello@example.com</span>
        </Footer.Door>
        <Footer.Door data-surface="plum" render={<a href="/hello" />}>
          <Label render={<span />} size="xs">
            No project needed
          </Label>
          <Footer.Title>Say hi</Footer.Title>
          <span>GitHub · LinkedIn</span>
        </Footer.Door>
        <Footer.Door data-surface="coral" render={<a href="/writing" />}>
          <Label render={<span />} size="xs">
            Notes on design
          </Label>
          <Footer.Title>Read</Footer.Title>
          <span>12 essays</span>
        </Footer.Door>
      </Footer>
    </div>
  )
}
