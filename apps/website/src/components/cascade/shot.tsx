import { Backdrop, type BackdropVariants } from '@/components/ui/backdrop/backdrop'
import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'

type ShotProps = BackdropVariants & { src: string; alt: string; caption: string }

export function Shot({ caption, inset, src, alt }: ShotProps) {
  return (
    <figure className="flex flex-col gap-3">
      <Backdrop seed={src} inset={inset}>
        <Image ratio="16/10" src={src} alt={alt} />
      </Backdrop>
      <Label size="xs" render={<figcaption />}>
        {caption}
      </Label>
    </figure>
  )
}
