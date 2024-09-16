import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-router-dom'] // You can try externalizing react-router-dom here if it’s not already resolved.
    }
  }
});
