import { mergeProps } from '@base-ui/react/merge-props'
import { useRender } from '@base-ui/react/use-render'
import { type CSSProperties, type PointerEvent, useCallback, useEffect, useRef } from 'react'
import { accentStyles, letterStyles, lineStyles, type WordmarkVariants, wordmarkStyles } from './wordmark.styles'

const MIN = 100
const MAX = 900

export type WordmarkMode = 'staircase' | 'follow' | 'static'

export type WordmarkProps = Omit<useRender.ComponentProps<'div'>, 'className' | 'children'> &
  WordmarkVariants & {
    lines?: string[]
    mode?: WordmarkMode
    accent?: string
    radius?: number
  }

const ramp = (lines: string[]) =>
  lines.flatMap((line, li) => {
    const chars = Array.from(line)
    return chars.map((_, i) => {
      const t = chars.length > 1 ? i / (chars.length - 1) : 0
      return Math.round(MIN + (MAX - MIN) * (li % 2 ? 1 - t : t))
    })
  })

export function Wordmark({
  lines = ['PATRICK', 'ROELOFS'],
  mode = 'follow',
  accent = '.',
  radius,
  size,
  tone,
  render,
  ref,
  ...props
}: WordmarkProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const letters = useRef<HTMLSpanElement[]>([])
  const frame = useRef(0)
  const point = useRef({ x: 0, y: 0 })
  const rest = ramp(lines)

  const apply = useCallback(() => {
    frame.current = 0
    const root = rootRef.current
    if (!root) return
    const r = radius ?? Number.parseFloat(getComputedStyle(root).fontSize) * 1.6
    const { x, y } = point.current
    for (const el of letters.current) {
      const box = el.getBoundingClientRect()
      const d = Math.hypot(x - (box.left + box.width / 2), y - (box.top + box.height / 2))
      el.style.setProperty('--wordmark-follow', String(Math.round(MIN + (MAX - MIN) * Math.max(0, 1 - d / r))))
    }
  }, [radius])

  const reset = useCallback(() => {
    cancelAnimationFrame(frame.current)
    frame.current = 0
    for (const el of letters.current) el.style.removeProperty('--wordmark-follow')
  }, [])

  useEffect(() => {
    if (mode !== 'follow') reset()
    return reset
  }, [mode, reset])

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (mode !== 'follow' || e.pointerType === 'touch') return
    point.current = { x: e.clientX, y: e.clientY }
    if (!frame.current) frame.current = requestAnimationFrame(apply)
  }

  letters.current.length = rest.length
  let index = 0
  const children = lines.map((line, li) => (
    // biome-ignore lint/suspicious/noArrayIndexKey: lines can repeat, position is the identity
    <span key={li} aria-hidden="true" className={lineStyles}>
      {Array.from(line).map((ch, ci) => {
        const i = index++
        const weight = mode === 'static' ? MAX : rest[i]
        return (
          <span
            // biome-ignore lint/suspicious/noArrayIndexKey: letters repeat, position is the identity
            key={ci}
            ref={(el) => {
              if (el) letters.current[i] = el
            }}
            data-part="letter"
            className={letterStyles}
            style={
              {
                '--wordmark-rest': weight,
                '--wordmark-flip': weight > (MIN + MAX) / 2 ? MIN : MAX,
              } as CSSProperties
            }
          >
            {ch}
          </span>
        )
      })}
      {li === lines.length - 1 && accent ? <span className={accentStyles}>{accent}</span> : null}
    </span>
  ))

  return useRender({
    render,
    ref: ref ? [rootRef, ref] : rootRef,
    defaultTagName: 'div',
    props: mergeProps<'div'>(
      {
        role: 'img',
        'aria-label': lines.join(' '),
        className: wordmarkStyles({ size, tone }),
        onPointerMove,
        onPointerLeave: reset,
      },
      props,
      { 'data-mode': mode, children } as Record<string, unknown>,
    ),
  })
}
