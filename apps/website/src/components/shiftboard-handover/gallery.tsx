import { Image } from '@/components/ui/image/image'
import { Label } from '@/components/ui/label/label'

export function Gallery() {
  return (
    <figure className="mt-fluid-4xl flex flex-col gap-3">
      <div className="overflow-hidden rounded-3xl">
        <Image ratio="16/9" label="ward overview, full width" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="overflow-hidden rounded-3xl">
          <Image ratio="4/3" label="patient card" />
        </div>
        <div className="overflow-hidden rounded-3xl">
          <Image ratio="4/3" label="tablet in use at 4am" />
        </div>
      </div>
      <Label size="xs" render={<figcaption />}>
        The ward overview, a patient card, and the tablet on the night shift.
      </Label>
    </figure>
  )
}
