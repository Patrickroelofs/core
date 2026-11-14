import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Typography } from '@/components/ui/typography/typography'

export function AboutTexel() {
  return (
    <LabeledSection id="about" tone="coral">
      <LabeledSection.Label>About this series</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col gap-8">
          <Typography size="xl">
            Fifteen photographs from Texel, the largest of the Dutch Wadden Islands, taken in November 2024.
          </Typography>
          <Typography size="lg">
            The series follows the island’s coast: sunlit dunes and scrub beneath a cloudy sky, waves rolling onto the
            beach, gulls perched on a whale sculpture, seals in green water and a red lighthouse rising above the tall
            grass. Everything was shot on film with a Praktica TL2, a 35mm camera. Select a photograph to view it full
            screen or to download the original.
          </Typography>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
