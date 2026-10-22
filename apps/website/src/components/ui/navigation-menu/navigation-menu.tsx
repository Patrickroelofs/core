import { NavigationMenu as Base } from '@base-ui/react/navigation-menu'
import type { ReactNode } from 'react'
import {
  barItemStyles,
  contentLinkStyles,
  contentStyles,
  iconStyles,
  listStyles,
  popupStyles,
  positionerStyles,
  viewportStyles,
} from './navigation-menu.styles'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>

export type NavigationMenuProps = Part<Base.Root.Props>

/**
 * Root. Owns the shared flyout (positioner, popup, viewport) so consumers
 * only compose `List > Item > Trigger + Content`; the flyout morphs between items.
 */
function Root({ children, ...props }: NavigationMenuProps) {
  return (
    <Base.Root aria-label="Main" {...props}>
      {children}
      <Base.Portal>
        <Base.Positioner className={positionerStyles} sideOffset={12} collisionPadding={12}>
          <Base.Popup className={popupStyles}>
            <Base.Viewport className={viewportStyles} />
          </Base.Popup>
        </Base.Positioner>
      </Base.Portal>
    </Base.Root>
  )
}

function List(props: Part<Base.List.Props>) {
  return <Base.List className={listStyles} {...props} />
}

function Item(props: Part<Base.Item.Props>) {
  return <Base.Item {...props} />
}

function Trigger({ children, ...props }: Part<Base.Trigger.Props>) {
  return (
    <Base.Trigger className={barItemStyles()} {...props}>
      {children}
      <Base.Icon className={iconStyles}>↓</Base.Icon>
    </Base.Trigger>
  )
}

function Content(props: Part<Base.Content.Props>) {
  return <Base.Content className={contentStyles} {...props} />
}

/** Top-level link in the bar, styled like a trigger. Renders an `<a>`; use `render` for a router link. */
function Link(props: Part<Base.Link.Props>) {
  return <Base.Link className={barItemStyles()} {...props} />
}

export type NavigationMenuContentLinkProps = Part<Base.Link.Props> & {
  title: ReactNode
  description?: ReactNode
  meta?: ReactNode
}

/** Row link inside a `Content` panel. */
function ContentLink({ title, description, meta, ...props }: NavigationMenuContentLinkProps) {
  return (
    <Base.Link className={contentLinkStyles} {...props}>
      <span data-part="title">{title}</span>
      {meta ? <span data-part="meta">{meta}</span> : <span />}
      {description ? <span data-part="description">{description}</span> : null}
    </Base.Link>
  )
}

export const NavigationMenu = Object.assign(Root, { List, Item, Trigger, Content, Link, ContentLink })
