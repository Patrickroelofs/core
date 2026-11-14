import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Typography } from '@/components/ui/typography/typography'

export function Reasons() {
  return (
    <LabeledSection id="write-to-me" tone="navy">
      <LabeledSection.Label>Write to me</LabeledSection.Label>
      <LabeledSection.Content>
        <div className="flex flex-col gap-8">
          <Typography size="xl">
            Email is the best way to reach me. There is no contact form and no newsletter: your message goes straight to
            my inbox.
          </Typography>
          <Typography size="lg">
            Write to me about frontend development and UX, about Cascadelist, the outliner I build, or about one of my
            photographs. Feedback on this website is welcome too. I read and write Dutch and English, so use whichever
            you prefer.
          </Typography>
          <Typography size="lg">
            For my day job I work at Iquality in the Netherlands. You can also find my work history on LinkedIn and my
            code on GitHub.
          </Typography>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
