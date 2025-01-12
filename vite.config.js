import { defineConfig } from 'vite'
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/resedist/front/dist/',
  css: {
    postcss: {
      plugins: [tailwind, autoprefixer],
    }
  }
})
