import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/My-portfolio/',
  build: {
    chunkSizeWarningLimit: 1000, // set the limit to 1 MB
  },
})
