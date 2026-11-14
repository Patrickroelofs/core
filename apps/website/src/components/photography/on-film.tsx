import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Typography } from '@/components/ui/typography/typography'

export function OnFilm() {
  return (
    <LabeledSection id="on-film" tone="navy">
      <LabeledSection.Label>On film</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col gap-8">
          <Typography size="xl">
            I take photographs on film and group them into series, one place at a time. Each series has its own page,
            with the place, the date and the camera it was taken with. Photography is one of the things I enjoy outside
            work.
          </Typography>
          <Typography size="lg">
            The first series is Texel: fifteen photographs from the Dutch Wadden island, taken in November 2024 on a
            Praktica TL2, a 35mm film camera. It has dunes, seals, gulls and a red lighthouse. Open a series to see
            every frame, view a photograph full screen and download the original.
          </Typography>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
