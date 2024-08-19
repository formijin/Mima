import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Import path to resolve aliases

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Define alias for `@` pointing to `src` folder
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/Global/Variables.scss";`, // Now the alias `@` should work correctly
      },
    },
  },
})
