import { Dialog } from '@base-ui/react/dialog'
import { buttonStyles } from '@/components/ui/button/button'
import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { Rail } from './rail'

export type Frame = { file: string; alt: string; portrait?: boolean; col: string }

type FramesProps = {
  /** Folder under `/photography` that holds the files. */
  slug: string
  label: string
  frames: Frame[]
  /** Full-size scans live in `originals/`, offered as a download. */
  originals?: boolean
}

export function Frames({ slug, label, frames, originals }: FramesProps) {
  return (
    <>
      <Rail tone="plum" space="3xl" />
      <section aria-label={label} className="grid gap-x-5 gap-y-fluid-2xl pt-fluid-l md:grid-cols-12">
        {frames.map(({ file, alt, portrait, col }, i) => (
          <figure key={file} className={col}>
            <Dialog.Root>
              <Dialog.Trigger className="block w-full cursor-zoom-in rounded-lg focus-ring" aria-label={`View ${alt}`}>
                <Image
                  ratio={portrait ? 'film-portrait' : 'film-landscape'}
                  src={`/photography/${slug}/${file}.jpg`}
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
                        src={`/photography/${slug}/${file}.jpg`}
                        alt={alt}
                        decoding="async"
                      />
                    </div>
                    <div className="absolute top-4 right-4 flex max-w-[calc(100%-2rem)] flex-wrap items-center justify-end gap-3 rounded-lg bg-bg-canvas/95 p-3">
                      <Dialog.Title className="text-sm font-semibold">
                        Frame {String(i + 1).padStart(2, '0')} / {frames.length}
                      </Dialog.Title>
                      <div className="flex flex-wrap gap-2">
                        {originals && (
                          <a
                            className={buttonStyles({ variant: 'primary', size: 'sm' })}
                            href={`/photography/${slug}/originals/${file}.jpg`}
                            download
                          >
                            Download original
                          </a>
                        )}
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
