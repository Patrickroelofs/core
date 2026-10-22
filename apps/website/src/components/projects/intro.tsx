import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'

export function Intro() {
  return (
    <Title as="h1" size="xl" leading="normal" weight="light">
      Calm websites for <Tag size="inline">everyone</Tag>,<br /> plus a few things I built{' '}
      <Tag size="inline" tone="coral">
        for fun
      </Tag>
      .
    </Title>
  )
}
