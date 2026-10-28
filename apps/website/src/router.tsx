import { payloadParseSearch, payloadStringifySearch } from '@payloadcms/tanstack-start/shared'
import { createRouter } from '@tanstack/react-router'
import { ErrorPage } from './components/error-page'
import { routeTree } from './routeTree.gen'

function NotFound() {
  return <ErrorPage code="404" message="This page took the last tram home. It moved, or it never existed." />
}

function ServerError() {
  return <ErrorPage code="500" message="Something broke on my end. Try again in a moment." />
}

export function getRouter() {
  return createRouter({
    defaultErrorComponent: ServerError,
    defaultNotFoundComponent: NotFound,
    parseSearch: payloadParseSearch,
    routeTree,
    scrollRestoration: true,
    stringifySearch: payloadStringifySearch,
  })
}
