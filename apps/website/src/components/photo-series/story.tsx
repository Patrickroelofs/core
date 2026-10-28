import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Story() {
  return (
    <LabeledSection id="story" tone="coral">
      <LabeledSection.Label>About the series</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col gap-7">
          <div className="max-w-[30ch]">
            <Title as="p" size="sm">
              I took the late ferry home for most of November. After eleven the boats are nearly empty, and the crew
              stop working around passengers.
            </Title>
          </div>
          <div className="max-w-[56ch] opacity-85">
            <Typography size="lg">
              Every frame is from the same two routes, on the same film, pushed one stop. I wanted the series to feel
              like one long crossing.
            </Typography>
          </div>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
