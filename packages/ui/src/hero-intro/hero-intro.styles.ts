import { css } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'
const pop = 'cubic-bezier(.3,1.4,.5,1)'
const on = ':is(:hover, :focus-within)'

/** Thin sentence; the active phrase's word turns black and its pill's image overflows as a circle. */
export const heroIntroStyles = css({
  margin: '0',
  fontFamily: 'body',
  fontSize: '[clamp(40px, 6.4vw, 96px)]',
  fontWeight: 'light',
  lineHeight: '[1.08]',
  letterSpacing: 'tighter',
  textWrap: 'pretty',
  '& [data-word]': { cursor: 'pointer', transition: `[font-weight .4s ${ease}, letter-spacing .4s ${ease}]` },
  // the pill only reserves space (1.7em x 0.82em); on hover the image grows to 2.4em x 2.4em in %; its image overflows it on hover without moving the text
  '& [data-pill]': {
    display: 'inline-block',
    position: 'relative',
    verticalAlign: '[-0.08em]',
    height: '[0.82em]',
    width: '[1.7em]',
    marginInline: '[0.08em]',
    cursor: 'pointer',
  },
  '& [data-pill] > *': {
    position: 'absolute',
    top: '[50%]',
    left: '[50%]',
    translate: '[-50% -50%]',
    width: '[100%]',
    height: '[100%]',
    aspectRatio: 'auto',
    borderRadius: 'full',
    fontSize: '[10px]',
    whiteSpace: 'nowrap',
    transition: `[width .5s ${pop}, height .5s ${pop}]`,
  },
  [`& [data-phrase]${on}`]: {
    '& [data-word]': { fontWeight: 'black', letterSpacing: 'tight' },
    '& [data-pill] > *': { width: '[141%]', height: '[293%]', zIndex: '1' },
  },
  _motionReduce: { '&, & *': { transition: '[none]' } },
})

export const phraseStyles = css({ display: 'inline' })
