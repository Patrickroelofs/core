import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from '../label/label'
import { Footer } from './footer'

const meta = { title: 'Footer', component: Footer } satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

const Bar = () => (
  <Footer.Bar>
    <span>© 2026 Patrick Roelofs</span>
    <span>Pick a side</span>
  </Footer.Bar>
)

export const Split: Story = {
  render: () => (
    <Footer variant="split">
      <Footer.Door data-surface="navy" render={<a href="mailto:hello@patrickroelofs.com" />}>
        <Label render={<span />} size="xs">
          Available from Feb 2027
        </Label>
        <Footer.Title>Hire me</Footer.Title>
        <span>hello@patrickroelofs.com</span>
      </Footer.Door>
      <Footer.Door data-surface="plum" render={<a href="/hello" />}>
        <Label render={<span />} size="xs">
          No project needed
        </Label>
        <Footer.Title>Say hi</Footer.Title>
        <span>GitHub · LinkedIn</span>
      </Footer.Door>
      <Bar />
    </Footer>
  ),
}

export const ThreeDoors: Story = {
  render: () => (
    <Footer variant="split">
      <Footer.Door data-surface="navy" render={<a href="/hello" />}>
        <Label render={<span />} size="xs">
          Available from Feb 2027
        </Label>
        <Footer.Title>Hire me</Footer.Title>
      </Footer.Door>
      <Footer.Door data-surface="plum" render={<a href="/hello" />}>
        <Label render={<span />} size="xs">
          No project needed
        </Label>
        <Footer.Title>Say hi</Footer.Title>
      </Footer.Door>
      <Footer.Door data-surface="coral" render={<a href="/hello" />}>
        <Label render={<span />} size="xs">
          Notes
        </Label>
        <Footer.Title>Read</Footer.Title>
      </Footer.Door>
      <Bar />
    </Footer>
  ),
}
