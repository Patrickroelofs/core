import type { Meta, StoryObj } from '@storybook/react-vite'
import { Image } from '../image/image'
import { HeroIntro } from './hero-intro'

const meta = {
  title: 'HeroIntro',
  component: HeroIntro,
  render: () => (
    <HeroIntro>
      Hi, I’m{' '}
      <HeroIntro.Phrase>
        <HeroIntro.Word>Patrick</HeroIntro.Word>{' '}
        <HeroIntro.Pill>
          <Image label="portrait" tone="light" />
        </HeroIntro.Pill>
      </HeroIntro.Phrase>
      , a{' '}
      <HeroIntro.Phrase>
        <HeroIntro.Word>product designer</HeroIntro.Word>{' '}
        <HeroIntro.Pill>
          <Image label="work: Shiftboard" tone="coral" />
        </HeroIntro.Pill>
      </HeroIntro.Phrase>{' '}
      based in{' '}
      <HeroIntro.Phrase>
        <HeroIntro.Word>Lisbon</HeroIntro.Word>{' '}
        <HeroIntro.Pill>
          <Image label="rooftops" tone="azure" />
        </HeroIntro.Pill>
      </HeroIntro.Phrase>
      .
    </HeroIntro>
  ),
} satisfies Meta<typeof HeroIntro>

export default meta
type Story = StoryObj<typeof meta>

export const Pills: Story = {}
