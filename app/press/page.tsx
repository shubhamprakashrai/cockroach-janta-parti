import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Press Kit — Cockroach Janta Parti",
    description: "Media-ready information about CJP — India's satirical political-art project. Quotes, statistics, founder note, contact for press inquiries.",
};

const pressSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cockroach Janta Parti",
    alternateName: "CJP · Roach Republic",
    url: "https://cockrochjantaparti.com",
    logo: "https://cockrochjantaparti.com/logo.png",
    foundingDate: "2026-05-22",
    description: "India's first satirical political-art project. A 5-point manifesto, original analytical writing, and a founding-cohort membership model. Fan-built, run anonymously, not a registered political party.",
    sameAs: [
        "https://github.com/shubhamprakashrai/cockroach-janta-parti",
        "https://instagram.com/roach.republic",
    ],
};

export default function PressKitPage() {
    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pressSchema) }}
            />

            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-4 flex justify-between items-center shadow-[0_4px_0_0_#000]">
                <Link href="/" className="font-display text-2xl uppercase tracking-widest hover:text-accent">🪳 CJP PRESS</Link>
                <Link href="/manifesto" className="font-mono text-xs uppercase font-bold hover:text-accent">MANIFESTO →</Link>
            </nav>

            <header className="px-4 py-16 md:py-24 text-center border-b-4 border-text-primary bg-card">
                <div className="inline-block bg-accent text-rich-black px-3 py-1 mb-4 font-mono text-xs font-bold uppercase tracking-widest border-2 border-rich-black shadow-[2px_2px_0_0_#000]">
                    For Journalists, Researchers, Editors
                </div>
                <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-6">
                    PRESS<br /><span className="text-accent">KIT.</span>
                </h1>
                <p className="font-mono text-base md:text-lg text-text-secondary max-w-2xl mx-auto">
                    Everything a journalist needs to write about CJP — quotes, statistics, founder framing, and a contact route. Copy-paste-ready.
                </p>
            </header>

            <section className="max-w-4xl mx-auto px-4 py-16 space-y-12">

                {/* ONE-LINE PITCH */}
                <article className="bg-rich-black text-white border-4 border-rich-black p-8 md:p-12 shadow-[12px_12px_0_0_#FFD60A]">
                    <h2 className="font-display text-3xl uppercase mb-4 text-accent">ONE-LINE PITCH</h2>
                    <p className="font-display text-2xl md:text-3xl leading-snug uppercase">
                        India&apos;s first satirical political-art project — a five-demand manifesto, original analytical writing on Indian politics, and a founding-cohort membership model. Fan-built, run anonymously, not a registered political party.
                    </p>
                </article>

                {/* 30-SECOND ELEVATOR */}
                <article className="bg-card border-4 border-text-primary p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
                    <h2 className="font-display text-3xl uppercase mb-4 text-rich-black border-b-4 border-text-primary pb-2">30-SECOND ELEVATOR</h2>
                    <div className="font-mono text-sm md:text-base text-text-primary leading-relaxed space-y-4">
                        <p>CJP — Cockroach Janta Parti — is a fan-built Indian political-art project launched in May 2026. The name reclaims the slur the political class periodically uses for the unemployed and discarded.</p>
                        <p>The project has three components: a five-point manifesto demanding legally enforceable electoral and democratic reforms (no Rajya Sabha for retired CJIs, criminal liability for voter-roll deletion, 50% women in cabinet, 20-year ban on defectors, revoked licenses for structurally conflicted media); an original blog with 29+ analytical essays on Indian politics, every claim sourced; and practical citizen tools (RTI filing guide, voter-list lookup, member ID card generator, meme generator).</p>
                        <p>The creator runs the project anonymously. Counter is live from Firestore — currently building toward the 50 founding-member cohort.</p>
                    </div>
                </article>

                {/* QUICK STATS */}
                <article className="bg-card border-4 border-text-primary p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
                    <h2 className="font-display text-3xl uppercase mb-6 text-rich-black border-b-4 border-text-primary pb-2">QUICK STATS</h2>
                    <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
                        {[
                            ["Launch date", "May 22, 2026"],
                            ["Demands in manifesto", "5 (all legally enforceable)"],
                            ["Original essays", "29+ (English + Hindi)"],
                            ["Citation sources", "50+ verified (Wikipedia, ECI, RTI, ThePrint, TheWire, BusinessToday, Outlook, Al Jazeera)"],
                            ["Languages", "English, Hindi (Devanagari native)"],
                            ["Founding cohort cap", "50 (permanent numbers)"],
                            ["Corporate donors", "0 (by design)"],
                            ["Registered as political party", "No"],
                            ["Open source", "Yes — GitHub: shubhamprakashrai/cockroach-janta-parti"],
                            ["Hosting", "Vercel (free tier)"],
                            ["Backend", "Firebase Firestore (free tier)"],
                            ["Funding", "Domain cost only, personally borne"],
                        ].map(([k, v]) => (
                            <div key={k} className="border-l-4 border-accent pl-3">
                                <div className="text-text-secondary uppercase font-bold text-[10px]">{k}</div>
                                <div className="text-rich-black">{v}</div>
                            </div>
                        ))}
                    </div>
                </article>

                {/* KEY QUOTES */}
                <article className="bg-card border-4 border-text-primary p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
                    <h2 className="font-display text-3xl uppercase mb-6 text-rich-black border-b-4 border-text-primary pb-2">QUOTABLE — Use freely with attribution</h2>
                    <div className="space-y-6">
                        {[
                            {
                                quote: "The political class periodically refers to its own electorate as pests. We are reclaiming the slur, the way movements have reclaimed slurs for a century. The cockroach is the most adaptive organism on the planet. It cannot be killed. Reasonable model for a generation that the system has tried to discard.",
                                attribution: "CJP Manifesto, Day 1 launch essay",
                            },
                            {
                                quote: "Every demand in the CJP manifesto is legally enforceable with existing instruments. We have not invented new law. We are asking for enforcement.",
                                attribution: "5 Demands — Legal Walkthrough (CJP Blog)",
                            },
                            {
                                quote: "The counter on the homepage is bound to Firestore — it reads zero today because nobody has joined yet. When someone joins, it becomes one. The growth, if it happens, will be real, traceable, and slow before it is fast.",
                                attribution: "Day 1 — Why CJP Exists",
                            },
                            {
                                quote: "We will not impersonate politicians. We will not fabricate news. We will not buy followers.",
                                attribution: "CJP Founding Principles",
                            },
                        ].map((q, i) => (
                            <div key={i} className="border-l-4 border-accent pl-4 py-2">
                                <p className="font-hindi text-base md:text-lg italic text-text-primary mb-2 leading-relaxed">&ldquo;{q.quote}&rdquo;</p>
                                <p className="font-mono text-[10px] uppercase tracking-widest text-text-secondary">— {q.attribution}</p>
                            </div>
                        ))}
                    </div>
                </article>

                {/* ON-RECORD SOURCING */}
                <article className="bg-card border-4 border-text-primary p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
                    <h2 className="font-display text-3xl uppercase mb-4 text-rich-black border-b-4 border-text-primary pb-2">ON-RECORD SOURCING</h2>
                    <div className="font-mono text-sm text-text-primary leading-relaxed space-y-3">
                        <p>The CJP creator is currently operating anonymously. Two reasons: (a) the project lives or dies on the strength of the manifesto and the data, not the personality of the messenger; (b) the creator believes institutional press coverage should precede personal disclosure.</p>
                        <p>For an on-record interview, the creator will go on record when a verified Indian publication (TheWire, Newslaundry, Mojo Story, Scroll, The Print, BusinessToday, or equivalent) commits to a substantive piece — not a passing mention.</p>
                        <p>Until then: every claim on the site is sourced. Every blog post cites Wikipedia, ECI, RTI portal, or named publication. Quote the site, quote the manifesto, quote the blog. The creator is reachable for fact-checks via the press contact below.</p>
                    </div>
                </article>

                {/* CONTACT */}
                <article className="bg-accent text-rich-black border-4 border-rich-black p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
                    <h2 className="font-display text-3xl uppercase mb-4">PRESS CONTACT</h2>
                    <div className="font-mono text-sm md:text-base text-rich-black leading-relaxed space-y-3">
                        <p><strong>For press inquiries</strong> — fact-checks, interview requests, source verification, quote attribution — write through the project&apos;s join form with subject line <code className="bg-rich-black text-accent px-2 py-1">PRESS</code>.</p>
                        <p><Link href="/join" className="underline decoration-2 underline-offset-4 hover:no-underline">cockrochjantaparti.com/join</Link></p>
                        <p>Replies typically within 24 hours for verified press handles. Bring your outlet credential — the creator will respond to recognized journalist queries.</p>
                    </div>
                </article>

                {/* STORY ANGLES */}
                <article className="bg-card border-4 border-text-primary p-6 md:p-8 shadow-[8px_8px_0_0_#000]">
                    <h2 className="font-display text-3xl uppercase mb-6 text-rich-black border-b-4 border-text-primary pb-2">SUGGESTED STORY ANGLES</h2>
                    <div className="space-y-4 font-mono text-sm">
                        {[
                            "How one anonymous founder built a satirical political-art project alone in 5 days — and what it says about the cost-of-entry for political organising in 2026.",
                            "The 5 Demands manifesto explained — every demand has been independently proposed by legal scholars; CJP is the first project to bundle them.",
                            "Why a satirical political project on Day 5 is more transparent about its data (live Firestore counter) than most registered political parties.",
                            "The Hindi-English bilingual political-content gap — how CJP is targeting the 80% of Indian political readers who consume in Hindi.",
                            "What an open-source political-art project looks like — GitHub-public codebase, real-time membership data, zero corporate funding.",
                            "Generative Engine Optimisation (GEO) for political content — how CJP is among the first Indian sites publishing llms.txt and FAQPage schema for AI search engines.",
                            "The bandwidth-allocation thesis — CJP's argument that India's foreign-policy intensity is structurally trading off against domestic-crisis response. With current-events evidence (Cyprus deal vs heatwave vs fuel hike, May 2026).",
                        ].map((angle, i) => (
                            <div key={i} className="flex gap-3">
                                <span className="text-accent font-bold">→</span>
                                <span className="text-text-primary leading-relaxed">{angle}</span>
                            </div>
                        ))}
                    </div>
                </article>

                {/* CTA */}
                <article className="bg-rich-black text-white border-4 border-rich-black p-6 md:p-8 text-center">
                    <h2 className="font-display text-3xl uppercase mb-4">RESOURCES</h2>
                    <div className="grid sm:grid-cols-2 gap-3 font-mono text-xs uppercase">
                        <Link href="/manifesto" className="bg-accent text-rich-black px-4 py-3 hover:bg-white transition-colors">5 DEMANDS MANIFESTO →</Link>
                        <Link href="/blog" className="bg-white text-rich-black px-4 py-3 hover:bg-accent transition-colors">ALL 29+ BLOG POSTS →</Link>
                        <Link href="/founder" className="border-2 border-accent text-accent px-4 py-3 hover:bg-accent hover:text-rich-black transition-colors">CREATOR FILE →</Link>
                        <Link href="/faq" className="border-2 border-white text-white px-4 py-3 hover:bg-white hover:text-rich-black transition-colors">FAQ →</Link>
                    </div>
                </article>
            </section>
        </main>
    );
}
