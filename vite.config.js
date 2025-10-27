import { defineConfig } from 'vite'

export default defineConfig({
  // Set to '/unfollowstr/' for GitHub Pages deployment at username.github.io/unfollowstr/
  // Change to '/' if using a custom domain
  base: '/unfollowstr/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})

