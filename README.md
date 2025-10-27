# Unfollowstr

Unfollow npubs who aren't following you back on Nostr.

## Features

- 🔐 Login with Nostr browser extension (nos2x, Alby, etc.)
- 👥 See who you're following
- 🔄 Check who follows you back
- 💾 Cached profile metadata for faster loading
- ✂️ Bulk unfollow non-followers

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deploy to GitHub Pages

### Option 1: Deploy from /docs folder (Recommended)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Build for GitHub Pages"
   git push
   ```

3. **Configure GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose `main` branch and `/docs` folder
   - Click "Save"

4. **Wait a few minutes** for GitHub to deploy your site

5. **Access your site** at: `https://yourusername.github.io/unfollowstr/`

### Option 2: Deploy to a custom domain or root

If deploying to a custom domain or username.github.io (root):

1. Update `vite.config.js` - set `base: '/'` (already configured)
2. Build and deploy as above

If deploying to a subdirectory like `username.github.io/unfollowstr/`:

1. Update `vite.config.js` - set `base: '/unfollowstr/'`
2. Rebuild: `npm run build`
3. Deploy as above

## Tech Stack

- [Vite](https://vitejs.dev/) - Build tool
- [NDK](https://github.com/nostr-dev-kit/ndk) - Nostr Development Kit
- [nostr-tools](https://github.com/nbd-wtf/nostr-tools) - Nostr utilities
- Vanilla JavaScript - No framework needed

## License

MIT

