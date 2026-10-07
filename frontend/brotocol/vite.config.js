import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    warmup: {
      clientFiles: ['./src/App.jsx', './src/components/Dashboard.jsx'],
    },
  },
})
