import { css, cva, type RecipeVariantProps } from '../../styled-system/css'

const ease = 'cubic-bezier(.2,.7,.2,1)'
const pop = 'cubic-bezier(.3,1.4,.5,1)'
const on = ':is(:hover, :focus-within)'

/** One sentence. Each variant restyles `Phrase`, `Word` and `Pill` through data attributes; none needs JS. */
export const heroIntroStyles = cva({
  base: {
    margin: '0',
    fontFamily: 'body',
    fontSize: '[clamp(40px, 6.4vw, 96px)]',
    fontWeight: 'light',
    lineHeight: '[1.08]',
    letterSpacing: 'tighter',
    textWrap: 'pretty',
    '& [data-word]': {
      cursor: 'pointer',
      transition: `[font-weight .4s ${ease}, background-size .5s ${ease}, color .4s ${ease}]`,
    },
    [`& [data-phrase]${on} [data-word]`]: { fontWeight: 'black' },
    '& [data-pill]': {
      display: 'inline-block',
      position: 'relative',
      verticalAlign: '[-0.08em]',
      height: '[0.82em]',
      width: '[1.7em]',
      marginInline: '[0.08em]',
      borderRadius: 'full',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: `[width .5s ${pop}, height .6s ${pop}, border-radius .6s ${ease}, transform .7s ${pop}]`,
    },
    // the pill's images fill it whatever their ratio
    '& [data-pill] :is(img, div)': { height: '[100%]', aspectRatio: 'auto', fontSize: '[10px]', whiteSpace: 'nowrap' },
    _motionReduce: { '&, & *': { transition: '[none]', animation: '[none]' } },
  },
  variants: {
    variant: {
      /** Pills widen on hover. */
      pills: { [`& [data-phrase]${on} [data-pill]`]: { width: '[3.4em]' } },
      /** Pills balloon into photos and the text reflows. */
      grow: {
        '& [data-pill]': { verticalAlign: 'middle' },
        [`& [data-phrase]${on} [data-pill]`]: { width: '[4.6em]', height: '[2.6em]', borderRadius: '[24px]' },
      },
      /** Highlighter swipe, round thumbnails spin. */
      marker: {
        '& [data-word]': {
          backgroundImage: '[linear-gradient(token(colors.coral), token(colors.coral))]',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '[0 88%]',
          backgroundSize: '[0% 0.32em]',
          paddingInline: '[0.04em]',
        },
        '& [data-pill]': { width: '[0.82em]', boxShadow: '[0 0 0 0.05em token(colors.coral)]' },
        [`& [data-phrase]${on}`]: {
          '& [data-word]': { backgroundSize: '[100% 0.32em]' },
          '& [data-pill]': { transform: 'rotate(360deg) scale(1.25)' },
        },
      },
      /** Pills slide through their photos; widen on hover. */
      cycle: {
        '& [data-pill]': { display: 'inline-flex', flexDirection: 'column' },
        '& [data-pill] > *': { flex: '[0 0 100%]', animation: '[introCycle 4.8s infinite]' },
        [`& [data-phrase]${on} [data-pill]`]: { width: '[3.4em]' },
      },
      /** Hover fans the photos out above the pill. */
      fan: {
        '& [data-pill]': { overflow: 'visible', '& > :first-child': { borderRadius: 'full' } },
        '& [data-pill] > *': {
          position: 'absolute',
          left: '[50%]',
          bottom: '[120%]',
          width: '[2.2em]',
          height: 'auto',
          borderRadius: 'lg',
          opacity: '0',
          pointerEvents: 'none',
          transformOrigin: '[50% 140%]',
          transform: 'translateX(-50%) translateY(0.6em) scale(0.6)',
          transition: `[transform .5s ${pop}, opacity .3s]`,
        },
        [`& [data-phrase]${on} [data-pill] > *`]: { opacity: '1' },
        [`& [data-phrase]${on} [data-pill] > :nth-child(1)`]: { transform: 'translateX(-50%) rotate(-14deg)' },
        [`& [data-phrase]${on} [data-pill] > :nth-child(2)`]: {
          transform: 'translateX(-50%) translateY(-0.12em)',
          transitionDelay: '[50ms]',
        },
        [`& [data-phrase]${on} [data-pill] > :nth-child(3)`]: {
          transform: 'translateX(-50%) rotate(14deg)',
          transitionDelay: '[100ms]',
        },
      },
      /** Dark panel; the hovered phrase stays lit, the rest dims. */
      focus: {
        bg: 'navy',
        color: 'snow',
        borderRadius: 'card',
        '& [data-phrase], & > span': { transition: '[opacity .4s]' },
        '&:has([data-phrase]:hover) > :not([data-phrase]:hover)': { opacity: '0.25' },
        '& [data-pill]': { boxShadow: '[inset 0 0 0 0.04em token(colors.snow/60)]' },
        '& [data-pill] > *': { opacity: '0', transition: '[opacity .4s]' },
        [`& [data-phrase]${on}`]: {
          color: 'coral',
          '& [data-pill] > *': { opacity: '1' },
          '& [data-pill]': { width: '[3.4em]' },
        },
      },
    },
  },
  defaultVariants: { variant: 'pills' },
})

export const phraseStyles = css({ display: 'inline' })

export type HeroIntroVariants = NonNullable<RecipeVariantProps<typeof heroIntroStyles>>
