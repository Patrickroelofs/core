import { Card } from '@/components/ui/card/card'
import { Grid } from '@/components/ui/grid/grid'
import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { Tag } from '@/components/ui/tag/tag'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

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

export function SelectedWork() {
  return (
    <section className="flex flex-col gap-fluid-l">
      <div className="flex flex-col gap-2">
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
    </section>
  )
}
