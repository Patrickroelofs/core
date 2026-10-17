import { defineTokens } from '@pandacss/dev'

// Utopia-style fluid scales (https://utopia.fyi): every value interpolates linearly
// between its size at minVw and its size at maxVw, via clamp().
export const fluidConfig = {
  minVw: 360,
  maxVw: 1240,
  type: { min: { base: 18, ratio: 1.2 }, max: { base: 20, ratio: 1.25 }, steps: [-2, -1, 0, 1, 2, 3, 4, 5, 6] },
  // multipliers of the step-0 size
  space: { names: ['3xs', '2xs', 'xs', 's', 'm', 'l', 'xl', '2xl', '3xl'], multipliers: [0.25, 0.5, 0.75, 1, 1.5, 2, 3, 4, 6] },
  grid: { columns: 12, maxWidth: 1240 },
}

const r = (n: number) => +n.toFixed(4)

export const clampValue = (min: number, max: number, { minVw, maxVw } = fluidConfig) => {
  const slope = (max - min) / (maxVw - minVw)
  const intercept = min - slope * minVw
  return `clamp(${r(min / 16)}rem, ${r(intercept / 16)}rem + ${r(slope * 100)}vw, ${r(max / 16)}rem)`
}

const { type, space, grid } = fluidConfig
const stepPx = (step: number) => ({
  min: type.min.base * type.min.ratio ** step,
  max: type.max.base * type.max.ratio ** step,
})

const fontSizes = Object.fromEntries(
  type.steps.map((s) => [String(s), { value: clampValue(stepPx(s).min, stepPx(s).max) }]),
)

const unit = stepPx(0)
const spacing = Object.fromEntries(
  space.names.map((n, i) => [n, { value: clampValue(unit.min * space.multipliers[i], unit.max * space.multipliers[i]) }]),
)
// Utopia "one-up pairs": fluid between a size and the next one up.
const pairs = Object.fromEntries(
  space.names.slice(0, -1).map((n, i) => [
    `${n}-${space.names[i + 1]}`,
    { value: clampValue(unit.min * space.multipliers[i], unit.max * space.multipliers[i + 1]) },
  ]),
)

export const fluid = defineTokens({
  fontSizes: { step: fontSizes },
  spacing: { fluid: { ...spacing, ...pairs } },
  sizes: { grid: { max: { value: `${grid.maxWidth / 16}rem` } } },
})
