"use client";

import Link from "next/link";
import { ArrowRight, Quote, Link as LinkIcon, Download } from "lucide-react";

export default function FounderProfilePage() {
    const timeline = [
        { date: "May 15, 2026", title: "THE SPARK", desc: "CJI refers to local politicians as cockroaches during a public hearing on employment." },
        { date: "May 16, 2026", title: "THE FORM LAUNCH", desc: "Abhijeet launches a Google Form asking 'Are you a cockroach too?'. It goes viral within 4 hours." },
        { date: "May 19, 2026", title: "ONE LAKH MEMBERS", desc: "CJP surpasses 100,000 verified roaches. Mainstream media picks up the story." },
        { date: "May 20, 2026", title: "MANIFESTO DROP", desc: "The definitive 5-point manifesto is released, terrifying local sitting MLAs." }
    ];

    const press = [
        { source: "TheWire", title: "How a 'Cockroach' form united a generation." },
        { source: "Newslaundry", title: "Abhijeet Dipke: The man orchestrating the pest epidemic." },
        { source: "Republic", title: "Foreign hand? Boston University grad behind CJP?" }
    ];

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">
            {/* Top Nav */}
            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-4 flex justify-center shadow-[0_4px_0_0_#FFF]">
                <div className="font-mono text-sm font-bold uppercase tracking-widest text-text-secondary">CJP ARCHIVES / SUBJECT 001</div>
            </nav>

            {/* Hero */}
            <header className="px-4 py-20 text-center border-b-4 border-text-primary bg-card relative">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    {/* Mock Photo Block */}
                    <div className="w-64 h-64 bg-text-primary border-8 border-bg shrink-0 relative shadow-[16px_16px_0_0_#FFD60A] rotate-3 overflow-hidden group">
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                        {/* Stand-in for founder photo */}
                        <div className="w-full h-full bg-gradient-to-br from-bg to-card flex items-center justify-center">
                            <span className="text-8xl mix-blend-overlay">👤</span>
                        </div>
                        <div className="absolute bottom-2 left-2 font-mono text-[10px] font-bold text-white bg-black px-2 uppercase z-20 border border-white">
                            DIPKE, A.
                        </div>
                    </div>

                    <div className="text-left">
                        <h1 className="font-display text-5xl md:text-8xl uppercase leading-none tracking-tighter mb-4 text-white">
                            ABHIJEET <span className="text-accent">DIPKE.</span>
                        </h1>
                        <p className="font-mono text-xl md:text-2xl font-bold uppercase bg-black inline-block px-4 py-2 text-white border-2 border-text-primary">
                            THE ORIGINAL ROACH
                        </p>
                    </div>
                </div>
            </header>

            <section className="max-w-6xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-16">

                {/* Left Col - Context */}
                <div className="space-y-12">

                    <div className="bg-card border-4 border-text-primary p-8 shadow-[8px_8px_0_0_#000]">
                        <h2 className="font-display text-3xl uppercase text-white mb-6 border-b-4 border-text-primary pb-2 flex justify-between">
                            BACKGROUND <span className="text-accent text-3xl">🎓</span>
                        </h2>
                        <div className="space-y-6 font-mono text-sm leading-relaxed text-text-secondary font-bold">
                            <div className="p-4 border-l-4 border-blue-500 bg-bg">
                                <h3 className="font-display text-2xl text-blue-500 mb-2">BOSTON UNIVERSITY</h3>
                                <p>Holding a degree from BU, Abhijeet merges international political campaign strategies with grassroots Indian meme culture. This lethal combination birthed the CJP infrastructure.</p>
                            </div>
                            <div className="p-4 border-l-4 border-green-500 bg-bg">
                                <h3 className="font-display text-2xl text-green-500 mb-2">AAP CONNECTION</h3>
                                <p>A former strategist linked to the Aam Aadmi Party's digital wings. Left the traditional structure realizing that modern Gen-Z electorate prefers unhinged satire over press releases.</p>
                            </div>
                        </div>
                    </div>

                    {/* Quotes Carousel (Static Mockup) */}
                    <div className="bg-accent text-black p-8 border-4 border-black relative">
                        <Quote size={64} className="absolute top-4 right-4 opacity-20" />
                        <p className="font-display text-4xl uppercase leading-tight italic mb-6 relative z-10">
                            "They called us pests because we survive everything they throw at us. We just decided to organize the hive."
                        </p>
                        <p className="font-mono font-bold uppercase tracking-widest text-xs">— A. Dipke, May 2026</p>
                    </div>

                </div>

                {/* Right Col - Timelines & Press */}
                <div className="space-y-16">

                    {/* Timeline */}
                    <div>
                        <h2 className="font-display text-4xl uppercase text-white mb-8 border-b-4 border-text-primary pb-2">THE GENESIS TIMELINE</h2>
                        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px before:h-full before:w-1 before:bg-text-primary">
                            {timeline.map((item, i) => (
                                <div key={i} className="relative flex items-center justify-between group">
                                    <div className="flex flex-col items-center justify-center w-6 z-10 relative left-0">
                                        <div className={`w-4 h-4 rounded-full border-4 border-black ${i === 0 ? 'bg-alert w-6 h-6' : 'bg-accent'}`}></div>
                                    </div>
                                    <div className="w-[calc(100%-2rem)] bg-card p-6 border-4 border-text-primary shadow-[4px_4px_0_0_#FFF] hover:-translate-y-1 transition-transform cursor-pointer hover:shadow-[4px_4px_0_0_#FFD60A] hover:border-accent">
                                        <div className="font-mono text-[10px] text-accent uppercase font-bold mb-2 tracking-widest">{item.date}</div>
                                        <h3 className="font-display text-2xl uppercase text-white mb-2">{item.title}</h3>
                                        <p className="font-hindi text-text-secondary text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Press */}
                    <div className="bg-black border-4 border-text-primary p-8">
                        <h2 className="font-display text-3xl uppercase text-white mb-6 border-b-4 border-text-primary pb-2 flex items-center justify-between">
                            MEDIA DOSSIER <span className="animate-pulse">🔴</span>
                        </h2>
                        <div className="space-y-4 font-mono">
                            {press.map((p, i) => (
                                <a href="#" key={i} className="flex gap-4 group hover:bg-card p-2 -mx-2 transition-colors border-b-2 border-text-primary/20 pb-4">
                                    <LinkIcon size={16} className="text-text-secondary shrink-0 mt-1 group-hover:text-accent" />
                                    <div>
                                        <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-1">{p.source}</span>
                                        <span className="text-white hover:underline">{p.title}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

            </section>
        </main>
    );
}
