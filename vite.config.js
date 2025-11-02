// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // If your site lives at a subpath, set base e.g. "/app/". For a root domain, leave as "/".
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    // Vite already serves as an SPA (history fallback) in dev.
    // No extra config needed here for TanStack Router.
  },
});