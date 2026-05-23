// One-off: seed /reels with 3 featured public-domain Indian institutional videos.
// All sources are official Indian government / parliamentary channels (Sansad TV, ECI).
// These are public-service broadcasts explicitly encouraged for sharing — no copyright risk.
//
// Run: node scripts/seed-featured-reels.mjs

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

const reels = [
    {
        videoId: "190si5ZjIVc",
        title: "FEATURED: 'Main Bharat Hoon' — ECI Voter Anthem",
        description: "Official Election Commission of India anthem for National Voters' Day. Multilingual reminder that being an Indian voter is the first political act. We share this because CJP exists for the same reason the ECI does — Indian democracy works only when citizens actually show up.",
    },
    {
        videoId: "KvGZ67jFFCI",
        title: "FEATURED: Delhi NCR Decongestion — Sansad TV Insight",
        description: "Sansad TV's policy explainer on the new urban roadmap for Delhi NCR. Real public-policy reporting on a subject that affects every Indian who has spent two hours in a traffic jam. Sharing as external context to CJP's 5 demands.",
    },
    {
        videoId: "7PoNmsYi5MM",
        title: "FEATURED: Heatwave Havoc — Sansad TV Insight",
        description: "Sansad TV's special report on India's heatwave crisis and the policy response. The connection to CJP: climate is a young person's issue, and India's political class has been slow to make it a policy priority.",
    },
];

console.log(`Uploading ${reels.length} featured reels...`);
for (const r of reels) {
    const videoUrl = `https://www.youtube.com/watch?v=${r.videoId}`;
    const embedUrl = `https://www.youtube.com/embed/${r.videoId}`;
    const thumbnailUrl = `https://i.ytimg.com/vi/${r.videoId}/hqdefault.jpg`;
    const ref = await addDoc(collection(db, "reels"), {
        title: r.title,
        description: r.description,
        videoUrl,
        embedUrl,
        thumbnailUrl,
        platform: "youtube",
        createdAt: serverTimestamp(),
    });
    console.log(`  ✓ ${r.title}  →  /reels/${ref.id}`);
}
console.log(`\n✅ Done. ${reels.length} featured external reels live.`);
process.exit(0);
