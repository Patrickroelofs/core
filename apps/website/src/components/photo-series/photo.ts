const base = '/photography/texel'

export const photoWidths = [480, 800, 960, 1600, 2200] as const

/** `src` and `srcSet` for a Texel frame; `maxWidth` caps the set for frames scanned smaller. Variants come from `pnpm --filter website images`. */
export function photo(file: string, maxWidth: number = 2200) {
  return {
    src: `${base}/${file}.jpg`,
    srcSet: photoWidths
      .filter((width) => width <= maxWidth)
      .map((width) => `${base}/${file}-${width}.webp ${width}w`)
      .join(', '),
  }
}
