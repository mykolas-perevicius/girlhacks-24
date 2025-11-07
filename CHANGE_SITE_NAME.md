# How to Change Your Netlify Site Name

Your site is currently live at: **https://delicate-torte-2cafb0.netlify.app**

To change it to a better name (like `melody-matcher-game.netlify.app`):

## Steps:

1. Go to your Netlify dashboard: https://app.netlify.com/projects/delicate-torte-2cafb0

2. Click **"Site configuration"** in the left sidebar

3. Under **"Site information"**, click **"Change site name"**

4. Enter your desired name (e.g., `melody-matcher-game`)

5. Click **"Save"**

Your site will instantly be available at: `https://your-new-name.netlify.app`

## Recommended Names:

- `melody-matcher-game`
- `melody-matcher-girlhacks`
- `girlhacks-melody-matcher`
- `music-puzzle-game`
- `guess-the-song-game`

## After Changing the Name:

Update the README with your new URL:

```bash
# Replace the URL in README.md
sed -i 's|https://delicate-torte-2cafb0.netlify.app|https://your-new-name.netlify.app|g' README.md

# Commit the change
git add README.md
git commit -m "Update live URL with custom site name"
git push origin main
```

## Custom Domain (Optional)

If you want to use your own domain:

1. Go to **Site configuration** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions
4. Free SSL certificate is included!

---

**Note:** Netlify subdomain names are first-come, first-served and must be unique across all of Netlify.
