import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'

export function Gallery() {
  return (
    <figure className="mt-fluid-4xl flex flex-col gap-3">
      <div className="grid gap-3 md:grid-cols-2">
        <div className="overflow-hidden rounded-3xl ring-1 ring-border-default">
          <Image
            ratio="16/9"
            src="/projects/cascade/onboarding.webp"
            alt="Cascade onboarding, titled 'Everything is a line', listing the five gestures that drive the app"
          />
        </div>
        <div className="overflow-hidden rounded-3xl ring-1 ring-border-default">
          <Image
            ratio="16/9"
            src="/projects/cascade/outline.webp"
            alt="A Cascade outline with a list of lines above the 'Capture a thought' bar"
          />
        </div>
      </div>
      <Label size="xs" render={<figcaption />}>
        Onboarding explains the whole app in five lines; after that it is an outline and a capture bar.
      </Label>
    </figure>
  )
}
