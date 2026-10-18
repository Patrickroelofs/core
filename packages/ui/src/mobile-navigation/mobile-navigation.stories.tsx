import type { Meta, StoryObj } from '@storybook/react-vite'
import { MobileNavigation } from './mobile-navigation'

const meta = {
  title: 'MobileNavigation',
  component: MobileNavigation,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420, minHeight: 620 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MobileNavigation>

export default meta
type Story = StoryObj<typeof meta>

const nav = (
  <MobileNavigation.Sheet>
    <MobileNavigation.Section value="work">
      <MobileNavigation.SectionTrigger>Work</MobileNavigation.SectionTrigger>
      <MobileNavigation.SectionPanel>
        <MobileNavigation.SectionLink href="#" title="Shiftboard" meta="2024–26" description="Lead designer" />
        <MobileNavigation.SectionLink href="#" title="Loop Transit" meta="2023" description="Design + front-end" />
      </MobileNavigation.SectionPanel>
    </MobileNavigation.Section>
    <MobileNavigation.Section value="about">
      <MobileNavigation.SectionTrigger>About</MobileNavigation.SectionTrigger>
      <MobileNavigation.SectionPanel>
        <MobileNavigation.SectionLink href="#" title="Story" description="From Porto print studios." />
        <MobileNavigation.SectionLink href="#" title="Speaking" meta="06" />
      </MobileNavigation.SectionPanel>
    </MobileNavigation.Section>
    <MobileNavigation.Link href="#">CV</MobileNavigation.Link>
  </MobileNavigation.Sheet>
)

export const Default: Story = {
  render: (args) => (
    <MobileNavigation {...args}>
      <MobileNavigation.Trigger />
      {nav}
    </MobileNavigation>
  ),
}

export const Open: Story = {
  render: (args) => (
    <MobileNavigation {...args} defaultOpen>
      <MobileNavigation.Trigger />
      {nav}
    </MobileNavigation>
  ),
}
