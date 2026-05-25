// May 25, 2026 — Hindi localization of today's two viral posts.
// Native Hindi/Devanagari, not auto-translated. Hindi political keywords
// optimised for SEO + GEO (AI search in Hindi).
//
// Run: node scripts/seed-hindi-localization.mjs

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
    // HINDI POST #1 — NEET PAPER LEAK SUPREME COURT (today's biggest story)
    // ============================================================
    {
        slug: "neet-paper-leak-2026-supreme-court-nta-hindi-25-may",
        title: "NEET पेपर लीक 2026 — सुप्रीम कोर्ट का सख्त बयान: 'NTA ने सबक नहीं सीखा'",
        cat: "Hindi",
        author: "क़ानूनी रोच",
        readTime: "6 मिनट का पठन",
        excerpt: "25 मई 2026 को सुप्रीम कोर्ट ने NEET-UG पेपर लीक मामले की सुनवाई की। बेंच का तीखा कमेंट: 'दुख की बात है कि उन्होंने सबक नहीं सीखा।' 11 गिरफ्तारियाँ, 7 शहरों में। 24 लाख छात्र प्रभावित। 21 जून को दोबारा परीक्षा। पूरा डिकोड।",
        img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1400&q=80&auto=format&fit=crop",
        body: [
            "25 मई 2026 — सोमवार सुबह, भारत का सुप्रीम कोर्ट। न्यायमूर्ति पी. एस. नरसिम्हा की अध्यक्षता वाली बेंच ने NEET-UG 2026 पेपर लीक मामले पर दायर याचिकाओं की सुनवाई की। बेंच की मौखिक टिप्पणी देश के एक बड़े शासन विफलता को नौ शब्दों में समेट देती है: 'दुख की बात है कि उन्होंने सबक नहीं सीखा।' 'वे' का मतलब है National Testing Agency (NTA), और 'सबक' का मतलब है 2024 का NEET विवाद, जिसे यही अदालत पहले भी देख चुकी है।",
            "## क्या हुआ — पूरी टाइमलाइन",
            "3 मई 2026: देशभर में मेडिकल कॉलेजों में दाखिले के लिए NEET-UG 2026 परीक्षा आयोजित की गई। कुछ ही दिनों में, कई राज्य और केंद्रीय एजेंसियों ने पेपर लीक के संकेत रिपोर्ट करना शुरू कर दिया — कोचिंग सेंटरों के WhatsApp ग्रुप, एक ही शहर से असामान्य रूप से अधिक स्कोर, पहले से जानकारी रखने वाले उम्मीदवारों का व्यवहार।",
            "12 मई 2026: NTA ने NEET-UG 2026 परीक्षा पूरी तरह रद्द कर दी। यह स्वतंत्र भारत के इतिहास में पहली बार था कि एक राष्ट्रीय मेडिकल प्रवेश परीक्षा को बीच में ही रद्द किया गया।",
            "25 मई 2026 (आज): सुप्रीम कोर्ट ने केंद्र और NTA को नोटिस जारी किया। याचिकाकर्ताओं — United Doctors Front और अन्य छात्र/अभिभावक समूहों — की तीन माँगें हैं: (a) NTA को भंग करना, (b) एक रिटायर्ड सुप्रीम कोर्ट जज की निगरानी में पुनः परीक्षा, और (c) NTA की जगह संसद के अधिनियम से बनी एक नई वैधानिक संस्था।",
            "21 जून 2026: NTA द्वारा घोषित पुनः परीक्षा की तारीख। लगभग 24 लाख छात्र प्रभावित।",
            "## अब तक क्या आपराधिक कार्रवाई हुई",
            "NEET 2026 पेपर लीक मामले में 7 शहरों — दिल्ली, जयपुर, गुड़गाँव, नासिक, पुणे, लातूर और अहिल्यानगर — से 11 लोग गिरफ्तार किए गए हैं। यह भौगोलिक फैलाव बताता है कि लीक एक कोचिंग सेंटर का ऑपरेशन नहीं था — यह एक नेटवर्क था।",
            "जांच का पैटर्न: एन्क्रिप्टेड मैसेजिंग के जरिए पेपर भेजे गए, ₹40,000 से ₹3 लाख प्रति उम्मीदवार बेचे गए, और ज्यादातर मामले tier-2 शहरों में थे जहाँ यह राशि अपर-मिडल-क्लास परिवारों के लिए affordable थी।",
            "## सुप्रीम कोर्ट की भाषा क्यों मायने रखती है",
            "'सबक नहीं सीखा' वाली टिप्पणी सिर्फ कहने भर की बात नहीं है। 2024 के पिछले NEET विवाद के बाद सुप्रीम कोर्ट ने NTA में संरचनात्मक सुधार के निर्देश दिए थे। आज का यह कमेंट बेंच का पब्लिकली स्वीकार करना है कि 2024 के निर्देश या तो लागू नहीं हुए या सतही तौर पर लागू हुए।",
            "जब सुप्रीम कोर्ट खुली अदालत में 'सबक नहीं सीखा' कहता है, तो अगला कदम तीन में से एक होता है: (a) NTA के डायरेक्टर जनरल को व्यक्तिगत निर्देश, (b) कोर्ट-निगरानी कमेटी का गठन, या (c) संवैधानिक बेंच को रेफरल।",
            "## याचिकाकर्ता क्या चाहते हैं — और क्यों मायने रखता है",
            "सबसे बड़ी माँग यह है: NTA को बदलकर संसद के अधिनियम से बनी एक नई वैधानिक संस्था बनाई जाए। मौजूदा NTA 2017 में शिक्षा मंत्रालय के एक executive order से बना है — इसके पीछे कोई statute (कानून) नहीं है। बिना कानून के, NTA के पास कोई परिभाषित जवाबदेही व्यवस्था नहीं, संसदीय निगरानी नहीं, security audit प्रकाशित करने की कोई वैधानिक बाध्यता नहीं।",
            "एक नई वैधानिक संस्था का मतलब है — संरचना पर बहस होगी, वोट होगा, संसद के रिकॉर्ड पर आएगी। यही असली बदलाव लाएगा।",
            "## 24 लाख का सवाल",
            "लगभग 24 लाख छात्रों ने 3 मई को NEET-UG 2026 लिखी। उनका साल पहले ही disrupt हो चुका है। 21 जून की पुनः परीक्षा मूल तारीख से 47 दिन बाद है। जिन परिवारों ने coaching, accommodation, और exam तैयारी मूल तारीख के हिसाब से planned की थी — उनके लिए यह सिर्फ देरी नहीं है, यह दूसरी बार तैयारी, दूसरी बार stress, दूसरी बार financial outlay है।",
            "NEET aspirants के लिए mental health support infrastructure पहले ही inadequate था। अब यह उस scale पर test होगा जो भारत की counselling व्यवस्था ने कभी नहीं देखा।",
            "## CJP का नजरिया",
            "तीन observations:",
            "पहला: NEET पेपर लीक वही समस्या है जो CJP की Demand 02 voter-deletion पर उठाती है। दोनों cases में, एक राष्ट्रीय व्यवस्था की integrity को insiders द्वारा खत्म किया जा रहा है, और दोनों cases में जिम्मेदार एजेंसी के पास structural deniability है क्योंकि वह एक मजबूत accountability statute के बिना बनी थी। हल है — statute-based reform, top पर personnel बदलना नहीं।",
            "दूसरा: 24 लाख छात्रों का साल disrupt होना एक generational scale समस्या है। यह 'दुर्भाग्यपूर्ण' news item नहीं है। जो political class 23 मई को गुरिंदरवीर सिंह को 10.09 second के लिए congratulate करती है, वही political class 24 लाख NEET aspirants को 25 मई को जवाब देनी है।",
            "तीसरा: सुप्रीम कोर्ट तेजी से executive-agency failures के लिए एकमात्र काम करने वाला check बनता जा रहा है। यह अपने आप में एक structural problem है। एक democracy जिसमें judiciary को administrative failure का routine first-responder बनना पड़े, वहाँ legislature ने अपना काम छोड़ दिया है। CJP की 5 माँगें legislature के काम को restore करने के बारे में हैं।",
            "## आप इस हफ्ते क्या कर सकते हैं",
            "तीन काम: (a) अगर आप या परिवार में कोई 2026 NEET aspirant है, तो United Doctors Front याचिका के updates publish कर रहा है — उनके official handles follow करें। (b) NTA के structural background पढ़ें — statutory backing का अभाव ही design problem है। (c) इस post को share करें अगर structural framing वो चीज़ है जिस पर political class को pressure feel कराना है।",
            "## निष्कर्ष",
            "25 मई 2026, सुप्रीम कोर्ट बेंच (जस्टिस पी. एस. नरसिम्हा): 'दुख की बात है कि उन्होंने सबक नहीं सीखा।' 11 गिरफ्तारियाँ। 7 शहर। 24 लाख छात्र। पुनः परीक्षा 21 जून। देश को structural fix चाहिए — एक और news cycle नहीं।",
            "## स्रोत (मई 2026)",
            "India TV News सुनवाई रिपोर्ट: indiatvnews.com। ANI News national wire: aninews.in। Bar & Bench litigation coverage: barandbench.com।",
        ],
    },

    // ============================================================
    // HINDI POST #2 — GURINDERVIR SINGH 100m RECORD
    // ============================================================
    {
        slug: "gurindervir-singh-100m-record-10-09-hindi-23-may-2026",
        title: "गुरिंदरवीर सिंह ने रांची में 10.09 सेकंड में 100 मीटर दौड़ा — 10.10 बैरियर तोड़ने वाले पहले भारतीय",
        cat: "Hindi",
        author: "CJP एडिटर",
        readTime: "5 मिनट का पठन",
        excerpt: "23 मई 2026, शनिवार शाम, रांची। Federation Cup 2026 का पुरुष 100 मीटर फाइनल। गुरिंदरवीर सिंह 10.09 सेकंड में दौड़े और इतिहास में 10.10 की बैरियर तोड़ने वाले पहले भारतीय बने। पूरी कहानी।",
        img: "https://images.unsplash.com/photo-1485290334039-a3c69043e517?w=1400&q=80&auto=format&fit=crop",
        body: [
            "रांची, शनिवार, 23 मई 2026। Federation Cup 2026 के दिन 2 का सबसे बड़ा event — पुरुष 100 मीटर का फाइनल। जब तक स्टार्ट गन चली, राष्ट्रीय रिकॉर्ड पिछले 24 घंटों में दो बार पहले ही बदल चुका था। जब गुरिंदरवीर सिंह ने finish line पार की, तीसरी बार रिकॉर्ड बदला — और भारत को इतिहास का अपना पहला sub-10.10 sprinter मिल गया।",
            "## दौड़",
            "गुरिंदरवीर सिंह ने 10.09 सेकंड में finish किया। अनिमेष कुजूर दूसरे स्थान पर 10.20 सेकंड में आए। प्रणव गुराव तीसरे स्थान पर 10.29 सेकंड के साथ। एक ही race में तीन भारतीय 10.30 के नीचे — यह भी अपने आप में domestic athletics का पहला moment है।",
            "## 24 घंटे की रिकॉर्ड लड़ाई",
            "इस फाइनल को असाधारण बनाने वाली बात केवल समय नहीं थी। बात यह थी कि गुरिंदरवीर और अनिमेष पिछले 24 घंटों में पहले ही दो बार राष्ट्रीय रिकॉर्ड exchange कर चुके थे। शुक्रवार को, गुरिंदरवीर ने अपनी heat में 10.17 सेकंड का समय निकाला — नया राष्ट्रीय रिकॉर्ड। पाँच मिनट के अंदर, अनिमेष कुजूर ने अगली heat में 10.15 सेकंड दौड़कर रिकॉर्ड वापस ले लिया। दोनों athletes इस exchange को शनिवार के फाइनल में लेकर आए। गुरिंदरवीर के 10.09 ने इसे settle कर दिया — लगभग 24 घंटों में तीसरा राष्ट्रीय रिकॉर्ड।",
            "## 10.10 बैरियर क्यों मायने रखती थी",
            "10.10 सेकंड का mark एक दशक से अधिक समय से भारतीय पुरुष 100 मीटर का psychological ceiling रहा है। पिछला राष्ट्रीय रिकॉर्ड (अमलान बोरगोहाईन का 10.18, 2022) धीरे-धीरे improve हुआ था, लेकिन sub-10.10 zone — जहाँ दुनिया के elite sprinters रहते हैं — out of reach था।",
            "Globally, पुरुष 100 मीटर का world record 9.58 सेकंड है (उसैन बोल्ट, बर्लिन, 2009)। पेरिस ओलंपिक 2024 का gold medal time 9.79 था। एशिया का सबसे तेज समय 9.83 सेकंड है (चीन के Su Bingtian, टोक्यो 2021)। भारत का 10.09 गुरिंदरवीर को 2026 season का दूसरा सबसे तेज एशियाई समय बनाता है — सिर्फ जापान के Fukuto Komuro (10.08, मई 2026) से पीछे।",
            "## इससे क्या मिलेगा",
            "तत्काल दो चीज़ें: पहली, 2026 Commonwealth Games के लिए qualification। दूसरी, एशियाई और global circuit में competitive ranking पर re-entry।",
            "## पंजाब का कनेक्शन",
            "गुरिंदरवीर सिंह पंजाब से हैं। दौड़ के कुछ ही घंटों के अंदर पंजाब के मुख्यमंत्री भगवंत मान की बधाई आ गई। केंद्रीय खेल मंत्री मनसुख मांडविया ने भी जल्द reaction दिया। भारत में individual athletic records के आसपास political celebration cycle well-established है। structural सवाल — ऐसी breakthroughs को अधिक बार कैसे बनाया जाए — कम बात होती है।",
            "## उसी Federation Cup में और क्या हुआ",
            "रांची का यह 2026 Federation Cup भारतीय athletics के लिए असामान्य रूप से productive meet था। विशाल टी.के. 400 मीटर में sub-45 सेकंड दौड़ने वाले पहले भारतीय बने। तेजस्विन शंकर ने decathlon में 8000 अंक पार किए — उस event में एक राष्ट्रीय record। गुरिंदरवीर के 100 मीटर record के साथ मिलकर, एक ही meet ने अलग-अलग disciplines में कई राष्ट्रीय रिकॉर्ड produce किए।",
            "## Cockroach Republic का नजरिया",
            "दो बातें कहना ज़रूरी है। पहली: celebrate करें — ज़ोर से। गुरिंदरवीर का यह run दशक के सबसे प्रभावशाली Indian athletic moments में से एक है। दूसरी: athlete-level excellence और system-level support के बीच के gap को notice करें।",
            "India का athletics बजट per athlete चीन, जापान, या यहाँ तक कि केन्या के per-athlete खर्च का एक छोटा हिस्सा है। ज्यादातर भारतीय sprinters ऐसी facilities में train करते हैं जो US के NCAA Division III में acceptable नहीं होतीं। गुरिंदरवीर का 10.09 तक पहुँचना उनकी कहानी है; भारत के पास दस गुरिंदरवीर न होना political class की कहानी है।",
            "अगर वही political class जिसने 23 मई को गुरिंदरवीर को congratulate किया, इस result की पीठ पर एक 5-year national sprint development programme भी fund करती है, तो अगला sub-10.05 जल्दी होगा। अगर बात photo-op पर रुक गई, तो अगला breakthrough एक और दशक wait करेगा।",
            "## आप इस हफ्ते क्या कर सकते हैं",
            "तीन ठोस काम: (a) 10.09 सेकंड वाली दौड़ देखिए — Outlook और Olympics.com सहित कई जगह online उपलब्ध है। (b) Athletics Federation of India की meet release पढ़िए — technical detail बताती है कि politicians से क्या commitment माँगनी है। (c) अगर आप Roach Republic founding member हैं और चाहते हैं कि यह structural sport-policy thinking compound हो — share कीजिए।",
            "## निष्कर्ष",
            "23 मई 2026, रांची। गुरिंदरवीर सिंह पुरुष 100 मीटर में 10.10 की बैरियर तोड़ने वाले पहले भारतीय बने। record अब पढ़ता है: GURINDERVIR SINGH · IND · 10.09 · 23 MAY 2026 · FEDERATION CUP, RANCHI। अगली breakthrough एक policy question है, talent question नहीं।",
            "## स्रोत (मई 2026)",
            "Outlook India: outlookindia.com। Olympics.com: olympics.com। The Tribune: tribuneindia.com। Khel Now: khelnow.com। The Statesman: thestatesman.com। India TV News: indiatvnews.com।",
        ],
    },
];

console.log(`Uploading ${posts.length} Hindi blog posts...`);
for (const post of posts) {
    const ref = await addDoc(collection(db, "blogs"), {
        ...post,
        createdAt: serverTimestamp(),
    });
    console.log(`  ✓ ${post.slug}`);
    console.log(`    Live: https://cockrochjantaparti.com/blog/${post.slug}`);
}
console.log(`\n✅ Done. ${posts.length} Hindi viral posts published.`);
process.exit(0);
