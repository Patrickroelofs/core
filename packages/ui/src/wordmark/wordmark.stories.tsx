import type { Meta, StoryObj } from '@storybook/react-vite'
import { Wordmark } from './wordmark'

const meta = {
  title: 'Wordmark',
  component: Wordmark,
  args: { mode: 'follow' },
  argTypes: {
    mode: { control: 'inline-radio', options: ['follow', 'staircase', 'static'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    tone: { control: 'inline-radio', options: ['default', 'inverse'] },
    radius: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 32 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Wordmark>

export default meta
type Story = StoryObj<typeof meta>

export const Follow: Story = {}

export const Staircase: Story = { args: { mode: 'staircase' } }

export const Static: Story = { args: { mode: 'static' } }

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <Wordmark key={s} {...args} size={s} />
      ))}
    </div>
  ),
}

export const Inverse: Story = {
  args: { tone: 'inverse' },
  decorators: [
    (Story) => (
      <div style={{ background: '#192036', padding: 32, borderRadius: 20 }}>
        <Story />
      </div>
    ),
  ],
}

export const CustomLines: Story = { args: { lines: ['P/R'], accent: '' } }
