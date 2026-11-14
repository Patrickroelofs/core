import { LinkButton } from '@/components/ui/button/link-button'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Typography } from '@/components/ui/typography/typography'

export function About() {
  return (
    <LabeledSection id="about" tone="azure">
      <LabeledSection.Label>About</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col items-start gap-8">
          <Typography size="xl">
            I studied UX design before switching to IT for the love of programming. Now I bring the two together in
            frontend development at Iquality.
          </Typography>
          <Typography size="lg">
            At work I turn designs into code and help customers improve their products. In my own time I build
            Cascadelist, an outliner for everyone, and take my camera out for film photography. This website is where I
            keep both.
          </Typography>
          <LinkButton href="/about">More about me →</LinkButton>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
