import { MobileNavigation } from '@core/ui/mobile-navigation/mobile-navigation'
import { NavigationMenu } from '@core/ui/navigation-menu/navigation-menu'
import { SiteHeader } from '@core/ui/site-header/site-header'
import { css } from '../../styled-system/css'

const desktop = css({ display: 'none', '@media (min-width: 820px)': { display: 'block' } })
// `contents` (twice, the collapsible root is a div too) makes the trigger a header flex item, and the sheet a full-width row under the bar
const mobile = css({
  display: 'contents',
  '& > *': { display: 'contents' },
  '& > * > :nth-child(2)': { flexBasis: '[100%]' },
  '@media (min-width: 820px)': { display: 'none' },
})
const panel = css({ p: '3', w: '[360px]' })

// TODO: mock data, replace with real content
const work = [
  { title: 'Shiftboard', meta: '2024–26', description: 'Lead designer', href: '#' },
  { title: 'Loop Transit', meta: '2023', description: 'Design + front-end', href: '#' },
  { title: 'Fieldkit', meta: '2021', description: 'Founding designer', href: '#' },
]
const about = [
  { title: 'Story', description: 'From Porto print studios to hospital software.', href: '/about#story' },
  { title: 'Experience', description: 'Twelve years, five chapters.', href: '/about#experience' },
  { title: 'Speaking', meta: '06', description: 'Talks and workshops.', href: '#' },
]

const menus = [
  { label: 'Work', links: work },
  { label: 'About', links: about },
]

export function SiteNav() {
  return (
    <SiteHeader>
      <SiteHeader.Monogram href="/" name="Patrick Roelofs" />
      <SiteHeader.Rule />
      <div className={mobile}>
        <MobileNavigation>
          <MobileNavigation.Trigger />
          <MobileNavigation.Sheet>
            {menus.map(({ label, links }) => (
              <MobileNavigation.Section key={label} value={label}>
                <MobileNavigation.SectionTrigger>{label}</MobileNavigation.SectionTrigger>
                <MobileNavigation.SectionPanel>
                  {links.map((link) => (
                    <MobileNavigation.SectionLink key={link.title} {...link} />
                  ))}
                </MobileNavigation.SectionPanel>
              </MobileNavigation.Section>
            ))}
            <MobileNavigation.Link href="#">CV</MobileNavigation.Link>
          </MobileNavigation.Sheet>
        </MobileNavigation>
      </div>
      <div className={desktop}>
        <NavigationMenu>
          <NavigationMenu.List>
            {menus.map(({ label, links }) => (
              <NavigationMenu.Item key={label}>
                <NavigationMenu.Trigger>{label}</NavigationMenu.Trigger>
                <NavigationMenu.Content>
                  <div className={panel}>
                    {links.map((link) => (
                      <NavigationMenu.ContentLink key={link.title} {...link} />
                    ))}
                  </div>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            ))}
            <NavigationMenu.Item>
              <NavigationMenu.Link href="#">CV</NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu>
      </div>
    </SiteHeader>
  )
}
