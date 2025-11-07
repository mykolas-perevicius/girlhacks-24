# Deploy to Netlify - Quick Start

Your project is ready to deploy! Follow these simple steps to get it live:

## Option 1: Deploy via Netlify Website (Easiest - 2 minutes)

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. Select the repository: **mykolas-perevicius/girlhacks-24**
5. Netlify will auto-detect the settings from `netlify.toml`:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
6. Click **"Deploy site"**

Your site will be live in 2-3 minutes!

## Option 2: Deploy via Netlify CLI

From the project directory, run:

```bash
cd /root/girlhacks-24
netlify init
```

Then follow the prompts:
1. Select "Use current git remote origin"
2. Choose your team
3. Let Netlify detect build settings
4. Deploy!

## After Deployment

Once deployed, you'll get a URL like: `https://melody-matcher-girlhacks.netlify.app`

You can:
- Change the site name in Netlify settings
- Add a custom domain
- Share the link!

## What's Already Done

- ✅ Frontend built and tested
- ✅ `netlify.toml` configuration file created
- ✅ All code committed and pushed to GitHub
- ✅ Build process verified (works perfectly!)
- ✅ README and documentation added

## The Live URL

After deployment, update the README.md with your live URL:

```markdown
**[Play Melody Matcher Live!](https://your-site-name.netlify.app)**
```

## Troubleshooting

If the build fails:
1. Check the Netlify build logs
2. Verify Node.js version (should use 18+)
3. The project builds successfully locally, so it should work on Netlify too

If you need help, check `DEPLOYMENT.md` for detailed troubleshooting steps.

---

**Your project is production-ready! Just click deploy and share the link!** 🚀
