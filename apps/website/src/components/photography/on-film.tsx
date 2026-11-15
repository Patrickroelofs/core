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
            The newest series is Grossglockner: sixteen photographs from around the highest mountain in Austria, taken
            in the July 2025, with the snow-covered summit, the Pasterze glacier and a cow in a spruce forest. The first
            is Texel: fifteen photographs from the Dutch Wadden island, taken in November 2024 on a Praktica TL2, a 35mm
            film camera. Open a series to see every frame and view a photograph full screen.
          </Typography>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
