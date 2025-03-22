import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
})
=======
  build: {
    sourcemap: false, // Désactive la génération de source maps
  }
})


>>>>>>> 7aa20d9 (React setup)
