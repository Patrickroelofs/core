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
            <MobileNavigation.Section value="work">
              <MobileNavigation.SectionTrigger>Work</MobileNavigation.SectionTrigger>
              <MobileNavigation.SectionPanel>
                <MobileNavigation.SectionLink href="/projects" title="All work" />
                <MobileNavigation.SectionLink
                  href="/projects/patrickroelofs"
                  title="Patrick Roelofs"
                  meta="Personal - 2026"
                />
              </MobileNavigation.SectionPanel>
            </MobileNavigation.Section>
            <MobileNavigation.Link href="/about">About</MobileNavigation.Link>
            <MobileNavigation.Section value="writing">
              <MobileNavigation.SectionTrigger>Writing</MobileNavigation.SectionTrigger>
              <MobileNavigation.SectionPanel>
                <MobileNavigation.SectionLink href="/writing" title="All writing" />
                <MobileNavigation.SectionLink
                  href="/writing/designing-for-4am"
                  title="Designing for 4am"
                  meta="Health · 2026"
                />
              </MobileNavigation.SectionPanel>
            </MobileNavigation.Section>
          </MobileNavigation.Sheet>
        </MobileNavigation>
      </div>
      <div className="hidden nav:block">
        <NavigationMenu>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Work</NavigationMenu.Trigger>
              <NavigationMenu.Content>
                <div className="flex w-80 flex-col p-2">
                  <NavigationMenu.ContentLink href="/projects" title="All work" />
                  <NavigationMenu.ContentLink
                    href="/projects/patrickroelofs"
                    title="Patrick Roelofs"
                    meta="Personal - 2026"
                  />
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/about">About</NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Writing</NavigationMenu.Trigger>
              <NavigationMenu.Content>
                <div className="flex w-80 flex-col p-2">
                  <NavigationMenu.ContentLink href="/writing" title="All writing" />
                  <NavigationMenu.ContentLink
                    href="/writing/designing-for-4am"
                    title="Designing for 4am"
                    meta="Health · 2026"
                  />
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu>
      </div>
    </SiteHeader>
  )
}
