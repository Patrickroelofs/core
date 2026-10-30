import type { ReactNode } from 'react'
import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { mockImage } from '@/mock/image'
import { headings } from './headings'

// TODO: mock data, replace with real content
const notes = [
  'Ward 4B, Amsterdam, over three weeks in autumn 2019. Shifts ran 22:30 to 07:30.',
  'We tested this by asking nurses to read a patient summary aloud while a call bell was ringing. Anything they skipped, we cut.',
  'The settings page went from 41 options to 6. Nobody has asked for the other 35 back.',
] as const

function Main({ children }: { children: ReactNode }) {
  return <div className="md:col-start-1">{children}</div>
}

function Heading({ n }: { n: 1 | 2 | 3 | 4 }) {
  return (
    <div className="mt-fluid-m md:col-start-1">
      <div id={`h-${n}`} className="scroll-mt-20">
        <Title as="h2" size="xs" weight="bold">
          <Label size="xs" render={<span />}>
            {String(n).padStart(2, '0')}
          </Label>{' '}
          {headings[n - 1]}
        </Title>
      </div>
    </div>
  )
}

/** Paragraph with a superscript marker and a sidenote beside it (below it on narrow screens). */
function Noted({ n, children }: { n: 1 | 2 | 3; children: string }) {
  return (
    <div className="grid items-start gap-2 md:col-span-full md:grid-cols-subgrid">
      <Typography size="lg">
        {children}
        <sup className="px-0.5 text-accent-brand">
          <a href={`#fn-${n}`}>{n}</a>
        </sup>
      </Typography>
      <aside
        id={`fn-${n}`}
        className="flex gap-2.5 border-t border-border-default pt-2.5 text-step-n1 target:text-accent-brand"
      >
        <span className="text-accent-brand">{n}</span>
        <span>{notes[n - 1]}</span>
      </aside>
    </div>
  )
}

export function Body() {
  return (
    <article className="grid gap-fluid-s md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-x-fluid-xl">
      <Main>
        <Typography size="lg">
          <span className="float-left mr-3.5 mt-2 text-step-6 font-black leading-[0.8] text-accent-brand">I</span>n the
          autumn of 2019 I spent three night shifts on a hospital ward before drawing a single screen. I wanted to
          understand the handover: the fifteen minutes at 7:30am when one team of nurses tells the next everything that
          happened in the last nine hours.
        </Typography>
      </Main>

      <Heading n={1} />
      <Noted n={1}>
        The tool they used was a long, scrolling list of patients, each with a dozen fields. It was accurate and
        complete, and almost nobody read it. Nurses printed it, folded it into a pocket and added notes by hand.
      </Noted>
      <Main>
        <Typography size="lg">
          By 4am the people using it had been awake for twenty hours. They read standing up, between call bells, with
          one hand on a trolley. The screen had to work for that person, not the one in the design review at 2pm.
        </Typography>
      </Main>

      <Heading n={2} />
      <Noted n={2}>
        We rewrote every patient card so it answered one question first: what does the next nurse need to do in the next
        hour? Everything else moved one tap away.
      </Noted>

      <figure className="my-fluid-m flex flex-col gap-3 md:col-span-full">
        <Image
          ratio="16/9"
          label="patient card, before and after"
          src={mockImage('patient card, before and after', 1600, 900)}
          alt="patient card, before and after"
        />
        <Label size="xs" render={<figcaption />}>
          <span>Fig. 1 · The patient card, first version and the one that shipped.</span>
        </Label>
      </figure>

      <Main>
        <Typography size="lg">
          The cards got shorter and the language got plainer. “Fluid balance monitoring required” became “Check fluids
          at 9”. The words were the design.
        </Typography>
      </Main>

      <blockquote className="my-fluid-l flex flex-col gap-5 md:col-span-full">
        <Title as="p" size="lg">
          “If I have to read it twice, I’ve already missed something.”
        </Title>
        <Label size="xs" render={<span />}>
          Ana, night nurse, Ward 4B
        </Label>
      </blockquote>

      <Heading n={3} />
      <Noted n={3}>
        Most of the work was deletion. We removed the colour-coded risk badges nobody could tell apart under ward
        lighting, the free-text fields that duplicated the chart, and most of the settings.
      </Noted>
      <Main>
        <Typography size="lg">
          Each thing we removed made the remaining things easier to see. Handover time dropped by 38% over the following
          six months, mostly because people stopped scrolling past things they didn’t need.
        </Typography>
      </Main>

      <Heading n={4} />
      <Main>
        <Typography size="lg">
          I now start every project by asking when and where the hardest use of it happens. Usually it’s late, rushed,
          or both. If the screen works then, it works at 2pm too.
        </Typography>
      </Main>
    </article>
  )
}
