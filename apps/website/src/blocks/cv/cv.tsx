import { Grid } from '@/components/ui/grid/grid'
import { Label } from '@/components/ui/label/label'
import { ListRow } from '@/components/ui/list-row/list-row'
import { Tile } from '@/components/ui/tile/tile'
import { Title } from '@/components/ui/title/title'
import { css } from '../../../styled-system/css'

const section = css({ display: 'flex', flexDirection: 'column', gap: 'fluid.l' })
const head = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '6',
})
const side = css({ display: 'grid', gridTemplateRows: '[repeat(2, minmax(0, 1fr))]', gap: 'fluid.m', minWidth: '0' })

// TODO: mock data, replace with real content
const cv = [
  { years: '2024 — now', role: 'Independent designer', org: 'Shiftboard, Loop Transit', location: 'Lisbon' },
  { years: '2020 — 2024', role: 'Founding designer', org: 'Fieldkit', location: 'Remote' },
  { years: '2017 — 2020', role: 'Designer', org: 'Civic Lab', location: 'Porto' },
  { years: '2014 — 2017', role: 'Junior designer', org: 'Studio Halde', location: 'Porto' },
  { years: '2014', role: 'BA Communication Design', org: 'University of Porto', location: 'Porto' },
] as const

export function Cv() {
  return (
    <section id="cv" className={section}>
      <div className={head}>
        <Title as="h2" size="xl">
          Curriculum{' '}
          <Title as="span" size="xl" weight="black">
            vitae
          </Title>
        </Title>
        <Label size="sm">Twelve years, five chapters</Label>
      </div>
      <Grid gap="m">
        <Grid.Item span={8}>
          <Tile tone="navy" justify="start">
            {cv.map(({ years, role, org, location }) => (
              <ListRow key={years}>
                <ListRow.Lead>{years}</ListRow.Lead>
                <ListRow.Body>
                  <Title as="span" size="xs" weight="bold">
                    {role}
                  </Title>{' '}
                  · {org}
                </ListRow.Body>
                <ListRow.Meta>
                  <Label size="xs">{location}</Label>
                </ListRow.Meta>
              </ListRow>
            ))}
          </Tile>
        </Grid.Item>
        <Grid.Item span={4} render={<div className={side} />}>
          <Tile tone="coral" render={<a href="/cv.pdf" />}>
            <Tile.Label>Full CV</Tile.Label>
            <Title as="span" size="md" weight="bold">
              Download PDF ↓
            </Title>
          </Tile>
        </Grid.Item>
      </Grid>
    </section>
  )
}
