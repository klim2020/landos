import path from 'path';
import { fileURLToPath, URL } from "url";
import { imagetools } from 'vite-imagetools'

export default {
  plugins: [imagetools()],
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
  build: { chunkSizeWarningLimit: 1600, }

}