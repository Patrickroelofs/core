import { css } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'
const on = ':is(:hover, :focus-within)'

/** Thin sentence; the active phrase's word turns black and its pill widens. */
export const heroIntroStyles = css({
  margin: '0',
  fontFamily: 'body',
  fontSize: '[clamp(40px, 6.4vw, 96px)]',
  fontWeight: 'light',
  lineHeight: '[1.08]',
  letterSpacing: 'tighter',
  textWrap: 'pretty',
  '& [data-word]': { cursor: 'pointer', transition: `[font-weight .4s ${ease}]` },
  '& [data-pill]': {
    display: 'inline-block',
    verticalAlign: '[-0.08em]',
    height: '[0.82em]',
    width: '[1.7em]',
    marginInline: '[0.08em]',
    borderRadius: 'full',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: `[width .5s cubic-bezier(.3,1.4,.5,1)]`,
  },
  // the pill's image fills it whatever its ratio
  '& [data-pill] :is(img, div)': { height: '[100%]', aspectRatio: 'auto', fontSize: '[10px]', whiteSpace: 'nowrap' },
  [`& [data-phrase]${on}`]: { '& [data-word]': { fontWeight: 'black' }, '& [data-pill]': { width: '[3.4em]' } },
  _motionReduce: { '&, & *': { transition: '[none]' } },
})

export const phraseStyles = css({ display: 'inline' })
