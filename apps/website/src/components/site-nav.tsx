import { MobileNavigation } from '@/components/ui/mobile-navigation/mobile-navigation'
import { NavigationMenu } from '@/components/ui/navigation-menu/navigation-menu'
import { SiteHeader } from '@/components/ui/site-header/site-header'
import { css } from '../../styled-system/css'

const desktop = css({ display: 'none', '@media (min-width: 820px)': { display: 'block' } })
// `contents` (twice, the collapsible root is a div too) makes the trigger a header flex item, and the sheet a full-width row under the bar
const mobile = css({
  display: 'contents',
  '& > *': { display: 'contents' },
  '& > * > :nth-child(2)': { flexBasis: '[100%]' },
  '@media (min-width: 820px)': { display: 'none' },
})

export function SiteNav() {
  return (
    <SiteHeader>
      <SiteHeader.Monogram href="/" name="Patrick Roelofs" />
      <SiteHeader.Rule />
      <div className={mobile}>
        <MobileNavigation>
          <MobileNavigation.Trigger />
          <MobileNavigation.Sheet>
            <MobileNavigation.Link href="/about">About</MobileNavigation.Link>
          </MobileNavigation.Sheet>
        </MobileNavigation>
      </div>
      <div className={desktop}>
        <NavigationMenu>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/about">About</NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu>
      </div>
    </SiteHeader>
  )
}
