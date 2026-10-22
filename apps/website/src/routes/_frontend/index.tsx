import { createFileRoute } from '@tanstack/react-router'
import { css } from '../../../styled-system/css'
import { HeroIntro } from '../../blocks/hero-intro/hero-intro'

const main = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'fluid.3xl',
  maxW: '[1400px]',
  mx: 'auto',
  p: 'gutter',
  pt: 'fluid.3xl',
})

function Home() {
  return (
    <main className={main}>
      <HeroIntro />
    </main>
  )
}

export const Route = createFileRoute('/_frontend/')({ component: Home })
