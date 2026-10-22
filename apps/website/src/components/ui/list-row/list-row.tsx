import { useRender } from '@base-ui/react/use-render'
import { cx } from 'class-variance-authority'
import type { ComponentProps } from 'react'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type ListRowProps = Part<useRender.ComponentProps<'div'>>

/** Row. A `<div>` by default; pass `render={<a href="…" />}` for a link row that turns coral on hover. */
function Root({ render, ...props }: ListRowProps) {
  return useRender({
    render,
    defaultTagName: 'div',
    props: {
      className: cx(
        'grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 py-3 border-b border-border-default',
        'font-body text-fg-default no-underline transition-colors',
        'has-[>[data-lead]]:grid-cols-[minmax(72px,104px)_minmax(0,1fr)_auto]',
        'last:border-b-0',
        'link:px-2 link:[transition:color_.2s,padding-left_.25s_ease] link:hover:text-accent-brand link:hover:pl-6',
        'focus-ring',
        'motion-reduce:transition-none motion-reduce:link:hover:pl-2',
      ),
      ...props,
    },
  })
}

/** Mono lead column, e.g. a date range. */
function Lead(props: Part<ComponentProps<'span'>>) {
  return <span className="text-fg-default opacity-60 text-md" data-lead="" {...props} />
}

/** Main column: put a `Title` (and detail text) inside. */
function Body(props: Part<ComponentProps<'span'>>) {
  return <span className="min-w-0" {...props} />
}

/** Trailing small text, e.g. a `Label`. */
function Meta(props: Part<ComponentProps<'span'>>) {
  return <span className="whitespace-nowrap text-fg-default opacity-60" {...props} />
}

export const ListRow = Object.assign(Root, { Lead, Body, Meta })
