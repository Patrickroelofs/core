import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'

export function Intro() {
  return (
    <Title as="h1" size="xl" leading="normal">
      Twelve years of calm software for <Tag size="inline">health</Tag> and{' '}
      <Tag size="inline" tone="azure">
        transit
      </Tag>
      , plus a few things I built{' '}
      <Tag size="inline" tone="coral">
        for fun
      </Tag>
      .
    </Title>
  )
}
