import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationMenu } from '../navigation-menu/navigation-menu'
import { SiteHeader } from './site-header'

const meta = { title: 'SiteHeader', component: SiteHeader } satisfies Meta<typeof SiteHeader>

export default meta
type Story = StoryObj<typeof meta>

export const Monogram: Story = {
  render: () => (
    <SiteHeader>
      <SiteHeader.Monogram href="/" name="Patrick Roelofs" />
      <SiteHeader.Rule />
      <NavigationMenu>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Work</NavigationMenu.Trigger>
            <NavigationMenu.Content>
              <div style={{ width: 300, padding: 12 }}>
                <NavigationMenu.ContentLink href="#" title="Shiftboard" meta="2024–26" description="Lead designer" />
                <NavigationMenu.ContentLink
                  href="#"
                  title="Loop Transit"
                  meta="2023"
                  description="Design + front-end"
                />
              </div>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="#">CV</NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu>
    </SiteHeader>
  ),
}
