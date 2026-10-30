import { Rail } from '@/components/projects/rail'
import { LabeledSection } from '@/components/ui/labeled-section/labeled-section'
import { ListRow } from '@/components/ui/list-row/list-row'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'
import { DarkSlabFooter } from './dark-slab-footer'

const pages = [
  { title: 'Home', description: 'Start from the top.', href: '/' },
  { title: 'About', description: 'Who I am and how I work.', href: '/about' },
] as const

/** Shared page for 404s and other errors: a giant status code and a way back. */
export function ErrorPage({ code, message }: { code: string; message: string }) {
  return (
    <>
      <main className="max-w-site mx-auto p-gutter pt-fluid-xl">
        <div className="grid items-end gap-fluid-s md:grid-cols-[minmax(0,9fr)_minmax(0,3fr)]">
          <h1 className="text-[clamp(120px,22vw,360px)] leading-[0.8] font-extralight tracking-[-0.08em]">
            {code[0]}
            <span className="font-black">{code.slice(1, -1)}</span>
            {code.slice(-1)}
            <span className="font-black text-accent-brand">.</span>
          </h1>
          <div className="flex flex-col gap-3.5 pb-4">
            <Typography size="sm" weight="medium">
              {message}
            </Typography>
            <a href="/" className="focus-ring font-semibold text-accent-brand">
              Back to the homepage →
            </a>
          </div>
        </div>

        <LabeledSection id="way-back" tone="navy">
          <LabeledSection.Label>Try one of these</LabeledSection.Label>
          <LabeledSection.Content>
            <div className="border-t border-border-default">
              {pages.map(({ title, description, href }) => (
                // biome-ignore lint/a11y/useAnchorContent: Base UI merges children onto the element
                <ListRow key={href} render={<a href={href} />}>
                  <ListRow.Body>
                    <Title as="span" size="xs" weight="medium">
                      {title}
                    </Title>
                    <Typography render={<span className="block opacity-75" />}>{description}</Typography>
                  </ListRow.Body>
                  <ListRow.Meta>→</ListRow.Meta>
                </ListRow>
              ))}
            </div>
          </LabeledSection.Content>
        </LabeledSection>

        <Rail tone="coral" />
      </main>
      <DarkSlabFooter />
    </>
  )
}

export function NotFound() {
  return <ErrorPage code="404" message="This page took the last tram home. It moved, or it never existed." />
}

export function ServerError() {
  return <ErrorPage code="500" message="Something broke on my end. Try again in a moment." />
}
