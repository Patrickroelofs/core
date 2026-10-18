import type { Meta, StoryObj } from '@storybook/react-vite'
import { Image } from './image'

const photo = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100"><rect width="160" height="100" fill="#0177bb"/><circle cx="110" cy="40" r="22" fill="#d65b5c"/><path d="M0 100 60 45l40 55z" fill="#50216a"/></svg>',
)}`

const meta = {
  title: 'Image',
  component: Image,
  args: { label: 'shiftboard: dashboard' },
  argTypes: {
    ratio: { control: 'inline-radio', options: ['16/10', '16/9', '4/3', '1/1'] },
    tone: { control: 'select', options: ['light', 'dark', 'azure', 'coral'] },
  },
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Placeholder: Story = {}

export const WithSrc: Story = { args: { src: photo, alt: 'Abstract landscape' } }

export const Ratios: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 12 }}>
      {(['16/10', '16/9', '4/3', '1/1'] as const).map((ratio) => (
        <Image key={ratio} ratio={ratio} label={`ratio: ${ratio}`} />
      ))}
    </div>
  ),
}

export const Tones: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
      {(['light', 'dark', 'azure', 'coral'] as const).map((tone) => (
        <Image key={tone} tone={tone} ratio="16/9" label={tone} />
      ))}
    </div>
  ),
}
