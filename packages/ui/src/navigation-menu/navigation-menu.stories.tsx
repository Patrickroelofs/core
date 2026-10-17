import type { Meta, StoryObj } from '@storybook/react-vite'
import { NavigationMenu } from './navigation-menu'

const meta = {
  title: 'NavigationMenu',
  component: NavigationMenu,
  decorators: [
    (Story) => (
      <div style={{ height: 420, display: 'flex', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof NavigationMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>Work</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <div style={{ width: 380, padding: 12 }}>
              <NavigationMenu.ContentLink href="#" title="Shiftboard" meta="2024–26" description="Lead designer" />
              <NavigationMenu.ContentLink href="#" title="Loop Transit" meta="2023" description="Design + front-end" />
              <NavigationMenu.ContentLink href="#" title="Fieldkit" meta="2021" description="Founding designer" />
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>About</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <div style={{ width: 300, padding: 12 }}>
              <NavigationMenu.ContentLink
                href="#"
                title="Story"
                description="From Porto print studios to hospital software."
              />
              <NavigationMenu.ContentLink href="#" title="Speaking" meta="06" description="Talks and workshops." />
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#">CV</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  ),
}

export const ContentLink: Story = {
  render: (args) => (
    <NavigationMenu {...args} defaultValue="work">
      <NavigationMenu.List>
        <NavigationMenu.Item value="work">
          <NavigationMenu.Trigger>Work</NavigationMenu.Trigger>
          <NavigationMenu.Content>
            <div style={{ width: 360, padding: 12 }}>
              <NavigationMenu.ContentLink href="#" title="Loop Transit" meta="2023" description="Design + front-end" />
              <NavigationMenu.ContentLink href="#" title="Title only" />
            </div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu>
  ),
}
