import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Using relative base path ensures seamless compatibility with GitHub Pages and custom domains
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
