# Deployment Guide

This guide will help you deploy Melody Matcher to various hosting platforms.

## Netlify (Recommended)

Netlify is the easiest way to deploy this project with zero configuration needed.

### Method 1: Using Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Deploy from the project root:
```bash
netlify deploy --prod
```

The `netlify.toml` configuration is already set up in the repository!

### Method 2: Using Netlify Web Interface

1. Push your code to GitHub
2. Go to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Netlify will automatically detect the configuration from `netlify.toml`
6. Click "Deploy site"

Your site will be live in minutes!

## Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd frontend
vercel --prod
```

Or use the [Vercel web interface](https://vercel.com) to import from GitHub.

## GitHub Pages

1. Update `vite.config.js` in the frontend folder:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/girlhacks-24/' // Replace with your repo name
})
```

2. Install gh-pages:
```bash
cd frontend
npm install --save-dev gh-pages
```

3. Add to `frontend/package.json` scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages in repository settings, select `gh-pages` branch

## Environment Variables

If you're using the backend authentication features, set these environment variables in your hosting platform:

- `MONGO_URI` - Your MongoDB connection string

For Netlify: Site settings → Environment variables
For Vercel: Project Settings → Environment Variables

## Building Locally

To test the production build locally:

```bash
cd frontend
npm run build
npm run preview
```

## Troubleshooting

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version (recommend 18+): `node --version`
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

### Audio files not loading
- Ensure audio files are in `frontend/public/sounds/`
- Check browser console for 404 errors
- Verify file paths in `songs.js` match actual files

### Blank page after deployment
- Check browser console for errors
- Verify `base` path in `vite.config.js` if using subdirectory hosting
- Ensure redirects are properly configured (check `netlify.toml`)

## Performance Optimization

For better performance:
1. Compress audio files (use MP3 format, 128kbps or lower)
2. Optimize images
3. Enable caching headers in your hosting platform
4. Consider using a CDN for audio files if you have many songs

## Custom Domain

### Netlify
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Configure DNS records as instructed
