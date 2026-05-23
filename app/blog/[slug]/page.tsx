"use client";

import Link from "next/link";
import { Clock, Facebook, Instagram, Twitter, MessageSquare, Quote, ArrowRight } from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const currentUrl = `cjp.in/blog/${params.slug || 'slug'}`;

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24 border-x-4 lg:border-x-[16px] border-text-primary">

            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-3 shadow-[0_4px_0_0_#000]">
                <Link href="/blog" className="font-mono text-sm font-bold uppercase hover:text-accent">← ALL POSTS</Link>
            </nav>

            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_300px] gap-12 items-start relative pb-16 pt-8 px-4 lg:px-8 border-b-4 border-text-primary">

                {/* Main Content */}
                <article className="min-w-0">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="bg-accent text-black font-mono font-bold text-[10px] uppercase tracking-widest px-2 py-1 border-2 border-black inline-block mb-6 shadow-[2px_2px_0_0_#000]">
                            HISTORY
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-[5rem] uppercase text-rich-black leading-none tracking-tight mb-8">
                            How a Single WhatsApp Forward Spawned a Movement.
                        </h1>
                        <div className="font-mono text-sm font-bold uppercase text-text-secondary flex flex-wrap gap-6 items-center">
                            <span className="text-rich-black border-b-2 border-accent pb-1">BY: ABHIJEET DIPKE</span>
                            <span>MAY 21, 2026</span>
                            <span className="flex items-center gap-1"><Clock size={14} /> 5 MIN READ</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="w-full aspect-video border-4 border-text-primary mb-12 shadow-[12px_12px_0_0_#FFD60A] overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1611605698335-8b1569810432?w=1400&q=80&auto=format&fit=crop" alt="A movement is born — WhatsApp on smartphone" className="w-full h-full object-cover" loading="eager" />
                    </div>

                    {/* Body */}
                    <div className="prose prose-invert prose-lg max-w-none font-hindi space-y-8 bg-card p-6 md:p-12 border-4 border-text-primary">
                        <p className="text-xl md:text-2xl leading-relaxed font-bold text-rich-black uppercase font-display tracking-wide mb-8">
                            It wasn't a master plan. It was just a joke that went too far. Two weeks ago, the Cockroach Janta Party didn't exist. Today, it has over a million verified members.
                        </p>

                        <p>
                            When the Honorable CJI made that off-the-cuff remark during the Tuesday morning unemployment hearing, the usual political machinery geared up. Opposition leaders drafted angry press releases. News channels debated it at 9 PM. But something fundamentally different was happening in the group chats of unemployed graduates across India.
                        </p>

                        <h2 className="font-display text-4xl uppercase text-rich-black mt-12 mb-6 border-b-4 border-text-primary pb-2">The Digital Match</h2>

                        <p>
                            We didn't want apologies. Apologies from politicians are as common as potholes in Mumbai. We wanted acknowledgement of the absurdity. Thus, the Google Form was born. It asked very simple questions.
                        </p>

                        {/* Tweet Embed */}
                        <div className="my-10 bg-rich-black border-4 border-rich-black p-6 text-white not-prose">
                            <div className="flex items-center gap-4 mb-4">
                                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&q=80&auto=format&fit=crop" alt="Abhijeet Dipke" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                                <div>
                                    <div className="font-bold text-white">Abhijeet Dipke</div>
                                    <div className="font-mono text-xs text-white/60">@abhijeet_dipke</div>
                                </div>
                            </div>
                            <p className="text-xl font-hindi mb-4 text-white">If they think we are cockroaches, let&apos;s count the swarm. Fill this out if you&apos;re unemployed, lazy, and chronically online.</p>
                            <a href="#" className="font-mono text-sm text-accent break-all hover:underline">forms.google.com/cjp-roach-signup...</a>
                        </div>

                        <p>
                            Within 4 hours, it hit 10,000 submissons. Within 24 hours, the server caps triggered. People weren't just filling it out; they were putting "CJP Member #420" in their Instagram bios.
                        </p>

                        {/* Blockquote */}
                        <blockquote className="my-12 p-8 border-l-8 border-alert bg-bg text-2xl md:text-3xl font-display uppercase italic leading-tight relative">
                            <Quote className="absolute top-4 right-4 text-text-primary opacity-20" size={64} />
                            "A political party wasn't born that day. A digital union of the discarded was."
                        </blockquote>

                        <h2 className="font-display text-4xl uppercase text-rich-black mt-12 mb-6 border-b-4 border-text-primary pb-2">What Happens Next?</h2>
                        <p>
                            That's the question every news anchor is asking. Our answer is simple: We release the 5-point manifesto, we scale the swarm, and we refuse to vote for any candidate who doesn't explicitly endorse our right to exist in the gutters they created.
                        </p>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:sticky top-[100px] space-y-12 w-full max-w-md mx-auto lg:mx-0">

                    {/* TOC */}
                    <div className="bg-bg border-4 border-text-primary p-6 shadow-[8px_8px_0_0_#000]">
                        <h3 className="font-display text-2xl uppercase text-rich-black mb-4 border-b-2 border-text-primary pb-2">CONTENTS</h3>
                        <ul className="font-mono text-sm uppercase space-y-3 font-bold text-text-secondary">
                            <li className="hover:text-accent cursor-pointer">Introduction</li>
                            <li className="hover:text-accent cursor-pointer">The Digital Match</li>
                            <li className="hover:text-accent cursor-pointer">Mock Embeds</li>
                            <li className="hover:text-accent cursor-pointer">What Happens Next</li>
                        </ul>
                    </div>

                    {/* Share Sticky */}
                    <div className="bg-accent border-4 border-black p-6 shadow-[8px_8px_0_0_#000]">
                        <h3 className="font-display text-2xl uppercase text-black mb-4">DEPLOY STORY</h3>
                        <div className="flex gap-2">
                            <button className="flex-1 bg-black text-white hover:bg-white hover:text-black border-2 border-black p-3 flex justify-center transition-colors"><Twitter size={20} /></button>
                            <button className="flex-1 bg-black text-white hover:bg-white hover:text-black border-2 border-black p-3 flex justify-center transition-colors"><Facebook size={20} /></button>
                            <button className="flex-1 bg-black text-white hover:bg-white hover:text-black border-2 border-black p-3 flex justify-center transition-colors"><Instagram size={20} /></button>
                        </div>
                        <input type="text" readOnly value={currentUrl} className="w-full mt-4 bg-white/20 border-2 border-black p-2 font-mono text-[10px] text-black outline-none" />
                    </div>
                </aside>

            </div>

            {/* Footer Related & Comments */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 grid lg:grid-cols-2 gap-16">
                <div>
                    <h3 className="font-display text-4xl uppercase text-rich-black mb-8 border-b-4 border-text-primary pb-2 flex items-center justify-between">
                        THE GUTTER (COMMENTS) <MessageSquare size={32} />
                    </h3>
                    <div className="p-8 bg-card border-4 border-text-primary text-center">
                        <div className="text-4xl mb-4 opacity-50">🔒</div>
                        <h4 className="font-display text-2xl uppercase mb-2">RESTRICTED ACCESS</h4>
                        <p className="font-mono text-sm text-text-secondary mb-6">You must generate an official Roach ID Card to comment.</p>
                        <Link href="/tools/card" className="inline-block bg-accent text-black font-mono font-bold uppercase px-6 py-3 border-2 border-black hover:bg-white shadow-[4px_4px_0_0_#000]">
                            GET YOUR CARD
                        </Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-display text-4xl uppercase text-rich-black mb-8 border-b-4 border-text-primary pb-2">MORE ROASTS</h3>
                    <div className="space-y-6">
                        <Link href="#" className="block bg-card border-4 border-text-primary p-4 hover:border-accent hover:-translate-y-1 transition-all group">
                            <div className="font-mono text-[10px] uppercase text-text-secondary mb-1">RECOMMENDED</div>
                            <h4 className="font-display text-2xl text-rich-black uppercase leading-tight group-hover:text-accent">Top 10 ways to weaponize the CJP Meme Generator</h4>
                        </Link>
                        <Link href="#" className="block bg-bg border-4 border-text-primary p-4 hover:border-accent hover:-translate-y-1 transition-all group">
                            <div className="font-mono text-[10px] uppercase text-text-secondary mb-1">RECOMMENDED</div>
                            <h4 className="font-display text-2xl text-rich-black uppercase leading-tight group-hover:text-accent">Maharashtra Chapter crosses 50k members</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
