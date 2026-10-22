import { useRender } from '@base-ui/react/use-render'
import type { ComponentProps } from 'react'
import { bodyStyles, leadStyles, metaStyles, rowStyles } from './list-row.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type ListRowProps = Part<useRender.ComponentProps<'div'>>

/** Row. A `<div>` by default; pass `render={<a href="…" />}` for a link row that turns coral on hover. */
function Root({ render, ...props }: ListRowProps) {
  return useRender({ render, defaultTagName: 'div', props: { className: rowStyles, ...props } })
}

/** Mono lead column, e.g. a date range. */
function Lead(props: Part<ComponentProps<'span'>>) {
  return <span className={leadStyles} data-lead="" {...props} />
}

/** Main column: put a `Title` (and detail text) inside. */
function Body(props: Part<ComponentProps<'span'>>) {
  return <span className={bodyStyles} {...props} />
}

/** Trailing small text, e.g. a `Label`. */
function Meta(props: Part<ComponentProps<'span'>>) {
  return <span className={metaStyles} {...props} />
}

export const ListRow = Object.assign(Root, { Lead, Body, Meta })
