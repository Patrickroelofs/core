import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from '../tag/tag'
import { Tile } from './tile'

const meta = {
  title: 'Tile',
  component: Tile,
  args: { tone: 'plum' },
  argTypes: {
    shape: { control: 'inline-radio', options: ['card', 'bubble'] },
    tone: { control: 'inline-radio', options: ['snow', 'plum', 'azure', 'coral', 'navy'] },
  },
  render: (args) => (
    <Tile {...args}>
      <Tile.Label>Toolkit</Tile.Label>
      <span>
        <Tag tone="snow" appearance="soft">
          Figma
        </Tag>{' '}
        <Tag tone="snow" appearance="soft">
          React
        </Tag>
      </span>
    </Tile>
  ),
} satisfies Meta<typeof Tile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Link: Story = {
  args: { tone: 'coral', render: <a href="/cv.pdf">Download full CV</a> },
  render: (args) => (
    <Tile {...args}>
      <Tile.Label>Full CV</Tile.Label>
      <strong>Download PDF ↓</strong>
    </Tile>
  ),
}

export const Bubble: Story = {
  args: { tone: 'azure', shape: 'bubble', justify: 'start' },
  render: (args) => (
    <Tile {...args}>
      <span>Hi! I’m Patrick.</span>
    </Tile>
  ),
}
