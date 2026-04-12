import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router'],
          ui: ['@fortawesome/react-fontawesome', '@fortawesome/fontawesome-svg-core'],
          utils: ['axios', 'formik', 'yup', 'react-toastify'],
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000 kB
  },
})
