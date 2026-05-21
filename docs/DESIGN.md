# Cockroach Janta Parti — Design System

## Brand
- **Tagline**: "Main Bhi Cockroach"
- **Vibe**: Brutalist, rebellious, ironic, Gen-Z, Indian
- **Audience**: Indian Gen-Z 18–28, Tier-2/3 cities, Hindi-English bilingual

## Colors
| Token | Hex | Use |
|---|---|---|
| `bg` | `#0A0A0A` | Background |
| `card` | `#1A1A1A` | Cards |
| `accent` | `#FFD60A` | CTAs, highlights |
| `alert` | `#FF3B30` | Alerts, breaking |
| `success` | `#00FF88` | Success states |
| `text.primary` | `#F5F5F5` | Headings + body |
| `text.secondary` | `#A0A0A0` | Meta text |
| `border` | `#2A2A2A` | Borders |

## Typography
- **Display (headings)**: `Anton`, fallback `Bebas Neue`
- **Body**: `Inter`
- **Hindi**: `Hind`, fallback `Noto Sans Devanagari`
- **Mono (stats/code)**: `JetBrains Mono`

## Design Rules
- Hard `4px 4px 0` black shadows — NEVER soft shadows
- Max `4px` border radius (mostly 0)
- 2px solid borders
- UPPERCASE for headings + buttons
- Yellow highlighter strokes for emphasis
- Brutalist cards, not glossy
- Mobile-first: 360px minimum, 48px tap targets
- Bottom tab bar on mobile (Home, News, Memes, Quiz, Profile)
- Sticky "JOIN" CTA on every page

## Microcopy (Gen-Z Tone)
- 404: "Page bhi unemployed hai."
- Empty: "Yahan kuch nahi hai. Like our future."
- Loading: "Fetching roaches… 🪳"
- Newsletter: "Subscribe and we'll spam you with rage."
- Submit: "Send it 🪳"
- Success: "✓ Welcome to the gutter."

## Animations
- Hero text glitch every 5s
- Stats counter animates on scroll
- Buttons: scale 0.95 on press
- Cards: lift 4px on hover with hard shadow
- Random cockroach emoji crawls across hero

## Reusable Components
1. `<BrutalButton variant="primary|secondary|ghost" />`
2. `<BrutalCard />`
3. `<NewsCard />`
4. `<MemeCard />`
5. `<MemberCard />`
6. `<StatTile />`
7. `<ManifestoCard />` (with agree/disagree)
8. `<Ticker />`
9. `<BottomTabBar />` (mobile)
10. `<StickyJoinButton />`
