import { Image, type ImageProps } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'

type ShotProps = Pick<ImageProps, 'src' | 'alt' | 'ratio'> & { caption: string }

export function Shot({ caption, ratio = '16/9', ...props }: ShotProps) {
  return (
    <figure className="flex flex-col gap-3">
      <div className="overflow-hidden rounded-3xl ring-1 ring-border-default">
        <Image ratio={ratio} {...props} />
      </div>
      <Label size="xs" render={<figcaption />}>
        {caption}
      </Label>
    </figure>
  )
}
