import { Card } from '@core/ui/card/card'
import { Grid } from '@core/ui/grid/grid'
import { Image } from '@core/ui/image/image'
import { Label } from '@core/ui/label/label'
import { ListRow } from '@core/ui/list-row/list-row'
import { Tag } from '@core/ui/tag/tag'
import { Title } from '@core/ui/title/title'
import { Typography } from '@core/ui/typography/typography'
import { createFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

const section = css({ display: 'flex', flexDirection: 'column', gap: '8', maxW: '[1400px]', mx: 'auto', p: 'gutter' })
const intro = css({ display: 'flex', flexDirection: 'column', gap: '2' })

// TODO: mock data, replace with real content
const projects = [
  {
    title: 'Shiftboard',
    year: '2024–26',
    role: 'Lead designer',
    tone: 'coral',
    description: 'Scheduling for night-shift nurses. Swap requests went from twenty minutes to two.',
  },
  {
    title: 'Loop Transit',
    year: '2023',
    role: 'Design + front-end',
    tone: 'azure',
    description: 'A rider app that tells the truth about delays.',
  },
  {
    title: 'Fieldkit',
    year: '2021',
    role: 'Founding designer',
    tone: 'plum',
    description: 'An offline notebook for ecologists.',
  },
] as const

const experience = [
  { years: '2020 — 2024', role: 'Founding designer', place: 'Fieldkit', where: 'Remote' },
  { years: '2018 — 2020', role: 'Senior designer', place: 'Loop Transit', where: 'Amsterdam' },
  { years: '2015 — 2018', role: 'Front-end developer', place: 'Studio Nord', where: 'Utrecht' },
]

const writing = [
  { date: '2025', title: 'Quiet interfaces', meta: '8 min', href: '/writing/quiet-interfaces' },
  { date: '2024', title: 'Designing for night shifts', meta: '12 min', href: '/writing/night-shifts' },
  { date: '2023', title: 'Notes on offline-first', meta: '6 min', href: '/writing/offline-first' },
]

function Home() {
  return (
    <main className={section}>
      <div className={intro}>
        <Title as="h1" size="xl" weight="bold">
          Selected work
        </Title>
        <Typography size="lg">Product design and front-end for teams who care about the details.</Typography>
      </div>
      <Grid gap="m">
        {projects.map(({ title, year, role, tone, description }) => (
          <Card
            key={title}
            render={<Grid.Item span={4} render={<a href={`/work/${title.toLowerCase().replace(/ /g, '-')}`} />} />}
          >
            <Card.Media>
              <Image label={`${title.toLowerCase()}: cover`} />
              <Card.Reveal tone={tone}>View case study</Card.Reveal>
            </Card.Media>
            <Card.Body>
              <Title as="h3">{title}</Title>
              <Typography>{description}</Typography>
              <Card.Footer>
                <Tag tone={tone} size="sm">
                  {role}
                </Tag>
                <Label size="xs" render={<time dateTime={year.slice(0, 4)} />}>
                  {year}
                </Label>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </Grid>
      <Grid gap="m">
        <Card render={<Grid.Item span={7} />}>
          <Card.Body>
            <Title as="h3">Experience</Title>
            {experience.map(({ years, role, place, where }) => (
              <ListRow key={years}>
                <ListRow.Lead>{years}</ListRow.Lead>
                <ListRow.Body>
                  <Title as="span" size="xs" weight="bold">
                    {role}
                  </Title>
                  <Title as="span" size="xs">{` · ${place}`}</Title>
                </ListRow.Body>
                <ListRow.Meta>
                  <Label size="xs">{where}</Label>
                </ListRow.Meta>
              </ListRow>
            ))}
          </Card.Body>
        </Card>
        <Card render={<Grid.Item span={5} />}>
          <Card.Body>
            <Title as="h3">Writing</Title>
            {writing.map(({ date, title, meta, href }) => (
              <ListRow key={href} render={<a href={href} />}>
                <ListRow.Lead>{date}</ListRow.Lead>
                <ListRow.Body>
                  <Title as="span" size="xs" weight="bold">
                    {title}
                  </Title>
                </ListRow.Body>
                <ListRow.Meta>
                  <Label size="xs">{meta}</Label>
                </ListRow.Meta>
              </ListRow>
            ))}
          </Card.Body>
        </Card>
      </Grid>
    </main>
  )
}

export const Route = createFileRoute('/')({ component: Home })
