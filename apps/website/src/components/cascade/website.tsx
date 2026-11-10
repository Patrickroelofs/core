import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Typography } from '@/components/ui/typography/typography'
import { Shot } from './shot'

export function Website() {
  return (
    <LabeledSection id="website" tone="plum">
      <LabeledSection.Label hint="03">The website</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col gap-8">
          <div className="max-w-[46ch]">
            <Typography size="lg">
              cascadelist.com opens with a real outline you can type into before reading a word of marketing. Below it,
              each planned view gets a small illustration built from the same parts as the app.
            </Typography>
          </div>
          <Shot
            src="/projects/cascade/features.webp"
            alt="The features section of cascadelist.com: cards for Board, Table, Links and backlinks, Mirrors, Split pane and History, each marked coming soon"
            caption="One outline, a dozen ways to look at it: the views on the roadmap."
          />
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
