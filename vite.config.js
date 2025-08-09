import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  base: '/',
  build: {
    outDir: 'dist',
    copyPublicDir: true,
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    fs: { strict: false },
    proxy: {
      '/api': {
        target: 'http://localhost:8888/.netlify/functions',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
