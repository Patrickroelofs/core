import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Problem() {
  return (
    <LabeledSection id="problem" tone="coral">
      <LabeledSection.Label hint="01">The problem</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col gap-8">
          <Title as="p" size="lg">
            Handover took{' '}
            <Title as="span" size="lg" weight="black">
              <span className="text-accent-brand">45 minutes</span>
            </Title>
            , and most of it was spent scrolling.
          </Title>
          <div className="max-w-[46ch]">
            <Typography size="lg">
              Each patient had a dozen fields. Nurses printed the list, folded it into a pocket and added notes by hand,
              so the screen was out of date by the end of the first hour.
            </Typography>
          </div>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
