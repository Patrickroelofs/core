import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '../label/label'
import { Title } from '../title/title'
import { Footer } from './footer'

const meta = { title: 'Footer', component: Footer } satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

const Door = ({ href, title, label }: { href: string; title: string; label: string }) => (
  <Footer.Door render={<a href={href} />}>
    <Label size="xs">{label}</Label>
    <Title size="md">{title}</Title>
  </Footer.Door>
)

export const Split: Story = {
  render: () => (
    <Footer variant="split">
      <Door href="#" label="Work" title="See the projects" />
      <Door href="#" label="Contact" title="Say hello" />
    </Footer>
  ),
}

export const ThreeDoors: Story = {
  render: () => (
    <Footer variant="split">
      <Door href="#" label="Work" title="See the projects" />
      <Door href="#" label="Writing" title="Read the notes" />
      <Door href="#" label="Contact" title="Say hello" />
    </Footer>
  ),
}
