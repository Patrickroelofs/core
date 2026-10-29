import { createRouter } from '@tanstack/react-router'
import { NotFound, ServerError } from './components/error-page'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  return createRouter({
    defaultErrorComponent: ServerError,
    defaultNotFoundComponent: NotFound,
    routeTree,
    scrollRestoration: true,
  })
}
