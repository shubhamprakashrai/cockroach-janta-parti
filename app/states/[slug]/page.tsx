"use client";

import Link from "next/link";
import { Users, TrendingUp, Search, MapPin, AlertTriangle } from "lucide-react";

// In Next.js 13+ App router, params is passed as a Promise in dynamic routes in latest versions or direct object. 
// We will use standard typing for a client component.
export default function StateChapterPage({ params }: { params: { slug: string } }) {
    // Format slug to readable state name
    const rawState = params.slug || 'maharashtra';
    const stateName = rawState.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">

            {/* Navbar Map Pointer */}
            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-3 flex justify-between items-center shadow-[0_4px_0_0_#000]">
                <Link href="/" className="font-display text-2xl uppercase tracking-widest hover:text-accent">🪳 DIR</Link>
                <div className="font-mono text-sm font-bold uppercase bg-card border-2 border-text-primary px-4 py-1 flex items-center gap-2">
                    <MapPin size={16} className="text-accent" /> {stateName} CHAPTER
                </div>
            </nav>

            {/* Hero */}
            <header className="px-4 py-20 text-center border-b-4 border-text-primary bg-card relative overflow-hidden">

                {/* Background graphic */}
                <div className="absolute inset-0 opacity-10 flex items-center justify-center -rotate-6">
                    <div className="font-display text-[12rem] text-text-primary tracking-tighter w-[120%] text-center leading-[0.8] break-all mix-blend-overlay">
                        {stateName} {stateName} {stateName}
                    </div>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <div className="inline-flex bg-alert text-white font-mono font-bold text-xs uppercase px-3 py-1 border-2 border-black mb-6 rotate-2 shadow-[2px_2px_0_0_#000]">
                        ⚠️ ACTIVE INFESTATION ZONE
                    </div>
                    <h1 className="font-display text-6xl md:text-8xl uppercase tracking-widest mb-6 leading-none">
                        COCKROACHES OF <br /><span className="text-accent bg-black px-4 block md:inline-block border-4 border-accent mt-2 shadow-[8px_8px_0_0_#000]">{stateName}</span>
                    </h1>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-12 mb-8">
                        <div className="flex items-center gap-4 bg-bg border-4 border-text-primary p-4 shadow-[4px_4px_0_0_#000]">
                            <Users size={32} className="text-success" />
                            <div className="text-left font-mono">
                                <div className="text-3xl font-display text-rich-black">{Math.floor(Math.random() * 80 + 20).toFixed(1)}k+</div>
                                <div className="text-[10px] font-bold uppercase text-text-secondary">VERIFIED MEMBERS</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 bg-bg border-4 border-text-primary p-4 shadow-[4px_4px_0_0_#000]">
                            <TrendingUp size={32} className="text-accent" />
                            <div className="text-left font-mono">
                                <div className="text-3xl font-display text-rich-black">+{Math.floor(Math.random() * 15 + 2).toFixed(1)}k</div>
                                <div className="text-[10px] font-bold uppercase text-text-secondary">JOINED THIS WEEK</div>
                            </div>
                        </div>
                    </div>

                    <Link href="/join" className="inline-block bg-accent text-black font-display text-3xl uppercase px-12 py-5 border-4 border-black shadow-[8px_8px_0_0_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#FFD60A] transition-all">
                        JOIN THE {stateName.toUpperCase()} HORDE 🪳
                    </Link>
                </div>
            </header>

            {/* Local Leaderboard & News */}
            <section className="max-w-[1400px] mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12 border-x-4 border-bg lg:border-text-primary">

                {/* Top Members */}
                <div className="lg:col-span-1 space-y-6">
                    <h2 className="font-display text-4xl uppercase border-b-4 border-text-primary pb-2 flex items-center justify-between">
                        TOP ROACHES <span className="font-mono text-sm tracking-widest text-accent">#LDRBRD</span>
                    </h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((idx) => (
                            <div key={idx} className="bg-card border-4 border-text-primary p-4 flex items-center justify-between shadow-[4px_4px_0_0_#000] hover:-translate-y-1 transition-transform">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-bg border-2 border-text-primary flex items-center justify-center font-display text-xl">{idx}</div>
                                    <div>
                                        <div className="font-mono font-bold uppercase text-sm text-rich-black">@roach_{idx}x4{Math.floor(Math.random() * 99)}</div>
                                        <div className="font-mono text-[10px] text-text-secondary">Joined May '26</div>
                                    </div>
                                </div>
                                <div className="font-display text-xl text-accent">{Math.floor(Math.random() * 40 + 10)}k 🪳</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Local News Feed */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="font-display text-4xl uppercase border-b-4 border-text-primary pb-2 flex items-center justify-between">
                        REGIONAL RADAR <span className="font-mono text-sm tracking-widest text-alert">LIVE</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map(idx => (
                            <div key={idx} className="bg-card border-4 border-text-primary p-6 shadow-[8px_8px_0_0_#000] group cursor-pointer hover:border-accent">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="bg-white text-black px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest">
                                        LOCAL MEDIA
                                    </div>
                                    <div className="font-mono text-[10px] text-text-secondary">{Math.floor(Math.random() * 24) + 1}h ago</div>
                                </div>
                                <h3 className="font-display text-2xl uppercase leading-tight mb-2 group-hover:text-accent transition-colors">
                                    Youth Unemployment Surges in {stateName}, Local Leaders Blame "Cockroaches"
                                </h3>
                                <p className="font-hindi text-sm text-text-secondary">
                                    Following the dramatic rise of the CJP movement here, regional authorities are feeling the heat...
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regional Memes Grid (Pinterest style mockup) */}
            <section className="bg-black py-16 border-y-4 border-text-primary mt-12">
                <div className="max-w-[1600px] mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="font-display text-5xl uppercase text-rich-black mb-2 tracking-widest">LOCAL GUTTER DROPS</h2>
                        <p className="font-mono text-text-secondary uppercase">Memes targeting local politicians specifically.</p>
                    </div>

                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className={`break-inside-avoid bg-card border-4 border-text-primary shadow-[4px_4px_0_0_#000] relative overflow-hidden group ${i % 2 === 0 ? 'aspect-square' : 'aspect-[3/4]'}`}>
                                <div className="absolute inset-0 bg-bg flex items-center justify-center">
                                    <div className="text-[4rem] group-hover:scale-150 transition-transform duration-500 opacity-20">🪳</div>
                                </div>
                                <div className="absolute bottom-0 w-full p-2 bg-black/80 font-mono text-[10px] flex justify-between">
                                    <span className="text-text-secondary">@{stateName.substring(0, 3).toLowerCase()}_memer</span>
                                    <span className="text-accent">{(Math.random() * 5).toFixed(1)}k</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    );
}
