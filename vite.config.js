import path from 'path';
import { fileURLToPath, URL } from "url";
import { imagetools } from 'vite-imagetools';
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [imagetools(),vue()],
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true
  },
  resolve: {
    alias: [
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ]
  },
  build: { chunkSizeWarningLimit: 1600, },
  base: '/landos/'

}