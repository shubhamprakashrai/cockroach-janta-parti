// May 25, 2026 — viral-angle post on Gurindervir Singh's 100m national record
// at Federation Cup 2026 (Ranchi, May 23, 2026).
//
// All facts verified via web search: Outlook, Olympics.com, Tribune, Khel Now,
// The Statesman, India TV News, Open The Magazine.
//
// Run: node scripts/seed-gurindervir-record.mjs

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
    slug: "gurindervir-singh-10-09-seconds-first-indian-sub-10-10-100m-federation-cup-2026",
    title: "Gurindervir Singh Ran 10.09 In Ranchi. First Indian Ever Under 10.10. May 23, 2026.",
    cat: "News",
    author: "CJP Editor",
    readTime: "5 min read",
    excerpt: "Saturday evening in Ranchi. The Federation Cup 100m final. Gurindervir Singh runs 10.09 seconds and becomes the first Indian sprinter in history to break the 10.10 barrier. The national record changed hands three times in 24 hours. Here is what happened.",
    img: "https://images.unsplash.com/photo-1485290334039-a3c69043e517?w=1400&q=80&auto=format&fit=crop",
    body: [
        "Ranchi, Saturday, May 23, 2026. The men's 100m final at the Federation Cup 2026 was scheduled as the marquee event of Day 2. By the time the gun went off, the national record had already moved twice in 24 hours. By the time Gurindervir Singh crossed the line, it had moved a third time — and India had its first sub-10.10 sprinter ever.",
        "## The race",
        "Gurindervir Singh crossed in 10.09 seconds. Animesh Kujur finished second in 10.20 seconds. Pranav Gurav took third in 10.29 seconds. Three Indian sprinters under 10.30 in a single race — itself a first in domestic athletics.",
        "## The 24-hour record battle",
        "What made the final extraordinary was not the standalone time. It was the fact that Gurindervir and Animesh had already traded the national record twice in semi-final heats the previous day. On Friday, Gurindervir clocked 10.17 in his heat — a new national mark. Within five minutes, Animesh Kujur ran 10.15 in the very next heat and took the record back. Both athletes carried that exchange into Saturday's final. Gurindervir's 10.09 in the final settled it — the third national record in roughly 24 hours.",
        "## Why 10.10 was the barrier worth breaking",
        "The 10.10 second mark has been India's psychological ceiling in the men's 100m for over a decade. The previous national record (10.18 by Amlan Borgohain, 2022) had been incrementally improved, but the sub-10.10 zone — where the world's elite sprinters live — had remained out of reach.",
        "Globally, the men's 100m world record is 9.58 seconds (Usain Bolt, Berlin, 2009). The Olympic gold medal time in Paris 2024 was 9.79. Asia's fastest-ever recorded time is 9.83 seconds (China's Su Bingtian, Tokyo 2021). India's 10.09 puts Gurindervir in the second fastest Asian time of the 2026 season — behind only Japan's Fukuto Komuro (10.08, May 2026).",
        "## What this earns him",
        "Two things immediately. First, qualification for the 2026 Commonwealth Games. Second, a re-entry point into the Asian and global circuit at a competitive ranking. The Indian Olympic Association's qualification standard for major championships is structured around such national-record breakthroughs.",
        "## The Punjab connection",
        "Gurindervir Singh is from Punjab. Congratulations poured in from Punjab Chief Minister Bhagwant Mann within hours of the run. Union Sports Minister Mansukh Mandaviya followed soon after. The political-celebration cycle around individual athletic records in India is well-established. The structural question — what makes such breakthroughs more frequent — is less talked about.",
        "## What the same Federation Cup also produced",
        "The 2026 Federation Cup in Ranchi was an unusually productive meet for Indian athletics. Vishal TK became the first Indian to run sub-45 seconds in the 400m. Tejaswin Shankar crossed 8000 points in the decathlon — a national mark in that event. Combined with Gurindervir's 100m record, this single meet produced multiple national records across distinct disciplines.",
        "When that happens, the natural question is: was the timing equipment recalibrated, were conditions exceptional, were these athletes peaking, or has India quietly built up a generation of athletes who were waiting for the right meet? Olympics.com's race report and the Athletics Federation of India's technical statements lean toward the last explanation — quiet, multi-year improvement that hit visibility in one weekend.",
        "## The Cockroach Republic take",
        "Two things are worth saying. First: celebrate. Gurindervir's run is one of the most genuinely impressive Indian athletic moments of the decade, and it deserves the loudest reaction. Second: notice the gap between athlete-level excellence and system-level support.",
        "India's athletics budget per athlete is a fraction of China's, Japan's, or even Kenya's per-athlete spend. Most Indian sprinters train in facilities that would be unacceptable at NCAA Division III in the US. The fact that Gurindervir reached 10.09 is a story about him; the fact that India does not have ten Gurindervirs is a story about the political class.",
        "If the same political class that congratulated Gurindervir on May 23 also funds a 5-year national sprint development programme on the back of this result, the next sub-10.05 happens earlier. If it stops at the photo-op, the next breakthrough waits another decade.",
        "## What you can do this week",
        "Three concrete things. (a) Watch the 10.09-second run — it is online at multiple outlets including Outlook and Olympics.com. (b) Read the Athletics Federation of India's release on the meet — the technical detail tells you what to ask politicians to commit to next. (c) If you are a Roach Republic founding member and want this kind of structural-sport-policy thinking to compound, share this post.",
        "## Bottom line",
        "May 23, 2026, Ranchi. Gurindervir Singh became the first Indian to break 10.10 in the men's 100m. The record now reads: GURINDERVIR SINGH · IND · 10.09 · 23 MAY 2026 · FEDERATION CUP, RANCHI. The next breakthrough is a policy question, not a talent one.",
        "## Sources (May 2026)",
        "Outlook India full report: outlookindia.com. Olympics.com Day 2 report: olympics.com/en/news/federation-cup-athletics-2026-day-2-report. The Tribune coverage of the record exchange: tribuneindia.com. Khel Now sprint analysis: khelnow.com. The Statesman post-final: thestatesman.com. India TV News (political reactions): indiatvnews.com. Open The Magazine deep-dive: openthemagazine.com. Background — List of Indian records in athletics: en.wikipedia.org/wiki/List_of_Indian_records_in_athletics.",
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
