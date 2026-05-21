"use client";

import { useState } from "react";
import { Share2, Printer, Check, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ManifestoPage() {
    const [votes, setVotes] = useState<Record<number, 'agree' | 'disagree'>>({});

    const demands = [
        {
            id: 1,
            title: "NO RAJYA SABHA FOR RETIRED CJIs",
            desc: "Judges should not be rewarded with political seats post-retirement. It fundamentally compromises judicial independence and introduces a blatant conflict of interest during their final years on the bench.",
            why: [
                "Eliminates 'quid pro quo' rulings near retirement.",
                "Restores faith in the Supreme Court's impartial nature.",
                "Prevents the blurring of lines between judiciary and legislature."
            ],
            news: [
                { title: "Ex-CJI's RS Nomination Draws Ire", source: "TheWire", time: "2 yrs ago" },
                { title: "Why Post-Retirement Jobs for Judges are Problematic", source: "ThePrint", time: "1 yr ago" }
            ],
            baseAgree: 94
        },
        {
            id: 2,
            title: "CEC ARREST UNDER UAPA",
            desc: "If a legitimate vote is deleted from the electoral rolls, the Chief Election Commissioner should be held liable under strict UAPA laws. A deleted vote is an act of democratic terrorism.",
            why: [
                "Forces the ECI to maintain perfect voter rolls.",
                "Treats voter suppression with the severity it deserves.",
                "Applies equally to all states, regardless of ruling party."
            ],
            news: [
                { title: "20 Lakh Voters Missing in State Rolls", source: "BusinessToday", time: "3 mos ago" }
            ],
            baseAgree: 88
        },
        {
            id: 3,
            title: "50% WOMEN RESERVATION",
            desc: "Immediate 50% reservation for women in Parliament and Cabinet, implemented without the tricky expansion of the House. Representation should not be delayed by delimitation.",
            why: [
                "Actual representation, not just tokenism.",
                "Forces political parties to develop female leadership.",
                "Applicable immediately to existing seat counts."
            ],
            news: [
                { title: "Women's Bill Passed but Delayed to 2029", source: "The Hindu", time: "6 mos ago" }
            ],
            baseAgree: 82
        },
        {
            id: 4,
            title: "20-YEAR BAN FOR DEFECTING",
            desc: "Any MLA or MP who defects to another party after being elected must face a 20-year ban from contesting any election. No more horse-trading or 'resort politics'.",
            why: [
                "Ends the multi-crore MLA buying industry.",
                "Forces politicians to resign and fight purely on principle.",
                "Preserves the mandate given by the voters."
            ],
            news: [
                { title: "Resort Politics Returns: 40 MLAs Sequestered", source: "NDTV", time: "1 yr ago" }
            ],
            baseAgree: 98
        },
        {
            id: 5,
            title: "CANCEL BOUGHT MEDIA",
            desc: "Immediate cancellation of broadcasting licenses for news media houses owned directly or indirectly by mega-corporations like Ambani and Adani.",
            why: [
                "Breaks the corporate-media-political nexus.",
                "Restores independent journalism.",
                "Prevents monopolistic dictation of national narratives."
            ],
            news: [
                { title: "Corporate Takeover of Indie Media House", source: "Newslaundry", time: "2 yrs ago" }
            ],
            baseAgree: 91
        }
    ];

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-20">
            {/* Top Bar Navigation */}
            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-3 flex justify-between items-center shadow-[0_4px_0_0_#FFF]">
                <Link href="/" className="font-display text-2xl uppercase tracking-widest hover:text-accent">🪳 HOME</Link>
                <div className="flex gap-4">
                    <button className="font-mono text-sm uppercase border-2 border-text-primary px-4 py-1 hover:bg-text-primary hover:text-black">
                        Toggle Hind / Eng
                    </button>
                    <button className="bg-accent text-black font-mono font-bold text-sm uppercase border-2 border-black px-4 py-1 flex items-center gap-2 hover:bg-white">
                        <Printer size={16} /> Print PDF
                    </button>
                </div>
            </nav>

            {/* Hero */}
            <header className="px-4 py-20 text-center border-b-4 border-text-primary bg-card relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <div className="text-[15rem] font-display">5</div>
                </div>
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="font-display text-7xl md:text-9xl uppercase leading-none mb-6">THE 5<br /><span className="text-alert">DEMANDS.</span></h1>
                    <p className="font-mono text-xl md:text-2xl font-bold uppercase bg-black inline-block px-4 py-2 text-white border-2 border-text-primary tracking-widest">
                        Non-Negotiable. Radical. Logical.
                    </p>
                </div>
            </header>

            {/* Demands List */}
            <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
                {demands.map((demand, index) => (
                    <section key={demand.id} className="relative bg-bg border-4 border-text-primary shadow-[16px_16px_0_0_#FFD60A] hover:shadow-[16px_16px_0_0_#FFF] transition-all grid lg:grid-cols-3">

                        {/* Left Col - Content */}
                        <div className="lg:col-span-2 p-8 md:p-12 border-b-4 lg:border-b-0 lg:border-r-4 border-text-primary">
                            <div className="font-display text-6xl text-accent mb-6 leading-none tracking-tighter">0{demand.id}.</div>
                            <h2 className="font-display text-5xl md:text-6xl uppercase leading-none mb-8 bg-black/30 p-2 inline-block border-l-8 border-alert">{demand.title}</h2>
                            <p className="font-hindi text-xl md:text-2xl mb-10 leading-relaxed max-w-2xl text-text-secondary">
                                {demand.desc}
                            </p>

                            <div className="mb-12">
                                <h3 className="font-mono text-lg font-bold uppercase text-accent mb-4 border-b-2 border-text-primary pb-2 inline-block">Why it matters</h3>
                                <ul className="space-y-4 font-mono">
                                    {demand.why.map((bullet, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <span className="text-accent mt-1">🪳</span>
                                            <span className="text-lg">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Vote Actions */}
                            <div className="bg-card p-6 border-4 border-black shadow-[8px_8px_0_0_#000]">
                                <h4 className="font-display text-2xl uppercase mb-4 tracking-widest text-white">VOICE YOUR VOTE</h4>
                                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                                    <button
                                        onClick={() => setVotes(prev => ({ ...prev, [demand.id]: 'agree' }))}
                                        className={`flex-1 flex justify-center items-center gap-2 font-display text-3xl uppercase py-4 border-4 border-black transition-all ${votes[demand.id] === 'agree' ? 'bg-success text-black' : 'bg-bg text-white hover:bg-success hover:text-black shadow-[4px_4px_0_0_#FFF]'}`}
                                    >
                                        <Check size={28} /> AGREE
                                    </button>
                                    <button
                                        onClick={() => setVotes(prev => ({ ...prev, [demand.id]: 'disagree' }))}
                                        className={`flex-1 flex justify-center items-center gap-2 font-display text-3xl uppercase py-4 border-4 border-black transition-all ${votes[demand.id] === 'disagree' ? 'bg-alert text-black' : 'bg-bg text-white hover:bg-alert hover:text-black shadow-[4px_4px_0_0_#FFF]'}`}
                                    >
                                        <X size={28} /> DISAGREE
                                    </button>
                                </div>
                                <div className="flex justify-between items-center text-sm font-mono font-bold uppercase border-t-2 border-border pt-4">
                                    <span className="text-accent">
                                        {votes[demand.id] === 'agree' ? demand.baseAgree + 6 : votes[demand.id] === 'disagree' ? demand.baseAgree - 4 : demand.baseAgree}% AGREE WITH THIS
                                    </span>
                                    <button className="flex items-center gap-2 hover:text-accent decoration-2 underline-offset-4 hover:underline">
                                        <Share2 size={16} /> WA SHARE
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Col - Context & News */}
                        <div className="p-8 md:p-12 bg-black flex flex-col justify-between">
                            <div>
                                <h3 className="font-display text-3xl uppercase mb-6 text-white border-b-4 border-text-primary pb-2">RELATED NEWS</h3>
                                <div className="space-y-6">
                                    {demand.news.map((n, i) => (
                                        <a href="#" key={i} className="block group border-l-4 border-accent pl-4 py-2 hover:bg-card">
                                            <div className="font-mono text-xs text-text-secondary uppercase mb-2">{n.source} • {n.time}</div>
                                            <div className="font-hindi font-bold leading-tight group-hover:text-accent transition-colors">{n.title}</div>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-12 text-center">
                                <div className="text-[6rem] opacity-20">🪳</div>
                            </div>
                        </div>

                    </section>
                ))}
            </div>

        </main>
    );
}
