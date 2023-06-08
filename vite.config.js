import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8001,
    strictPort: true,
    proxy: {
      '/ichigo_websocket': {
        target: 'http://127.0.0.1:8000',
        ws: true,
      },
    },
  },
})
