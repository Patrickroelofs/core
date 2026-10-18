import { Footer } from '@core/ui/footer/footer'
import { css } from '../../styled-system/css'

const wrap = css({ maxW: '[1400px]', mx: 'auto', p: 'gutter' })

export function SiteFooter() {
  return (
    <div className={wrap}>
      <Footer>
        <Footer.Meet first="Patrick" last="Roelofs" email="contact@patrickroelofs.com" />
        <Footer.Bar>
          <span>© 2026</span>
          <span>Nijmegen, the Netherlands</span>
        </Footer.Bar>
      </Footer>
    </div>
  )
}
