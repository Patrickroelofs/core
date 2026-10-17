import type { Meta, StoryObj } from '@storybook/react-vite'
import { Typography } from './typography'

const meta = {
  title: 'Typography',
  component: Typography,
  args: { children: 'The quick brown fox jumps over the lazy dog.' },
  argTypes: { size: { control: 'inline-radio', options: ['-2', '-1', '0', '1', '2'] } },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Sizes: Story = {
  render: () => (
    <>
      {(['2', '1', '0', '-1', '-2'] as const).map((s) => (
        <Typography key={s} size={s}>
          Step {s}: the quick brown fox jumps over the lazy dog.
        </Typography>
      ))}
    </>
  ),
}
