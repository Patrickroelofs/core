import { LinkButton } from '@/components/ui/button/link-button'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'

export function OutsideWork() {
  return (
    <LabeledSection id="outside-work">
      <LabeledSection.Label>Outside work</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col items-start gap-fluid-m">
          <Title as="p" size="lg" leading="normal">
            Outside work, I enjoy{' '}
            <Tag tone="navy" size="inline">
              photography
            </Tag>
            ,{' '}
            <Tag tone="coral" size="inline">
              gaming
            </Tag>{' '}
            and{' '}
            <Tag tone="azure" size="inline">
              technology
            </Tag>
            .
          </Title>
          <LinkButton href="/photography">See the photographs →</LinkButton>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
