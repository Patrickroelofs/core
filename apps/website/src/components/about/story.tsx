import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Typography } from '@/components/ui/typography/typography'

export function Story() {
  return (
    <LabeledSection id="story">
      <LabeledSection.Label>Story</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col gap-8">
          <Typography size="xl">
            I studied UX before switching to IT for the love of programming. Now I bring the two together as a frontend
            developer at Iquality.
          </Typography>
          <Typography size="lg">
            I turn UX designs into code and work with customers to improve their products. I like software that feels
            fun without being overwhelming: thoughtful colors, animation and an understanding of the people using it.
          </Typography>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
