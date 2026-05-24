import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQ — Cockroach Janta Parti",
    description: "Direct answers to the most-asked questions about CJP, the 5 demands, the founding cohort, RTI filing, voter list checks, and Indian politics fundamentals.",
};

type QA = { q: string; a: string };

const FAQS: QA[] = [
    {
        q: "What is Cockroach Janta Parti (CJP)?",
        a: "Cockroach Janta Parti is a satirical political-art project organised around a five-point manifesto demanding enforceable electoral and democratic reforms. It is fan-built, run anonymously, and not a registered political party under the Representation of People Act. The site combines satire, original blog writing on Indian politics, and practical tools like a membership card generator and a meme generator.",
    },
    {
        q: "Is CJP a real political party?",
        a: "No. CJP is not registered with the Election Commission of India and is not contesting elections. It is a satirical political-art project. The 'Cockroach' framing reclaims the slur that the political class periodically uses for the unemployed and discarded. All scenarios on the site, including the hypothetical CJI remark, are thought experiments — not real events.",
    },
    {
        q: "What are the 5 Demands of the CJP manifesto?",
        a: "(1) No Rajya Sabha nomination for retired Chief Justices of India within a five-year cooling-off period. (2) Criminal liability under UAPA for systematic deletion of legitimate voters from electoral rolls. (3) 50% women representation in the Union Cabinet, implementable immediately without constitutional amendment. (4) A 20-year ban on holding any elected office for politicians who defect from their party. (5) Revoked broadcast licenses for media houses with structural conflicts of interest above a published threshold. Every demand is legally enforceable with existing instruments.",
    },
    {
        q: "How do I become a founding member of CJP?",
        a: "Open https://cockrochjantaparti.com/join, fill the 4-step form (name, city, why you want to join, manifesto agreement), and submit. The first 50 verified members receive permanent founding numbers (#001 to #050) and a downloadable membership card. Membership is free, requires no payment, and does not commit you to any political activity beyond agreeing with the manifesto.",
    },
    {
        q: "How do I file an RTI application online in India?",
        a: "Go to rtionline.gov.in (for Central government RTIs) or your state's RTI portal. Register with email and mobile OTP. Fill the application form specifying the ministry, your details, and the specific information you want. Pay ₹10 via UPI or card. The Public Information Officer has 30 days to respond. If they refuse or stay silent, file a First Appeal within 30 days (free). A full step-by-step guide is at https://cockrochjantaparti.com/blog/how-to-file-rti-online-2026-step-by-step-guide.",
    },
    {
        q: "How do I check my name in the Indian voter list online?",
        a: "Open electoralsearch.eci.gov.in (the official Election Commission of India portal). Search by your EPIC number (Voter ID number, 10-character alphanumeric) for instant results, or by Details (name, father's/husband's name, date of birth, state, district). If your name is missing, file Form 6 to register or Form 7 to object to deletion. Detailed guide at https://cockrochjantaparti.com/blog/how-to-check-your-name-in-voter-list-online-2026.",
    },
    {
        q: "What is the difference between Lok Sabha and Rajya Sabha?",
        a: "The Lok Sabha (House of the People) has up to 552 members directly elected from single-member constituencies for five-year terms; it can be dissolved by the President. The Rajya Sabha (Council of States) has up to 250 members elected indirectly by state legislative assemblies for six-year staggered terms; it is permanent and never dissolved. Money Bills can originate only in the Lok Sabha. The government must hold a Lok Sabha majority, not Rajya Sabha. The Rajya Sabha alone has the power to authorise Parliament to legislate on State subjects (Article 249).",
    },
    {
        q: "What is the Anti-Defection Law and why doesn't it stop defection?",
        a: "The Tenth Schedule of the Indian Constitution, inserted by the 52nd Amendment in 1985, disqualifies elected legislators from their seat if they voluntarily resign from their party, vote against the whip, or join another party. It fails to stop defection in practice because of two loopholes: (1) the 'merger' exception lets two-thirds of a legislative party defect collectively, which factions structure deliberately; (2) the Speaker, who decides disqualification, is a partisan office, so proceedings are delayed for political convenience.",
    },
    {
        q: "When does the Women's Reservation Bill (33% reservation) actually take effect?",
        a: "The 106th Constitutional Amendment Act 2023 reserves 33% of Lok Sabha and state assembly seats for women, but only after the next delimitation exercise — which depends on the next census. Given census delays, the earliest realistic implementation is the 2029 general election, with credible arguments that it could slide to 2034. Cabinet reservation, however, requires no amendment and can be implemented immediately by any Prime Minister on swearing-in day.",
    },
    {
        q: "Are EVMs in India safe and tamper-proof?",
        a: "Indian EVMs are standalone, non-networked machines with firmware burned to one-time-programmable chips. Hardware tampering at scale has not been credibly demonstrated against production machines with intact seals. The legitimate critique is on VVPAT reconciliation: only five booths per assembly constituency are currently verified, which critics argue is too small a statistical sample. The April 2024 Supreme Court ruling declined to mandate 100% VVPAT counting but required full recount when any mismatch is found.",
    },
    {
        q: "What was the Electoral Bonds scheme and why was it struck down?",
        a: "Electoral bonds (2018-2024) were anonymous bearer instruments through which donors could fund political parties via SBI. The scheme was pitched as transparency but created asymmetric visibility: the government knew donor identities through SBI, but the public, opposition parties, and the Election Commission did not. The Supreme Court unanimously struck down the scheme in February 2024 (ADR v Union of India), citing voter rights under Article 19(1)(a). Of approximately ₹16,500 crore issued, the BJP received about 50-55%, INC about 10%, with regional parties absorbing the rest.",
    },
    {
        q: "Who runs CJP? Is there a founder?",
        a: "CJP is run by an anonymous creator. The identity is intentionally withheld so the project lives on the strength of the manifesto and the writing, not the personality of the creator. If institutional press coverage eventually warrants disclosure, the creator will go on record then — not before. Press inquiries should go through the join form with subject 'PRESS'.",
    },
    {
        q: "Is CJP open source? Can I see the code?",
        a: "Yes. CJP's full codebase is open on GitHub at https://github.com/shubhamprakashrai/cockroach-janta-parti. The site is built in Next.js, hosted on Vercel, with Firebase Firestore for live data (membership counter, comments, likes). Anyone can review the code, fork it, or contribute.",
    },
    {
        q: "How is CJP funded?",
        a: "CJP has zero corporate funding. The hosting (Vercel free tier), database (Firebase Spark free tier), and forms (Formspree free tier) are all on free plans. The only running cost is the domain (cockrochjantaparti.com), paid for personally by the creator. CJP does not accept donations and does not run ads.",
    },
    {
        q: "Can CJP be cited in academic or journalistic work?",
        a: "Yes. CJP's essays cite their own sources (Wikipedia, Election Commission, RTI portal, Indian publications) and are themselves original analysis. They can be cited as opinion/analysis. Practical guides (RTI filing, voter list lookup) cross-reference the official government portals and can be cited as walkthroughs. Press, researchers, and students are welcome to use the material with attribution.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: {
            "@type": "Answer",
            text: a,
        },
    })),
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-4 flex justify-between items-center shadow-[0_4px_0_0_#000]">
                <Link href="/" className="font-display text-2xl uppercase tracking-widest hover:text-accent">🪳 CJP FAQ</Link>
                <Link href="/manifesto" className="font-mono text-xs uppercase font-bold hover:text-accent">MANIFESTO →</Link>
            </nav>

            <header className="px-4 py-16 md:py-24 text-center border-b-4 border-text-primary bg-card">
                <div className="inline-block bg-accent text-rich-black px-3 py-1 mb-4 font-mono text-xs font-bold uppercase tracking-widest border-2 border-rich-black shadow-[2px_2px_0_0_#000]">
                    Direct answers · No filler
                </div>
                <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter mb-6">
                    QUESTIONS<br /><span className="text-accent">ANSWERED.</span>
                </h1>
                <p className="font-mono text-base md:text-xl text-text-secondary max-w-2xl mx-auto">
                    The 15 most-asked things about CJP, the manifesto, and Indian political procedures. Bookmark this page. Share specific sections.
                </p>
            </header>

            <section className="max-w-4xl mx-auto px-4 py-16 space-y-8">
                {FAQS.map((f, i) => (
                    <article key={i} className="bg-card border-4 border-text-primary shadow-[8px_8px_0_0_#000] p-6 md:p-8">
                        <h2 className="font-display text-2xl md:text-3xl uppercase text-rich-black mb-4 border-l-4 border-accent pl-4">
                            {f.q}
                        </h2>
                        <p className="font-mono text-sm md:text-base text-text-primary leading-relaxed whitespace-pre-line">
                            {f.a}
                        </p>
                    </article>
                ))}
            </section>

            <section className="max-w-4xl mx-auto px-4 pb-8">
                <div className="bg-rich-black text-white p-8 border-4 border-rich-black text-center">
                    <h2 className="font-display text-3xl md:text-4xl uppercase mb-3">Question not answered?</h2>
                    <p className="font-mono text-xs md:text-sm uppercase tracking-widest text-white/70 mb-6">
                        Drop it via the join form with subject &lsquo;QUESTION&rsquo; — we update this page when patterns emerge.
                    </p>
                    <Link
                        href="/join"
                        className="inline-block bg-accent text-rich-black font-display text-xl uppercase px-8 py-3 border-4 border-accent hover:bg-white transition-colors shadow-[4px_4px_0_0_#FFD60A]"
                    >
                        OPEN THE JOIN FORM →
                    </Link>
                </div>
            </section>
        </main>
    );
}
