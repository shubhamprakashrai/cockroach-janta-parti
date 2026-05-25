// May 25, 2026 — viral-angle post on TODAY's Supreme Court NEET paper leak hearing.
// All facts verified via web search: India TV News, ANI, Bar & Bench.
//
// Run: node scripts/seed-neet-paper-leak-2026.mjs

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
    slug: "neet-paper-leak-2026-supreme-court-nta-not-learnt-lesson-may-25",
    title: "NEET Paper Leak: Supreme Court Says NTA 'Has Not Learnt Its Lesson'. May 25, 2026.",
    cat: "News",
    author: "Legal Roach",
    readTime: "6 min read",
    excerpt: "The Supreme Court heard the NEET-UG 2026 paper leak case today. The bench's oral observation was unsparing: 'It is sad that they have not learnt their lesson.' Notices issued. 11 arrests across 7 cities. Re-exam scheduled June 21. Here is the full decode.",
    img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1400&q=80&auto=format&fit=crop",
    body: [
        "May 25, 2026 — Monday morning, Supreme Court of India. A bench led by Justice PS Narasimha heard a batch of petitions on the NEET-UG 2026 paper leak. The bench's oral observation was one of those rare lines that captures an entire governance failure in nine words: 'It is sad that they have not learnt their lesson.' The 'they' is the National Testing Agency (NTA). The 'lesson' was the 2024 NEET controversy that the same court had already adjudicated.",
        "## What happened — the timeline",
        "May 3, 2026: NEET-UG 2026 was conducted for medical college admissions across India. Within days, multiple State and Central agencies began reporting paper-leak indicators — coaching-centre WhatsApp groups, suspiciously high single-city scores, advance-knowledge candidate behaviour.",
        "May 12, 2026: The NTA cancelled NEET-UG 2026 entirely. This was the first time a national medical entrance had been outright cancelled mid-cycle in independent India.",
        "May 25, 2026 (today): The Supreme Court issued notices to the Centre and the NTA on a batch of pleas. The petitions, led by the United Doctors Front and other student/parent groups, seek three things: (a) dissolution of the NTA, (b) re-examination under the monitoring of a panel headed by a retired Supreme Court judge, and (c) replacement of the NTA with a new statutory body constituted through an Act of Parliament.",
        "June 21, 2026: The re-examination date that the NTA has scheduled. Approximately 24 lakh candidates are affected.",
        "## What's actually been criminal",
        "Eleven people have been arrested in the NEET 2026 paper leak case across seven cities: Delhi, Jaipur, Gurugram, Nasik, Pune, Latur, and Ahilyanagar. This geographic spread tells you the leak was not a one-coaching-centre operation — it was a network. The arrests came over a 13-day window after the cancellation, suggesting that local police had specific intelligence rather than blanket sweeps.",
        "The under-investigation pattern: leaked papers transmitted via encrypted messaging, sold at price points ranging (per FIR allegations) from ₹40,000 to ₹3 lakh per candidate, with concentration in two-tier cities where the cost was within reach of upper-middle-class aspirant families but invisible to law-enforcement attention until score patterns surfaced.",
        "## Why the Supreme Court's tone matters",
        "The 'has not learnt its lesson' phrasing is not throwaway. The Supreme Court had already, in 2024, directed structural reforms in the NTA following the previous NEET controversy. Today's observation is the bench publicly noting that the directions of 2024 were either not implemented or implemented superficially. When a Supreme Court bench says someone 'has not learnt' in open court, the next step is usually one of three: (a) personal directions to the NTA Director General, (b) constitution of a court-monitored committee, or (c) referral to a Constitution Bench for structural intervention.",
        "## What the petitioners want — and why it matters",
        "The most consequential demand in the petitions is the third one: replace the NTA with a new statutory body created by an Act of Parliament. This is a structural ask. The current NTA was constituted by an executive order from the Ministry of Education in 2017 — it has no underlying statute. Without a statute, the NTA has no defined accountability mechanism, no parliamentary oversight, no statutory obligation to publish security audits, no whistleblower protection framework. Every reform demand against the NTA crashes into this design flaw.",
        "A new statutory body would force the architecture to be debated, voted on, and put on the legislative record. That alone changes the game.",
        "## The 24 lakh question",
        "Approximately 24 lakh students wrote NEET-UG 2026 on May 3. Their year is already disrupted. The June 21 re-exam window is 47 days from the original date. For aspirants whose families had timed coaching, accommodation, and exam preparation around the original date, this is not just a delay — it is a second round of preparation, second round of stress, second financial outlay, and for many, a second round of pre-exam family pressure.",
        "Mental-health support infrastructure for NEET aspirants was inadequate before this. After this, it is going to be tested at a scale Indian counselling systems have never seen.",
        "## The Cockroach Republic take",
        "Three observations from where we sit.",
        "First, the NEET paper leak is the educational version of the voter-deletion problem CJP Demand 02 addresses. In both cases, the integrity of a national system is being undermined by insiders, and in both cases the responsible agency has structural deniability because it was set up without a robust accountability statute. The fix is statute-based reform, not personnel changes at the top.",
        "Second, 24 lakh students having their year disrupted is a generational scale problem. It is not a 'unfortunate' news item. The political class that congratulates Gurindervir Singh for 10.09 seconds on May 23 is the same political class that owes 24 lakh medical aspirants an answer on May 25.",
        "Third, the Supreme Court is increasingly the only functioning check on executive-agency failures of this scale. That is itself a structural problem. A democracy in which the judiciary is the routine first-responder to administrative failure is a democracy where the legislature has abdicated. The 5 Demands of CJP are about restoring the legislature's role.",
        "## What you can do this week",
        "Three things. (a) If you or anyone in your family is a 2026 NEET aspirant, the United Doctors Front is publishing updates on the petition's progress — track via their official handles. (b) Read the NTA's structural background — the absence of statutory backing is the design problem behind most of the controversy, and it's documented in the Ministry of Education's 2017 executive order. (c) Share this post if the structural framing is something you want the political class to feel pressure on.",
        "## Bottom line",
        "May 25, 2026, Supreme Court bench led by Justice PS Narasimha: 'It is sad that they have not learnt their lesson.' 11 arrests. 7 cities. 24 lakh students. Re-exam June 21. The country deserves a structural fix, not another news cycle.",
        "## Sources (May 2026)",
        "India TV News full hearing report: indiatvnews.com (NEET-UG paper leak Supreme Court hearing NTA medical exam CBI probe latest updates 2026-05-25). ANI News national wire: aninews.in (NEET-UG 2026 paper leak SC says NTA hasn't learned its lesson issues notice). Bar & Bench litigation coverage: barandbench.com (NEET-UG 2026 paper leak Supreme Court seeks NTA reply says it hasn't learnt lesson).",
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
