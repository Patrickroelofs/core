import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
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

export const Solid: Story = { args: { tone: 'coral', defaultPressed: false } }

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Tag tone="coral" defaultPressed={false}>
        Lead designer
      </Tag>
      <Tag tone="azure" defaultPressed={false}>Design + front-end</Tag>
      <Tag tone="plum" defaultPressed={false}>Founding</Tag>
      <Tag tone="navy" defaultPressed={false}>Contractor</Tag>
    </div>
  ),
}

export const Outline: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Tag appearance="outline" defaultPressed={false}>
        Outline
      </Tag>
      <Tag appearance="outline" tone="coral" size="sm" defaultPressed={false}>
        Small
      </Tag>
    </div>
  ),
}

export const Soft: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, background: '#50216a', color: '#f0f0f0', padding: 16, borderRadius: 12 }}>
      <Tag tone="snow" appearance="soft" defaultPressed={false}>
        Figma
      </Tag>
      <Tag tone="snow" appearance="soft" defaultPressed={false}>
        React
      </Tag>
    </div>
  ),
}

export const FilterChips: Story = {
  render: () => {
    const options = ['All', 'Product', 'Civic']
    const [selected, setSelected] = useState('All')
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        {options.map((option) => (
          <Tag
            key={option}
            appearance="outline"
            pressed={selected === option}
            onPressedChange={() => setSelected(option)}
          >
            {option}
          </Tag>
        ))}
      </div>
    )
  },
}
