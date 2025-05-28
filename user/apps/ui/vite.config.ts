import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import federation from '@originjs/vite-plugin-federation';;

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mf-user',
      filename: 'remoteEntry.js',
      exposes: {
        './user_crud': './src/crud.vue',
      },
      shared: ['vue'],
    }),
  ],
  server: { port: 5001 },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    assetsInlineLimit: 0,
  },
});