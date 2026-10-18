import type { Meta, StoryObj } from '@storybook/react-vite'
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
        <Footer.Label>Available from Feb 2027</Footer.Label>
        <Footer.Title>Hire me</Footer.Title>
        <span>hello@patrickroelofs.com</span>
      </Footer.Door>
      <Footer.Door data-surface="plum" render={<a href="/hello" />}>
        <Footer.Label>No project needed</Footer.Label>
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
        <Footer.Label>Available from Feb 2027</Footer.Label>
        <Footer.Title>Hire me</Footer.Title>
      </Footer.Door>
      <Footer.Door data-surface="plum" render={<a href="/hello" />}>
        <Footer.Label>No project needed</Footer.Label>
        <Footer.Title>Say hi</Footer.Title>
      </Footer.Door>
      <Footer.Door data-surface="coral" render={<a href="/hello" />}>
        <Footer.Label>Notes</Footer.Label>
        <Footer.Title>Read</Footer.Title>
      </Footer.Door>
      <Bar />
    </Footer>
  ),
}
