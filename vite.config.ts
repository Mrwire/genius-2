import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'animations': ['@lottiefiles/react-lottie-player'],
          'ui': ['@headlessui/react', 'framer-motion']
        }
      }
    }
  },
  optimizeDeps: {
    exclude: ['@splinetool/runtime']
  }
});