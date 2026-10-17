import { NavigationMenu } from '@core/ui/navigation-menu/navigation-menu'
import { css } from '../../styled-system/css'

const header = css({ display: 'flex', justifyContent: 'center', p: 'gutter' })

export function SiteNav() {
  return (
    <header className={header}>
      <NavigationMenu>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/">Home</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu>
    </header>
  )
}
