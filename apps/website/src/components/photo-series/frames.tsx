import { Image, type ImageVariants } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'
import { mockImage } from '@/mock/image'
import { Rail } from './rail'

// TODO: mock data, replace with real photos
const frames: {
  title: string
  time: string
  tone: ImageVariants['tone']
  ratio: ImageVariants['ratio']
  col: string
}[] = [
  { title: 'Night ferry to Barreiro', time: '23:12', tone: 'navy', ratio: '3/2', col: 'md:col-span-full' },
  { title: 'Deckhand, lit cigarette', time: '23:26', tone: 'coral', ratio: '4/5', col: 'md:col-[1/span_5]' },
  { title: 'Wake under sodium light', time: '23:31', tone: 'azure', ratio: '4/5', col: 'md:col-[7/span_6]' },
  { title: 'Empty benches', time: '23:40', tone: 'light', ratio: '3/2', col: 'md:col-[3/span_8]' },
  { title: 'Window, fogged', time: '23:48', tone: 'dark', ratio: '1/1', col: 'md:col-[1/span_6]' },
  { title: 'Rope on the bollard', time: '23:55', tone: 'light', ratio: '1/1', col: 'md:col-[7/span_6]' },
  { title: 'Barreiro lights', time: '00:04', tone: 'navy', ratio: '16/9', col: 'md:col-span-full' },
  { title: 'Cais do Sodré arrival', time: '00:31', tone: 'dark', ratio: '4/5', col: 'md:col-[4/span_6]' },
]

const sizes: Record<NonNullable<ImageVariants['ratio']>, [number, number]> = {
  '16/10': [1600, 1000],
  '16/9': [1600, 900],
  '3/2': [1500, 1000],
  '4/3': [1200, 900],
  '4/5': [1000, 1250],
  '1/1': [1200, 1200],
  fill: [1200, 1200],
}

export function Frames() {
  return (
    <>
      <Rail tone="plum" />
      <section aria-label="Photos" className="grid gap-x-5 gap-y-fluid-2xl pt-fluid-l md:grid-cols-12">
        {frames.map(({ title, time, tone, ratio, col }, i) => (
          <figure key={title} className={col}>
            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  ratio={ratio}
                  tone={tone}
                  label={title}
                  src={mockImage(title, ...sizes[ratio ?? '16/10'])}
                  alt={title}
                />
              </div>
              <figcaption className="flex justify-between gap-4">
                <Label size="xs" render={<span />}>
                  {title}
                </Label>
                <span className="opacity-60">
                  <Label size="xs" render={<span />}>
                    {String(i + 1).padStart(2, '0')} · {time}
                  </Label>
                </span>
              </figcaption>
            </div>
          </figure>
        ))}
      </section>
    </>
  )
}
