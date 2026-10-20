import { Card } from '@core/ui/card/card'
import { Grid } from '@core/ui/grid/grid'
import { HeroIntro } from '@core/ui/hero-intro/hero-intro'
import { Image } from '@core/ui/image/image'
import { Label } from '@core/ui/label/label'
import { ListRow } from '@core/ui/list-row/list-row'
import { Tag } from '@core/ui/tag/tag'
import { Tile } from '@core/ui/tile/tile'
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

const sectionHead = css({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '6',
})
const archiveList = css({ borderTopWidth: '[1.5px]', borderTopStyle: 'solid', borderColor: 'fg.default' })
const archiveMeta = css({ display: 'flex', gap: '6' })

// TODO: mock data, replace with real content
const writing = [
  { date: 'Sep 2026', title: 'Designing for the night shift', kind: 'Essay', minutes: '9 min' },
  { date: 'Jul 2026', title: 'Your empty state is a promise', kind: 'Essay', minutes: '6 min' },
  { date: 'Jun 2026', title: 'Lisbon Design Week: slides + notes', kind: 'Talk', minutes: '22 min' },
  { date: 'Apr 2026', title: 'Notes on prototyping in code', kind: 'Note', minutes: '4 min' },
  { date: 'Jan 2026', title: 'What transit maps taught me about hierarchy', kind: 'Essay', minutes: '11 min' },
  { date: 'Nov 2025', title: 'A tiny checklist for handoff', kind: 'Note', minutes: '3 min' },
] as const

const cvSide = css({
  display: 'grid',
  gap: 'fluid.m',
  minWidth: '0',
  md: { gridTemplateRows: '[repeat(2, minmax(0, 1fr))]' },
})
const tools = css({ display: 'flex', flexWrap: 'wrap', gap: '2' })

// TODO: mock data, replace with real content
const cv = [
  { years: '2024–now', role: 'Independent designer', org: 'Shiftboard, Loop Transit', location: 'Lisbon' },
  { years: '2020–24', role: 'Founding designer', org: 'Fieldkit', location: 'Remote' },
  { years: '2017–20', role: 'Designer', org: 'Civic Lab', location: 'Porto' },
  { years: '2014–17', role: 'Junior designer', org: 'Studio Halde', location: 'Porto' },
  { years: '2014', role: 'BA Communication Design', org: 'University of Porto', location: 'Porto' },
] as const
const toolkit = ['Figma', 'TypeScript', 'React', 'User research', 'Design systems', 'Workshops'] as const

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
        based in
        <br />
        <HeroIntro.Phrase>
          <HeroIntro.Word>the Netherlands </HeroIntro.Word>{' '}
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
      <section id="cv" className={work}>
        <div className={sectionHead}>
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
              <ul>
                {cv.map(({ years, role, org, location }) => (
                  <ListRow key={years} render={<li />}>
                    <ListRow.Lead>{years}</ListRow.Lead>
                    <ListRow.Body>
                      <Title as="span" size="xs" weight="bold">
                        {role}
                      </Title>
                      <Title as="span" size="xs">{` · ${org}`}</Title>
                    </ListRow.Body>
                    <ListRow.Meta>
                      <Label size="xs">{location}</Label>
                    </ListRow.Meta>
                  </ListRow>
                ))}
              </ul>
            </Tile>
          </Grid.Item>
          <Grid.Item span={4} render={<div className={cvSide} />}>
            <Tile tone="plum" justify="start">
              <Tile.Label>Toolkit</Tile.Label>
              <div className={tools}>
                {toolkit.map((tool) => (
                  <Tag key={tool} tone="snow" appearance="soft">
                    {tool}
                  </Tag>
                ))}
              </div>
            </Tile>
            <Tile tone="coral" render={<a href="/cv.pdf" />}>
              <Tile.Label>Full CV</Tile.Label>
              <Title as="span" size="sm" weight="bold">
                Download PDF ↓
              </Title>
            </Tile>
          </Grid.Item>
        </Grid>
      </section>
      <section id="writing" className={work}>
        <div className={sectionHead}>
          <Title as="h2" size="xl">
            Writing{' '}
            <Title as="span" size="xl" weight="black">
              archive
            </Title>
          </Title>
        </div>
        <ul className={archiveList}>
          {writing.map(({ date, title, kind, minutes }) => (
            <li key={title}>
              <ListRow render={<a href={`/writing/${title.toLowerCase().replace(/\W+/g, '-')}`} />}>
                <ListRow.Lead>{date}</ListRow.Lead>
                <ListRow.Body>
                  <Title as="span" size="sm" weight="medium">
                    {title}
                  </Title>
                </ListRow.Body>
                <ListRow.Meta>
                  <span className={archiveMeta}>
                    <Label size="xs">{kind}</Label>
                    <Label size="xs">{minutes}</Label>
                  </span>
                </ListRow.Meta>
              </ListRow>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export const Route = createFileRoute('/')({ component: Home })
