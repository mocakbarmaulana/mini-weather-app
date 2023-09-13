import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@config": path.resolve(__dirname, "./src/config/"),
      "@types": path.resolve(__dirname, "./src/@types/"),
      "@context": path.resolve(__dirname, "./src/context/"),
      "@components": path.resolve(__dirname, "./src/components/")
    }
  }
})
