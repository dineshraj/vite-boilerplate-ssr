import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import tailwindcss from 'tailwindcss';
import postcssNesting from 'postcss-nesting';


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
    outDir: 'dist',
    ssrEmitAssets: true,
    ssr: true,
    ssrManifest: true,
    rollupOptions: {
      input: ['./src/entry-server.tsx', './index.html'],
      output: {
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), postcssNesting],
    },
  },
  server: {
    middlewareMode: true
  }
});
