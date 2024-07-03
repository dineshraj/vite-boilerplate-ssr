import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    ssr: true,
    ssrManifest: true,
    rollupOptions: {
      input: './src/entry-server.tsx'
    }
  },
  css: {
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      scopeBehaviour: 'local'
    }
  },
  server: {
    middlewareMode: true
  }
});
