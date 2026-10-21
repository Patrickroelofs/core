import { Grid } from '@core/ui/grid/grid'
import { Label } from '@core/ui/label/label'
import { LabeledSection } from '@core/ui/labeled-section/labeled-section'
import { Tile } from '@core/ui/tile/tile'
import { Title } from '@core/ui/title/title'
import { css } from '../../../styled-system/css'

// TODO: mock data, replace with real content
const languages = [
  { name: 'Dutch', level: 'Native', hello: 'Hallo! Ik ben Patrick.', tone: 'navy' },
  { name: 'English', level: 'Fluent · C1', hello: 'Hi! I’m Patrick.', tone: 'azure' },
] as const

const item = css({ display: 'flex', flexDirection: 'column', gap: '3' })
const caption = css({ display: 'flex', justifyContent: 'space-between', pl: '1.5' })

export function Languages() {
  return (
    <LabeledSection id="languages" number="04" tone="plum">
      <LabeledSection.Label>Languages</LabeledSection.Label>
      <LabeledSection.Content>
        <Grid gap="m" render={<ul />}>
          {languages.map(({ name, level, hello, tone }) => (
            <Grid.Item key={name} span={6} render={<li className={item} />}>
              <Tile tone={tone} shape="bubble" justify="start">
                <Title as="p" size="sm">
                  {hello}
                </Title>
              </Tile>
              <div className={caption}>
                <Title as="span" size="xs" weight="bold">
                  {name}
                </Title>
                <Label size="xs" render={<span />}>
                  {level}
                </Label>
              </div>
            </Grid.Item>
          ))}
        </Grid>
      </LabeledSection.Content>
    </LabeledSection>
  )
}
