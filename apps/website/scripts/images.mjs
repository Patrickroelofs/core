import { existsSync, readdirSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const dir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../public/photography/texel')
const widths = [480, 800, 960, 1600, 2200]

for (const file of readdirSync(dir).filter((name) => /^\d+\.jpg$/.test(name))) {
  const original = path.join(dir, 'originals', file)
  const source = existsSync(original) ? original : path.join(dir, file)
  const { width: sourceWidth = 0 } = await sharp(source).metadata()
  for (const width of widths.filter((width) => width <= sourceWidth)) {
    const out = path.join(dir, `${path.basename(file, '.jpg')}-${width}.webp`)
    await sharp(source)
      .rotate()
      .resize({ width })
      .webp({ quality: width > 1600 ? 80 : 76, effort: 6 })
      .toFile(out)
    console.log(path.relative(dir, out))
  }
}
