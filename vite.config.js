import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      strict: false
    }
  },
  publicDir: 'public',
  
  // Configuración esencial para despliegue
  base: '/', // Para Netlify (usa './' si tienes problemas con assets)
  
  build: {
    outDir: 'dist',
    copyPublicDir: true,
    emptyOutDir: true,
    sourcemap: false, // Desactiva para producción
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },

  // Opcional: Preconfiguración para Netlify Functions
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888/.netlify/functions',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});