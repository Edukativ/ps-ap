import { defineConfig } from 'vite'
import.meta.env.BASE_URL
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    ssr({
    baseAssets: 'https://edukativ.github.io/',
    baseServer: '/ps-ap/'
    })
  ],
})

