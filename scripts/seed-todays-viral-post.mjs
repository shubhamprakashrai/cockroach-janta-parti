// May 24, 2026 — fresh viral-angle blog post tied to two trending May 2026 stories:
//   1. Petrol/diesel price hike + Rahul Gandhi's "economic storm" warning (May 19, 2026)
//   2. PLFS Annual Report 2025 youth unemployment numbers (released March 2026)
//
// Run: node scripts/seed-todays-viral-post.mjs

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

const post = {
    slug: "petrol-100-youth-unemployment-13-6-the-two-numbers-defining-may-2026",
    title: "Petrol ₹100, Youth Unemployment 13.6% — The Two Numbers Defining May 2026",
    cat: "News",
    author: "CJP Editor",
    readTime: "6 min read",
    excerpt: "Two data points dropped within a week of each other in May 2026: petrol crossed ₹100 in Delhi, and PLFS confirmed urban youth unemployment at 13.6%. Read them together. They tell one story.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80&auto=format&fit=crop",
    body: [
        "May 24, 2026. Today's homepage news has two stories you need to read together — not separately. The petrol price in Delhi has crossed ₹100 a litre, the second steep hike in less than a week (the May 19 jump came on top of an already-elevated baseline). And the Periodic Labour Force Survey's 2025 Annual Report, released in March, has confirmed urban youth unemployment at 13.6% — nearly three times the overall national rate of 5.2%. These two numbers, in the same week, in the same country, are one story.",
        "## The fuel hike — what actually happened",
        "Petrol crossed ₹97-₹100 a litre in major Indian cities by May 19, 2026. Diesel crossed ₹90 in several regions, hitting ₹91+ in Delhi. The government attributed the hikes to global crude volatility, supply disruptions, and pressure on state-run oil companies' finances. Leader of Opposition Rahul Gandhi called it the start of an 'economic storm', arguing that the fuel-cost spike does not stay in fuel — it cascades into food, transport, services, and ultimately into the household budget of every Indian who does not own an oil refinery.",
        "## The unemployment numbers — what they actually mean",
        "PLFS Annual Report 2025 (released March 2026) puts overall unemployment for those 15+ at 3.1%. April 2026 monthly data shows the rate at 5.2% nationally, with urban at 6.6%. But the youth (15-29) urban number is the punch in the gut: 13.6%. The rural youth rate is 8.3%. The urban youth rate is therefore 64% higher than the rural one, which inverts every assumption about city jobs being the destination of opportunity.",
        "The deeper number is on graduate employment quality. Less than 7% of male graduates secure a permanent salaried job within a year of graduating. Only 3.7% access white-collar jobs. The 'degree premium' — the wage and employability advantage of a college degree — has not just shrunk, it has flatlined for the bottom 60% of graduates.",
        "## The connection between the two numbers",
        "A fuel hike is a tax on existence. Everybody pays it — directly when they fill the tank, indirectly when the local vegetable vendor raises prices, when the auto driver bumps the rate, when the cab app increases the surge. Households that have stable income absorb it. Households built on contingent gig income, on a son or daughter's job hunt that has stretched into the second year, on a single salary that is supposed to cover three generations — those households break.",
        "13.6% urban youth unemployment is not an abstraction. It is the 23-year-old who graduated last year and is still applying. It is the 27-year-old delivery rider who used to be a Tally accountant. It is the 25-year-old whose family has stopped asking when the wedding will be. A fuel hike, layered on top of that, is the conversation at the dinner table tonight in millions of Indian homes.",
        "## What state-level numbers look like",
        "The regional variance is brutal. Lakshadweep's youth unemployment rate is 36.2%. The Andaman and Nicobar Islands are at 33.6%. These are not minor outliers — they are evidence of what happens when an island economy has limited absorption capacity for educated youth. The Hindi belt's official numbers look lower (Bihar reports under 15%) but that is because the educated youth from Bihar have already migrated to Delhi, Bengaluru, or the Gulf and don't appear in Bihar's labour force survey at all. The 'low' Bihar number is a measurement artefact.",
        "## What the political class is doing",
        "Two reactions are playing out. The opposition (Rahul Gandhi, INDIA bloc) is using the fuel hike to build a broader 'economic storm' narrative aimed at the 2024 voter cohort that re-elected the BJP-led NDA in 2024. The ruling side is framing the hike as a function of global crude prices, currency volatility, and structural commitments to oil-marketing companies — arguing that the alternative (un-revised retail prices) would force fiscal stress on PSU oil refiners.",
        "Both framings are correct in technical detail. Both miss the underlying point: the household-budget impact of fuel hikes is mediated by employment status. A salaried family with stable income can absorb a 5% jump in petrol. A family with one underemployed graduate cannot. The unemployment data is the missing X-axis on the fuel-hike chart.",
        "## What CJP's 5 Demands say about this",
        "Demand 03 (50% women representation in cabinet) and Demand 05 (revoking broadcast licenses for media houses with structural conflicts) address the political composition that makes economic stories like this preventable. But the demand that bites this story directly is the Universal Basic Stipend proposal in the longer manifesto reading: ₹8,000 a month for 24 months for graduates aged 22-30 who are actively job-hunting. The cost is 0.4% of GDP. The math is at cockrochjantaparti.com/blog/universal-basic-stipend-for-graduates-the-math.",
        "Why this matters specifically today: if the UBS existed, the May 2026 fuel hike would be a temporary irritant for graduate households. Without it, the fuel hike is a household-level emergency.",
        "## What you can do this week",
        "Three concrete things. (a) Read the full PLFS Annual Report 2025 — it is publicly available on the Ministry of Statistics and Programme Implementation website. (b) Check the actual fuel price for your city today on the daily Goodreturns tracker — knowing the number makes the political conversation specific. (c) If you have not already, claim your founding number at cockrochjantaparti.com/join. The first 50 founding spots are still open and lock for life the moment you join.",
        "## Bottom line",
        "Petrol ₹100 + Youth Unemployment 13.6% = a household-budget crisis with a generational dimension. The political class is debating the first number. The data is begging us to debate them together. May 24, 2026 — share this if the math feels right to you.",
        "## Sources (all live, real, public — May 2026)",
        "Rahul Gandhi 'economic storm' warning: businessstandard.com / dnaindia.com / outlookindia.com / thelogicalindian.com. Daily petrol-rate tracker: goodreturns.in/petrol-price.html. PLFS Annual Report 2025 + April 2026 monthly data: pwonlyias.com unemployment-rate-in-india. State of Working India 2026 graduate labour market: dhyeyaias.com. Background reading on Indian unemployment methodology: en.wikipedia.org/wiki/Unemployment_in_India.",
    ],
};

const ref = await addDoc(collection(db, "blogs"), {
    ...post,
    createdAt: serverTimestamp(),
});
console.log(`✅ Published: /blog/${post.slug}`);
console.log(`   Doc ID: ${ref.id}`);
console.log(`   Live URL: https://cockrochjantaparti.com/blog/${post.slug}`);
process.exit(0);
