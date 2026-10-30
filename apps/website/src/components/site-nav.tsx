import { MobileNavigation } from '@/components/ui/mobile-navigation/mobile-navigation'
import { NavigationMenu } from '@/components/ui/navigation-menu/navigation-menu'
import { SiteHeader } from '@/components/ui/site-header/site-header'

export function SiteNav() {
  return (
    <SiteHeader>
      <SiteHeader.Monogram href="/" name="Patrick Roelofs" />
      <SiteHeader.Rule />
      <div className="contents *:contents [&>*>:nth-child(2)]:basis-full nav:hidden">
        <MobileNavigation>
          <MobileNavigation.Trigger />
          <MobileNavigation.Sheet>
            <MobileNavigation.Link href="/about">About</MobileNavigation.Link>
            <MobileNavigation.Link href="/photography">Photography</MobileNavigation.Link>
          </MobileNavigation.Sheet>
        </MobileNavigation>
      </div>
      <div className="hidden nav:block">
        <NavigationMenu>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/about">About</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/photography">Photography</NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu>
      </div>
    </SiteHeader>
  )
}
