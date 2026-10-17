import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@core/ui/button/button'

export const Route = createFileRoute('/')({
  component: () => <Button>Hello</Button>,
})
