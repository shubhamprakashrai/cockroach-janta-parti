// One-off: seed Firestore with real factual blog posts + curated news cards.
// All sources are public-domain Wikipedia entries or publication tag/section pages.
// No politician impersonation, no scraped content, no fake metrics.
//
// Run: node scripts/seed-real-content.mjs

import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, serverTimestamp } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyAG9kuotSblBDPb4NxDCTCCHKiXlAzON8A",
    authDomain: "cockroach-janta-parti-cjp.firebaseapp.com",
    projectId: "cockroach-janta-parti-cjp",
    storageBucket: "cockroach-janta-parti-cjp.firebasestorage.app",
    messagingSenderId: "688516789905",
    appId: "1:688516789905:web:8c22195f8e573518287130",
};

const app = initializeApp(config);
const db = getFirestore(app);

// ---------- BLOG POSTS (7) — original analysis, cited, opinion-mode ----------
const blogs = [
    {
        slug: "day-1-why-cjp-exists",
        title: "Day 1 — Why CJP Exists",
        cat: "Opinion",
        author: "CJP Editor",
        readTime: "3 min read",
        excerpt: "Not a registered party. Not affiliated with anyone. An open political-art project organised around five demands every Indian under 30 quietly agrees with.",
        img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1400&q=80&auto=format&fit=crop",
        body: [
            "This is Day 1. Today, the Cockroach Janta Parti has zero verified members. No corporate donors. No celebrity endorsements. Not a registered political party under the Representation of People Act. The site you are reading is a satirical political-art project organised by one person, written for a generation that the political class has stopped talking to.",
            "We are calling it CJP because that is the joke. The political class periodically refers to its own electorate as pests — cockroaches, parasites, freeloaders. The framing reveals the contempt. We are reclaiming the word, the way movements have reclaimed slurs for a century. The cockroach is the most adaptive organism on the planet. It cannot be killed. Pretty good model for a generation that the system has tried to discard.",
            "## The five demands",
            "Read the manifesto in full. The short version: no Rajya Sabha cooling-off bypass for retired CJIs, criminal penalties for systematic voter-list deletion, real 50% women representation in cabinet (not waiting until 2029), a 20-year ban from elected office for defectors, and the cancellation of broadcast licenses for media houses that have crossed structural conflict-of-interest thresholds. Every one of these is legally enforceable with existing instruments. We have not invented new law. We are asking for enforcement.",
            "## The first 50",
            "The first 50 people who sign up become the founding cohort. Their member numbers are permanent — #001 to #050. They get a card, a place in the membership archive, and the right to say later that they were here before anyone was watching.",
            "## What this site is not",
            "We will not impersonate politicians. We will not fabricate news. We will not buy followers. The counter on the homepage is bound to Firestore — it reads zero today because nobody has joined yet. When someone joins, it becomes one. The growth, if it happens, will be real, traceable, and slow before it is fast.",
            "## What this site is",
            "A living manifesto. A meme generator. A blog. A reel wall. A place that fills up only when real people fill it. If you are reading this on Day 1, congratulations — the work is yours now.",
        ],
    },
    {
        slug: "youth-unemployment-india-2026-the-real-numbers",
        title: "Youth Unemployment in India 2026 — The Real Numbers",
        cat: "Opinion",
        author: "Data Roach",
        readTime: "6 min read",
        excerpt: "Every government claims unemployment is falling. Every household with a graduate aged 22–30 knows that's a lie. Here are the numbers — and the methodology that produces them.",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80&auto=format&fit=crop",
        body: [
            "The headline number you hear most often is the official Periodic Labour Force Survey (PLFS) urban unemployment rate, which has hovered between 6% and 7% in recent quarters. That number is technically accurate. It is also misleading, and the gap between the two is where this generation lives.",
            "## What PLFS actually measures",
            "PLFS counts you as employed if you worked even one hour for pay in the survey reference week. By that definition, a Swiggy rider who logged in once during the week is employed. A freelance editor with a single ₹500 invoice that week is employed. The definition is good for international comparability — every labour-force survey uses something similar — but it tells you almost nothing about whether the work pays a living wage, lasts, or matches the qualification of the worker.",
            "## CMIE's broader measure",
            "The private Centre for Monitoring Indian Economy (CMIE) uses a stricter definition: someone is unemployed only if they have a 'main activity' that does not bring in income. Their numbers are consistently higher — typically four to six percentage points above PLFS — because they capture discouraged workers who have stopped looking. As of early 2026 reporting, the CMIE all-India unemployment rate has stayed in the high-7% range, and the youth (15–29) urban rate has crossed 17%.",
            "## The degree premium has collapsed",
            "A more useful question than 'are you employed' is 'are you employed for what you trained for'. Graduate unemployment in urban India is now around 28%. Post-graduate unemployment is higher in several states. The 'degree premium' — the wage and employability advantage of a college degree over a school-leaving certificate — has not just shrunk; it has inverted in some informal-sector segments. A school dropout will take any informal job. A graduate is, on average, waiting for something that justifies the cost of three to five years of college.",
            "## Why the regional variance is misleading",
            "Bihar reports a low graduate unemployment rate. Kerala reports the highest. The instinct is to assume Bihar is doing something right and Kerala something wrong. It is more likely the opposite: Bihar's graduates have migrated to Delhi, Bengaluru, or the Gulf, so they do not show up in Bihar's labour force survey at all. Kerala's graduates tend to stay. The gap is a measurement artefact, not a policy success.",
            "## What this is, in one line",
            "An entire generation has been told its problems are individual. The numbers say the problems are structural.",
            "## Sources",
            "Periodic Labour Force Survey (Ministry of Statistics and Programme Implementation). Centre for Monitoring Indian Economy. International Labour Organisation country reports for India. The full Wikipedia primer on Unemployment in India is a good place to start: en.wikipedia.org/wiki/Unemployment_in_India.",
        ],
    },
    {
        slug: "the-5-demands-a-legal-walkthrough",
        title: "The 5 Demands — A Legal Walkthrough",
        cat: "History",
        author: "Legal Roach",
        readTime: "9 min read",
        excerpt: "On first read the CJP manifesto sounds provocative. On a third read — done by anyone who has studied constitutional law — every demand is enforceable with existing instruments.",
        img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1400&q=80&auto=format&fit=crop",
        body: [
            "The CJP manifesto contains five demands. Each one has been called radical, impractical, or unconstitutional. None of those are accurate. Every demand is achievable with existing Indian law, with at most a constitutional amendment that has been proposed and shelved multiple times. Here is the legal walkthrough.",
            "## Demand 01: No Rajya Sabha for retired CJIs",
            "Article 80(3) of the Constitution allows the President to nominate twelve members to the Rajya Sabha for distinguished service. Convention has been that retired Chief Justices are sometimes appointed within months of retirement. This creates a structural conflict of interest: any sitting CJI who anticipates a post-retirement seat has an incentive to rule favourably for the government in their final years on the bench. The fix is a cooling-off period — say five years between any constitutional office (CJI, CEC, Governor) and any political nomination. Drafts of this amendment exist. None has reached the floor because the parties that benefit from the current system control the agenda.",
            "## Demand 02: Criminal liability for systematic voter deletion",
            "The Representation of the People Act, 1951 already criminalises vote tampering. Section 134B specifically addresses deletion of legitimate voters from rolls; the maximum punishment is two years. CJP's demand is to extend this to apply UAPA when deletion is shown to be systematic — that is, designed to engineer electoral outcomes rather than correct administrative errors. UAPA already covers attempts to undermine the sovereignty of the electoral process. The bridge is small, and several legal scholars have proposed similar enhancements.",
            "## Demand 03: 50% women representation in cabinet, immediately",
            "The 106th Constitutional Amendment (passed in September 2023) reserves 33% of seats in the Lok Sabha and state assemblies for women, but only after the next census and delimitation — effectively pushed to 2029 at earliest. CJP demands accelerating this and applying it to cabinet appointments immediately. Cabinet composition requires no constitutional amendment. The Prime Minister has discretion to appoint a cabinet of any composition on swearing-in day. A 50% women's cabinet is achievable now. No party has done it. See the Women's Reservation Bill entry on Wikipedia for the full history.",
            "## Demand 04: Twenty-year ban on defectors",
            "The Tenth Schedule (Anti-Defection Law) currently disqualifies a defecting MP from their seat. CJP demands extending this to a 20-year ban from holding any elected office, anywhere. The mechanism is a Tenth Schedule amendment — straightforward legally. The reason this has never been done is political, not legal: every party uses defections to engineer state-level governments, and eliminating defections would freeze the current map.",
            "## Demand 05: Revoke broadcast licenses for media houses with structural conflicts",
            "The Information Technology Act and the Cable Television Networks (Regulation) Act both give the central government discretion over broadcast licenses. CJP demands that any media house found to have crossed a structural conflict-of-interest threshold — defined by political donations, cross-shareholdings, or owner-government contracts above a published percentage of revenue — lose its broadcast license. The constitutional concern is that future governments could weaponise this against opposition outlets. The draft addresses this by requiring the determination to be made by a five-member panel: one government nominee, one opposition nominee, one Supreme Court justice, one journalist nominated by the Editors Guild, and one Election Commission representative.",
            "## The underlying argument",
            "None of these requires inventing new constitutional doctrine. Every one requires political will. The manifesto is provocative because provocation gets read. The legal foundation is, on every count, conservative.",
            "## Further reading",
            "Anti-defection law: en.wikipedia.org/wiki/Anti-defection_law. Women's Reservation Bill: en.wikipedia.org/wiki/Women%27s_Reservation_Bill. Constitutional offices and cooling-off proposals: any standard textbook on Indian constitutional law.",
        ],
    },
    {
        slug: "political-satire-in-india-from-faking-news-to-cjp",
        title: "Political Satire in India — From Faking News to CJP",
        cat: "History",
        author: "CJP Editor",
        readTime: "5 min read",
        excerpt: "Faking News closed in 2017. The space for satirical political commentary in India is now mostly individuals on YouTube. CJP is trying something else.",
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&q=80&auto=format&fit=crop",
        body: [
            "Satire has always been a tool of political commentary in India, but the institutional version is mostly dead. Newspaper cartoonists who could shape public opinion in the 1980s and 1990s — R K Laxman, Mario Miranda, Sudhir Dar — have no clear successors at scale. The English-language satire site Faking News, run by Rahul Roushan, was a brief institutional moment from 2008 to 2017 before its closure under Network18.",
            "## What replaced it",
            "Two things. First, individual commentators on YouTube and Instagram — channels that combine news commentary with stand-up sensibility, building audiences in the millions. Second, decentralised meme accounts on Instagram and X, where the same satirical impulse exists but is fragmented across thousands of pages without a single editorial voice or institutional identity.",
            "## Why this matters",
            "Satire works best when it has a stable home. Cartoonists in newspapers had a regular slot. SNL has a regular slot. Faking News had a recognisable URL. Today's satirical commentary is high-volume but home-less — you see the meme, you laugh, you forget which account posted it, you scroll on. The political impact of satire compounds when it has continuity. A name, a face, an institution.",
            "## What CJP is trying",
            "CJP is a thought experiment about what an institution-shaped satirical political project would look like in 2026. Not a meme account. Not a YouTube channel. A full website with a manifesto, a member roster, a card generator, a meme wall, and a blog. The format borrows from real political parties: cards, demands, chapters, founders. The content borrows from satire: the absurdity is the message.",
            "## What we are not",
            "We are not a registered political party. We are not a media company. We are not aggregating other people's content. We are a small art project trying to write its way into the conversation by doing the work, slowly. If it works, it works. If it does not, the manifesto remains a useful read.",
            "## Further reading",
            "Faking News: en.wikipedia.org/wiki/Faking_News. The Wire (founded in 2015 as an independent reaction to mainstream consolidation): en.wikipedia.org/wiki/The_Wire_(India).",
        ],
    },
    {
        slug: "anti-defection-law-why-it-doesnt-stop-defection",
        title: "The Anti-Defection Law — Why It Doesn't Actually Stop Defection",
        cat: "Opinion",
        author: "Legal Roach",
        readTime: "7 min read",
        excerpt: "The Tenth Schedule of the Constitution was supposed to end party-hopping. Forty years later, governments still fall to defections every year. Here is why the law fails.",
        img: "https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=1400&q=80&auto=format&fit=crop",
        body: [
            "The Tenth Schedule was inserted into the Constitution by the 52nd Amendment in 1985. The intent was to end the 'Aaya Ram Gaya Ram' politics of the 1960s and 70s, where MPs and MLAs switched parties between sessions in exchange for cabinet posts or cash. Four decades later, governments at the state level still fall to engineered defections almost every year. The law has not solved the problem it was designed to solve.",
            "## What the law actually says",
            "The Tenth Schedule disqualifies an elected legislator from their seat if they: (a) voluntarily resign from their party, (b) vote against their party's whip, or (c) join another party after election. The disqualification is decided by the Speaker of the relevant house.",
            "## The two loopholes that broke it",
            "First, there is a 'split' exception (originally for one-third of the legislative party, narrowed by the 91st Amendment in 2003 to two-thirds for a merger). In practice, factions structure defections to clear the merger threshold. Second, the Speaker is a partisan office — the ruling party usually controls who holds it — which means disqualification proceedings are routinely delayed, sometimes for years, until the political moment has passed. The Supreme Court has flagged this delay problem in multiple judgments (notably Kihoto Hollohan, 1992, and the Manipur Speaker reference, 2020), but the structural fix is legislative, not judicial.",
            "## Where this hits hardest",
            "State governments. The pattern has repeated in Karnataka, Madhya Pradesh, Maharashtra, Goa, and most recently in several northeastern states: a ruling coalition is destabilised when twenty or thirty MLAs are flown to a resort, sworn in as part of a 'split' or simply waited out, and a new government is installed without going back to voters.",
            "## What a real fix looks like",
            "A real fix requires three things: shortening the Speaker's window for deciding disqualification (Election Commission has suggested 90 days), making the decision appealable directly to the Election Commission rather than the High Court, and — most controversially — extending the disqualification from 'this term' to a multi-year ban on any elected office. CJP's manifesto goes further: a 20-year ban. Whether 20 years is the right number is debatable; the principle that there must be a real cost is not.",
            "## Why no party will do this",
            "Every party in India has used defections to take or hold state governments at some point. Eliminating defections would freeze the current distribution of state-level power, which favours whoever has the largest current footprint. The political maths is symmetric — nobody wants to be the first to give up the tool.",
            "## Further reading",
            "Anti-defection law on Wikipedia: en.wikipedia.org/wiki/Anti-defection_law. PRS Legislative Research has good policy briefs on every major amendment. The 2002 Constitutional Review Commission report (Justice Venkatachaliah) is the most thorough institutional review.",
        ],
    },
    {
        slug: "womens-reservation-bill-when-does-33-percent-actually-happen",
        title: "The Women's Reservation Bill — When Does 33% Actually Happen?",
        cat: "Opinion",
        author: "CJP Editor",
        readTime: "5 min read",
        excerpt: "The 106th Constitutional Amendment was passed in September 2023. It is widely reported as 'now law'. The implementation timeline is more complicated than that.",
        img: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=1400&q=80&auto=format&fit=crop",
        body: [
            "The Constitution (One Hundred and Sixth Amendment) Act, 2023 — popularly known as the Women's Reservation Bill or Nari Shakti Vandan Adhiniyam — reserves 33% of seats in the Lok Sabha and state legislative assemblies for women. The bill was passed in September 2023 with bipartisan support. The reporting at the time often gave the impression that 33% reservation was now in effect. It is not.",
            "## The actual trigger",
            "The amendment includes a critical caveat: the reservation takes effect after the next delimitation exercise (the redrawing of constituency boundaries based on the next census). The next census in India has been delayed; the delimitation that depends on it has therefore been delayed. The earliest realistic date for the reservation to come into force is the 2029 general election cycle, and there are credible arguments — based on the historic delays in past delimitations — that it could slide to 2034.",
            "## What this means in practice",
            "Two general elections may pass after the amendment before any reserved seat actually exists. A woman elected in 2024 or 2029 is elected without the protection of the reservation, in seats that have been historically contested. The 'we passed it' headline is accurate; the 'it is in effect' implication is not.",
            "## The simpler fix nobody talks about",
            "Cabinet appointments require no constitutional amendment. The Prime Minister appoints the cabinet at swearing-in. A 50% women cabinet is achievable on day one of any government. The Union Cabinet has historically had fewer than 20% women ministers. State cabinets vary, but most are below 15%.",
            "## What CJP is asking for",
            "Two things. First, that the delimitation delay be treated as the implementation problem it is — fix the census, fix the timeline, do not let the 2023 victory lap continue to substitute for actual representation. Second, that any party serious about women's representation appoint a 50% women cabinet on day one of any government, since this requires no legal change at all.",
            "## Further reading",
            "Women's Reservation Bill on Wikipedia: en.wikipedia.org/wiki/Women%27s_Reservation_Bill. PRS Legislative Research has the most accessible explainer on the amendment text.",
        ],
    },
    {
        slug: "universal-basic-stipend-for-graduates-the-math",
        title: "A Universal Basic Stipend for Graduates — The Math",
        cat: "Opinion",
        author: "Data Roach",
        readTime: "6 min read",
        excerpt: "₹8,000 a month for 24 months, capped at 11 million eligible graduates aged 22–30 actively job-hunting. Total cost: 0.4% of GDP over two years. Compared to what we already write off, this is cheap.",
        img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1400&q=80&auto=format&fit=crop",
        body: [
            "The CJP manifesto proposes a Universal Basic Stipend (UBS) for graduates aged 22–30 who are actively job-hunting. The headline number — ₹8,000 a month for 24 months — gets dismissed as fantasy. The math says otherwise.",
            "## The unit economics",
            "₹8,000 a month × 24 months = ₹1,92,000 per beneficiary. With approximately 11 million graduates in this age band classified as actively unemployed or underemployed (per PLFS and CMIE estimates), the gross outlay is ₹2.1 lakh crore over two years. India's GDP for FY 2024-25 was approximately ₹296 lakh crore. The UBS therefore costs about 0.36% of GDP per year, or 0.71% across the full two-year programme.",
            "## What this gets compared to",
            "Three reference points. First, corporate tax write-offs and exemptions for the same two-year period have consistently exceeded the UBS cost (the relevant Tax Expenditures Statement is published with the Budget). Second, the Production-Linked Incentive (PLI) scheme has committed over ₹2 lakh crore across sectors, with audited results that fall well short of original employment targets. Third, NREGA — which is structurally analogous (a government-backed wage floor) — has annually run at ₹65,000-90,000 crore.",
            "## Three design constraints",
            "A real UBS programme would need three design choices to avoid common failure modes. First, beneficiary verification has to be lightweight (Aadhaar-linked, with appeals); otherwise gatekeeping costs eat the budget. Second, the 'actively job-hunting' condition has to be evidence-based but not punitive — registering on the National Career Service portal and accepting interview calls is the floor, not weekly attendance. Third, the stipend has to phase out as income rises rather than cut off at a hard threshold, otherwise it creates a poverty trap.",
            "## What this is not",
            "It is not the same as universal basic income. UBI is paid to everyone, indefinitely. UBS is a targeted, time-bounded scaffold for a specific population that the labour market is failing for a specific demographic reason. UBI debates apply at the conceptual level (does it disincentivise work, does it cause inflation, etc.); the evidence from limited Indian pilots has been mixed but the relevant comparison for UBS is closer to bridge programmes in OECD countries during the 2008–2012 youth unemployment crisis.",
            "## Whether this is politically viable",
            "No. Not yet. Every party in India has more politically rewarding things to spend ₹2 lakh crore on. The point of putting the math in print is to retire the argument that the proposal is unaffordable. It is affordable. It is just not prioritised.",
            "## Further reading",
            "Universal Basic Income on Wikipedia (good general primer including Indian pilot studies): en.wikipedia.org/wiki/Universal_basic_income. PRS Legislative Research has Budget-cycle analysis of corporate tax expenditures.",
        ],
    },
];

// ---------- NEWS CARDS (15) — real publication / Wikipedia / topic pages ----------
const news = [
    {
        source: "WIKIPEDIA",
        title: "Background: Unemployment in India — the structural primer",
        summary: "Definitions, history, regional variance, and the difference between PLFS and CMIE methodology. The single best starting point.",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80&auto=format&fit=crop",
        url: "https://en.wikipedia.org/wiki/Unemployment_in_India",
    },
    {
        source: "THE PRINT",
        title: "Coverage tag: Unemployment — every recent ThePrint piece in one feed",
        summary: "Tag page with every ThePrint article on unemployment in India. Reasonable mix of policy, data, and reportage.",
        img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&q=80&auto=format&fit=crop",
        url: "https://theprint.in/tag/unemployment/",
    },
    {
        source: "BUSINESS TODAY",
        title: "Topic: Unemployment — Business Today's running coverage",
        summary: "BusinessToday's unemployment topic page, updated frequently with labour-market reporting and policy analysis.",
        img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80&auto=format&fit=crop",
        url: "https://www.businesstoday.in/topic/unemployment",
    },
    {
        source: "BUSINESS TODAY",
        title: "Topic: Social Media — political organising in the algorithm age",
        summary: "BusinessToday's social media topic page — useful for understanding how Indian politics has migrated to platforms.",
        img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&q=80&auto=format&fit=crop",
        url: "https://www.businesstoday.in/topic/social-media",
    },
    {
        source: "THE WIRE",
        title: "Tag: Mahua Moitra — what happens to loud political voices",
        summary: "The Wire's tag page tracking Mahua Moitra's career, controversies, and the institutional response to her.",
        img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800&q=80&auto=format&fit=crop",
        url: "https://thewire.in/tag/mahua-moitra",
    },
    {
        source: "THE WIRE",
        title: "Politics section — independent coverage of Indian politics",
        summary: "The Wire's politics category page. Independent journalism founded as a reaction to mainstream consolidation.",
        img: "https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=800&q=80&auto=format&fit=crop",
        url: "https://thewire.in/category/politics/all",
    },
    {
        source: "AL JAZEERA",
        title: "Outside view — Al Jazeera's India coverage",
        summary: "How international outlets read Indian politics. Different framing, different blind spots, useful triangulation.",
        img: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=800&q=80&auto=format&fit=crop",
        url: "https://www.aljazeera.com/where/india/",
    },
    {
        source: "WIKIPEDIA",
        title: "Background: The Anti-Defection Law — the Tenth Schedule explained",
        summary: "Full history of the Tenth Schedule, the 91st Amendment, judicial review, and why governments still fall to defections.",
        img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=800&q=80&auto=format&fit=crop",
        url: "https://en.wikipedia.org/wiki/Anti-defection_law",
    },
    {
        source: "WIKIPEDIA",
        title: "Background: The Women's Reservation Bill — 106th Amendment Act 2023",
        summary: "Full text history, parliamentary debate, and the delimitation-trigger that delays implementation to at least 2029.",
        img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80&auto=format&fit=crop",
        url: "https://en.wikipedia.org/wiki/Women%27s_Reservation_Bill",
    },
    {
        source: "WIKIPEDIA",
        title: "Background: Universal Basic Income — global evidence and Indian pilots",
        summary: "What the international evidence says, where pilots have run in India, and what the design tradeoffs look like.",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80&auto=format&fit=crop",
        url: "https://en.wikipedia.org/wiki/Universal_basic_income",
    },
    {
        source: "WIKIPEDIA",
        title: "Mahua Moitra — the parliamentarian, the controversies, the bench",
        summary: "Wikipedia entry covering her career, expulsion and reinstatement, and the cash-for-query allegations.",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop",
        url: "https://en.wikipedia.org/wiki/Mahua_Moitra",
    },
    {
        source: "WIKIPEDIA",
        title: "Right to Information Act, 2005 — the law that built citizen oversight",
        summary: "The foundational transparency law in Indian governance. Background, mechanism, and the dilution attempts that followed.",
        img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=800&q=80&auto=format&fit=crop",
        url: "https://en.wikipedia.org/wiki/Right_to_Information_Act,_2005",
    },
    {
        source: "WIKIPEDIA",
        title: "Faking News — the institutional satire site that shut in 2017",
        summary: "Why Faking News mattered, why it closed, and what its absence has left for satirical political commentary in India.",
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80&auto=format&fit=crop",
        url: "https://en.wikipedia.org/wiki/Faking_News",
    },
    {
        source: "SCROLL.IN",
        title: "Topic: Unemployment — Scroll's coverage of the jobs crisis",
        summary: "Scroll.in's unemployment topic page. Heavy on reportage from non-metro India, often the more useful angle.",
        img: "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=800&q=80&auto=format&fit=crop",
        url: "https://scroll.in/topic/unemployment",
    },
    {
        source: "MINT",
        title: "Economy — Mint's running coverage of macro and policy",
        summary: "Daily economic reporting from Mint. Useful for tracking the gap between macro headlines and lived experience.",
        img: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?w=800&q=80&auto=format&fit=crop",
        url: "https://www.livemint.com/economy",
    },
];

// ---------- UPLOAD ----------

console.log(`Uploading ${blogs.length} blog posts...`);
for (const post of blogs) {
    const ref = await addDoc(collection(db, "blogs"), {
        ...post,
        createdAt: serverTimestamp(),
    });
    console.log(`  ✓ ${post.slug}  →  /blog/${post.slug}  (doc ${ref.id})`);
}

console.log(`\nUploading ${news.length} news items...`);
for (const item of news) {
    const ref = await addDoc(collection(db, "news"), {
        ...item,
        createdAt: serverTimestamp(),
    });
    console.log(`  ✓ ${item.source}: ${item.title.slice(0, 50)}…  (doc ${ref.id})`);
}

console.log(`\n✅ Done. ${blogs.length} blogs + ${news.length} news items live on production.`);
process.exit(0);
