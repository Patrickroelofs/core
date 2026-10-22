import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Typography } from '@/components/ui/typography/typography'
import { css } from '../../../styled-system/css'

const body = css({ display: 'flex', flexDirection: 'column', gap: '8' })

export function Story() {
  return (
    <LabeledSection id="story" number="01">
      <LabeledSection.Label>Story</LabeledSection.Label>
      <LabeledSection.Content>
        <div className={body}>
          <Typography size="xl">
            I grew up in Utrecht and studied graphic design before I ever touched a product. My first job was
            redesigning bus timetables, which taught me that most people read an interface in a hurry, standing up, with
            something else on their mind.
          </Typography>
          <Typography size="lg">
            Since 2014 I’ve worked on transit, health and fintech products, first in-house and since 2022 on my own. I
            design in the browser, ship with engineers, and spend as much time watching people work as I do drawing
            screens.
          </Typography>
        </div>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
