// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url' // ESM-safe __dirname replacement

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // Root domain on Amplify → keep "/"
  base: '/',
  build: {
    outDir: 'dist',   // Vite default; explicit is fine
    // sourcemap: true // uncomment only if you need production source maps
  },
})