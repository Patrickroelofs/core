import type { Meta, StoryObj } from '@storybook/react-vite'
import { Footer } from './footer'

const meta = { title: 'Footer', component: Footer } satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Meet: Story = {
  render: () => (
    <Footer>
      <Footer.Meet first="Patrick" last="Roelofs" email="hello@patrickroelofs.com" />
      <Footer.Bar>
        <span>© 2026</span>
        <span>Nijmegen, the Netherlands</span>
      </Footer.Bar>
    </Footer>
  ),
}
