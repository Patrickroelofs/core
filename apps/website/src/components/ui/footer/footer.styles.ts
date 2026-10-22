import { css } from '../../../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'
const pop = 'cubic-bezier(.3,1.4,.5,1)'
const active = ':is(:hover, :focus-visible)'

export const footerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: 'fluid.2xl',
  minWidth: '0',
  containerType: 'inline-size',
  borderRadius: 'card',
  fontFamily: 'body',
  bg: 'gray.300',
  color: 'fg.default',
  px: '8',
  pt: '9',
  pb: '5',
})

/** First name and surname sit apart; on hover/focus they pull together around the email pill. */
export const meetStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'fg.default',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  outline: 'none',
  fontSize: '[9.6cqw]',
  lineHeight: '[0.9]',
  letterSpacing: 'tighter',
  '& [data-first]': { fontWeight: 'extralight', transition: `[font-weight .6s ${ease}]` },
  '& [data-last]': { fontWeight: 'black' },
  '& [data-dot]': { color: 'coral' },
  '& [data-pill]': {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '[0.8em]',
    width: '[1.6em]',
    mx: '[0.12em]',
    borderRadius: 'full',
    borderWidth: '[0.02em]',
    borderStyle: 'solid',
    borderColor: 'fg.default/25',
    overflow: 'hidden',
    transition: `[width .7s ${pop}, background-color .4s, border-color .4s]`,
  },
  '& [data-email]': {
    color: 'snow',
    fontSize: '[0.16em]',
    fontWeight: 'bold',
    letterSpacing: 'tight',
    opacity: '0',
    transition: '[opacity .3s]',
  },
  [`&${active}`]: {
    '& [data-first]': { fontWeight: 'medium' },
    '& [data-pill]': { width: '[3.4em]', bg: 'coral', borderColor: 'transparent' },
    '& [data-email]': { opacity: '1', transitionDelay: '[.25s]' },
  },
  _focusVisible: { textDecoration: 'underline' },
  _motionReduce: { '&, & *': { transition: '[none]' } },
})

/** Strip under the name, e.g. copyright. */
export const barStyles = css({
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '3',
  pt: '4',
  borderTopWidth: '[1px]',
  borderTopStyle: 'solid',
  borderColor: 'fg.default/20',
})
