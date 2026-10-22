import { NavigationMenu as Base } from '@base-ui/react/navigation-menu'
import { cx } from 'class-variance-authority'
import type { ReactNode } from 'react'

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
        <Base.Positioner
          className={cx(
            'z-40 w-(--positioner-width) h-(--positioner-height)',
            '[transition:left_.35s_var(--ease-soft),top_.35s_var(--ease-soft),width_.35s_var(--ease-soft),height_.35s_var(--ease-soft)]',
            'data-instant:transition-none',
          )}
          sideOffset={12}
          collisionPadding={12}
        >
          <Base.Popup
            className={cx(
              'relative w-(--popup-width) h-(--popup-height) bg-snow rounded-card origin-(--transform-origin)',
              '[box-shadow:0_12px_32px_rgba(25,32,54,.16),0_0_0_1px_rgba(25,32,54,.08)]',
              '[transition:opacity_.2s_var(--ease-soft),transform_.25s_var(--ease-soft),width_.35s_var(--ease-soft),height_.35s_var(--ease-soft)]',
              'data-starting-style:opacity-0 data-starting-style:[transform:translateY(-6px)_scale(.98)]',
              'data-ending-style:opacity-0 data-ending-style:[transform:translateY(-6px)_scale(.98)]',
            )}
          >
            <Base.Viewport className="relative w-full h-full overflow-hidden" />
          </Base.Popup>
        </Base.Positioner>
      </Base.Portal>
    </Base.Root>
  )
}

function List(props: Part<Base.List.Props>) {
  return <Base.List className="flex gap-0.5 p-1 bg-navy/8 rounded-pill w-fit" {...props} />
}

function Item(props: Part<Base.Item.Props>) {
  return <Base.Item {...props} />
}

function Trigger({ children, ...props }: Part<Base.Trigger.Props>) {
  return (
    <Base.Trigger
      className={cx(
        'group/trigger inline-flex items-center gap-1.5 px-4 py-2.5 rounded-pill text-navy cursor-pointer',
        'text-sm font-medium leading-none tracking-tight transition-[background,color]',
        'not-data-popup-open:hover:bg-navy/8',
        'focus-ring',
        'data-popup-open:bg-navy data-popup-open:text-snow',
      )}
      {...props}
    >
      {children}
      <Base.Icon className="inline-block text-xs transition-transform duration-300 group-data-popup-open/trigger:rotate-180">
        ↓
      </Base.Icon>
    </Base.Trigger>
  )
}

function Content(props: Part<Base.Content.Props>) {
  return (
    <Base.Content
      className={cx(
        'w-max [transition:opacity_.3s_var(--ease-soft),transform_.32s_var(--ease-soft)]',
        'data-starting-style:opacity-0 data-ending-style:opacity-0',
        'data-starting-style:data-[activation-direction=right]:[transform:translateX(28px)]',
        'data-starting-style:data-[activation-direction=left]:[transform:translateX(-28px)]',
        'data-ending-style:data-[activation-direction=right]:[transform:translateX(-28px)]',
        'data-ending-style:data-[activation-direction=left]:[transform:translateX(28px)]',
      )}
      {...props}
    />
  )
}

/** Top-level link in the bar, styled like a trigger. Renders an `<a>`; use `render` for a router link. */
function Link(props: Part<Base.Link.Props>) {
  return (
    <Base.Link
      className={cx(
        'inline-flex items-center gap-1.5 px-4 py-2.5 rounded-pill text-navy cursor-pointer',
        'text-sm font-medium leading-none tracking-tight transition-[background,color]',
        'not-data-popup-open:hover:bg-navy/8',
        'focus-ring',
        'data-popup-open:bg-navy data-popup-open:text-snow',
      )}
      {...props}
    />
  )
}

export type NavigationMenuContentLinkProps = Part<Base.Link.Props> & {
  title: ReactNode
  description?: ReactNode
  meta?: ReactNode
}

/** Row link inside a `Content` panel. */
function ContentLink({ title, description, meta, ...props }: NavigationMenuContentLinkProps) {
  return (
    <Base.Link
      className={cx(
        'group/link grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-1 items-baseline px-3.5 py-3 rounded-control',
        'text-navy transition-[background] duration-150',
        'hover:bg-navy/8 focus-visible:bg-navy/8 focus-ring [--focus-offset:0px]',
      )}
      {...props}
    >
      <span
        className={cx(
          'text-menu-title font-semibold tracking-tight transition-[font-weight] duration-300',
          'group-hover/link:font-extrabold group-focus-visible/link:font-extrabold',
        )}
      >
        {title}
      </span>
      {meta ? <span className="text-xs opacity-55">{meta}</span> : <span />}
      {description ? <span className="col-[1/-1] text-sm leading-normal opacity-65">{description}</span> : null}
    </Base.Link>
  )
}

export const NavigationMenu = Object.assign(Root, { List, Item, Trigger, Content, Link, ContentLink })
