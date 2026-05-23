# Firebase Setup — CJP Phase 2

Once you finish these steps, the site will have real-time live data:

- **Live member counter** on the homepage updates the moment anyone joins
- **Meme likes** persist across reloads, counted per device
- **Blog comments** appear in real time on every post
- Every join writes a row to Firestore (and increments the counter atomically)

The site already works without Firebase — features just silently no-op. Once you complete the steps below and add the env vars, everything goes live with no code changes.

---

## Step 1 — Create a Firebase project

1. Open https://console.firebase.google.com
2. Sign in with the Google account you want to own this project
3. Click **Add project**
4. Project name: `cockroach-janta-parti` (or anything you like)
5. Disable Google Analytics for this project (not needed; we already use Vercel Analytics)
6. Click **Create project**, wait ~30 seconds

## Step 2 — Add a Web app

1. On the project dashboard, click the **`</>`** (Web) icon to "Add app"
2. App nickname: `cjp-web`
3. **Do not** check "Also set up Firebase Hosting"
4. Click **Register app**
5. You will see a config block like this:

   ```js
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "cockroach-janta-parti.firebaseapp.com",
     projectId: "cockroach-janta-parti",
     storageBucket: "cockroach-janta-parti.appspot.com",
     messagingSenderId: "1234567890",
     appId: "1:1234567890:web:abcdef..."
   };
   ```

   **Copy these 6 values** — you'll paste them into env vars in Step 4.

## Step 3 — Enable Cloud Firestore

1. In the left sidebar, open **Build → Firestore Database**
2. Click **Create database**
3. Start in **production mode** (we'll write rules in Step 5)
4. Choose location: **asia-south1 (Mumbai)** — best latency for Indian users
5. Click **Enable**

## Step 4 — Add env vars to Vercel

1. Go to https://vercel.com/dashboard → `cockroach-janta-parti` → **Settings → Environment Variables**
2. Add the following **6 keys**, pasting the matching values from Step 2.
   Set scope to **Production, Preview, and Development**.

   | Key | Value (from Step 2) |
   |-----|---------------------|
   | `NEXT_PUBLIC_FIREBASE_API_KEY` | `apiKey` |
   | `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `authDomain` |
   | `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `projectId` |
   | `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `storageBucket` |
   | `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | `messagingSenderId` |
   | `NEXT_PUBLIC_FIREBASE_APP_ID` | `appId` |

3. Save. Then go to **Deployments → ⋯ on latest → Redeploy** to apply the env vars (or push any commit).

## Step 5 — Lock down Firestore with security rules

In Firebase Console → **Firestore Database → Rules**, paste this and click **Publish**:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Public live counter — anyone can read, only server-side writes ideally,
    // but for Phase 2 client writes are allowed via joinMember().
    match /meta/{doc} {
      allow read: if true;
      allow write: if true;
    }

    // Members — anyone can submit a join; nobody can read the full list.
    // Switch read: false to admin-only later.
    match /members/{doc} {
      allow read: if false;
      allow create: if request.resource.data.name is string
                    && request.resource.data.name.size() < 80
                    && request.resource.data.city is string
                    && request.resource.data.why is string;
    }

    // Meme likes — read public, increment public.
    match /memeLikes/{memeId} {
      allow read: if true;
      allow write: if true;
    }

    // Comments — read public, anyone can post short comments.
    match /comments/{slug}/items/{commentId} {
      allow read: if true;
      allow create: if request.resource.data.name is string
                    && request.resource.data.name.size() <= 60
                    && request.resource.data.text is string
                    && request.resource.data.text.size() <= 800;
    }
  }
}
```

> These rules are intentionally permissive for Phase 2 launch. When you build
> the admin app and add auth, tighten them: require a signed-in user for
> `comments` and `memeLikes`, and restrict `meta/stats` writes to a Cloud
> Function or admin SDK only.

## Step 6 — Seed the member counter (optional but recommended)

If you skip this, the counter just starts at 0 until the first join.

1. Firestore Database → **Start collection** → ID: `meta`
2. Document ID: `stats` → Add field: `members` = `350000` (number)
3. Save.

After that, the homepage live counter will read this and tick up by 1 every time a user submits the join form.

## Step 7 — Verify it works

1. Open https://cockrochjantaparti.com
2. The homepage MEMBERS counter should show your seeded number (e.g. 350,000)
3. Open the form, fill it in, submit
4. Refresh — counter should now read 350,001 and increment for every subsequent submission
5. Open https://console.firebase.google.com → Firestore → check `members` collection — your submission row is there
6. Open any blog post (e.g. `/blog/how-a-meme-became-a-movement`) → post a comment → it appears instantly without reload
7. Open `/memes` → hover a meme → click ❤️ → like count goes up by 1, persists on reload, can't be liked twice from same device

## Data model reference

```
meta/stats                              { members: number }
members/{auto-id}                       { name, city, why, email?, createdAt }
memeLikes/{memeId}                      { count: number }
comments/{slug}/items/{auto-id}         { name, text, createdAt }
```

`memeId` for the homepage meme wall = `meme-0` through `meme-10`.
`memeId` for the /memes wall = `meme-0` through `meme-14`.
`slug` for comments matches the blog post slug exactly (e.g. `how-a-meme-became-a-movement`).

## Costs

Firebase **Spark (free)** plan is more than enough for early traction:
- 50K reads/day, 20K writes/day, 1GiB storage
- Once you hit ~10K daily active visitors you'll outgrow Spark — upgrade to Blaze (pay-as-you-go), expect under ₹500/month at 50K DAU.
