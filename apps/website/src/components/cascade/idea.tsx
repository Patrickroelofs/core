import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Idea() {
  return (
    <LabeledSection id="idea" tone="coral">
      <LabeledSection.Label hint="01">The idea</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col gap-8">
          <Title as="p" size="lg">
            Your novel, your sprint and your grocery run,{' '}
            <Title as="span" size="lg" weight="black">
              <span className="text-accent-brand">all in the same tree</span>
            </Title>
            , none of them in the way.
          </Title>
          <div className="flex max-w-[46ch] flex-col gap-5">
            <Typography size="lg">
              Most tools make you decide where a thought belongs before you can write it down. In Cascade you just type
              a line. Tab tucks it under the one above, and a click on its bullet zooms in so that line becomes its own
              page.
            </Typography>
            <Typography size="lg">
              Folding hides what you don't need right now without losing it. Daily notes give every day a place to
              start, and the command palette jumps to anything from the keyboard.
            </Typography>
          </div>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
