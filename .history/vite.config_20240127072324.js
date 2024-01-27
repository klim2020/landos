import path from 'path';
import { fileURLToPath, URL } from "url";

export default {
  root: path.resolve(__dirname, 'src'),
  server: {
    port: 8080,
    hot: true
  },
  resolve: {
    alias: {}
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        
  }
  }

}