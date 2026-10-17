import type { Meta, StoryObj } from '@storybook/react-vite'
import { Typography } from './typography'

const meta = {
  title: 'Typography',
  component: Typography,
  args: { children: 'The quick brown fox jumps over the lazy dog.' },
  argTypes: { size: { control: 'inline-radio', options: ['xs', 'sm', 'md', 'lg', 'xl'] } },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <>
      {(['xl', 'lg', 'md', 'sm', 'xs'] as const).map((s) => (
        <Typography key={s} size={s}>
          Size {s}: the quick brown fox jumps over the lazy dog.
        </Typography>
      ))}
    </>
  ),
}
