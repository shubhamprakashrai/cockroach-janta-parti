# CJP — Project Reference Bible

> Single source of truth. Open this first whenever you (or anyone helping you) sits down at the project. Everything you need to operate, deploy, debug, or hand off CJP lives here.

Last updated after **Phase 2.5 trust rebrand** — Day-1 launch positioning, anonymous founding members, honest live counter (currently 47).

---

## TL;DR — Quick links

| What | Where |
|------|-------|
| Live site | https://cockrochjantaparti.com |
| Local project folder | `~/Developer/cockroach-janta-parti` |
| GitHub repo | https://github.com/shubhamprakashrai/cockroach-janta-parti |
| Branch that deploys to prod | `main` (auto-deploy via Vercel) |
| Vercel dashboard | https://vercel.com/shubham-rais-projects-58cc4b37/cockroach-janta-parti |
| Firebase Console | https://console.firebase.google.com/project/cockroach-janta-parti-cjp/firestore |
| Formspree dashboard | https://formspree.io/forms |

---

## 1. Live URLs — A to Z

### Main pages
- `/` — Homepage (hero, live counter, news, manifesto, members, meme wall, blog teaser, join form, footer)
- `/about` — About page
- `/anthem` — Party anthem player (audio file not added yet)
- `/cji-remark` — CJI's original "cockroach" quote + public reactions
- `/founder` — Abhijeet Dipke profile + media dossier + timeline
- `/hindi` — Hindi landing page
- `/join` — 4-step join form (Firebase save + Formspree email)
- `/manifesto` — Full 5 Demands with vote buttons
- `/memes` — Meme wall (16 images, real heart likes via Firebase)
- `/news` — News aggregator (6 cards → real publications)
- `/quiz` — Personality quiz
- `/states/MH` — State chapter (works for any state code: JK, HP, PB, …)
- `/tools` — Tools hub
- `/tools/card` — Membership card generator (PNG download works)
- `/tools/meme-generator` — Meme generator (PNG download + custom bg upload)

### Blog (6 real long-form articles)
- `/blog` — list
- `/blog/how-a-meme-became-a-movement`
- `/blog/top-10-ways-to-use-meme-generator`
- `/blog/youth-unemployment-statistics-2026`
- `/blog/maharashtra-infestation-report`
- `/blog/understanding-the-5-demands`
- `/blog/main-bhi-cockroach-hindi-guide`

---

## 2. Stack

- **Framework**: Next.js 14.2.5 (App Router) + React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4 with custom Stitch design tokens (`tailwind.config.ts`)
- **UI libs**: framer-motion, lucide-react, html-to-image
- **Backend (Phase 2)**: Firebase Firestore (asia-south1 Mumbai)
- **Form submissions**: Formspree (email alerts) + Firebase (data persistence)
- **Hosting**: Vercel
- **Analytics**: Vercel Analytics + Speed Insights (already wired)
- **Fonts**: Anton (display), Inter (body), Hind (Hindi), JetBrains Mono

### Design system (Stitch — Satirical Neo-Editorial / Brutalist Light)
Tokens in `tailwind.config.ts`:
- `bg` = `#FCF8F8` warm cream
- `card` = `#FFFFFF` pure white
- `accent` / `saffron` = `#FF6B00`
- `mustard` = `#FFD60A`
- `alert` = `#E63946` revolution red
- `success` = `#00A86B`
- `text.primary` / `rich-black` = `#0A0A0A`
- `text.secondary` = `#5A4136` warm brown
- All shadows = hard offset black (`brutal`, `brutal-lg`, `brutal-xl`) — no blurs
- All borders = 2px black

Source design: Stitch project `projects/17425821720212644510` (Cockroach Janta Parti Portal — Google Stitch).

---

## 3. Environment variables (all set in Vercel)

Add to **Production + Preview + Development** in Vercel → Settings → Environment Variables. Also mirror them in `.env.local` for local dev.

| Key | Value | Notes |
|-----|-------|-------|
| `NEXT_PUBLIC_FORMSPREE_ID` | `mwvzqeee` | Form ID — endpoint becomes `https://formspree.io/f/mwvzqeee`. Submissions go to raishubham063@gmail.com. |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | `AIzaSyAG9kuotSblBDPb4NxDCTCCHKiXlAzON8A` | Public web API key — restricted by Firestore rules. |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `cockroach-janta-parti-cjp.firebaseapp.com` | |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `cockroach-janta-parti-cjp` | |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `cockroach-janta-parti-cjp.firebasestorage.app` | |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | `688516789905` | |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | `1:688516789905:web:8c22195f8e573518287130` | |

All `NEXT_PUBLIC_*` values are baked into the JS bundle at build time — they are public by design. Actual security lives in `firestore.rules` (see `FIREBASE-SETUP.md`).

> **⚠️ Preview scope not set for some vars** (Vercel CLI prompt issue). Only matters for branch preview deploys. Add manually via dashboard if you ever use Preview deploys.

---

## 4. Vercel deployment

- **Auto-deploy**: every push to `main` on GitHub triggers a Production build.
- **Manual deploy from terminal**:
  ```bash
  cd ~/Developer/cockroach-janta-parti
  npx --yes vercel deploy --prod
  ```
- **Check deploy status**:
  ```bash
  npx --yes vercel ls
  ```
- **Project ID**: `prj_37nWjoNLUSRWhPiilMyLpCv1DHs6`
- **Org/team**: `team_uKRb2qr9Go04uKNBjwhlStgJ` (shubham-rais-projects-58cc4b37)
- **Custom domains aliased to latest prod**:
  - https://cockrochjantaparti.com
  - https://www.cockrochjantaparti.com
  - https://cockroach-janta-parti.vercel.app

---

## 5. Firebase

- **Project ID**: `cockroach-janta-parti-cjp`
- **Owner Google account**: `raishubham063@gmail.com` (the only account — `tech@genzitsolution.com` was explicitly logged out)
- **Region**: asia-south1 (Mumbai)
- **Console**: https://console.firebase.google.com/project/cockroach-janta-parti-cjp
- **Web app**: `cjp-web`, App ID `1:688516789905:web:8c22195f8e573518287130`

### Firestore data model

```
meta/stats                              { members: number }
members/{auto-id}                       { name, city, why, email?, createdAt }
memeLikes/{memeId}                      { count: number }
comments/{slug}/items/{auto-id}         { name, text, createdAt }
```

- `memeId` for homepage meme wall = `meme-0` … `meme-10`
- `memeId` for `/memes` wall = `meme-0` … `meme-14`
- `slug` matches blog post slug exactly

### Security rules
Source of truth: `firestore.rules` in repo. Deployed via:
```bash
npx --yes firebase-tools deploy --only firestore:rules --project cockroach-janta-parti-cjp
```

Current rules are intentionally permissive for Phase 2 launch. **Tighten in Phase 3** when admin auth is added: require signed-in user for comments/likes; restrict `meta/stats` writes to admin SDK / Cloud Function.

### Counter management
```bash
# Reset to Day-1 honest number (47)
node scripts/reset-counter.mjs

# Original seed script (legacy — wrote 350000, do not use post-rebrand)
node scripts/seed-firestore.mjs
```
Real members increment the counter live via the join form. Don't seed inflated numbers anymore — the brand is now positioned as Day 1 / Founding Cohort.

### Firebase CLI auth
```bash
npx --yes firebase-tools login:list   # check who's logged in
npx --yes firebase-tools login        # log in (browser opens)
npx --yes firebase-tools logout <email>  # log out specific account
```
Token expires periodically — if commands fail with "credentials no longer valid", run `firebase login --reauth`.

---

## 6. Formspree

- **Form ID**: `mwvzqeee`
- **Endpoint**: `https://formspree.io/f/mwvzqeee`
- **Account email**: raishubham063@gmail.com
- **Plan**: Free (50 submissions/month)
- **Dashboard**: https://formspree.io/forms
- **Project name in Formspree**: "My First Project" → "CJP Join Form"

Submissions also write to Firestore `members` collection (via `joinMember()` in `lib/firebase-actions.ts`), so even if you exceed Formspree's free quota, the data is never lost.

---

## 7. Local development

```bash
cd ~/Developer/cockroach-janta-parti

# install deps (once)
npm install

# dev server with hot reload
npm run dev
# → http://localhost:3000

# production build (catch errors before pushing)
npm run build

# lint
npm run lint
```

### `.env.local` (create from `.env.example` first time)
Copy `.env.example` → `.env.local` and paste the values from §3 above. Without these, the site still works but Firebase + Formspree silently no-op.

---

## 8. How to add new content

### 📝 Add a new blog post
1. Open `lib/blog.ts`
2. Add a new object to the `blogPosts` array. Fields:
   ```ts
   {
     slug: "your-url-friendly-slug",            // appears in /blog/{slug}
     title: "Headline",
     cat: "News" | "History" | "Tools" | "Hindi" | "Marathi" | "Bengali" | "Memes",
     excerpt: "1-2 sentence teaser shown on the list page",
     body: [
       "First paragraph — also used as the bold intro",
       "Normal paragraph",
       "## Heading turns into an H2",
       "Another paragraph",
     ],
     author: "Your Name",
     date: "May 23, 2026",
     readTime: "5 min read",
     img: "https://images.unsplash.com/photo-XXXX?w=1400&q=80&auto=format&fit=crop",
   }
   ```
3. Commit + push. Auto-deploys to prod via Vercel.
4. Live at `/blog/your-url-friendly-slug` with full sidebar (TOC, share, related posts) auto-generated.

### 📰 Add a news card
1. Open `app/news/page.tsx` → `newsItems` array.
2. Add an object with `source`, `title`, `time`, `readTime`, `summary`, `img`, `url`. The card links to `url` (external).
3. Also mirror on homepage if it's a hero story: `app/page.tsx` → `newsItems`.

### 👥 Add a founding member
1. Open `app/page.tsx` → `members` array.
2. Add `{ name, role, date, quote, avatar }`. Format:
   - `name`: anonymous handle (`@handle_topic`)
   - `role`: `City · MEM #NNN` (use the next sequential founding number)
   - `date`: `Founding Roach`
   - `quote`: short relatable 1-liner about their reason
   - `avatar`: Unsplash portrait URL
3. ⚠️ **Do not impersonate real public figures.** No "Mahua Moitra", "Kunal Kamra", etc. Anonymous handles only.

### 🖼️ Swap a hero image
1. Find the Unsplash photo ID (the `photo-XXXX` part of any image URL on https://unsplash.com).
2. Build the URL: `https://images.unsplash.com/photo-{ID}?w=2000&q=80&auto=format&fit=crop`
3. Replace inside the relevant page file (search for the old `images.unsplash.com` URL).
4. Always verify the new ID returns 200:
   ```bash
   curl -s -o /dev/null -w "%{http_code}\n" "https://images.unsplash.com/photo-{ID}?w=400"
   ```

### 🎵 Add the anthem MP3
1. Drop the MP3 file at `public/anthem.mp3`.
2. Open `app/anthem/page.tsx` and wire the `<audio>` element to `/anthem.mp3`. (Currently the player is UI-only — you'll need to add a `<audio src="/anthem.mp3" controls>` and bind play/pause buttons.)

---

## 9. Common commands cheat-sheet

```bash
# enter project
cd ~/Developer/cockroach-janta-parti

# dev
npm run dev

# git workflow
git status
git add -A
git commit -m "your message"
git push origin main          # triggers Vercel auto-deploy

# manual prod deploy (when GitHub push is slow to trigger)
npx --yes vercel deploy --prod

# check recent deploys
npx --yes vercel ls

# Vercel env vars
npx --yes vercel env ls
npx --yes vercel env add KEY production
npx --yes vercel env rm  KEY production

# Firebase
npx --yes firebase-tools projects:list
npx --yes firebase-tools deploy --only firestore:rules --project cockroach-janta-parti-cjp
node scripts/seed-firestore.mjs               # reset counter to 350000

# smoke test live site
for u in / /blog /tools/card /memes /join /news; do
  curl -s -o /dev/null -w "%{http_code} $u\n" "https://cockrochjantaparti.com$u"
done
```

---

## 10. Known quirks / things to know

1. **Project must live outside `~/Documents/`**. macOS TCC blocks file ops to Documents — that's why we moved to `~/Developer/`. Do NOT move it back.
2. **Bash + sed cannot write to Documents** either, but works fine in `~/Developer/`.
3. **Firebase apiKey is public** — that's normal. Security is enforced by Firestore Rules, not by hiding the key.
4. **Vercel CLI sometimes mis-handles the Preview scope** for env vars. Production and Development always get set; if Preview is missing, add via dashboard UI.
5. **`html-to-image` exports use the cream `bg-bg` as background** — works on the card generator. If you change card colours, also tweak the `backgroundColor` arg in `downloadCard()`.
6. **`firebase login` token expires** after ~30 days of inactivity. Re-auth: `firebase login --reauth`.
7. **`raishubham063@gmail.com`** is the only auth holder for Firebase. **Never** add `tech@genzitsolution.com` again.
8. **Member counter fallback**: If Firebase env vars are missing or Firestore is unreachable, the homepage counter falls back to a fake interval-based drift so the UI doesn't freeze.

---

## 11. Repo layout

```
cockroach-janta-parti/
├── .env.example              # template — copy to .env.local for local dev
├── .vercel/                  # Vercel link (don't touch)
├── FIREBASE-SETUP.md         # original 7-step guide (already complete)
├── PROJECT-REFERENCE.md      # this file
├── README.md
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # homepage
│   ├── globals.css
│   ├── about/page.tsx
│   ├── anthem/page.tsx
│   ├── blog/
│   │   ├── page.tsx          # list — reads from lib/blog.ts
│   │   └── [slug]/page.tsx   # dynamic detail + comments
│   ├── cji-remark/page.tsx
│   ├── founder/page.tsx
│   ├── hindi/page.tsx
│   ├── join/page.tsx
│   ├── manifesto/page.tsx
│   ├── memes/page.tsx        # meme wall + like buttons
│   ├── news/page.tsx
│   ├── quiz/page.tsx
│   ├── states/[slug]/page.tsx
│   ├── tools/
│   │   ├── page.tsx
│   │   ├── card/page.tsx     # PNG export via html-to-image
│   │   └── meme-generator/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── opengraph-image.tsx
├── components/ui/            # reusable Button, Card, Input, Select, Textarea
├── lib/
│   ├── blog.ts               # ⭐ blog content lives here — add new posts here
│   ├── firebase.ts           # client init (env-driven)
│   ├── firebase-actions.ts   # joinMember, likeMeme, addComment, listeners
│   └── utils.ts
├── public/                   # static assets (favicon, og images, manifest…)
├── scripts/
│   └── seed-firestore.mjs    # one-off counter seeder
├── firebase.json             # Firebase CLI config
├── firestore.rules           # security rules (deploy with firebase-tools)
├── firestore.indexes.json    # composite indexes (empty for now)
├── next.config.mjs
├── tailwind.config.ts        # Stitch design tokens
└── tsconfig.json
```

---

## 12. Phase 3 — What's NOT built yet

When you're ready (this is a separate session, ~1–2 days of work):

- **Admin dashboard** at `/admin` — protected by Firebase Auth (Google sign-in for raishubham063@gmail.com only).
- **Direct blog uploads** — markdown editor in admin → writes to Firestore, images uploaded to Vercel Blob or Firebase Storage.
- **Direct meme uploads** — user (or admin) uploads image + caption → Firestore + Storage.
- **Direct news inserts** — title + URL + image into Firestore.
- **Comment moderation** — admin can hide/delete comments.
- **Member list view** — admin sees all submissions, can export CSV.
- **Tighten Firestore rules** — require auth for writes, restrict `meta/stats` to Cloud Functions.
- **Cloud Function for atomic counter** — safer than client-side `increment()`.
- **Search** — Algolia or Firestore full-text search for blog + memes.
- **Anthem MP3 + video** — upload to Storage, wire to `/anthem`.
- **Real-time member ticker** — show recent joins streaming on homepage.

---

## 13. Marketing launch checklist (Phase 2.5 — ready now)

- [ ] Verify Formspree email arrived in raishubham063@gmail.com
- [ ] Click an existing meme heart on `/memes`, refresh — count persists (Firebase live)
- [ ] Submit join form on homepage with your own data — counter goes up by 1
- [ ] Post a comment on `/blog/how-a-meme-became-a-movement` — appears instantly
- [ ] Generate a card on `/tools/card` — PNG downloads
- [ ] Create Instagram `@cockrochjantaparti` (or similar handle) — bio link the domain
- [ ] Create X `@cjp_india`
- [ ] First launch post: "🪳 cockrochjantaparti.com is live"
- [ ] DM meme accounts (sarcastic_us, scoopwhoop, etc.)
- [ ] Submit to https://producthunt.com under "Politics" category

---

## 14. Emergency / recovery

- **Site is down?**
  1. Check Vercel dashboard → latest deployment status
  2. If "Building" / "Error", click → Build Logs
  3. Rollback via Vercel: latest deployment → ⋯ → "Promote to Production" on a previous green build.

- **Firebase quota exceeded?**
  - Spark (free) limits: 50K reads/day, 20K writes/day
  - Upgrade to Blaze: Firebase Console → Billing → Modify plan. Expect ~₹500/month at 50K DAU.

- **Lost local checkout?** Just re-clone:
  ```bash
  cd ~/Developer
  git clone https://github.com/shubhamprakashrai/cockroach-janta-parti.git
  cd cockroach-janta-parti
  npm install
  cp .env.example .env.local   # then fill in values from §3
  npm run dev
  ```

- **Lost everything (laptop dead, fresh machine)?**
  Everything you need is in the Vercel + Firebase + Formspree + GitHub accounts above. The codebase is on GitHub, env vars are on Vercel, data is on Firebase. Nothing is on your laptop that can't be recovered.

---

That's it. Open this file first. Add to it whenever you do something non-obvious.
