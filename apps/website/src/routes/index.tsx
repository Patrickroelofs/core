import { Wordmark } from '@core/ui/wordmark/wordmark'
import { createFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

const main = css({ px: 'margin', pt: 'fluid.l', mx: 'auto', maxW: 'grid.max' })

export const Route = createFileRoute('/')({
  component: () => (
    <main className={main}>
      <Wordmark />
    </main>
  ),
})
