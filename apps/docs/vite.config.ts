import { tanstackStart } from "@tanstack/solid-start/plugin/vite"
import { cloudflare } from "@cloudflare/vite-plugin"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import viteSolid from "vite-plugin-solid"
import tsConfigPaths from "vite-tsconfig-paths"
import content from "./plugins/content"
import mdx from "./plugins/mdx"

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    mdx(),
    content(),
    tanstackStart({
      customViteSolidPlugin: true,
      target: 'cloudflare-pages',
      sitemap: { enabled: true },
      prerender: { crawlLinks: true },
    }),
    viteSolid({ ssr: true, extensions: [".mdx"] }),
  ],
  resolve: {
    noExternal: ["@kobalte/core", "cmdk-solid"],
  },
})
