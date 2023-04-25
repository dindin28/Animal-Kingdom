// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import viteSSR from "vite-ssr/plugin";
import { fileURLToPath } from "url";
import copy from "rollup-plugin-copy";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  ssr: { format: "cjs" },
  plugins: [
    viteSSR(),
    vue({ ssr: true }),
    copy({
      targets: [
        { src: "src/assets/images", dest: "dist/client/assets" }
      ]
    })
  ],
});
