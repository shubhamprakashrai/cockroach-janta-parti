export type BlogPost = {
    slug: string;
    title: string;
    cat: string;
    excerpt: string;
    body: string[];
    author: string;
    date: string;
    readTime: string;
    img: string;
};

export const blogPosts: BlogPost[] = [
    {
        slug: "how-a-meme-became-a-movement",
        title: "How a Single WhatsApp Forward Spawned the CJP",
        cat: "History",
        excerpt: "It wasn't a master plan. It was just a joke that went too far. Here is the true story behind the initial genesis.",
        author: "Abhijeet Dipke",
        date: "May 21, 2026",
        readTime: "5 min read",
        img: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1400&q=80&auto=format&fit=crop",
        body: [
            "It wasn't a master plan. It was just a joke that went too far. Two weeks ago, the Cockroach Janta Party didn't exist. Today, it has over a million verified members. The story of how a single WhatsApp forward turned into India's loudest Gen Z movement is, like most modern revolutions, embarrassingly stupid.",
            "When the Honourable CJI made that off-the-cuff remark during the Tuesday morning unemployment hearing — calling youth groups 'cockroaches' that 'infest the very fabric of our municipal systems' — the usual political machinery geared up. Opposition leaders drafted angry press releases. News channels debated it at 9 PM. Twitter intellectuals wrote 12-tweet threads. But something fundamentally different was happening in the group chats of unemployed graduates across India.",
            "## The Digital Match",
            "We didn't want apologies. Apologies from politicians are as common as potholes in Mumbai. We wanted acknowledgement of the absurdity. Thus, the Google Form was born. It asked very simple questions: Are you unemployed? Are you lazy? Are you chronically online? Do you also feel like a cockroach? If yes — sign up.",
            "The form went up at 4:47 PM on May 16. By 8:30 PM, it had crossed 10,000 submissions. By midnight, 47,000. By the next morning, the server caps triggered and Google itself was confused about what was happening. People weren't just filling it out; they were screenshotting their submissions and putting 'CJP Member #420' in their Instagram bios.",
            "## The Three Hours That Changed Everything",
            "Between 9 PM and midnight on May 16, three things happened simultaneously. First, Kunal Kamra posted a 38-second clip on his Instagram story endorsing the form. His clip alone drove 80,000 form submissions in two hours. Second, a coding student in Indore built an unofficial verification tool called RoachID that gave each member a fake but official-looking ID number — that tool now powers the official CJP card generator. Third, Mahua Moitra retweeted with the caption 'I'm officially a cockroach.' Three independent gestures. Zero coordination. Total alignment.",
            "## Why It Stuck",
            "Other movements have died in three days. Black Lives Matter India had its moment. The farmers' protest faded from headlines. So why did this one stick? Three reasons. One: it didn't ask for anything except acknowledgement, and acknowledgement is free. Two: it was funny, and humour spreads faster than outrage on Indian social media. Three: it gave people an identity (a cockroach) and a community (the swarm) without requiring any commitment beyond filling a form. No protests, no donations, no marches. Just self-deprecation as resistance.",
            "## What Happens Next",
            "That's the question every news anchor is asking. Our answer is simple: We release the 5-point manifesto. We scale the swarm to 10 million by the next Lok Sabha cycle. We refuse to vote for any candidate who doesn't explicitly endorse our right to exist in the gutters they created. We are not a political party in the conventional sense. We are a referendum on contempt. And we are winning."
        ]
    },
    {
        slug: "top-10-ways-to-use-meme-generator",
        title: "Top 10 Ways to Weaponize the CJP Meme Generator",
        cat: "Tools",
        excerpt: "Stop downloading templates from Reddit. Use our unhinged canvas. A complete guide to roasting local MLAs without getting sued.",
        author: "CJP Tools Desk",
        date: "May 22, 2026",
        readTime: "3 min read",
        img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1400&q=80&auto=format&fit=crop",
        body: [
            "The CJP Meme Generator went live on May 19, three days after the movement started. In its first 48 hours, it served 2.1 million PNG exports. We've collected the patterns. Here's how power users are actually using it — and how you should too.",
            "## 1. The Receipt Drop",
            "Take a screenshot of a politician's old tweet contradicting their current stance. Drop it into the generator. Add the bottom-text 'STILL THINK WE ARE COCKROACHES?'. Export. Post with the timestamp visible. This format alone has triggered three formal apologies from sitting MLAs.",
            "## 2. The Hindi Code-Switch",
            "Add a top-text in English (e.g., 'WHEN THE EMPLOYMENT REPORT DROPS') and a bottom-text in Hindi ('aur main berozgar hi hoon'). The bilingual punch hits harder. Always use Hind font (built-in option) — it lands better on Indian feeds than Devanagari serifs.",
            "## 3. The Local Roast",
            "Geotag your meme with your city/state. Tag the local MP. Use the regional language option. We've seen this format crash three district-level Twitter accounts.",
            "## 4. The Manifesto Tease",
            "Embed one of the 5 Demands inside a meme template. Bottom-text the absurdity ('NO RAJYA SABHA FOR RETIRED CJIs — too radical?'). Drives 4x more clicks to the manifesto page than direct links.",
            "## 5. The Comparative Roast",
            "Two-panel meme. Left: a senior politician's net worth. Right: median Indian household income. No caption needed. The numbers do the work.",
            "## 6. The 'CJP Says' Format",
            "We've trained the generator on a CJP-style typography pattern that mimics official manifestos. Use it for fake-official posters demanding things like 'No more 9pm prime-time debates.' Comedic value off the charts.",
            "## 7. The Sticker Pack",
            "Generate 6 memes in sequence with the same character but different captions. Export all six. Share as a WhatsApp sticker pack. We're shipping a native sticker export by June.",
            "## 8. The Personality Test Roast",
            "Take a stock 'Which BJP/Congress leader are you?' personality quiz. Replace all options with cockroaches doing different things (sleeping, scrolling, applying to jobs). Hosting your own quiz on /quiz is encouraged.",
            "## 9. The Cross-Movement Crossover",
            "We've seen great memes that crossover CJP with other Gen Z movements (Korean K-Pop fandoms, climate strike imagery). Don't be precious — borrow shamelessly.",
            "## 10. The Quiet Drop",
            "No caption. No tags. Just the image. The meme should speak. If it needs a caption to land, it's a tweet, not a meme.",
            "## One Rule",
            "Never punch down. CJP memes target power, not people. Roast an MLA, not a constituent. Roast a CEO, not their employees. The line between comedy and bullying is the line between movement-building and cancellation."
        ]
    },
    {
        slug: "youth-unemployment-statistics-2026",
        title: "The Numbers They Don't Want You to See",
        cat: "News",
        excerpt: "Deep dive into the terrifying employment statistics that mainstream media refuses to cover on prime time.",
        author: "Data Roach",
        date: "May 23, 2026",
        readTime: "8 min read",
        img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1400&q=80&auto=format&fit=crop",
        body: [
            "Every government claims unemployment is going down. Every household with a graduate aged 22-30 knows that's a lie. Here are the numbers — sourced from the PLFS, the CMIE, and three private surveys that the establishment would rather you ignored.",
            "## The Topline",
            "India's youth unemployment rate (age 15-29, urban) is 17.3% as of Q1 2026, per the PLFS. The CMIE puts the figure higher at 22.4% because it includes discouraged workers — those who have stopped looking. The number for educated youth (graduates and above) is 28.7%. Read that again. Nearly one in three educated Indians under 30 has no job.",
            "## The Hidden Variables",
            "Official numbers undercount because of a specific definitional choice: if you worked even one hour for pay in the survey week, you are employed. By that standard, a gig delivery rider who logged in once on Swiggy is 'employed'. The CMIE's stricter definition — having a 'main activity' that brings in income — paints a darker picture.",
            "## The Degree Premium Has Collapsed",
            "In 2014, a graduate had a 60% chance of finding formal employment within 12 months of graduation. In 2026, that number is 31%. A PhD holder is twice as likely to be unemployed as a school dropout, because the dropout will take any informal job. The graduate, by contrast, is waiting for something that pays for the years invested.",
            "## The Regional Variance Is Insane",
            "Kerala has the highest graduate unemployment rate (47%). Bihar has the lowest (12%) — but only because most of its graduates have migrated to Delhi, Bengaluru, or the Gulf. The 'low' Bihar number is a measurement artefact.",
            "## What the Government Won't Admit",
            "The 'production-linked incentive' (PLI) scheme — which has been the headline jobs policy since 2021 — has created an estimated 460,000 formal manufacturing jobs against a target of 6 million. That's 7.6% of the promise. The Ministry of Labour has not published the implementation status report for two consecutive quarters.",
            "## What We Are Doing",
            "CJP's 5-Demand Manifesto includes a specific economic demand: a Universal Basic Stipend for graduates aged 22-30 who are actively job-hunting, capped at ₹8,000/month for 24 months. The math: ₹8,000 × 24 months × 11 million eligible graduates = ₹2.1 trillion over two years. That is 0.4% of GDP. It is also less than what the central government wrote off in corporate loan defaults in the last six years.",
            "## Why It Matters",
            "If you are unemployed and reading this, the statistics are not your fault. The system is designed to extract your degree money, blame you when the placement falls through, and then call you a cockroach when you organize. The right response is not despair. The right response is to count the swarm."
        ]
    },
    {
        slug: "maharashtra-infestation-report",
        title: "Maharashtra Chapter Crosses 50K Members",
        cat: "News",
        excerpt: "The horde is growing faster than anticipated. State elections might actually face a spoiler for the first time.",
        author: "Mh. Director",
        date: "May 22, 2026",
        readTime: "4 min read",
        img: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1400&q=80&auto=format&fit=crop",
        body: [
            "Maharashtra became the first state where the Cockroach Janta Party crossed 50,000 verified members. The milestone was hit at 11:47 AM on May 22, exactly six days after the original Google Form went live. The state director — known only as 'Mh. Director' on the CJP internal channel — confirmed the count and shared the district breakdown.",
            "## The Map",
            "Mumbai (urban + suburban) accounts for 41% of the state's members at 20,500. Pune is second with 11,200. Nagpur surprised analysts at third with 7,800 — driven entirely by a viral student-union endorsement at Nagpur University. Aurangabad, Nashik, and Kolhapur round out the top six. Marathwada and Vidarbha have lower per-capita rates, but the absolute numbers are climbing.",
            "## The Demographic",
            "76% of Maharashtra CJP members are aged 22-29. 58% are graduates or post-graduates. 31% identify as unemployed. 22% are 'underemployed' (working below their qualification level). 19% are gig workers. The remaining 28% are students, contractors, or full-timers who joined out of solidarity.",
            "## The Political Threat",
            "Maharashtra has 48 Lok Sabha seats and 288 Assembly seats. A 50,000-member CJP base does not, on its own, swing any seat. But the *organizing capacity* is what's worrying sitting MLAs. Last week's CJP-organized 'silent gutter walk' in Pune saw 2,100 attendees with two hours of WhatsApp notice. That's a logistical metric that traditional parties take three weeks to match.",
            "## The Funding Question",
            "Where is the money coming from? Short answer: nowhere. CJP has zero registered corporate donors. The state-level operations are funded by micro-contributions — 38,400 members have donated an average of ₹47 each. Total state corpus: ₹18 lakh. The party's largest expense is a single Cloudflare bill (₹2,200/month) and a Google Workspace subscription.",
            "## What's Next for Maharashtra",
            "The state chapter is opening district-level WhatsApp coordinators in all 36 districts by June 5. The Pune chapter is hosting an open Q&A with state director Mh. Director on June 8, location TBD (security reasons). Mumbai is preparing a 'mock cabinet' announcement — a satirical alternative cabinet of cockroaches, expected to drop next week.",
            "## The Mood",
            "We asked the state director one question: 'Is this a joke or a movement?' The answer was: 'Yes.'"
        ]
    },
    {
        slug: "understanding-the-5-demands",
        title: "Why the 5 Demands Are Actually Logical",
        cat: "History",
        excerpt: "Breaking down the radical manifesto points and explaining why they are completely, legally, terrifyingly viable.",
        author: "Legal Roach",
        date: "May 20, 2026",
        readTime: "10 min read",
        img: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1400&q=80&auto=format&fit=crop",
        body: [
            "The CJP Manifesto looks like satire on first read. On a second read, it becomes uncomfortable. On a third read — done by anyone who has actually studied constitutional law — it becomes obvious that every single demand is legally enforceable with existing instruments. The legal team behind this manifesto has worked at the Supreme Court, the Election Commission, and two High Courts. Here's the breakdown.",
            "## Demand 01: No Rajya Sabha for Retired CJIs",
            "The Rajya Sabha currently allows nomination of 12 members by the President for 'distinguished service'. The convention has been that retired Chief Justices are sometimes appointed within months of retirement. This creates an obvious conflict-of-interest: any CJI who anticipates a post-retirement seat has a structural incentive to rule favourably for the ruling party in their final years on the bench.",
            "The legal fix is a constitutional amendment to Article 80(3) imposing a 5-year cooling-off period between any constitutional office (CJI, CEC, Governor) and any political nomination. Several MPs have already drafted versions of this amendment. None have been brought to the floor because the parties that benefit from the current system are also the parties that control the floor.",
            "## Demand 02: CEC Arrest Under UAPA If a Vote Is Deleted",
            "This is the most aggressive demand and the one critics call 'unhinged'. But strip away the rhetoric: the Representation of the People Act, 1951 already criminalizes vote tampering. Section 134B specifically addresses deletion of legitimate voters from rolls. The maximum punishment under existing law is two years' imprisonment.",
            "CJP's demand extends this to apply UAPA — the Unlawful Activities Prevention Act — to systemic deletion. The argument: deleting voters at scale to engineer electoral outcomes is, by any reasonable reading, an attempt to undermine the sovereignty of the electoral process. UAPA already covers attempts to undermine sovereignty. The bridge is small.",
            "## Demand 03: 50% Women Reservation in Parliament and Cabinet",
            "The 106th Constitutional Amendment (passed in September 2023) reserves 33% of seats in the Lok Sabha and state assemblies for women, but only takes effect after the next census and delimitation — effectively pushed to 2029 at earliest. CJP demands accelerating this to 50% and applying it to cabinet appointments immediately.",
            "Cabinet reservation requires no constitutional amendment. The Prime Minister has the discretion to appoint any cabinet of any composition. A 50% women's cabinet is achievable on the next swearing-in day. No party has done it. The reason is structural — winning the Lok Sabha seats women MPs need to *be* available for cabinet still requires winning seats in a system where women candidates are underfunded.",
            "## Demand 04: 20-Year Ban on Defectors",
            "The Tenth Schedule (Anti-Defection Law) currently disqualifies a defecting MP from their seat. CJP's demand is to extend this to a 20-year ban from holding any elected office, anywhere. The legal mechanism is an amendment to the Tenth Schedule — straightforward, no constitutional crisis.",
            "The political mechanism is harder: every party uses defections to engineer state-level governments. Eliminating defections would freeze the current map. Most ruling parties would lose more than they gain. Hence the resistance.",
            "## Demand 05: Cancel Bought-Media Licenses",
            "The Information Technology Act and the Cable Television Networks (Regulation) Act both give the central government discretion over media licenses. CJP demands that any media house found to have received political donations exceeding 5% of annual revenue lose its broadcast license.",
            "This is the most legally complex demand because it requires a definition of 'political donation' that survives constitutional scrutiny. The free-speech defenders (correctly) point out that this could be weaponized by future governments against opposition media. CJP's draft addresses this by requiring the determination to be made by a five-member panel composed of one government nominee, one opposition nominee, one Supreme Court Justice, one journalist, and one Election Commission representative.",
            "## The Real Demand",
            "The manifesto is provocative because provocation gets read. But the underlying demand is simple: enforce the laws we already have. Every single CJP demand has a legal pathway. None requires a coup. None requires a revolution. They all require political will — which is why the establishment treats us as cockroaches. Easier than admitting we're correct."
        ]
    },
    {
        slug: "main-bhi-cockroach-hindi-guide",
        title: "मैं भी कॉकरोच: आंदोलन को कैसे समझें",
        cat: "Hindi",
        excerpt: "उन सभी के लिए जिन्हें लगता है कि यह सिर्फ एक मजाक है, एक विस्तृत गाइड।",
        author: "CJP Staff",
        date: "May 21, 2026",
        readTime: "5 min read",
        img: "https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=1400&q=80&auto=format&fit=crop",
        body: [
            "अंग्रेजी मीडिया में बहुत कुछ लिखा गया है। हिंदी पट्टी में अभी तक यह आंदोलन ठीक से नहीं पहुंचा। इसलिए यह लेख। सीधी बात — जितनी सीधी हो सकती है।",
            "## क्या है यह 'कॉकरोच जनता पार्टी'?",
            "एक राजनीतिक आंदोलन। सोशल मीडिया पर शुरू हुआ। 16 मई 2026 को एक Google Form से। एक हफ्ते में 10 लाख सदस्य। आज तक कोई कॉर्पोरेट दान नहीं, कोई बड़ा फंडर नहीं।",
            "## क्यों 'कॉकरोच'?",
            "क्योंकि एक मई की सुबह, सुप्रीम कोर्ट में सुनवाई के दौरान, मुख्य न्यायाधीश ने बेरोजगार युवाओं को 'कॉकरोच' कहा था। 'व्यवस्था के ताने-बाने में फैले हुए कॉकरोच।' युवा नाराज नहीं हुए। उन्होंने स्वीकार कर लिया। 'हाँ, हम कॉकरोच हैं। और हम सबसे ज्यादा संख्या में हैं।'",
            "## 5 मांगें क्या हैं?",
            "1. रिटायर्ड CJI को राज्यसभा सीट नहीं\n2. वोट डिलीट करने वाले CEC पर UAPA\n3. संसद और कैबिनेट में 50% महिला आरक्षण\n4. दलबदलू पर 20 साल का प्रतिबंध\n5. खरीदी हुई मीडिया का लाइसेंस रद्द",
            "ये पांचों मांगें कानूनी रूप से संभव हैं। बस राजनीतिक इच्छाशक्ति की जरूरत है।",
            "## क्या यह कोई पार्टी है? चुनाव लड़ेगी?",
            "अभी नहीं। पहले हम संख्या बना रहे हैं। जब 50 लाख सदस्य हो जाएंगे, तब हम तय करेंगे — चुनाव लड़ें या फिर एक pressure group बने रहें।",
            "## क्या मुझे शामिल होना चाहिए?",
            "अगर आप 22-35 साल के बीच हैं, अगर आपके पास डिग्री है लेकिन ढंग की नौकरी नहीं, अगर आपको लगता है कि सिस्टम आपको मजाक समझता है — तो हाँ। बस फॉर्म भरें। कोई पैसा नहीं लगेगा। कोई सदस्यता शुल्क नहीं।",
            "## आगे क्या?",
            "हम राज्य-स्तर पर coordinator बना रहे हैं। हर जिले में एक WhatsApp group। हर शहर में महीने में एक meet-up। और एक काम जो हम अभी कर सकते हैं — वोट डालें। सिर्फ उन्हें वोट करें जो हमारी 5 मांगों का स्पष्ट समर्थन करें।",
            "अंत में एक बात — अगर आप यह पढ़ रहे हैं और सोच रहे हैं कि 'मैं भी कॉकरोच' एक मजाक है — तो आप सही हैं। यह मजाक है। लेकिन हर मजाक के पीछे एक सच होता है। और इस बार, सच के पीछे एक करोड़ लोग खड़े हैं।"
        ]
    }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, limit = 2): BlogPost[] {
    return blogPosts.filter((p) => p.slug !== currentSlug).slice(0, limit);
}
