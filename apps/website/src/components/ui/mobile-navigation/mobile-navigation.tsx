import { Accordion } from '@base-ui/react/accordion'
import { Collapsible } from '@base-ui/react/collapsible'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { contentLinkStyles } from '../navigation-menu/navigation-menu.styles'
import {
  linkStyles,
  sectionPanelStyles,
  sectionStyles,
  sectionTriggerStyles,
  sheetStyles,
  triggerStyles,
} from './mobile-navigation.styles'

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
    <Collapsible.Trigger className={triggerStyles} {...props}>
      <span data-when="closed">{children}</span>
      <span data-when="open">{openLabel}</span>
    </Collapsible.Trigger>
  )
}

/** The expanding sheet. Holds one section open at a time. */
function Sheet({ children, ...props }: Part<Collapsible.Panel.Props>) {
  return (
    <Collapsible.Panel className={sheetStyles} {...props}>
      <nav aria-label="Main">
        <Accordion.Root>{children}</Accordion.Root>
      </nav>
    </Collapsible.Panel>
  )
}

function Section(props: Part<Accordion.Item.Props>) {
  return <Accordion.Item className={sectionStyles} {...props} />
}

function SectionTrigger({ children, ...props }: Part<Accordion.Trigger.Props>) {
  return (
    <Accordion.Header render={<div />}>
      <Accordion.Trigger className={sectionTriggerStyles} {...props}>
        {children}
        <span aria-hidden="true" data-part="icon">
          ↓
        </span>
      </Accordion.Trigger>
    </Accordion.Header>
  )
}

function SectionPanel(props: Part<Accordion.Panel.Props>) {
  return <Accordion.Panel className={sectionPanelStyles} {...props} />
}

/** Top-level link without a section. */
function Link(props: AnchorProps) {
  return (
    <div className={sectionStyles}>
      <a className={linkStyles} {...props} />
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
    <a className={contentLinkStyles} {...props}>
      <span data-part="title">{title}</span>
      {meta ? <span data-part="meta">{meta}</span> : <span />}
      {description ? <span data-part="description">{description}</span> : null}
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
