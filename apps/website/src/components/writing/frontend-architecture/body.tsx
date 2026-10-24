import type { ReactNode } from 'react'
import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { headings } from './headings'

function Section({ n, children }: { n: 1 | 2 | 3 | 4 | 5; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-fluid-s">
      <div id={`h-${n}`} className="mt-fluid-m scroll-mt-20">
        <Title as="h2" size="xs" weight="bold">
          <Label size="xs" render={<span />}>
            {String(n).padStart(2, '0')}
          </Label>{' '}
          {headings[n - 1]}
        </Title>
      </div>
      {children}
    </section>
  )
}

function Code({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-lg bg-bg-inverse p-5 text-step-n1 leading-relaxed text-fg-inverse">
      {children}
    </pre>
  )
}

const tree = `apps/website/src/
  routes/_frontend/
    writing.index.tsx
  components/
    writing/
      intro.tsx
      latest.tsx
      archive.tsx
      posts.ts
    about/
      intro.tsx
      story.tsx
      education.tsx
    ui/
      tag/tag.tsx
      button/button.tsx`

const route = `<Intro />
<Rail tone="coral" />
<Latest />
<Rail tone="navy" />
<Archive />`

export function Body() {
  return (
    <article className="flex max-w-[68ch] flex-col gap-fluid-s">
      <Typography size="lg">
        <span className="float-left mr-3.5 mt-2 text-step-6 font-black leading-[0.8] text-accent-brand">E</span>very
        session with a coding agent starts the same way: it knows nothing about my project. It has no memory of last
        week, no feel for where things live, no idea which of three similar files is the real one. A new teammate on
        their first day is in the same position. I stopped treating those as two problems.
      </Typography>

      <Section n={1}>
        <Typography size="lg">
          Architecture is the cost of orientation. How many files must be opened before a change is safe to make? In a
          small codebase that cost is invisible, because you carry the map in your head. An agent carries nothing, so it
          pays the full price every time, and so does anyone who joins after you.
        </Typography>
        <Typography size="lg">
          So I design for the reader with no context. The question for every decision in this repo is whether someone
          arriving cold can answer three things quickly: where is it, what may I change, and how do I know it still
          works.
        </Typography>
      </Section>

      <Section n={2}>
        <Typography size="lg">
          The default front-end layout groups files by kind: a components folder, a hooks folder, a styles folder, a
          types folder. It is tidy and it scatters every feature across the tree. Changing one page means visiting five
          directories.
        </Typography>
        <Typography size="lg">
          Here, files that change together live together. The writing section, the about page and the project pages each
          get a folder under components, with one file per section of the page.
        </Typography>
        <Code>{tree}</Code>
        <Typography size="lg">
          The route file then reads like a table of contents. The whole writing index is a handful of lines, and each
          name points at a file with the same name.
        </Typography>
        <Code>{route}</Code>
        <Typography size="lg">
          This helps people for the obvious reason, and it helps agents for a less obvious one. A directory listing is
          the cheapest context there is. An agent that lists one folder learns the page's structure, and one that edits
          inside it cannot accidentally touch an unrelated feature. Deleting a section is deleting a file. The data a
          feature needs sits beside it, in the same folder as the components that use it.
        </Typography>
      </Section>

      <Section n={3}>
        <Typography size="lg">
          Shared components follow the same idea at a smaller scale. Each lives in its own folder under ui, named after
          the component. Its variants are declared with cva in the same file, and only when there are variants to
          declare. Nothing about a button is defined anywhere but the button.
        </Typography>
        <Typography size="lg">
          The rule I enjoy most is that no component accepts a className. If callers can pass classes, every call site
          becomes a place where the design can quietly drift, and drift is what an agent produces when it is trying to
          be helpful. With a closed API, the only way to get a different look is to add a variant, which is a visible,
          reviewable change in one place.
        </Typography>
        <Typography size="lg">
          Class names are written as complete literal strings, never assembled with template literals. Tailwind can only
          generate what it can see, and so can grep. A string you can search for is a string an agent can find.
        </Typography>
      </Section>

      <Section n={4}>
        <Typography size="lg">
          Instructions for agents work best when they sit next to the thing they describe. The root AGENTS.md is short
          and holds only what applies everywhere: how components are built and which checks must pass. Anything specific
          to a package lives in that package's own AGENTS.md, so the agent reads it exactly when it is working there.
        </Typography>
        <Typography size="lg">
          Design decisions get the same treatment. Colour, spacing and type live as semantic tokens in a single theme
          package, with names like bg-bg-canvas, text-fg-default and gap-fluid-m. Tokens name intent instead of value,
          so an agent picks the right one by meaning and a redesign changes one file. A hard-coded hex value is a bug
          the system can see.
        </Typography>
        <Typography size="lg">
          Unfinished work is labelled honestly. Placeholder content carries a TODO that says it is mock data. An agent
          that meets it knows what is real and what is scaffolding, and does not build on top of a guess.
        </Typography>
      </Section>

      <Section n={5}>
        <Typography size="lg">
          Rules written in prose get ignored under pressure, by people and by models. Rules enforced by a command do
          not. Biome and the type checker have to pass before anything merges, and that is the entire definition of
          correct. It gives an agent a loop it can run on its own: change, check, fix, repeat, without waiting for me to
          notice.
        </Typography>
        <Typography size="lg">
          Repeatable workflows are written down as skills in the repo. Opening a pull request runs the checks, pushes
          and creates a draft. Changes to the theme or the website get a short recorded demo for reviewers. The
          procedure is versioned with the code, so improving it is a pull request like any other.
        </Typography>
        <Typography size="lg">
          None of this is new. Co-location, closed component APIs, design tokens and strict checks are old ideas. What
          changed is the reader. Optimise a codebase for someone who starts from zero, and it turns out to be pleasant
          for everyone else too.
        </Typography>
      </Section>
    </article>
  )
}
