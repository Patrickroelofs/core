import type { MDXComponents } from 'mdx/types'
import type { ComponentProps, ReactNode } from 'react'
import { imageSrc } from '@/components/content-image'
import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { Title } from '@/components/ui/title/title'
import { Typography } from '@/components/ui/typography/typography'

/** Opening paragraph with a drop cap. */
function Lead({ children }: { children: ReactNode }) {
  return (
    <div className="first-letter:float-left first-letter:mr-3.5 first-letter:mt-2 first-letter:text-step-6 first-letter:font-black first-letter:leading-[0.8] first-letter:text-accent-brand">
      <Typography size="lg">{children}</Typography>
    </div>
  )
}

function Heading({ id, children, 'data-n': n }: ComponentProps<'h2'> & { 'data-n'?: number }) {
  return (
    <div className="mt-fluid-m">
      <div id={id} className="scroll-mt-20">
        <Title as="h2" size="xs" weight="bold">
          {n ? (
            <>
              <Label size="xs" render={<span />}>
                {String(n).padStart(2, '0')}
              </Label>{' '}
            </>
          ) : null}
          {children}
        </Title>
      </div>
    </div>
  )
}

/** Paragraph with a superscript marker and a sidenote beside it (below it on narrow screens). */
function Sidenote({ n, note, children }: { n: number; note: ReactNode; children: ReactNode }) {
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
        <span>{note}</span>
      </aside>
    </div>
  )
}

function Figure({ alt, src, caption }: { alt: string; src?: string; caption?: ReactNode }) {
  return (
    <figure className="my-fluid-m flex flex-col gap-3 md:col-span-full">
      <Image ratio="16/9" label={alt} src={imageSrc({ alt, src })} alt={alt} />
      {caption ? (
        <Label size="xs" render={<figcaption />}>
          <span>{caption}</span>
        </Label>
      ) : null}
    </figure>
  )
}

function Quote({ by, children }: { by?: ReactNode; children: ReactNode }) {
  return (
    <blockquote className="my-fluid-l flex flex-col gap-5 md:col-span-full">
      <Title as="p" size="lg">
        {children}
      </Title>
      {by ? (
        <Label size="xs" render={<span />}>
          {by}
        </Label>
      ) : null}
    </blockquote>
  )
}

export const writingComponents: MDXComponents = {
  Lead,
  Sidenote,
  Figure,
  Quote,
  h2: Heading,
  h3: ({ children }) => (
    <Title as="h3" size="xs" weight="bold">
      {children}
    </Title>
  ),
  p: ({ children }) => <Typography size="lg">{children}</Typography>,
  a: (props) => <a {...props} className="text-accent-brand underline underline-offset-2" />,
  ul: ({ children }) => <ul className="flex list-disc flex-col gap-2 pl-6 text-step-1">{children}</ul>,
  ol: ({ children }) => <ol className="flex list-decimal flex-col gap-2 pl-6 text-step-1">{children}</ol>,
  blockquote: ({ children }) => <blockquote className="border-l-2 border-coral pl-fluid-s">{children}</blockquote>,
}

export function Body({ children }: { children: ReactNode }) {
  return (
    <article className="grid gap-fluid-s md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-x-fluid-xl md:*:col-start-1">
      {children}
    </article>
  )
}
