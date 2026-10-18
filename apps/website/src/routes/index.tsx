import { Card } from '@core/ui/card/card'
import { Image } from '@core/ui/image/image'
import { Label } from '@core/ui/label/label'
import { Tag } from '@core/ui/tag/tag'
import { Title } from '@core/ui/title/title'
import { Typography } from '@core/ui/typography/typography'
import { createFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

const section = css({ display: 'flex', flexDirection: 'column', gap: '8', maxW: '[1400px]', mx: 'auto', p: 'gutter' })
const intro = css({ display: 'flex', flexDirection: 'column', gap: '2' })

const grid = css({
  display: 'grid',
  gap: '6',
  gridTemplateColumns: '[repeat(auto-fill, minmax(min(100%, 320px), 1fr))]',
})

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
  {
    title: 'Civic Atlas',
    year: '2019',
    role: 'Contractor',
    tone: 'navy',
    description: 'Open data maps of city spending.',
  },
] as const

function Home() {
  return (
    <main className={section}>
      <div className={intro}>
        <Title as="h1" size="xl" weight="bold">
          Selected work
        </Title>
        <Typography size="lg">Product design and front-end for teams who care about the details.</Typography>
      </div>
      <div className={grid}>
        {projects.map(({ title, year, role, tone, description }) => (
          <Card key={title} render={<a href={`/work/${title.toLowerCase().replace(/ /g, '-')}`} />}>
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
      </div>
    </main>
  )
}

export const Route = createFileRoute('/')({ component: Home })
