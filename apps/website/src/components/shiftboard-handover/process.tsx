import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

export function Process() {
  return (
    <LabeledSection id="process" tone="navy">
      <LabeledSection.Label hint="02">How we got there</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex max-w-[720px] flex-col gap-5">
          <Typography size="lg">
            I started with three night shifts on Ward 4B, then interviewed forty nurses across four hospitals. Everyone
            printed the list. Nobody trusted the screen.
          </Typography>
          <Typography size="lg">
            From there we rewrote every patient card around one question: what does the next nurse need to do in the
            next hour? Everything else moved one tap away.
          </Typography>
          <Title as="h3" size="xs" weight="bold">
            Testing on the ward
          </Title>
          <Typography size="lg">
            The pilot ran on two wards beside the old tool for twelve weeks. We asked nurses to read cards aloud while a
            call bell rang; anything they skipped, we cut.
          </Typography>
          <Typography size="lg">
            After nine months of rollout it was on 300 wards, with a training video under four minutes long.
          </Typography>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
