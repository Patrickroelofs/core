import type { Meta, StoryObj } from '@storybook/react-vite'
import { Image } from '../image/image'
import { HeroIntro } from './hero-intro'

const meta = {
  title: 'HeroIntro',
  component: HeroIntro,
  argTypes: { variant: { control: 'select', options: ['pills', 'grow', 'marker', 'cycle', 'fan', 'focus'] } },
  render: (args) => (
    <HeroIntro {...args}>
      Hi, I’m{' '}
      <HeroIntro.Phrase>
        <HeroIntro.Word>Patrick</HeroIntro.Word>{' '}
        <HeroIntro.Pill>
          <Image label="portrait" tone="light" />
          <Image label="at the desk" tone="dark" />
          <Image label="on a walk" tone="azure" />
        </HeroIntro.Pill>
      </HeroIntro.Phrase>
      , a{' '}
      <HeroIntro.Phrase>
        <HeroIntro.Word>product designer</HeroIntro.Word>{' '}
        <HeroIntro.Pill>
          <Image label="work: Shiftboard" tone="coral" />
          <Image label="work: Atlas" tone="dark" />
          <Image label="work: sketches" tone="light" />
        </HeroIntro.Pill>
      </HeroIntro.Phrase>{' '}
      based in{' '}
      <HeroIntro.Phrase>
        <HeroIntro.Word>Lisbon</HeroIntro.Word>{' '}
        <HeroIntro.Pill>
          <Image label="rooftops" tone="azure" />
          <Image label="tram 28" tone="coral" />
          <Image label="the river" tone="light" />
        </HeroIntro.Pill>
      </HeroIntro.Phrase>
      .
    </HeroIntro>
  ),
} satisfies Meta<typeof HeroIntro>

export default meta
type Story = StoryObj<typeof meta>

export const Pills: Story = { args: { variant: 'pills' } }
export const Grow: Story = { args: { variant: 'grow' } }
export const Marker: Story = { args: { variant: 'marker' } }
export const Cycle: Story = { args: { variant: 'cycle' } }
export const Fan: Story = { args: { variant: 'fan' } }
export const Focus: Story = { args: { variant: 'focus' } }
