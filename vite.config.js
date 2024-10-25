import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://edukativ.github.io/ps-ap/',
  plugins: [react()],
})
