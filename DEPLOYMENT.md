# ChinaSearch - Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Build the project
pnpm build

# 3. Deploy
vercel --prod
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

**Build Settings:**
- Framework: Vite
- Build Command: `pnpm build`
- Output Directory: `dist/public`
- Install Command: `pnpm install`

### Option 2: Netlify

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Build
pnpm build

# 3. Deploy
netlify deploy --prod --dir=dist/public
```

**netlify.toml:**
```toml
[build]
  command = "pnpm build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Option 3: GitHub Pages

```bash
# Add to package.json scripts:
"deploy": "pnpm build && gh-pages -d dist/public"

# Install gh-pages
pnpm add -D gh-pages

# Deploy
pnpm deploy
```

---

## 🔧 Environment Variables

No environment variables required for the frontend. The app works out of the box.

For analytics, set:
```
VITE_ANALYTICS_ENDPOINT=your-analytics-url
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

---

## 📁 Project Structure

```
chinasearch/
├── client/
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Header.tsx    # Navigation with search, language, currency
│   │   │   ├── ProductCard.tsx # Product display card
│   │   │   ├── FilterBar.tsx  # Sort & filter controls
│   │   │   ├── CountdownTimer.tsx # Deal countdown
│   │   │   ├── BuyerNotification.tsx # Social proof popups
│   │   │   ├── SkeletonCard.tsx # Loading placeholders
│   │   │   └── Footer.tsx    # Site footer
│   │   ├── contexts/
│   │   │   ├── GeoContext.tsx # IP detection, language, currency
│   │   │   └── AdminContext.tsx # Admin state management
│   │   ├── lib/
│   │   │   └── data.ts       # Products, translations, utilities
│   │   └── pages/
│   │       ├── Home.tsx      # Main store page
│   │       └── Admin.tsx     # Admin dashboard
│   └── public/
│       ├── robots.txt
│       └── sitemap.xml
└── DEPLOYMENT.md
```

---

## 🔑 Admin Panel

Access: `/admin`
Default Password: `chinasearch2024`

**Change password:** Edit `ADMIN_PASSWORD` in `client/src/contexts/AdminContext.tsx`

---

## 🌍 Supported Languages

- Arabic (ar) - RTL
- English (en)
- Spanish (es)
- French (fr)
- German (de)
- Portuguese (pt)

---

## 💰 Affiliate Configuration

Edit affiliate IDs in Admin Panel → Affiliates tab, or directly in:
`client/src/lib/data.ts` → `PLATFORMS` array → `affiliateId` field

---

## 🛒 Adding Real Products

Replace mock data in `client/src/lib/data.ts` → `generateProducts()` function with real product data from your affiliate API.

---

## 📊 Analytics

The app tracks clicks per platform and product in the Admin Panel → Analytics tab.
For production analytics, integrate Google Analytics or Umami.
