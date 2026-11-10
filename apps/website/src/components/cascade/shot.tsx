import { BrowserFrame, type BrowserFrameVariants } from '@/components/ui/browser-frame/browser-frame'
import { Image, type ImageProps } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'

type ShotProps = Pick<ImageProps, 'src' | 'alt'> & BrowserFrameVariants & { url: string; caption: string }

export function Shot({ caption, tone, inset, url, ...props }: ShotProps) {
  return (
    <figure className="flex flex-col gap-3">
      <BrowserFrame tone={tone} inset={inset} url={url}>
        <Image ratio="16/10" {...props} />
      </BrowserFrame>
      <Label size="xs" render={<figcaption />}>
        {caption}
      </Label>
    </figure>
  )
}
