"use client";

import Link from "next/link";
import { ArrowRight, Quote, Link as LinkIcon, Lock } from "lucide-react";

export default function FounderProfilePage() {
    const timeline = [
        { date: "Phase 0", title: "THE PROVOCATION", desc: "A hypothetical CJI remark calls youth groups 'cockroaches'. The thought experiment begins." },
        { date: "Phase 1", title: "THE OPEN FORM", desc: "Site launches with a single question: Are you a cockroach too? Anyone can sign up, anonymously." },
        { date: "Phase 2", title: "FOUNDING COHORT", desc: "First 50 founding roaches get permanent numbers + cards. Cohort fills up." },
        { date: "Phase 3 — Next", title: "STATE CHAPTERS", desc: "Once 5,000 sign-ups across 5 states, regional chapters open. WhatsApp groups, local meet-ups." }
    ];

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">
            {/* Top Nav */}
            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-4 flex justify-center shadow-[0_4px_0_0_#000]">
                <div className="font-mono text-sm font-bold uppercase tracking-widest text-text-secondary">CJP ARCHIVES / CREATOR FILE</div>
            </nav>

            {/* Hero */}
            <header className="px-4 py-20 text-center border-b-4 border-text-primary bg-card relative">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* Anonymous Placeholder Block */}
                    <div className="w-64 h-64 md:w-72 md:h-72 border-8 border-rich-black shrink-0 relative shadow-[16px_16px_0_0_#FFD60A] rotate-3 overflow-hidden bg-rich-black flex items-center justify-center">
                        <Lock size={96} className="text-accent" strokeWidth={2.5} />
                        <div className="absolute bottom-2 left-2 font-mono text-[10px] font-bold text-white bg-rich-black px-2 py-1 uppercase tracking-widest border border-white">
                            CREATOR · WITHHELD
                        </div>
                    </div>

                    <div className="text-left">
                        <h1 className="font-display text-5xl md:text-8xl uppercase leading-none tracking-tighter mb-4 text-rich-black">
                            ANON.<br /><span className="text-accent">CREATOR.</span>
                        </h1>
                        <p className="font-mono text-xl md:text-2xl font-bold uppercase bg-rich-black inline-block px-4 py-2 text-white border-2 border-text-primary mb-3">
                            CREATOR · CJP
                        </p>
                        <p className="font-mono text-xs uppercase tracking-widest text-text-secondary max-w-md">
                            The CJP project is being run anonymously. Focus on the manifesto, not the messenger.
                        </p>
                    </div>
                </div>
            </header>

            <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-16">

                {/* Left Col — The Brief */}
                <div className="space-y-12">

                    <div className="bg-card border-4 border-text-primary p-8 shadow-[8px_8px_0_0_#000]">
                        <h2 className="font-display text-3xl uppercase text-rich-black mb-6 border-b-4 border-text-primary pb-2">
                            THE BRIEF
                        </h2>
                        <div className="space-y-6 font-mono text-sm leading-relaxed text-text-secondary font-bold">
                            <div className="p-4 border-l-4 border-accent bg-bg">
                                <h3 className="font-display text-2xl text-accent mb-2">WHY ANONYMOUS</h3>
                                <p>This project lives or dies on the strength of the manifesto, the data, and the visual language. The creator&apos;s identity does not strengthen any of those. So it stays withheld. If we ever earn institutional press coverage, the creator will go on record then — not before.</p>
                            </div>
                            <div className="p-4 border-l-4 border-alert bg-bg">
                                <h3 className="font-display text-2xl text-alert mb-2">WHAT THIS IS NOT</h3>
                                <p>Not a registered political party. Not affiliated with the Election Commission, any sitting politician, judge, or media organisation. CJP is a satirical political-art project. The hypothetical scenarios on the site (including the CJI remark) are thought experiments, not events.</p>
                            </div>
                            <div className="p-4 border-l-4 border-success bg-bg">
                                <h3 className="font-display text-2xl text-success mb-2">CONTACT</h3>
                                <p>Press, partnerships, or anyone who wants to verify the project: write through the join form with subject &lsquo;PRESS&rsquo;. The creator reads every submission tagged that way.</p>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <div className="bg-accent text-rich-black p-8 border-4 border-rich-black relative">
                        <Quote size={64} className="absolute top-4 right-4 opacity-20" />
                        <p className="font-display text-4xl uppercase leading-tight italic mb-6 relative z-10">
                            &ldquo;They called us pests because we survive everything they throw at us. We just decided to organize the hive.&rdquo;
                        </p>
                        <p className="font-mono font-bold uppercase tracking-widest text-xs">— from the CJP manifesto</p>
                    </div>

                </div>

                {/* Right Col — Timelines */}
                <div className="space-y-16">

                    {/* Timeline */}
                    <div>
                        <h2 className="font-display text-4xl uppercase text-rich-black mb-8 border-b-4 border-text-primary pb-2">THE PROJECT ROADMAP</h2>
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-1 before:bg-text-primary">
                            {timeline.map((item, i) => (
                                <div key={i} className="relative flex items-center justify-between group">
                                    <div className="flex flex-col items-center justify-center w-6 z-10 relative left-0">
                                        <div className={`w-4 h-4 rounded-full border-4 border-black ${i === 0 ? 'bg-alert w-6 h-6' : 'bg-accent'}`}></div>
                                    </div>
                                    <div className="w-[calc(100%-2rem)] bg-card p-6 border-4 border-text-primary shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform cursor-pointer hover:shadow-[4px_4px_0_0_#FFD60A] hover:border-accent">
                                        <div className="font-mono text-[10px] text-accent uppercase font-bold mb-2 tracking-widest">{item.date}</div>
                                        <h3 className="font-display text-2xl uppercase text-rich-black mb-2">{item.title}</h3>
                                        <p className="font-hindi text-text-secondary text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Press Goal */}
                    <div className="bg-rich-black border-4 border-rich-black p-8 text-white">
                        <h2 className="font-display text-3xl uppercase text-white mb-6 border-b-4 border-white/20 pb-2">
                            PRESS COVERAGE
                        </h2>
                        <p className="font-mono text-sm uppercase tracking-widest text-white/70 mb-8 leading-relaxed">
                            This space is empty by design. Press coverage will appear here as we earn it &mdash; not before. No paid PR. Only organic earned media.
                        </p>
                        <Link
                            href="/manifesto"
                            className="inline-flex items-center gap-2 bg-accent text-rich-black font-mono font-bold text-xs uppercase tracking-widest px-4 py-2 border-2 border-accent hover:bg-white transition-colors"
                        >
                            READ THE MANIFESTO INSTEAD <ArrowRight size={14} />
                        </Link>
                    </div>

                </div>

            </section>
        </main>
    );
}
