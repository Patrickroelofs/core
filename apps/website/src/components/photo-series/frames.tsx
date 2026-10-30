import { Dialog } from '@base-ui/react/dialog'
import { buttonStyles } from '@/components/ui/button/button'
import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { Rail } from './rail'

const frames = [
  { file: '000008500019', alt: 'Sunlit grassy dunes', col: 'md:col-span-full' },
  { file: '000008490022', alt: 'Waves rolling onto a beach beneath a grey sky', col: 'md:col-[1/span_5]' },
  { file: '000008500007', alt: 'Whale sculpture against a clear sky', col: 'md:col-[7/span_6]' },
  { file: '000008500013', alt: 'A gull perched on a whale sculpture', col: 'md:col-[1/span_6]' },
  {
    file: '000008500014',
    alt: 'A gull on the tip of a whale sculpture',
    portrait: true,
    col: 'md:col-[8/span_4]',
  },
  { file: '000008500016', alt: 'A seal looking out from the water', col: 'md:col-[3/span_8]' },
  { file: '000008500023', alt: 'Birds flying above a grassy dune', col: 'md:col-[1/span_5]' },
  { file: '000008500024', alt: 'A flock of birds above the dunes', col: 'md:col-[7/span_6]' },
  { file: '000008510003', alt: 'Dunes and scrub beneath a cloudy sky', col: 'md:col-span-full' },
  { file: '000008510004', alt: 'Coastal grassland stretching towards the sea', col: 'md:col-[2/span_5]' },
  { file: '000008510006', alt: 'A weathered wooden post among dune grasses', col: 'md:col-[8/span_5]' },
  { file: '000008510009', alt: 'A red lighthouse rising above tall grass', col: 'md:col-[3/span_8]' },
  { file: '000008510013', alt: 'A red lighthouse beyond the dunes', col: 'md:col-[1/span_5]' },
  { file: '000008510018', alt: 'Whale vertebrae displayed outdoors', col: 'md:col-[7/span_6]' },
  { file: '000008510023', alt: 'A seal swimming in green water', col: 'md:col-[3/span_8]' },
]

export function Frames() {
  return (
    <>
      <Rail tone="plum" space="3xl" />
      <section aria-label="Photographs of Texel" className="grid gap-x-5 gap-y-fluid-2xl pt-fluid-l md:grid-cols-12">
        {frames.map(({ file, alt, portrait, col }, i) => (
          <figure key={file} className={col}>
            <Dialog.Root>
              <Dialog.Trigger className="block w-full cursor-zoom-in rounded-lg focus-ring" aria-label={`View ${alt}`}>
                <Image
                  ratio={portrait ? 'film-portrait' : 'film-landscape'}
                  src={`/photography/texel/${file}.jpg`}
                  alt={alt}
                  priority={i === 0}
                />
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Backdrop className="fixed inset-0 z-50 bg-bg-inverse/95 transition-opacity duration-500 ease-soft data-starting-style:opacity-0 data-ending-style:opacity-0" />
                <Dialog.Viewport className="fixed inset-0 z-50">
                  <Dialog.Popup className="relative h-dvh w-full text-fg-default [clip-path:inset(0%_0%_0%_0%_round_0px)] transition-[opacity,transform,clip-path] duration-500 ease-soft focus:outline-none data-starting-style:opacity-0 data-starting-style:[clip-path:inset(6%_8%_6%_8%_round_2rem)] data-starting-style:[transform:translateY(12px)_scale(.96)] data-ending-style:opacity-0 data-ending-style:[clip-path:inset(6%_8%_6%_8%_round_2rem)] data-ending-style:[transform:translateY(12px)_scale(.96)]">
                    <div className="flex size-full items-center justify-center p-12">
                      <img
                        className="block max-h-full max-w-full rounded-lg object-contain"
                        src={`/photography/texel/${file}.jpg`}
                        alt={alt}
                        decoding="async"
                      />
                    </div>
                    <div className="absolute top-4 right-4 flex max-w-[calc(100%-2rem)] flex-wrap items-center justify-end gap-3 rounded-lg bg-bg-canvas/95 p-3">
                      <Dialog.Title className="text-sm font-semibold">
                        Frame {String(i + 1).padStart(2, '0')} / {frames.length}
                      </Dialog.Title>
                      <div className="flex flex-wrap gap-2">
                        <a
                          className={buttonStyles({ variant: 'primary', size: 'sm' })}
                          href={`/photography/texel/originals/${file}.jpg`}
                          download
                        >
                          Download original
                        </a>
                        <Dialog.Close className={buttonStyles({ variant: 'secondary', size: 'sm' })}>
                          Close
                        </Dialog.Close>
                      </div>
                    </div>
                    <Dialog.Description className="sr-only">{alt}</Dialog.Description>
                  </Dialog.Popup>
                </Dialog.Viewport>
              </Dialog.Portal>
            </Dialog.Root>
            <figcaption className="pt-3 opacity-60">
              <Label size="xs" render={<span />}>
                {String(i + 1).padStart(2, '0')} / {frames.length}
              </Label>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  )
}
