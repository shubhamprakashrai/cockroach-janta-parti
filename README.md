# 🪳 Cockroach Janta Parti — Fan HQ

India's #1 fan hub for the Cockroach Janta Party (CJP) movement.
**Domain**: cockrochjantaparti.com
**Stack**: Next.js 14 + TypeScript + Tailwind CSS + Framer Motion

---

## 🚀 Quick Start

```bash
cd ~/Desktop/cockroach-janta-parti
npm install
npm run dev
```

Open http://localhost:3000

---

## 📂 Project Structure

```
cockroach-janta-parti/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (SEO baked in)
│   ├── page.tsx          # Homepage
│   ├── globals.css       # Tailwind + design tokens
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # SEO robots
├── components/           # Reusable React components
│   └── ui/               # UI primitives
├── lib/                  # Utility functions
│   └── utils.ts          # cn() helper for Tailwind
├── public/               # Static assets (images, fonts)
├── docs/                 # Documentation
│   ├── DESIGN.md         # Master design system
│   ├── INSTRUCTIONS.md   # Step-by-step Antigravity commands
│   └── CONTENT.md        # Real CJP content & data
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

---

## 🎯 How to Build with Antigravity

1. Open this folder in **Antigravity** (File → Open Folder)
2. Read `docs/INSTRUCTIONS.md` for step-by-step commands
3. Always reference `docs/DESIGN.md` and `docs/CONTENT.md` in prompts
4. Build one page at a time (Phase 1 → 2 → 3)
5. Test mobile responsiveness after every page

---

## 📋 First Antigravity Command (Copy-Paste)

```
Read docs/DESIGN.md and docs/CONTENT.md.
Then build a complete Gen-Z Indian mobile-first homepage in app/page.tsx
with these sections: ticker, hero, live stats, news cards, interactive 
manifesto, meme wall preview, anthem player, members wall, India map, 
join form, newsletter, footer. Use brutalist design from DESIGN.md.
Use real content from CONTENT.md. Make it fully responsive.
```

---

## 🎨 Design Tokens (from tailwind.config.ts)

| Token | Use |
|---|---|
| `bg-bg` | `#0A0A0A` background |
| `bg-accent` | `#FFD60A` yellow CTAs |
| `bg-alert` | `#FF3B30` breaking news |
| `text-text-primary` | Main text |
| `shadow-brutal` | Hard 4px shadow |
| `font-display` | Anton (headings) |
| `font-body` | Inter (body) |
| `font-hindi` | Hind (Devanagari) |

---

## 📈 SEO Checklist (already setup)
- ✅ Meta tags + OG + Twitter cards (app/layout.tsx)
- ✅ Sitemap (app/sitemap.ts)
- ✅ Robots.txt (app/robots.ts)
- ✅ Schema.org Organization markup
- ✅ Multilingual hreflang (en-IN, hi-IN)
- ✅ Mobile viewport
- ✅ Dark theme color

---

## 🚢 Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Then connect domain `cockrochjantaparti.com` in Vercel dashboard.

---

## 🪳 Built with rage. For the gutters. By the gutters.
