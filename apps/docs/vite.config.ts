import { tanstackStart } from "@tanstack/solid-start/plugin/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, type Plugin } from "vite"
import viteSolid from "vite-plugin-solid"
import tsConfigPaths from "vite-tsconfig-paths"
import content from "./plugins/content"
import mdx from "./plugins/mdx"

const BROWSER_ONLY_PACKAGES = ["@unovis/solid", "@unovis/ts"]

/**
 * Stub browser-only packages during SSR so Nitro's Rollup (which must produce
 * a single self-contained Cloudflare Worker bundle with no runtime externals)
 * never tries to evaluate them. Chart components are always wrapped in
 * clientOnlyWrapper and are never rendered on the server, so empty stubs
 * are safe.
 */
function stubBrowserOnlyForSSR(): Plugin {
  return {
    name: "stub-browser-only-for-ssr",
    enforce: "pre",
    resolveId(id, _importer, options) {
      if (options.ssr && BROWSER_ONLY_PACKAGES.includes(id)) {
        return `\0stub-browser-only:${id}`
      }
    },
    load(id) {
      if (id.startsWith("\0stub-browser-only:")) {
        // syntheticNamedExports lets Rollup satisfy any named import
        // (e.g. VisXYContainer) from the default export without erroring.
        // All named imports resolve to undefined, which is safe because
        // chart components are never rendered on the server.
        return { code: "export default {};", syntheticNamedExports: "default" }
      }
    },
  }
}

export default defineConfig({
  server: { port: 3001 },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    mdx(),
    content(),
    tanstackStart({
      customViteSolidPlugin: true,
      target: "cloudflare-pages",
      sitemap: { enabled: true },
      prerender: { crawlLinks: true },
    }),
    viteSolid({ ssr: true, extensions: [".mdx"] }),
    stubBrowserOnlyForSSR(),
  ],
  resolve: {
    noExternal: [
      "@kobalte/core",
      "cmdk-solid",
      "@tanstack/start-server-core",
      "@tanstack/start-client-core",
      "@tanstack/solid-start",
      "@tanstack/solid-router",
    ],
  },
})
