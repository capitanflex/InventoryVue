import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve('src'),
      '@assets': path.resolve('src/assets'),
    },
  },
  base: '/dist/',
})