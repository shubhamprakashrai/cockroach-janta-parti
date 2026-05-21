# Antigravity Step-by-Step Commands

Use these prompts **in order** inside Antigravity. One command at a time.
Wait for each to finish before the next. Always reference `docs/DESIGN.md`.

---

## ⚙️ Setup (Run once in terminal first)
```bash
cd ~/Desktop/cockroach-janta-parti
npm install
npm run dev
```
Site should run on http://localhost:3000

---

## 🟡 PHASE 1 — Core Pages (Day 1)

### Command 1: Build proper navigation
> "Read docs/DESIGN.md. Create a `components/Navigation.tsx` with:
> - Desktop top bar: logo left, links (Manifesto, News, Memes, Join, Tools, Blog), JOIN button right
> - Mobile bottom tab bar with 5 icons: Home, News, Memes, Quiz, Profile
> - Sticky JOIN button always visible on mobile
> - Use brutalist style from DESIGN.md
> Then add it to app/layout.tsx so it appears on every page."

### Command 2: Build complete homepage
> "Read docs/DESIGN.md. Upgrade app/page.tsx into a full Gen-Z homepage with these sections:
> 1. Announcement ticker (already done)
> 2. Hero with 'Main Bhi Cockroach' headline + 2 CTAs + animated cockroach swarm background
> 3. Live stats dashboard (4 tiles)
> 4. 'Breaking Roach News' — 3 news cards with real CJP headlines
> 5. Interactive manifesto — 5 cards with agree/disagree buttons
> 6. Meme wall preview — 12 thumbnails in masonry
> 7. Anthem player section with lyrics
> 8. Verified members wall (Mahua Moitra, Kirti Azad, etc.)
> 9. India map with state chapters
> 10. Inline join form
> 11. Newsletter signup
> 12. Footer with disclaimer
> Use real content from docs/CONTENT.md if it exists."

### Command 3: Build manifesto page
> "Create app/manifesto/page.tsx with the 5-point interactive manifesto:
> 1. No Rajya Sabha for retired CJIs
> 2. CEC arrest under UAPA for deleted votes
> 3. 50% women reservation in Parliament
> 4. 20-year ban for defecting MLAs/MPs
> 5. Cancel Ambani/Adani media broadcasting licenses
> Each point gets full deep dive section with agree/disagree poll, share button, related news.
> Add 'Print Manifesto PDF' download button.
> Use brutalist design from docs/DESIGN.md."

### Command 4: Build join page + card generator
> "Create app/join/page.tsx and app/tools/card/page.tsx.
> Join page: 3-step form (Basic info → Why cockroach? → Card preview).
> Card generator: form fields (name, city, state, age, photo upload, 'why cockroach' tagline).
> Generate downloadable PNG card with: black bg, yellow border, member number, QR code, CJP logo, join date.
> After download show share buttons (WhatsApp, Instagram, X).
> Use html-to-image library for canvas → PNG conversion."

### Command 5: Build meme wall + generator
> "Create app/memes/page.tsx (meme wall) and app/tools/meme-generator/page.tsx.
> Meme wall: masonry grid, filter tabs (Top Today/Week/All), upload button.
> Meme generator: template gallery left, canvas editor right, text fields (top/bottom), font picker, sticker overlays.
> Download as PNG + share to WhatsApp/Insta.
> Use fabric.js or konva.js for canvas editing."

---

## 🟠 PHASE 2 — Engagement (Day 2)

### Command 6: News aggregator
> "Create app/news/page.tsx — news aggregator page with filter chips (All/Today/Week/Hindi/English), source filters, 3-column card grid, infinite scroll with skeleton loaders.
> Use real CJP news from docs/CONTENT.md sources."

### Command 7: Quiz
> "Create app/quiz/which-cockroach-are-you/page.tsx — 7-question swipeable quiz.
> Result screen with 8 personality types (Pizza-Box Cockroach, Library Cockroach, Hostel Cockroach, etc.) and shareable result card."

### Command 8: Blog
> "Create app/blog/page.tsx (index) and app/blog/[slug]/page.tsx (post template).
> Index: search bar, category chips, 3-col post grid.
> Post: hero image, body with rich content, sidebar TOC, sticky share buttons, related posts."

### Command 9: Founder + CJI remark pages
> "Create app/founder/abhijeet-dipke/page.tsx and app/cji-remark/page.tsx.
> Founder: hero photo + timeline (May 15 → 16 → 19 → ...), quotes carousel, press links.
> CJI remark: full quote, video embed, public reactions wall."

---

## 🔴 PHASE 3 — Scale (Day 3-5)

### Command 10: State chapters
> "Create dynamic route app/states/[slug]/page.tsx with 29 Indian states.
> Each state page: local member count, local memes, local news, top members."

### Command 11: Hindi mirror
> "Create app/hindi/ directory mirroring all main pages in Hindi.
> Use docs/CONTENT.md for Hindi translations. Add hreflang tags."

### Command 12: Tools hub
> "Create app/tools/page.tsx — grid of all tools:
> Meme Generator, Card Generator, Quiz, Manifesto Roast (AI), Anthem Karaoke, Mock Election Booth, Soundboard."

### Command 13: SEO polish
> "Audit all pages for SEO:
> - Add proper meta tags on every page
> - Generate OG images dynamically per page
> - Verify sitemap covers all routes
> - Add schema.org NewsArticle markup to blog posts
> - Add breadcrumb schema
> - Lighthouse score 95+ target"

### Command 14: Deploy
> "Setup Vercel deployment:
> 1. Initialize git repo
> 2. Push to GitHub
> 3. Connect to Vercel
> 4. Configure custom domain cockrochjantaparti.com
> 5. Setup environment variables
> 6. Submit sitemap to Google Search Console"

---

## 🐛 If Errors Pop Up

Paste error in Antigravity chat and say:
> "Fix this error. Don't break existing functionality."

## 💡 Pro Tips
- Always tell Antigravity to **read docs/DESIGN.md first**
- After each page: ask "Make this fully mobile responsive"
- Test mobile view in browser DevTools (Cmd+Option+I → device toolbar)
- Push to GitHub after every major feature
