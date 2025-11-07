#!/bin/bash

# Script to update README with live URL

if [ -z "$1" ]; then
    echo "Usage: ./update-readme-url.sh <your-netlify-url>"
    echo "Example: ./update-readme-url.sh https://melody-matcher-girlhacks.netlify.app"
    exit 1
fi

LIVE_URL="$1"

echo "Updating README with live URL: $LIVE_URL"

# Update README.md
sed -i "s|**\[Play Melody Matcher Live!\](#)** _(Link will be updated after deployment)_|**[Play Melody Matcher Live!]($LIVE_URL)**|g" README.md

echo "✅ README.md updated!"
echo ""
echo "Now commit and push:"
echo "  git add README.md"
echo "  git commit -m 'Update README with live deployment URL'"
echo "  git push origin main"
