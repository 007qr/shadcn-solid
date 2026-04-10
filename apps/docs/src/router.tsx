import {
  Navigate,
  createRouter as createTanStackRouter,
} from "@tanstack/solid-router"
import { routeTree } from "./routeTree.gen"

export function createRouter() {
  return createTanStackRouter({
    routeTree,
    defaultPreload: "intent",
    scrollRestoration: true,
    defaultNotFoundComponent: () => <Navigate to="/" replace />,
    defaultViewTransition: true,
  })
}

// Required by @tanstack/start-client-core in newer versions
export function getRouter() {
  return createRouter()
}

declare module "@tanstack/solid-router" {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}
