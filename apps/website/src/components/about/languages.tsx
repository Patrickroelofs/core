import { Grid } from '@/components/ui/grid/grid'
import { Label } from '@/components/ui/label/label'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { Tile } from '@/components/ui/tile/tile'
import { Title } from '@/components/ui/title/title'

// TODO: mock data, replace with real content
const languages = [
  { name: 'Dutch', level: 'Native', hello: 'Hallo! Ik ben Patrick.', tone: 'navy' },
  { name: 'English', level: 'Fluent · C1', hello: 'Hi! I’m Patrick.', tone: 'azure' },
] as const

export function Languages() {
  return (
    <LabeledSection id="languages" number="04" tone="plum">
      <LabeledSection.Label>Languages</LabeledSection.Label>
      <LabeledSection.Content>
        <Grid gap="m" render={<ul />}>
          {languages.map(({ name, level, hello, tone }) => (
            <Grid.Item key={name} span={6} render={<li className="flex flex-col gap-3" />}>
              <Tile tone={tone} shape="bubble" justify="start">
                <Title as="p" size="sm">
                  {hello}
                </Title>
              </Tile>
              <div className="flex justify-between pl-1.5">
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
