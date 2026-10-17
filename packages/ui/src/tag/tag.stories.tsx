import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from './tag'

const meta = {
  title: 'Tag',
  component: Tag,
  args: { children: 'Lead designer' },
  argTypes: {
    tone: { control: 'select', options: ['coral', 'azure', 'plum', 'navy', 'snow'] },
    appearance: { control: 'inline-radio', options: ['solid', 'outline', 'soft'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const Solid: Story = { args: { tone: 'coral' } }

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Tag tone="coral">Lead designer</Tag>
      <Tag tone="azure">Design + front-end</Tag>
      <Tag tone="plum">Founding</Tag>
      <Tag tone="navy">Contractor</Tag>
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Tag appearance="outline">Outline</Tag>
      <Tag appearance="outline" tone="coral" size="sm">
        Small
      </Tag>
    </div>
  ),
}

export const Soft: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, background: '#50216a', color: '#f0f0f0', padding: 16, borderRadius: 12 }}>
      <Tag tone="snow" appearance="soft">
        Figma
      </Tag>
      <Tag tone="snow" appearance="soft">
        React
      </Tag>
    </div>
  ),
}
