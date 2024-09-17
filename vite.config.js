import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // Remove or comment out the external option
      // external: ['react-router-dom'] 
    }
  }
});

