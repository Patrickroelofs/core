import type { Meta, StoryObj } from '@storybook/react-vite'
import { Title } from './title'

const meta = {
  title: 'Title',
  component: Title,
  args: { children: 'Fluid headline' },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg', 'xl'] },
    weight: { control: 'inline-radio', options: ['light', 'bold', 'black'] },
    as: { control: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'p'] },
  },
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <>
      {(['xl', 'lg', 'md', 'sm'] as const).map((s) => (
        <Title key={s} size={s}>
          Size {s}
        </Title>
      ))}
    </>
  ),
}

export const Weights: Story = {
  render: () => (
    <>
      {(['light', 'bold', 'black'] as const).map((w) => (
        <Title key={w} weight={w}>
          Weight {w}
        </Title>
      ))}
    </>
  ),
}
