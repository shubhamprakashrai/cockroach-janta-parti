# Components, Rules, Animations & Priority

## 🧩 COMPONENTS LIBRARY (Reusable)

1. **Buttons**: Primary (yellow), Secondary (outline), Ghost, Destructive
2. **Cards**: News card, Meme card, Member card, State card
3. **Forms**: Input, Textarea, Select, Checkbox, Radio, Toggle
4. **Modals**: Generic, Confirm, Share, Image preview
5. **Navigation**: Top bar, Mobile bottom tab, Breadcrumb, Sidebar (admin)
6. **Feedback**: Toast, Alert banner, Snackbar
7. **Loading**: Skeleton loader, Spinner, Progress bar
8. **Empty states**: No results, Error, Loading failed
9. **Stats**: Counter widget, Comparison chart, Progress ring
10. **Embeds**: Instagram, YouTube, X tweet, Reel
11. **Sticky CTAs**: WhatsApp share float, Join now float
12. **Reactions**: 🪳 👑 💀 🔥 🤡 (custom emoji reactions)

Build all of these in `components/ui/` as reusable React components.

---

## 📱 MOBILE-FIRST RULES

- 360px minimum width support
- All CTAs reachable by thumb (bottom 1/3 of screen)
- Bottom tab bar (5 icons): Home, News, Memes, Quiz, Profile
- Sticky "JOIN" button on every page
- One-thumb meme generator (no horizontal scrolls)
- All images WebP, lazy loaded
- Skeleton loaders, NOT spinners
- Native share sheets, NOT custom modals
- Max page weight: 200kb initial load
- Touch targets minimum 48x48px

---

## ✍️ GEN-Z MICROCOPY

- Empty state: "Yahan kuch nahi hai. Just like our future."
- Loading: "Fetching roaches… 🪳"
- Form error: "Yeh sahi nahi hai. Try again, cockroach."
- Success: "✓ Welcome to the gutter."
- 404: "Page bhi unemployed hai."
- Submit button: "Send it 🪳"
- Newsletter: "Subscribe and we'll spam you with rage."
- Login: "Sign in to your roach account"

Use these tones everywhere — never corporate-formal.

---

## 🎬 ANIMATIONS & INTERACTIONS

- Hero text **glitches every 5 seconds**
- Stats counter animates **0 → number on scroll**
- Cards **lift 4px on hover** with hard shadow
- Buttons: **scale 0.95 on press**
- Cockroach emoji **crawls across screen randomly** on home page
- Smooth page transitions (**fade + 4px slide**)
- Meme cards **expand on tap** (mobile)
- Toast notifications **slide from bottom**
- **Confetti of cockroaches** when membership card is generated

Use Framer Motion for all animations.

---

## 📦 DELIVERABLES (per page)

1. Mobile + Desktop responsive versions
2. All component states: default, hover, active, disabled, loading
3. Empty / error / loading states
4. Smooth animations per spec above
5. SEO meta tags + schema markup
6. Real content from `docs/CONTENT.md`

Key interactive flows must work end-to-end:
- Sign up → card generation → share
- Meme template select → edit → share
- Quiz start → answer → result → share

---

## 🎯 PRIORITY ORDER

### Phase 1 (MUST HAVE — Day 1)
- Homepage ✅
- Manifesto
- Join + Card Generator
- Meme Wall + Meme Generator

### Phase 2 (Day 2)
- News Aggregator
- Quiz (Which Cockroach Are You?)
- Blog (index + post template)
- Founder Page
- About / Disclaimer

### Phase 3 (Day 3–5)
- State Chapters (29 pages)
- Hindi Mirror
- Tools Hub
- Anthem Page
- CJI Remark Explainer
