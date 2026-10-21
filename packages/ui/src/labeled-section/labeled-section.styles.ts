import { css } from '../../styled-system/css'

/** Hairline-topped two-column section: label column | content column (stacked on small screens). */
export const sectionStyles = css({
  display: 'grid',
  gridTemplateColumns: '[minmax(0, 1fr)]',
  gap: 'fluid.s',
  mt: 'fluid.2xl',
  pt: 'fluid.2xs',
  borderTop: '[1.5px solid]',
  borderColor: 'border.strong',
  md: { gridTemplateColumns: '[minmax(0, 3fr) minmax(0, 9fr)]' },
})

/** Sticky below the SiteHeader and a docked SectionNav. */
export const labelStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1',
  md: {
    position: 'sticky',
    top: '[calc(var(--site-header-height, 0px) + var(--section-nav-height, 0px) + 16px)]',
    transition: '[top .45s cubic-bezier(.65,0,.35,1)]',
    _motionReduce: { transition: '[none]' },
  },
})
