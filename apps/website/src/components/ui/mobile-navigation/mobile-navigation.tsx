import { Accordion } from '@base-ui/react/accordion'
import { Collapsible } from '@base-ui/react/collapsible'
import { cx } from 'class-variance-authority'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

type Part<T extends { className?: unknown }> = Omit<T, 'className'>
type AnchorProps = Omit<ComponentPropsWithoutRef<'a'>, 'className'>

export type MobileNavigationProps = Part<Collapsible.Root.Props>

/**
 * Root. Owns the open state of the sheet; compose `Trigger` (e.g. in a header)
 * and `Sheet > Section | Link`. Mobile counterpart of `NavigationMenu`.
 */
function Root(props: MobileNavigationProps) {
  return <Collapsible.Root {...props} />
}

export type MobileNavigationTriggerProps = Part<Collapsible.Trigger.Props> & {
  /** Label while the sheet is open. */
  openLabel?: ReactNode
}

function Trigger({ children = 'Menu', openLabel = 'Close', ...props }: MobileNavigationTriggerProps) {
  return (
    <Collapsible.Trigger
      className={cx(
        'group/trigger flex w-fit ml-auto items-center px-3 py-2 border border-border-strong rounded-pill',
        'cursor-pointer text-sm font-medium leading-none',
        'focus-ring',
      )}
      {...props}
    >
      <span className="group-data-panel-open/trigger:hidden">{children}</span>
      <span className="hidden group-data-panel-open/trigger:inline">{openLabel}</span>
    </Collapsible.Trigger>
  )
}

/** The expanding sheet. Holds one section open at a time. */
function Sheet({ children, ...props }: Part<Collapsible.Panel.Props>) {
  return (
    <Collapsible.Panel
      className={cx(
        'flex flex-col px-4 pt-2 pb-6 overflow-hidden h-(--collapsible-panel-height)',
        '[transition:height_.4s_var(--ease-soft),opacity_.3s_var(--ease-soft)]',
        'data-starting-style:h-0 data-starting-style:opacity-0 data-ending-style:h-0 data-ending-style:opacity-0',
        '[&[hidden]]:hidden',
      )}
      {...props}
    >
      <nav aria-label="Main">
        <Accordion.Root>{children}</Accordion.Root>
      </nav>
    </Collapsible.Panel>
  )
}

function Section(props: Part<Accordion.Item.Props>) {
  return (
    <Accordion.Item
      className={cx(
        'border-b border-border-default animate-section-in',
        'nth-2:[animation-delay:.05s] nth-3:[animation-delay:.1s] nth-4:[animation-delay:.15s]',
      )}
      {...props}
    />
  )
}

function SectionTrigger({ children, ...props }: Part<Accordion.Trigger.Props>) {
  return (
    <Accordion.Header render={<div />}>
      <Accordion.Trigger
        className={cx(
          'group/trigger flex w-full justify-between items-center py-4.5 px-1 cursor-pointer',
          'text-xl font-extralight leading-none tracking-tighter',
          'focus-ring [--focus-offset:0px]',
          'transition-[font-weight] duration-300 data-panel-open:font-black',
        )}
        {...props}
      >
        {children}
        <span
          aria-hidden="true"
          className="text-md transition-transform duration-300 group-data-panel-open/trigger:rotate-180"
        >
          ↓
        </span>
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

function SectionPanel(props: Part<Accordion.Panel.Props>) {
  return (
    <Accordion.Panel
      className={cx(
        'flex flex-col pb-3 overflow-hidden h-(--accordion-panel-height)',
        '[transition:height_.3s_var(--ease-soft)]',
        'data-starting-style:h-0 data-ending-style:h-0 [&[hidden]]:hidden',
      )}
      {...props}
    />
  )
}

/** Top-level link without a section. */
function Link(props: AnchorProps) {
  return (
    <div
      className={cx(
        'border-b border-border-default animate-section-in',
        'nth-2:[animation-delay:.05s] nth-3:[animation-delay:.1s] nth-4:[animation-delay:.15s]',
      )}
    >
      <a
        className={cx(
          'flex w-full justify-between items-center py-4.5 px-1 cursor-pointer',
          'text-xl font-extralight leading-none tracking-tighter',
          'focus-ring [--focus-offset:0px]',
        )}
        {...props}
      />
    </div>
  )
}

export type MobileNavigationSectionLinkProps = AnchorProps & {
  title: ReactNode
  description?: ReactNode
  meta?: ReactNode
}

/** Row link inside a `SectionPanel`; same look as `NavigationMenu.ContentLink`. */
function SectionLink({ title, description, meta, ...props }: MobileNavigationSectionLinkProps) {
  return (
    <a
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
    </a>
  )
}

export const MobileNavigation = Object.assign(Root, {
  Trigger,
  Sheet,
  Section,
  SectionTrigger,
  SectionPanel,
  Link,
  SectionLink,
})
