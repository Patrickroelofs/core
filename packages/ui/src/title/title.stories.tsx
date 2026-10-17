import type { Meta, StoryObj } from '@storybook/react-vite'
import { Title } from './title'

const meta = {
  title: 'Title',
  component: Title,
  args: { children: 'Fluid headline' },
  argTypes: { size: { control: 'inline-radio', options: ['3', '4', '5', '6'] } },
} satisfies Meta<typeof Title>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <>
      {(['6', '5', '4', '3'] as const).map((s) => (
        <Title key={s} size={s}>
          Step {s}
        </Title>
      ))}
    </>
  ),
}
