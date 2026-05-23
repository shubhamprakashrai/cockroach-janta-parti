# CJP — Quick Access Cheat Sheet

> Roz ka kaam karne ke liye. Phone par save kar lo. Sab ek hi page pe.

---

## 🌐 Public site

**https://cockrochjantaparti.com**

---

## 🔐 Admin Panel (content upload)

| Field | Value |
|-------|-------|
| **URL** | https://cockrochjantaparti.com/admin |
| **Passcode** | `mainBhiCockroach2026` |
| Session | Locks per browser tab. Logout button top-right. |

### Upload kar sakte ho:

| Tab | Kya hota hai |
|-----|--------------|
| **BLOG POST** | Title + body → live on `/blog/{slug}` |
| **REEL / VIDEO** | YouTube/Insta/X URL paste karo → live on `/reels/{id}` |
| **NEWS ITEM** | External link + summary → live on `/news` |

Har upload ke baad success bar mein **"VIEW LIVE …"** button milta hai — click karke check kar lo.

---

## 📋 Dashboards (jab kuch dekhna ho)

| Tool | URL | Kya dekho |
|------|-----|-----------|
| **Vercel** | https://vercel.com/shubham-rais-projects-58cc4b37/cockroach-janta-parti | Deploys, env vars, domains |
| **Firebase Console** | https://console.firebase.google.com/project/cockroach-janta-parti-cjp | Members, comments, likes, reels, blogs (all data) |
| **Firestore data direct** | https://console.firebase.google.com/project/cockroach-janta-parti-cjp/firestore/data | Browse documents, delete test reel etc. |
| **Formspree** | https://formspree.io/forms | Join form email submissions |
| **GitHub repo** | https://github.com/shubhamprakashrai/cockroach-janta-parti | Code backup |

### Accounts:

- **Vercel + Firebase + GitHub**: linked to `raishubham063@gmail.com`
- **Formspree**: `raishubham063@gmail.com`

---

## 📱 Live URLs to share (har content type)

| Type | URL pattern | Example |
|------|------------|---------|
| Blog post | `/blog/{slug}` | `/blog/day-1-why-we-exist` |
| Reel | `/reels/{doc-id}` | `/reels/koO9lIhwoukKvx3pKT1B` |
| News list | `/news` | All news items live |
| Card generator | `/tools/card` | Personal ID card download |
| Meme generator | `/tools/meme-generator` | Custom meme + WA share |
| Join form | `/join` | 4-step join wizard |
| Manifesto | `/manifesto` | 5 demands |

---

## 🚀 Daily routine (15 min mein traffic build)

```
Morning:    Apne Instagram pe ek reel post karo
            → URL copy karo
            → /admin pe paste karo (REEL tab)
            → live URL friends ko bhejo

Afternoon:  /admin pe ek short blog likho (200-500 words)
            → 1 image URL chahiye (Unsplash se)
            → publish karo
            → URL Twitter/IG bio mein update karo

Evening:    Koi acche article ka link mila? 
            → /admin pe NEWS tab → paste karo
            → /news pe newest first dikhega
```

---

## 🔥 Firebase counter reset (agar fake numbers ho jaye)

```bash
cd ~/Developer/cockroach-janta-parti
node scripts/reset-counter.mjs    # 1 pe set karta hai (founder only)
```

---

## ⚠️ Common gotchas

| Issue | Fix |
|-------|-----|
| Admin passcode bhool gaye | Vercel → Settings → Env Vars → `NEXT_PUBLIC_ADMIN_PASSCODE` dekho ya naya set karo |
| Test reel delete karna hai | Firebase Console → Firestore → reels → `koO9lIhwoukKvx3pKT1B` → 3-dot → Delete |
| Site update nahi dikha raha | Browser cache clear → hard refresh (Cmd+Shift+R) ya incognito mode |
| Formspree quota khatam | Free plan 50/month — Firebase mein bhi save ho raha hai, paid plan ya naya form bana lo |
| Counter zero pe le jana | `node scripts/reset-counter.mjs` (edit script first to set value) |

---

## 🆘 Emergency

- **Site down?** → Vercel dashboard → latest deploy → Promote previous green build to prod
- **Bad content uploaded?** → Firebase Console → Firestore → blogs / reels / news → delete that doc
- **Hacked / bots?** → Vercel → Settings → Env Vars → change `NEXT_PUBLIC_ADMIN_PASSCODE` → redeploy

---

## 📚 Full docs (if needed)

| Doc | Where | When |
|-----|-------|------|
| `PROJECT-REFERENCE.md` | Project root + GitHub | Full architecture, every env var, deep reference |
| `FIREBASE-SETUP.md` | Project root + GitHub | Firebase from scratch (not needed since done) |
| `CJP-QUICK-ACCESS.md` | This file | Daily cheat sheet (you are reading it) |

---

Ek hi line mein: **`/admin` + `mainBhiCockroach2026` = sab kaam.**

Phone me bookmark kar lo. Done.
