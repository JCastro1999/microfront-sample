import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'root-shell',
      remotes: {
        user: 'http://localhost:5001/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
  server: {
    port: 5000,
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});