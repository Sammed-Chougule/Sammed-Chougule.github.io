import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/sammed.me/',
  preview: {
    port: 4173,
    host: true
  }
})