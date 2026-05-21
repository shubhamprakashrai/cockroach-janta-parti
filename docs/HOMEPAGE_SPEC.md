# Homepage — Detailed Section Spec

This is the **authoritative spec** for `app/page.tsx`.
Build/upgrade the homepage to match every section below.

Sections (top to bottom):

## 1. ANNOUNCEMENT TICKER (sticky top)
- Horizontally scrolling text
- "9.3M followers ✦ 1L+ members ✦ 0 corporate sponsors ✦ #MainBhiCockroach"
- Yellow on black, monospace font

## 2. NAVIGATION BAR
- Logo (left): "🪳 COCKROCH JANTA PARTI" in Anton font
- Menu (right): Manifesto | News | Memes | Join | Tools | Blog
- Mobile: Hamburger + bottom tab bar (Home, News, Memes, Quiz, Profile)
- "JOIN THE PARTI" button (yellow CTA) sticky on top right

## 3. HERO SECTION (full viewport)
- Background: Animated AI cockroach swarm forming India's map
- H1 (Anton, 96px): "MAIN BHI COCKROACH."
- H2 (Inter, 24px): "Tum bhi banno. India's loudest Gen Z movement."
- 2 CTAs:
  * Primary: "JOIN THE PARTI →" (yellow button, black text)
  * Secondary: "GENERATE MY COCKROACH CARD 🪳" (outline button)
- Live counter underneath: "Members: [animated number] | Days since CJI remark: 6"

## 4. LIVE STATS DASHBOARD
- 4 big tiles in grid (mobile: 2x2):
  * IG Followers (live, 9.3M)
  * X Followers (47k)
  * Total Members (3.5L)
  * vs BJP gap (+600k LEAD)
- Each tile: number animates on scroll, source badge below
- "Updated 60 sec ago" pulsing dot

## 5. TODAY'S TOP COCKROACH NEWS
- Section title: "BREAKING ROACH NEWS" with red underline
- 3-column news card grid (mobile: horizontal scroll)
- Each card: thumbnail, source logo, headline, "Read in 30s" summary, share button
- "See all news →" link

## 6. INTERACTIVE MANIFESTO
- Title: "5 DEMANDS. NON-NEGOTIABLE."
- 5 numbered cards in 2-column layout (mobile: stack)
- Each card has:
  * Big number (01, 02, etc.)
  * Demand title
  * 1-line explainer
  * "Agree" / "Disagree" vote buttons with live %
  * "Share this demand" → WhatsApp pre-filled
  * "Read deep dive →"

## 7. MEME WALL PREVIEW
- Pinterest-style masonry, 4 cols desktop, 2 cols mobile
- 12 thumbnail memes
- "MEME OF THE DAY" pinned card with crown badge
- "Open Meme Generator 🪳" big CTA

## 8. ANTHEM PLAYER
- Embedded audio player with waveform
- Lyric scroll on right
- "Kill us and we rise again. From the gutters, from the stain."
- "Upload your remix" button

## 9. VERIFIED MEMBERS WALL
- Section: "WHO'S IN"
- 6 cards: Mahua Moitra, Kirti Azad, [creators], [comedians]
- Each card: avatar, name, designation, join date, first quote

## 10. STATE CHAPTERS MAP
- Interactive India map (SVG)
- Hover/tap → state shows member count + top meme
- 29 state pages reachable from here

## 11. JOIN FORM (inline)
- 3 fields: Name, City, "Why are you a cockroach?" (1 line)
- "GENERATE MY MEMBERSHIP CARD" button
- Output: shareable PNG card with QR code

## 12. BLOG TEASER
- 6 latest blog cards
- "READ MORE COCKROACH WISDOM →"

## 13. NEWSLETTER CTA
- Title: "ROACH REPORT — Weekly Drop"
- Email input + subscribe
- Microcopy: "No spam. Bas roach gyaan."

## 14. FOOTER
- Big disclaimer: "Fan-built. Not affiliated with CJP or ECI."
- Newsletter signup
- Social icons
- Sitemap links
- "Made with 🪳 in India"

---

**Design rules**: see `docs/DESIGN.md`
**Content**: see `docs/CONTENT.md`
