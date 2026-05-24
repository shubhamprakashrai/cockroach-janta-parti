// May 24, 2026 — 2 more viral-angle posts using fresh May 2026 data:
// 1. The world's top 50 hottest cities are all in India (May 22)
// 2. India-Cyprus Strategic Partnership signed amid domestic crisis (May 20-23)
//
// Run: node scripts/seed-viral-batch-may24.mjs

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

const posts = [
    {
        slug: "top-50-hottest-cities-in-the-world-are-all-in-india-may-2026",
        title: "Top 50 Hottest Cities In The World — All In India. May 22, 2026.",
        cat: "News",
        author: "Data Roach",
        readTime: "5 min read",
        excerpt: "On May 22 the world's 50 hottest cities were all Indian. Brahmapuri hit 47.2°C. Banda hit 48°C. 44 million people were exposed to dangerous heat. $341 billion of economic activity was at risk. This is the data nobody wants to look at.",
        img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1400&q=80&auto=format&fit=crop",
        body: [
            "May 22, 2026. AQI.in's daily ranking of the world's hottest cities listed 50 entries. All 50 were in India. Not 5. Not 25. All 50. Three days later (today, May 24), the heat is still climbing in parts of central and north India, and the pre-monsoon rains that usually break this cycle have not arrived in much of the affected region.",
            "## The numbers — what was recorded",
            "Brahmapuri in Maharashtra's Vidarbha region hit 47.2°C — the highest in India this week. Banda in Uttar Pradesh recorded 48°C, in the upper range for the country this season. Balangir in Odisha hit 45°C by 10:50 AM, well before the daily peak. Chandrapur and Prayagraj climbed to 44°C. Delhi and the NCR have been holding in the high 40s on multiple days. The Indian Meteorological Department classifies anything above a normal-day-plus-6°C departure as 'severe heatwave'. Most of these readings are deep in that range.",
            "## The population at risk",
            "ClimaMeter and AccuWeather research, picked up in domestic reporting, estimates that approximately 44 million Indians have been exposed to dangerous heat conditions during the May 2026 wave, and that approximately $341 billion of economic activity is in the high-risk zone — construction sites, outdoor markets, agricultural fields, transport networks, and informal labour markets that simply cannot relocate or shut down.",
            "ClimaMeter's specific attribution finding: the 2026 heatwave is significantly intensified by human-driven climate change. This is not a model speculation; it is a statistical attribution based on comparing the 2026 anomaly against the pre-industrial baseline distribution.",
            "## Why this is a political story, not a weather story",
            "Heatwaves are climate. But heat injury distribution is policy. The 47°C reading in Brahmapuri is a meteorological fact. The death rate from that 47°C reading is a function of: how many people have access to air-conditioning, how many are in informal labour with no protection, how many are walking 3 km to a polling booth or 2 km to a school, how many municipal cooling shelters exist, whether the local hospital has working IV-fluid stock and trained heat-illness protocols.",
            "India's National Disaster Management Authority publishes heat action plans. As of 2026, the implementation gap between plan and reality remains wide. Cities like Ahmedabad have functional plans that have measurably reduced heat mortality. Most cities do not.",
            "## The political class's response",
            "Sansad TV's 'Insight' programme ran a special feature on the heatwave on May 20 (we have it embedded on our /reels page). The framing was governance-forward — what is being done, what should be done. The political reaction has been narrower than the climate severity suggests it should be. There is no all-party emergency session. There is no ad-hoc package for outdoor labour. The fuel hike of May 19 absorbed more political oxygen than 47°C readings did.",
            "## What CJP's manifesto says about this",
            "Demand 03 (50% women in cabinet) and Demand 05 (revoking broadcast licenses for media houses with structural conflicts) are governance-composition demands. Demand 02 (criminal liability for electoral roll deletion) is procedural. But the implicit demand that runs through the manifesto is structural urgency: the political class must be made to respond to scale-of-crisis at the speed of crisis. When 50 of the world's 50 hottest cities are yours, that is a national emergency, not a weather report.",
            "## What citizens can do this week",
            "Three concrete actions. (a) If you are in a high-temperature city, check whether your municipal corporation has a published Heat Action Plan and what the cooling-shelter map looks like. Most Indians have no idea where the nearest one is. (b) Track the daily IMD bulletin and the AQI.in temperature ranking — knowing the number makes the political conversation specific. (c) Share this article. The political response scales with the size of the public conversation, and this is one of those weeks where the conversation matters.",
            "## Bottom line",
            "May 22, 2026: 50 of the world's 50 hottest cities were in India. May 24, 2026 (today): the heat is still climbing. This is the most consequential governance story of the week and it is barely getting prime-time. Cockroach Janta Parti exists, in part, because conversations like this deserve to be louder.",
            "## Sources (May 2026)",
            "India TV News (May 22 ranking): indiatvnews.com. NewsX (May 19 city-by-city report): newsx.com. AccuWeather coverage: accuweather.com. Free Press Journal — ClimaMeter attribution study: freepressjournal.in. Business Today's heatwave classification primer: businesstoday.in. VisionIAS background on heat policy: visionias.in. Live AQI temperature tracker: AQI.in.",
        ],
    },
    {
        slug: "india-cyprus-strategic-partnership-may-2026-domestic-priorities",
        title: "India Signed A Defence Roadmap With Cyprus While Brahmapuri Hit 47.2°C. Both Things Are True.",
        cat: "Opinion",
        author: "CJP Editor",
        readTime: "6 min read",
        excerpt: "Cyprus is now a strategic partner. The defence roadmap runs to 2031. Six MoUs were signed. None of this is wrong. It also is not the conversation Indian households are having this week. Here is the gap.",
        img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1400&q=80&auto=format&fit=crop",
        body: [
            "From May 20 to 23, 2026, Cyprus President Nikos Christodoulides was on a state visit to India. On May 22, India and Cyprus elevated their relations to a Strategic Partnership. The two countries signed six MoUs, announced a Roadmap for Bilateral Defence Cooperation through 2031, and agreed on cooperation in cyber security, counter-terrorism, maritime coordination, technology, education, and trade. Cyprus, which currently holds the rotating Presidency of the Council of the European Union, was framed as India's 'trusted bridge' to Brussels. All of this is in the May 22 joint statement on the PMO website.",
            "## Why Cyprus matters strategically",
            "Two things make the timing interesting. First, Cyprus ranks among India's top ten foreign investors — Cypriot investment in India has nearly doubled over the past decade, partly because of double-tax-treaty arbitrage but increasingly because Cyprus is a routing jurisdiction for serious Europe-to-India flows. Second, Cyprus's EU Presidency role positions it as a procedural hinge for India's EU engagements during the second half of 2026, including the long-running FTA negotiations.",
            "Strategic partnerships with smaller EU member states — Cyprus, Greece, Portugal — are a 2020s Indian foreign-policy pattern. The logic is sound: bypass the major EU capitals (Berlin, Paris) by building bilateral momentum with member states that can advocate inside EU institutions. It worked with Greece in 2023. It is being repeated with Cyprus.",
            "## What is in the actual deal",
            "The six MoUs cover, in summary form: (1) a long-term defence cooperation roadmap to 2031, (2) shipbuilding and maritime cooperation, (3) cyber security and information-sharing protocols, (4) cultural and educational exchange, (5) digital transformation cooperation, and (6) a trade-and-investment promotion framework. The joint statement is light on dollar figures (which is normal for strategic-partnership documents) and heavy on framework language. The actual contracts will follow.",
            "## Why this is worth a CJP take",
            "Foreign policy is a legitimate, important function of the Union government. India needs partners. Cyprus is a defensible partner. None of that is wrong. But two things sit uneasily next to each other this week, and both are facts:",
            "1. The Cyprus defence roadmap extends to 2031, suggesting confidence in long-term planning capacity.",
            "2. On May 22, the same day the Strategic Partnership was announced, all 50 of the world's hottest cities were in India. On May 19, petrol crossed ₹100 in Delhi. The April 2026 urban youth unemployment rate sits at 13.6%.",
            "The question CJP raises — and it is a small, specific question — is about political bandwidth allocation. The bandwidth is finite. The number of senior ministerial and PMO hours per week is finite. The press cycle attention is finite. Foreign-policy gestures absorb bandwidth that domestic crises also need.",
            "## The structural problem",
            "Indian governance has a long-standing asymmetry: the Union government does foreign policy at high intensity, and outsources domestic-crisis response to state governments. That works when state capacity is robust. It works less well when the crisis is national (heat across nine states, fuel pricing nationally, youth unemployment everywhere). The Cyprus-style strategic partnership is concluded at the centre. The Brahmapuri 47.2°C reading is, by constitutional design, primarily a state-government problem — even though the climate driver is national and the response capacity is uneven across states.",
            "Our blog on Indian federalism (cockrochjantaparti.com/blog/indian-federalism-how-center-state-relations-actually-work) digs into why this distribution exists. The short version: the framers were paranoid about centrifugal forces, so they tilted the Constitution toward the Union. The unintended consequence is that the Union has both the most attention and the lightest direct responsibility on the issues people actually feel — heat, prices, jobs.",
            "## What CJP is asking for, specifically",
            "Not less foreign policy. More transparency on the bandwidth allocation. A weekly public dashboard from the PMO showing: number of cabinet hours on foreign policy, number on domestic crises, number on legislative drafting. The political class would never publish this voluntarily, which is why a satirical political art project exists to talk about it.",
            "## Bottom line",
            "Cyprus is a good partner. The defence roadmap is a reasonable document. The heatwave and the fuel hike are also real. Holding both these facts in the same week is the citizen's job. Politicians, by structural design, will pick the one that makes for a better photograph. The photograph from May 22 was the Modi-Christodoulides selfie. The photograph that wasn't taken was the 47°C-day in Brahmapuri.",
            "## Sources (May 2026)",
            "Joint statement on the Cyprus State Visit: pmindia.gov.in. The Tribune coverage: tribuneindia.com. Asianet Newsable: newsable.asianetnews.com. Organiser deep-dive: organiser.org. ETV Bharat: etvbharat.com. Heatwave reporting: indiatvnews.com (May 22 hottest-50 list). Daily fuel tracker: goodreturns.in.",
        ],
    },
];

console.log(`Uploading ${posts.length} viral posts...`);
for (const post of posts) {
    const ref = await addDoc(collection(db, "blogs"), {
        ...post,
        createdAt: serverTimestamp(),
    });
    console.log(`  ✓ ${post.slug}`);
    console.log(`    Live: https://cockrochjantaparti.com/blog/${post.slug}`);
}
console.log(`\n✅ Done. ${posts.length} viral posts published.`);
process.exit(0);
