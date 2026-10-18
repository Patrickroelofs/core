import type { ComponentProps, ReactNode } from 'react'
import { type ImageVariants, imageStyles, placeholderStyles } from './image.styles'

export type ImageProps = Omit<ComponentProps<'img'>, 'className' | 'children'> &
  ImageVariants & {
    /** Text shown on the striped placeholder when there is no `src`. */
    label?: ReactNode
  }

/** Fixed-ratio image. Without `src` it renders a striped placeholder carrying `label`. */
export function Image({ ratio, tone = 'light', label, alt = '', src, ...props }: ImageProps) {
  if (src) return <img className={imageStyles({ ratio })} src={src} alt={alt} {...props} />
  return <div className={`${imageStyles({ ratio, tone })} ${placeholderStyles()}`}>{label}</div>
}
