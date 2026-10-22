import { css, cva } from '../../../../styled-system/css'

/** Two-column section: label column | content column (stacked on small screens). */
export const sectionStyles = css({
  display: 'grid',
  // no base columns: a same-named utility in an app stylesheet would load later and beat the md rule below
  '& > *': { minWidth: '0' },
  gap: 'fluid.s',
  pt: 'fluid.l',
  md: { gridTemplateColumns: '[minmax(0, 3fr) minmax(0, 9fr)]' },
})

/** Sticky below the SiteHeader and a docked SectionNav. */
export const labelStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
  md: {
    position: 'sticky',
    top: '[calc(var(--site-header-height, 0px) + var(--section-nav-height, 0px) + 32px)]',
    transition: '[top .45s cubic-bezier(.65,0,.35,1)]',
    _motionReduce: { transition: '[none]' },
  },
})

/** Rail above each section: a pill in the section's tone followed by a hairline. */
export const dividerStyles = cva({
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '3',
    mt: 'fluid.4xl',
    '& [data-part="pill"]': { flex: 'none', width: '16', height: '[10px]', borderRadius: 'pill' },
    '& [data-part="rule"]': { flex: '1', height: '[1px]', background: 'border.default' },
  },
  variants: {
    tone: {
      coral: { '& [data-part="pill"]': { background: 'coral' } },
      navy: { '& [data-part="pill"]': { background: 'navy' } },
      azure: { '& [data-part="pill"]': { background: 'azure' } },
      plum: { '& [data-part="pill"]': { background: 'plum' } },
    },
  },
  defaultVariants: { tone: 'coral' },
})

export const numberStyles = css({ fontFamily: 'mono', fontSize: 'xs', opacity: 0.6 })
