import { LinkButton } from '@core/ui/button/link-button'
import { Image } from '@core/ui/image/image'
import { Label } from '@core/ui/label/label'
import { ListRow } from '@core/ui/list-row/list-row'
import { SectionNav } from '@core/ui/section-nav/section-nav'
import { Tag } from '@core/ui/tag/tag'
import { Title } from '@core/ui/title/title'
import { Typography } from '@core/ui/typography/typography'
import { createFileRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { css } from '../../styled-system/css'

const column = css({ maxW: '[1400px]', mx: 'auto', px: 'gutter' })
const split = css({
  display: 'grid',
  gridTemplateColumns: '[minmax(0, 1fr)]',
  gap: 'fluid.s',
  md: { gridTemplateColumns: '[minmax(0, 3fr) minmax(0, 9fr)]' },
})
const head = css({ pt: 'fluid.xl', pb: 'fluid.l', alignItems: 'end' })
const headTitle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  flexWrap: 'wrap',
  gap: 'fluid.s',
})
const status = css({ display: 'flex', flexDirection: 'column', gap: '2' })
const intro = css({ pt: 'fluid.l' })
const introText = css({ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 'fluid.l' })
const facts = css({
  display: 'grid',
  gridTemplateColumns: '[repeat(2, minmax(0, 1fr))]',
  gap: 'fluid.s',
  borderTop: '[1.5px solid]',
  borderColor: 'border.strong',
  pt: 'fluid.2xs',
  md: { gridTemplateColumns: '[repeat(4, minmax(0, 1fr))]' },
})
const fact = css({ display: 'flex', flexDirection: 'column', gap: '1' })
const sectionStyles = css({
  mt: 'fluid.2xl',
  pt: 'fluid.2xs',
  borderTop: '[1.5px solid]',
  borderColor: 'border.strong',
  scrollMarginTop: '[calc(var(--site-header-height, 0px) + var(--section-nav-height, 0px) + 16px)]',
})
const sectionLabel = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
  md: {
    position: 'sticky',
    top: '[calc(var(--site-header-offset, 0px) + var(--section-nav-height, 0px) + 16px)]',
    transition: '[top .45s cubic-bezier(.65,0,.35,1)]',
    _motionReduce: { transition: '[none]' },
  },
})
const number = css({ fontFamily: 'mono', fontSize: 'xs', opacity: 0.6 })
const twoUp = css({ display: 'grid', gap: 'fluid.s', md: { gridTemplateColumns: '[repeat(2, minmax(0, 1fr))]' } })
const quote = css({ gridColumn: '[1 / -1]', borderLeft: '[3px solid]', borderColor: 'accent.brand', pl: 'fluid.s' })
const panel = css({ borderRadius: 'card', p: 'fluid.s' })
const outline = css({ borderRadius: 'card', p: 'fluid.s', border: '[1.5px solid]', borderColor: 'border.strong' })
const tags = css({ display: 'flex', flexWrap: 'wrap', gap: '2', pt: '2' })
const langs = css({ display: 'grid', gap: 'fluid.s', gridTemplateColumns: '[repeat(3, minmax(0, 1fr))]' })
const lang = css({ display: 'flex', flexDirection: 'column', gap: '3' })
const langCode = css({ fontSize: 'step.6', fontWeight: 'thin', lineHeight: 'none', letterSpacing: 'tighter' })
const meter = css({
  height: '[4px]',
  bg: 'gray.300',
  borderRadius: 'pill',
  overflow: 'hidden',
  '& > span': { display: 'block', height: '[100%]', bg: 'fg.default' },
})
const hobbies = css({
  display: 'grid',
  gap: 'fluid.2xs',
  gridTemplateColumns: '[repeat(2, minmax(0, 1fr))]',
  md: { gridTemplateColumns: '[repeat(4, minmax(0, 1fr))]' },
})
const hobby = css({
  borderRadius: 'card',
  p: 'fluid.xs',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 'fluid.s',
  minH: '[160px]',
})
const refs = css({ display: 'flex', flexDirection: 'column', gap: 'fluid.m' })
const figure = css({ m: '0', display: 'flex', flexDirection: 'column', gap: '3' })
const contact = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: 'fluid.s',
})
const end = css({ pb: 'fluid.2xl' })

// TODO: mock data, replace with real content
const sections = [
  { id: 'story', label: 'Story' },
  { id: 'experience', label: 'Experience', hint: 'Twelve years, five chapters' },
  { id: 'education', label: 'Education & recognition' },
  { id: 'languages', label: 'Languages' },
  { id: 'outside-work', label: 'Outside work' },
  { id: 'references', label: 'References', hint: 'Full contacts on request' },
  { id: 'contact', label: 'Contact' },
]
const n = (id: string) => String(sections.findIndex((s) => s.id === id) + 1).padStart(2, '0')

const factsList = [
  ['Based in', 'Nijmegen, NL'],
  ['Experience', '12 years'],
  ['Focus', 'Health, transit'],
  ['Available', 'Feb 2027'],
]
const experience = [
  { years: '2022 — now', role: 'Independent', org: 'Product design + front-end', location: 'Remote' },
  { years: '2018 — 2022', role: 'Lead designer', org: 'Shiftboard', location: 'Amsterdam' },
  { years: '2014 — 2018', role: 'Product designer', org: 'Loop Transit', location: 'Utrecht' },
  { years: '2012 — 2014', role: 'Designer', org: 'Studio Norte', location: 'Rotterdam' },
  { years: '2011', role: 'Intern', org: 'Total Identity', location: 'Amsterdam' },
]
const education = [
  { years: '2007 — 2011', title: 'BA Graphic Design', org: 'HKU, Utrecht' },
  { years: '2016', title: 'Interaction Design Specialisation', org: 'UC San Diego (online)' },
  { years: '2019', title: 'Front-end Masters', org: 'Self-directed, 6 months' },
]
const awards = [
  { years: '2025', title: 'Dutch Design Award', org: 'nominee, Shiftboard' },
  { years: '2024', title: 'Eye on Design', org: 'profile' },
  { years: '2021', title: 'Apple Design Award', org: 'finalist, Loop' },
]
const languages = [
  { code: 'NL', name: 'Dutch', level: 'Native', width: '100%' },
  { code: 'EN', name: 'English', level: 'Fluent', width: '92%' },
  { code: 'DE', name: 'German', level: 'Conversational', width: '58%' },
]
const outside = [
  { label: 'Photography', text: 'I shoot film, mostly Portra 400.', surface: 'navy' },
  { label: 'Reading', text: 'The Death and Life of Great American Cities, again.', surface: 'snow' },
  { label: 'Riding', text: 'Every regional train line, end to end.', surface: 'coral' },
  { label: 'Building', text: 'An e-ink clock that shows when the bus actually arrives.', surface: 'azure' },
] as const
const references = [
  {
    quote: 'Patrick sat through three night shifts before drawing a single screen.',
    name: 'Ana Ferreira',
    role: 'Head of Nursing Ops, Shiftboard',
  },
  {
    quote: 'He designs in the browser, so what we approved is what we shipped.',
    name: 'Tomás Reis',
    role: 'CTO, Loop Transit',
  },
]

function Section({ id, children }: { id: string; children: ReactNode }) {
  const s = sections.find((x) => x.id === id)
  return (
    <section id={id} className={`${split} ${sectionStyles}`} aria-labelledby={`${id}-title`}>
      <div>
        <div className={sectionLabel}>
          <span className={number}>{n(id)}</span>
          <Title as="h2" size="xs" weight="bold" id={`${id}-title`}>
            {s?.label}
          </Title>
          {s?.hint ? <Label>{s.hint}</Label> : null}
        </div>
      </div>
      <div>{children}</div>
    </section>
  )
}

function About() {
  return (
    <main>
      <div className={`${column} ${split} ${head}`}>
        <div className={status}>
          <Label>Booking from Feb 2027</Label>
          <Label size="xs">Last updated 12 Oct 2026</Label>
        </div>
        <div className={headTitle}>
          <Title as="h1" size="xl">
            About <b>me.</b>
          </Title>
          <LinkButton href="#" variant="primary" icon="↓">
            Download CV
          </LinkButton>
        </div>
      </div>

      <SectionNav>
        {sections.map(({ id, label }) => (
          <SectionNav.Link key={id} href={`#${id}`} number={n(id)}>
            {label}
          </SectionNav.Link>
        ))}
      </SectionNav>

      <div className={`${column} ${end}`}>
        <div className={`${split} ${intro}`}>
          {/* TODO: placeholder image, replace with a real portrait */}
          <Image label="portrait" ratio="1/1" />
          <div className={introText}>
            <Title as="p" size="md">
              I’m Patrick, a Dutch designer and developer. I make <b>calm software for people doing hard jobs</b>.
            </Title>
            <div className={facts}>
              {factsList.map(([k, v]) => (
                <div key={k} className={fact}>
                  <Label size="xs">{k}</Label>
                  <Title as="span" size="xs" weight="bold">
                    {v}
                  </Title>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Section id="story">
          <div className={twoUp}>
            <Typography>
              I studied graphic design before I ever touched a product. My first job was redesigning bus timetables,
              which taught me that most people read an interface in a hurry, standing up, with something else on their
              mind.
            </Typography>
            <Typography>
              Since 2014 I’ve worked on transit, health and fintech products, first in-house and since 2022 on my own. I
              design in the browser, ship with engineers, and spend as much time watching people work as drawing
              screens.
            </Typography>
            <div className={quote}>
              <Title as="p" size="sm">
                Nobody reads a tooltip at 4am. The screen has to say it once, clearly.
              </Title>
            </div>
          </div>
        </Section>

        <Section id="experience">
          <div className={panel} data-surface="navy">
            {experience.map((e) => (
              <ListRow key={e.years}>
                <ListRow.Lead>{e.years}</ListRow.Lead>
                <ListRow.Body>
                  <Title as="span" size="xs" weight="bold">
                    {e.role}
                  </Title>
                  <Title as="span" size="xs">{` · ${e.org}`}</Title>
                </ListRow.Body>
                <ListRow.Meta>
                  <Label size="xs">{e.location}</Label>
                </ListRow.Meta>
              </ListRow>
            ))}
          </div>
        </Section>

        <Section id="education">
          <div className={twoUp}>
            <div className={outline}>
              <Label>Education</Label>
              {education.map((e) => (
                <ListRow key={e.title}>
                  <ListRow.Lead>{e.years}</ListRow.Lead>
                  <ListRow.Body>
                    <Title as="span" size="xs" weight="bold">
                      {e.title}
                    </Title>
                    <Title as="span" size="xs">{` · ${e.org}`}</Title>
                  </ListRow.Body>
                </ListRow>
              ))}
            </div>
            <div className={panel} data-surface="azure">
              <Label>Awards & press</Label>
              {awards.map((a) => (
                <ListRow key={a.title}>
                  <ListRow.Lead>{a.years}</ListRow.Lead>
                  <ListRow.Body>
                    <Title as="span" size="xs" weight="bold">
                      {a.title}
                    </Title>
                    <Title as="span" size="xs">{` · ${a.org}`}</Title>
                  </ListRow.Body>
                </ListRow>
              ))}
            </div>
          </div>
        </Section>

        <Section id="languages">
          <div className={langs}>
            {languages.map((l) => (
              <div key={l.code} className={lang}>
                <span className={langCode}>{l.code}</span>
                <span className={meter}>
                  <span style={{ width: l.width }} />
                </span>
                <Label>
                  {l.name} · {l.level}
                </Label>
              </div>
            ))}
          </div>
        </Section>

        <Section id="outside-work">
          <div className={hobbies}>
            {outside.map((h) => (
              <div key={h.label} className={hobby} data-surface={h.surface}>
                <Label size="xs">{h.label}</Label>
                <Typography size="sm">{h.text}</Typography>
              </div>
            ))}
          </div>
        </Section>

        <Section id="references">
          <div className={`${panel} ${refs}`} data-surface="plum">
            {references.map((r) => (
              <figure key={r.name} className={figure}>
                <Title as="p" size="sm" render={<blockquote />}>
                  “{r.quote}”
                </Title>
                <figcaption>
                  <Label>
                    <b>{r.name}</b> · {r.role}
                  </Label>
                </figcaption>
              </figure>
            ))}
            <div className={tags}>
              <Tag tone="snow" appearance="outline" size="sm">
                3 more on request
              </Tag>
            </div>
          </div>
        </Section>

        <Section id="contact">
          <div className={`${outline} ${contact}`}>
            <Title as="p" size="md">
              Want the long version? <b>Let’s talk.</b>
            </Title>
            <LinkButton href="mailto:contact@patrickroelofs.com" variant="primary" icon="↗">
              contact@patrickroelofs.com
            </LinkButton>
          </div>
        </Section>
      </div>
    </main>
  )
}

export const Route = createFileRoute('/about')({
  component: About,
  staticData: { hideHeaderOnScroll: true },
  head: () => ({ meta: [{ title: 'About · Patrick Roelofs' }] }),
})
