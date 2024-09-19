import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build', // Ensure this matches the "distDir" in your vercel.json
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
});
