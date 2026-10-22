import { LinkButton } from '@/components/ui/button/link-button'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'

export function OutsideWork() {
  return (
    <LabeledSection id="outside-work" number="05">
      <LabeledSection.Label>Outside work</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col items-start gap-fluid-m">
          {/* TODO: mock data, replace with real content */}
          <Title as="p" size="lg" leading="normal">
            Off the clock I{' '}
            <Tag tone="navy" size="inline">
              shoot film
            </Tag>
            , ride{' '}
            <Tag tone="coral" size="inline">
              every tram line
            </Tag>
            , reread{' '}
            <Tag tone="navy" appearance="outline" size="inline">
              Jane Jacobs
            </Tag>
            , cook{' '}
            <Tag tone="azure" size="inline">
              bacalhau
            </Tag>{' '}
            and build{' '}
            <Tag tone="plum" size="inline">
              e-ink clocks
            </Tag>
            .
          </Title>
          <LinkButton href="/photography">See the photographs →</LinkButton>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
