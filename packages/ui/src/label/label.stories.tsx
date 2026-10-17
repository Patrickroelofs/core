import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './label'

const meta = {
  title: 'Label',
  component: Label,
  args: { children: 'Email address' },
  argTypes: { size: { control: 'inline-radio', options: ['xs', 'sm'] } },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Label size="sm">Small (step -1)</Label>
      <Label size="xs">Extra small (step -2)</Label>
    </div>
  ),
}
