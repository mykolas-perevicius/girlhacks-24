#!/bin/bash

echo "🎵 Melody Matcher Deployment Script 🎵"
echo "======================================="
echo ""

# Check if we're in the right directory
if [ ! -f "netlify.toml" ]; then
    echo "❌ Error: netlify.toml not found. Please run this script from the project root."
    exit 1
fi

# Install frontend dependencies if needed
if [ ! -d "frontend/node_modules" ]; then
    echo "📦 Installing frontend dependencies..."
    cd frontend && npm install && cd ..
fi

# Build the frontend
echo "🔨 Building frontend..."
cd frontend && npm run build && cd ..

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"
echo ""
echo "📤 Ready to deploy!"
echo ""
echo "Choose your deployment method:"
echo ""
echo "1. Deploy via Netlify website (recommended):"
echo "   - Go to https://app.netlify.com"
echo "   - Click 'Add new site' → 'Import an existing project'"
echo "   - Select this GitHub repository"
echo "   - Click 'Deploy site'"
echo ""
echo "2. Deploy via Netlify CLI:"
echo "   Run: netlify deploy --prod"
echo ""
echo "Your build is ready in: frontend/dist/"
echo ""
echo "🚀 Once deployed, update the README with your live URL!"
