import { createFileRoute } from '@tanstack/react-router'
import { css } from '../../styled-system/css'

export const Route = createFileRoute('/')({
  component: () => (
    <main className={css({ p: 'margin' })}>
      <h1 className={css({ textStyle: 'display' })}>Patrick Roelofs</h1>
    </main>
  ),
})
