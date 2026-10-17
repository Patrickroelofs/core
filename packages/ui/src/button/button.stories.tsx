import { ArrowRightIcon, ArrowUpRightIcon } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { IconButton } from './icon-button'
import { LinkButton } from './link-button'

const meta = {
  title: 'Button',
  component: Button,
  args: { children: 'Send message', icon: <ArrowUpRightIcon weight="bold" /> },
  argTypes: {
    icon: { control: false },
    variant: { control: 'select', options: ['primary', 'accent', 'secondary', 'inverse', 'ghost', 'link'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = { args: { variant: 'primary' } }
export const Accent: Story = { args: { variant: 'accent' } }
export const Secondary: Story = { args: { variant: 'secondary' } }
export const Ghost: Story = { args: { variant: 'ghost' } }
export const Disabled: Story = { args: { disabled: true } }

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
    </div>
  ),
}

export const Icon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <IconButton label="Next" icon={<ArrowRightIcon weight="bold" />} size="sm" />
      <IconButton label="Next" icon={<ArrowRightIcon weight="bold" />} />
      <IconButton label="Next" icon={<ArrowRightIcon weight="bold" />} variant="primary" size="lg" />
    </div>
  ),
}

export const Link: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <LinkButton href="#work">View work</LinkButton>
      <LinkButton href="#work" variant="primary" icon={<ArrowUpRightIcon weight="bold" />}>
        As primary
      </LinkButton>
      <LinkButton href="#work" render={(props) => <a {...props} data-custom="rendered" />}>
        Custom render
      </LinkButton>
    </div>
  ),
}
