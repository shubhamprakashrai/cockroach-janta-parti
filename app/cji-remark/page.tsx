"use client";

import Link from "next/link";
import { PlayCircle, MessageSquare, Quote, Scale, ArrowRight } from "lucide-react";

export default function CjiExplainerPage() {
    const reactions = [
        { handle: "@angry_youth", text: "I have 2 degrees and no job, guess I am a cockroach.", likes: "12K" },
        { handle: "@delhi_memer", text: "New personality unlocked.", likes: "45K" },
        { handle: "@corporate_slave", text: "Wait till he sees what we do to the keyboards.", likes: "8K" },
        { handle: "@student_union", text: "This is exactly what the ruling class thinks of us. Disgusting. Join CJP.", likes: "22K" }
    ];

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24 border-x-[16px] border-alert">

            {/* Hero Illustration Block */}
            <header className="px-4 py-8 md:py-16 text-center border-b-8 border-text-primary bg-black relative">
                <div className="max-w-4xl mx-auto flex flex-col items-center">

                    {/* Court Block Mockup */}
                    <div className="w-full max-w-lg aspect-video border-8 border-text-primary mb-12 shadow-[16px_16px_0_0_rgba(255,59,48,1)] flex items-center justify-center relative overflow-hidden group cursor-pointer bg-bg">
                        <div className="absolute inset-0 bg-alert/20 pointer-events-none z-10"></div>
                        <Scale size={120} className="text-text-primary opacity-20" />
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <PlayCircle size={80} className="text-white group-hover:text-accent transition-colors drop-shadow-[0_4px_4px_rgba(0,0,0,1)]" />
                        </div>
                        <div className="absolute bottom-4 left-4 bg-black text-white font-mono text-xs font-bold px-2 py-1 uppercase tracking-widest border-2 border-text-primary z-20">
                            EXHIBIT A: THE GAFFE [0:45]
                        </div>
                    </div>

                    <div className="font-display text-4xl text-alert mb-4 tracking-widest uppercase">THE CATALYST.</div>
                    <h1 className="font-display text-5xl md:text-7xl xl:text-8xl uppercase tracking-tighter leading-[0.9] text-white">
                        "THESE <span className="text-alert underline decoration-8 underline-offset-8">COCKROACHES</span> INFEST THE SYSTEM..."
                    </h1>
                </div>
            </header>

            {/* Content Grip */}
            <section className="max-w-5xl mx-auto px-4 py-16">

                {/* Full Quote Callout */}
                <div className="bg-alert text-black p-8 md:p-12 border-8 border-black shadow-[16px_16px_0_0_#000] rotate-1 hover:rotate-0 transition-transform mb-20 relative">
                    <Quote size={80} className="absolute top-4 left-4 opacity-20" />
                    <p className="font-display text-3xl md:text-5xl uppercase leading-tight relative z-10 text-center">
                        "We cannot have these youth groups constantly disrupting the process. They are like cockroaches, multiplying everywhere and infesting the very fabric of our municipal systems."
                    </p>
                    <div className="text-center mt-8 font-mono font-bold uppercase tracking-widest text-sm border-t-4 border-black pt-4">
                        — Chief Justice Remark, May 15, 2026
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Explainer / Why it broke India */}
                    <div className="space-y-8">
                        <h2 className="font-display text-5xl uppercase text-white border-b-4 border-text-primary pb-4">Why This Broke India</h2>

                        <div className="space-y-6 font-hindi text-lg md:text-xl text-text-secondary leading-relaxed">
                            <p>
                                What was meant to be an off-the-cuff elitist dismissal during a hearing on youth unemployment immediately struck a nerve across the nation.
                            </p>
                            <p className="p-4 bg-card border-l-4 border-accent text-white">
                                The youth realized the establishment didn't fear their protests, but viewed them merely as pests to be eradicated.
                            </p>
                            <p>
                                On May 16th, Abhijeet Dipke dropped the <strong>"Are you a cockroach too?"</strong> Google form. Instead of being insulted, the youth leaned into the slur. The <em>Cockroach Janta Party</em> was born not in a political rally, but in the collective outrage of 5 million unemployed graduates.
                            </p>
                        </div>

                        <Link href="/manifesto" className="inline-flex bg-white text-black font-display text-2xl uppercase py-4 px-8 border-4 border-black hover:bg-accent hover:-translate-y-1 shadow-[8px_8px_0_0_#FFF] transition-all items-center gap-3">
                            READ THE MANIFESTO <ArrowRight size={24} />
                        </Link>
                    </div>

                    {/* Reactions Wall */}
                    <div className="bg-card border-4 border-text-primary p-6">
                        <h3 className="font-display text-3xl uppercase text-accent mb-6 flex items-center justify-between border-b-4 border-accent pb-2">
                            PUBLIC OUTRAGE <MessageSquare size={28} />
                        </h3>

                        <div className="space-y-4">
                            {reactions.map((r, i) => (
                                <div key={i} className="bg-bg border-2 border-text-primary p-4 hover:border-accent transition-colors">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="font-mono text-sm uppercase font-bold text-white tracking-widest">{r.handle}</span>
                                        <span className="font-mono text-xs text-text-secondary uppercase">{r.likes} LIKES</span>
                                    </div>
                                    <p className="font-hindi text-sm text-text-secondary">"{r.text}"</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-6">
                            <div className="text-5xl opacity-50">🪳🪳🪳</div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}
