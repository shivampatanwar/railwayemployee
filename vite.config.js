import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:"/railwayemployee/",
  server:{
    port:8080,
    open: true,
  }

})
