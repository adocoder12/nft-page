import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { URL } from "url";
import path from "path";

const __dirname = decodeURI(new URL(".", import.meta.url).pathname);

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
      generateScopedName: "[local]_[hash:base64:2]",
    },
  },
});
