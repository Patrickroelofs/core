import { Card } from '@core/ui/card/card'
import { Grid } from '@core/ui/grid/grid'
import { HeroIntro } from '@core/ui/hero-intro/hero-intro'
import { Image } from '@core/ui/image/image'
import { Label } from '@core/ui/label/label'
import { Tag } from '@core/ui/tag/tag'
import { Title } from '@core/ui/title/title'
import { Typography } from '@core/ui/typography/typography'
import { createFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

const section = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'fluid.3xl',
  maxW: '[1400px]',
  mx: 'auto',
  p: 'gutter',
  pt: 'fluid.3xl',
})
const intro = css({ display: 'flex', flexDirection: 'column', gap: '2' })
const work = css({ display: 'flex', flexDirection: 'column', gap: 'fluid.l', pt: 'fluid.4xl' })

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

function Home() {
  return (
    <main className={section}>
      {/* TODO: placeholder images, replace with real photos */}
      <HeroIntro>
        Hi, I’m{' '}
        <HeroIntro.Phrase>
          <HeroIntro.Word>Patrick</HeroIntro.Word>{' '}
          <HeroIntro.Pill>
            <Image label="portrait" tone="light" />
          </HeroIntro.Pill>
        </HeroIntro.Phrase>
        , a{' '}
        <HeroIntro.Phrase>
          <HeroIntro.Word>frontend web developer</HeroIntro.Word>{' '}
          <HeroIntro.Pill>
            <Image label="at work" tone="coral" />
          </HeroIntro.Pill>
        </HeroIntro.Phrase>{' '}
        based in{' '}
        <HeroIntro.Phrase>
          <HeroIntro.Word>Nijmegen, the Netherlands</HeroIntro.Word>{' '}
          <HeroIntro.Pill>
            <Image label="the city" tone="azure" />
          </HeroIntro.Pill>
        </HeroIntro.Phrase>
        .
      </HeroIntro>
      <section className={work}>
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
      </section>
    </main>
  )
}

export const Route = createFileRoute('/')({ component: Home })
