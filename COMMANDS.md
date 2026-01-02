# 🚀 Quick Reference - Commands & Scripts

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Testing Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run specific test file
npm test -- BookingModal.test.tsx
```

## Performance & Quality

```bash
# Run Lighthouse CI
npm run lighthouse

# Type checking
npx tsc --noEmit

# Check bundle size
npm run build
# Then check dist/ folder size
```

## Installation

```bash
# Install all dependencies
npm install

# Install specific package
npm install package-name

# Install dev dependency
npm install -D package-name
```

## Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit environment variables
# (Use your preferred editor)
nano .env.local
```

## Git Commands (for reference)

```bash
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Your message"

# Push to remote
git push

# Create new branch
git checkout -b feature-name
```

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod

# Deploy for preview
vercel
```

## Deployment (Netlify)

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Troubleshooting

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear Vite cache
rm -rf node_modules/.vite

# Force reload dev server
# Press 'r' in terminal or 'r + enter'
```

## Useful One-liners

```bash
# Check Node version
node -v

# Check npm version
npm -v

# List installed packages
npm list --depth=0

# Find outdated packages
npm outdated

# Update all packages (careful!)
npm update

# Check for security vulnerabilities
npm audit

# Fix security vulnerabilities
npm audit fix
```

## Testing Specific Components

```bash
# Test BookingModal
npm test -- BookingModal

# Test NewsletterForm with coverage
npm test -- NewsletterForm --coverage

# Test all in watch mode
npm test -- --watch
```

## Performance Monitoring

```bash
# Build and analyze
npm run build

# Check lighthouse scores
npm run lighthouse

# Check bundle size
ls -lh dist/assets/*.js
```

## Quick Checks

```bash
# Does it build?
npm run build

# Do tests pass?
npm test

# Is lighthouse happy?
npm run lighthouse

# Any TypeScript errors?
npx tsc --noEmit
```

---

## Most Common Workflows

### Starting Work

```bash
git pull origin main
npm install
npm run dev
```

### Before Committing

```bash
npm test
npm run build
npx tsc --noEmit
git add .
git commit -m "Your message"
git push
```

### Deploying

```bash
npm test
npm run build
npm run lighthouse
vercel --prod  # or netlify deploy --prod
```

---

## Environment Variables Reference

```bash
# Required
GEMINI_API_KEY=your_key_here

# Optional
GA_MEASUREMENT_ID=G-XXXXXXXXXX
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_token
```

---

## Port Conflicts

If port 3000 is in use:

```bash
# Find process using port 3000
# On Windows:
netstat -ano | findstr :3000

# On Mac/Linux:
lsof -ti:3000

# Kill the process
# Windows:
taskkill /PID <PID> /F

# Mac/Linux:
kill -9 <PID>
```

---

## Quick Links

- **Local Dev**: http://localhost:3000
- **Test UI**: Run `npm run test:ui` then visit http://localhost:51204
- **Preview**: Run `npm run preview` then visit http://localhost:4173

---

**Tip:** Bookmark this file for quick reference during development!
