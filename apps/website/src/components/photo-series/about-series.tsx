import type { ReactNode } from 'react'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Typography } from '@/components/ui/typography/typography'

export function AboutSeries({ lead, children }: { lead: ReactNode; children: ReactNode }) {
  return (
    <LabeledSection id="about" tone="coral">
      <LabeledSection.Label>About this series</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col gap-8">
          <Typography size="xl">{lead}</Typography>
          <Typography size="lg">{children}</Typography>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
