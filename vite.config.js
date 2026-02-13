import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Must match GitHub Pages project path: https://username.github.io/Jal-Seva/
  base: '',
})
