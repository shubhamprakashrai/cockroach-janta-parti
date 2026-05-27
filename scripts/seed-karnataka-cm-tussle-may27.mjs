// May 27, 2026 — Karnataka CM tussle viral post.
// English + Hindi versions.
// All facts verified: India TV News, The Week, BusinessToday, India Blooms,
// The South First.
//
// Run: node scripts/seed-karnataka-cm-tussle-may27.mjs

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
    // ============================================================
    // ENGLISH — Karnataka CM Tussle
    // ============================================================
    {
        slug: "karnataka-cm-tussle-siddaramaiah-dk-shivakumar-may-27-2026",
        title: "Karnataka CM Tussle: Why Siddaramaiah Vs DK Shivakumar Is The Anti-Defection Law's Mirror Image",
        cat: "News",
        author: "Legal Roach",
        readTime: "7 min read",
        excerpt: "Karnataka's Chief Minister has been quietly asked to step down. A Rajya Sabha berth is on the table. The Deputy CM is the heir apparent. The official Congress denial uses the phrase 'no reality at all'. The 2.5-year power-sharing agreement everyone pretended didn't exist is hitting its expiry date.",
        img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1400&q=80&auto=format&fit=crop",
        body: [
            "May 27, 2026. Karnataka's political class is having a conversation in public that it spent two years having privately. Chief Minister Siddaramaiah has been asked by the Congress high command to step down. Deputy CM DK Shivakumar is the heir apparent. A Rajya Sabha berth and a 'bigger role in Delhi' have been offered to Siddaramaiah. He has reportedly declined the Rajya Sabha route. The official Congress position — issued by general secretary KC Venugopal — is that there is 'no reality at all' to the reports.",
            "Translation: there is reality. Just no formal acknowledgement yet.",
            "## What happened",
            "The structural fact behind the May 26-27 news cycle is a 2023 agreement that the Congress did not publicly admit existed. When Karnataka voted Congress to power in the 2023 assembly elections, the party had a leadership problem. Two senior figures — Siddaramaiah (former CM, mass leader, OBC-base) and DK Shivakumar (KPCC president, organisational machinery, fund-raiser) — both wanted the CM post. The party leadership, after extended Delhi deliberations, settled on what insiders called a '2.5+2.5' formula: Siddaramaiah as CM for half the term, then handover to DKS for the second half.",
            "Neither name signed this. There is no document. The agreement was reported by every major Indian outlet at the time, denied by every Congress spokesperson, and treated as an open secret by everyone watching Karnataka politics.",
            "## What today's news cycle means",
            "May 2023 + 2.5 years = November 2025 originally. The clock has already slipped past that. The May 26-27 meetings (Siddaramaiah, DKS, Kharge, Rahul Gandhi, Venugopal, Surjewala) are the formal-but-deniable beginning of the handover that should have happened six months ago. The Rajya Sabha offer is the soft exit. Siddaramaiah's reported refusal of the RS is the negotiation continuing.",
            "## Why this matters beyond Karnataka",
            "Three reasons.",
            "First, it is a real-time demonstration of why CJP's Demand 04 — a 20-year ban on defectors from elected office — is a structural rather than punitive proposal. The Karnataka 2.5+2.5 is not a defection in the technical Tenth Schedule sense. But it is the same underlying disease: power-sharing arrangements that are not legally enforceable, leading to perpetual instability and last-minute renegotiation. The anti-defection law in its current form doesn't cover this case. It should.",
            "Second, the voters of Karnataka are entirely absent from the May 26-27 conversation. The 4 crore plus people who voted Congress in 2023 are not in the meeting. They will not be told, formally, until after the decision is made. This is a routine feature of Indian political-party governance — and is exactly the kind of opacity that CJP's broader argument is structured against.",
            "Third, the 'no reality at all' denial pattern is itself the news. When a party spokesperson uses that specific phrasing about something that is, by all sourced reporting, real, the gap between the statement and the truth becomes the story. This is the exact pattern CJP's Demand 05 (revoking broadcast licenses for structurally conflicted media) is responding to — the political class structures its information environment so that direct truth-claims become impossible without insider sourcing.",
            "## What probably happens next 7 days",
            "Three scenarios. (a) Siddaramaiah accepts a different role — likely a national-level Congress post — and handover happens by mid-June 2026. DKS becomes CM. (b) Siddaramaiah refuses, the high command postpones decision, and the issue rolls into the Karnataka legislative-party meeting in July. (c) Siddaramaiah leverages dissent to force a public formal commitment that he stays full term. Most likely: scenario (a), with the formal announcement in 7-14 days.",
            "## What CJP's manifesto says about all of this",
            "Demand 04 (20-year ban on defectors) is the direct connect. The Tenth Schedule of the Constitution covers a defector physically moving from one party to another. It does not cover intra-party power-sharing agreements that fail. CJP's broader framing — that political instability harms the people who voted, not the politicians who manage it — applies here word for word.",
            "Demand 03 (50% women in cabinet) is the indirect connect. Note that the May 26 meeting had six attendees. All six are men. The political-succession process for one of India's most populous states is being structured by an all-male room. That is not a coincidence; it is the design.",
            "## What you can do this week",
            "Three things. (a) Read the source reports (India TV News, The Week, BusinessToday, IndiaBlooms, The South First) — the gap between 'sources said' and 'officially confirmed' is itself trainable political literacy. (b) If you are in Karnataka, write to your MLA's office (their email is on the Karnataka Legislative Assembly portal). Most MLAs will not reply. The few that do reply are the ones to track. (c) Share this post if the anti-defection-law connection is something you want more Indians to see articulated.",
            "## Bottom line",
            "May 27, 2026. Karnataka's CM tussle is not a Karnataka story. It is a national-design story about why power-sharing agreements that are not legally enforceable become recurring political crises. The fix is structural — statutory backing for intra-party agreements, voter-disclosure requirements, time-bound dispute resolution. CJP's 5 Demands include the principle. The Karnataka 2.5+2.5 is the casebook example.",
            "## Sources (May 2026)",
            "India TV News: indiatvnews.com (Siddaramaiah asked to step down — May 26 sources). The Week: theweek.in (DKS likely Karnataka CM despite official denial). BusinessToday: businesstoday.in (Rajya Sabha berth offer). The South First: thesouthfirst.com (Rahul Gandhi asks Siddaramaiah to step down). India Blooms: indiablooms.com (Leadership change scenario).",
        ],
    },

    // ============================================================
    // HINDI — Karnataka CM Tussle
    // ============================================================
    {
        slug: "karnataka-cm-siddaramaiah-dk-shivakumar-hindi-27-may-2026",
        title: "कर्नाटक CM विवाद: सिद्धारमैया बनाम DK शिवकुमार — दलबदल कानून की ‘मिरर इमेज’",
        cat: "Hindi",
        author: "क़ानूनी रोच",
        readTime: "7 मिनट का पठन",
        excerpt: "कर्नाटक के मुख्यमंत्री को चुपचाप पद छोड़ने को कहा गया है। राज्यसभा सीट का प्रस्ताव टेबल पर है। उपमुख्यमंत्री ‘heir apparent’ हैं। Congress का आधिकारिक खंडन: ‘कोई सच्चाई नहीं है’। 2023 का 2.5+2.5 power-sharing समझौता — जिसे कोई सरकारी रूप से नहीं मानता था — अब अपनी expiry पर है।",
        img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1400&q=80&auto=format&fit=crop",
        body: [
            "27 मई 2026। कर्नाटक का political class आज वो बातचीत खुले में कर रहा है जो दो साल से बंद कमरों में हो रही थी। मुख्यमंत्री सिद्धारमैया को Congress high command ने पद छोड़ने को कहा है। उपमुख्यमंत्री DK शिवकुमार अगले CM के तौर पर सामने हैं। सिद्धारमैया को राज्यसभा सीट और ‘दिल्ली में बड़ी भूमिका’ का प्रस्ताव दिया गया। सिद्धारमैया ने राज्यसभा का प्रस्ताव ठुकरा दिया (sources के अनुसार)। Congress general secretary के. सी. वेणुगोपाल का आधिकारिक बयान: ‘कोई सच्चाई नहीं है इन reports में।’",
            "अनुवाद: सच्चाई है। बस अभी formal admission नहीं हुआ।",
            "## क्या हुआ — पूरा background",
            "May 26-27 की news cycle के पीछे एक 2023 का agreement है जिसे Congress ने public में कभी स्वीकार नहीं किया। जब 2023 के assembly elections में Congress सत्ता में आई, party के सामने एक leadership problem थी। दो senior नाम — सिद्धारमैया (पूर्व CM, mass leader, OBC आधार) और DK शिवकुमार (KPCC president, organisational machinery, fund-raiser) — दोनों CM बनना चाहते थे। दिल्ली में लंबी बातचीत के बाद, party leadership ने एक formula निकाला: ‘2.5+2.5’ — पहले 2.5 साल सिद्धारमैया, फिर 2.5 साल DKS।",
            "किसी ने इस पर signature नहीं किए। कोई document नहीं है। हर बड़े Indian outlet ने इस agreement को report किया, हर Congress spokesperson ने इसे deny किया, और हर Karnataka observer ने इसे एक खुला रहस्य माना।",
            "## आज की news cycle का मतलब",
            "मई 2023 + 2.5 साल = नवंबर 2025 था original deadline। यह deadline पहले ही slip हो चुकी है। 26-27 मई की meetings (सिद्धारमैया, DKS, खड़गे, राहुल गांधी, वेणुगोपाल, सुरजेवाला) उस handover की औपचारिक-लेकिन-deniable शुरुआत है जो 6 महीने पहले होना चाहिए था। राज्यसभा का offer एक soft exit है। सिद्धारमैया का reported refusal — negotiation जारी है।",
            "## कर्नाटक से बाहर यह क्यों मायने रखता है",
            "तीन कारण।",
            "पहला: यह real-time demonstration है कि CJP की Demand 04 — दलबदलू पर 20 साल की elected office से बैन — एक structural proposal क्यों है। कर्नाटक का 2.5+2.5 technically Tenth Schedule के तहत defection नहीं है। लेकिन यही underlying disease है: power-sharing arrangements जो legally enforceable नहीं हैं, जो perpetual instability पैदा करते हैं, और last-minute renegotiation जरूरी होती है। मौजूदा anti-defection law इस case को cover नहीं करता। करना चाहिए।",
            "दूसरा: 26-27 मई की meetings में Karnataka के 4 करोड़+ voters कहीं भी नहीं हैं। जिन्होंने 2023 में Congress को vote दिया, वो meeting room में नहीं हैं। उन्हें decision के बाद formally बताया जाएगा। यह Indian political-party governance की routine feature है — और exactly वो opacity है जिसके विरुद्ध CJP का broader argument है।",
            "तीसरा: ‘कोई सच्चाई नहीं है’ वाला denial pattern खुद news है। जब एक party spokesperson उस specific phrasing का इस्तेमाल करता है किसी ऐसी चीज़ पर जो — हर sourced report के मुताबिक — real है, तब statement और truth का gap खुद story बन जाता है। यही pattern CJP की Demand 05 (structurally conflicted media houses के broadcast license रद्द) address करती है।",
            "## अगले 7 दिनों में क्या हो सकता है",
            "तीन scenarios:",
            "(a) सिद्धारमैया एक different role accept करते हैं — संभवतः national-level Congress post — और जून 2026 के middle तक handover हो जाता है। DKS CM बनते हैं।",
            "(b) सिद्धारमैया refuse करते हैं, high command decision postpone करता है, और issue Karnataka legislative-party meeting (जुलाई) में जाता है।",
            "(c) सिद्धारमैया dissent leverage करके public formal commitment force करते हैं कि वो full term पूरा करेंगे।",
            "सबसे संभावित: scenario (a), औपचारिक announcement 7-14 दिनों में।",
            "## CJP का manifesto इस पर क्या कहता है",
            "Demand 04 (दलबदलू पर 20 साल का बैन) direct connection है। संविधान की Tenth Schedule उस defector को cover करती है जो एक party से दूसरी party में जाता है। यह intra-party power-sharing agreements को cover नहीं करती जो fail होते हैं। CJP की broader framing — कि political instability voters को नुकसान पहुँचाती है, politicians को नहीं — यहाँ शब्द-दर-शब्द लागू होती है।",
            "Demand 03 (कैबिनेट में 50% महिलाएं) indirect connection है। ध्यान दें कि 26 मई की meeting में छह attendees थे। सभी छह पुरुष थे। India के एक सबसे बड़े राज्य का political succession process एक all-male room में decide हो रहा है। यह coincidence नहीं है; यह design है।",
            "## आप इस हफ्ते क्या कर सकते हैं",
            "तीन काम: (a) source reports पढ़िए — ‘sources said’ और ‘officially confirmed’ के बीच का gap खुद political literacy है। (b) अगर आप कर्नाटक में हैं, अपने MLA के office को email कीजिए। ज्यादातर MLA reply नहीं करते। जो करते हैं — उन्हें track करिए। (c) इस post को share कीजिए अगर anti-defection-law connection वो चीज़ है जिसे और भारतीयों को देखना चाहिए।",
            "## निष्कर्ष",
            "27 मई 2026। कर्नाटक का CM विवाद कर्नाटक की story नहीं है। यह national-design story है कि क्यों power-sharing agreements जो legally enforceable नहीं हैं, वो recurring political crises बन जाते हैं। हल structural है — intra-party agreements के लिए statutory backing, voter-disclosure की requirement, time-bound dispute resolution। CJP की 5 माँगें इस principle को शामिल करती हैं। कर्नाटक का 2.5+2.5 इसका textbook example है।",
            "## स्रोत (मई 2026)",
            "India TV News: indiatvnews.com। The Week: theweek.in। BusinessToday: businesstoday.in। The South First: thesouthfirst.com। India Blooms: indiablooms.com।",
        ],
    },
];

console.log(`Uploading ${posts.length} posts (English + Hindi)...`);
for (const post of posts) {
    const ref = await addDoc(collection(db, "blogs"), {
        ...post,
        createdAt: serverTimestamp(),
    });
    console.log(`  ✓ [${post.cat}] ${post.slug}`);
    console.log(`    Live: https://cockrochjantaparti.com/blog/${post.slug}`);
}
console.log(`\n✅ Done. ${posts.length} dual-language viral posts published.`);
process.exit(0);
