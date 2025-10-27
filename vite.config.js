import { defineConfig } from 'vite'

export default defineConfig({
  // Set base to '/' for custom domain or root deployment
  // Change to '/unfollowstr/' if deploying to username.github.io/unfollowstr/
  base: '/',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})

