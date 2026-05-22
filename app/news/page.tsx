"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Clock, Share2, CornerRightUp } from "lucide-react";

export default function NewsAggregatorPage() {
    const filters = ["All", "Today", "This Week", "Hindi", "English"];
    const sources = ["All Sources", "Republic", "BusinessToday", "Al Jazeera", "ThePrint"];

    const [activeFilter, setActiveFilter] = useState("All");

    const newsItems = [
        { source: "ThePrint", title: "Over 3.5 Lakh Unemployed Youth Join Cockroach Janta Party", time: "2h ago", readTime: "30s", summary: "The newly formed party hits 3.5L members via google form after CJI remark.", img: "bg-blue-900" },
        { source: "BusinessToday", title: "CJP Surpasses BJP on Instagram with 9.3M Followers", time: "5h ago", readTime: "45s", summary: "Following a massive surge of Gen-Z support, CJP becomes the most followed.", img: "bg-green-900" },
        { source: "The Wire", title: "Mahua Moitra officially verified as CJP member", time: "1d ago", readTime: "1m", summary: "TMC MP embraces the 'Main Bhi Cockroach' movement publicly on X.", img: "bg-red-900" },
        { source: "Republic", title: "Is 'Cockroach Janta Party' a Threat to Democracy? Experts Debate", time: "1d ago", readTime: "30s", summary: "A heated panel discussion on the rise of satirical political factions.", img: "bg-yellow-900" },
        { source: "Al Jazeera", title: "India's Youth Reclaim 'Cockroach' Slur in Viral Political Movement", time: "2d ago", readTime: "2m", summary: "An analysis of the socio-economic factors driving the CJP phenomenon.", img: "bg-purple-900" },
        { source: "Zee News", title: "लाखों युवा बने 'कॉकरोच', सोशल मीडिया पर छिड़ी नई बहस", time: "2d ago", readTime: "45s", summary: "CJI की टिप्पणी के बाद 'मैं भी कॉकरोच' अभियान ने पकड़ा जोर।", img: "bg-orange-900" },
    ];

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-20 flex flex-col">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-card border-b-4 border-text-primary px-4 py-4 shadow-[0_4px_0_0_#000] flex justify-between items-center">
                <Link href="/" className="font-display text-2xl uppercase tracking-widest hover:text-accent">🪳 CJP NEWS</Link>
                <div className="hidden md:flex gap-4">
                    <input type="text" placeholder="Search gutters..." className="bg-bg border-4 border-text-primary px-4 py-2 font-mono uppercase text-sm focus:outline-none focus:border-accent" />
                </div>
            </nav>

            {/* Header */}
            <header className="px-4 py-12 md:py-20 border-b-4 border-text-primary bg-bg text-center">
                <h1 className="font-display text-5xl md:text-7xl uppercase mb-6 tracking-wide text-rich-black">THE ROACH <span className="text-accent">REPORT</span></h1>
                <p className="font-mono text-xl uppercase tracking-widest text-text-secondary border-b-2 border-text-primary inline-block pb-1">Aggregated News. Zero BS.</p>
            </header>

            <div className="flex flex-col xl:flex-row max-w-[1400px] mx-auto w-full border-x-4 border-bg lg:border-text-primary">

                {/* Main Content */}
                <div className="flex-1 xl:border-r-4 xl:border-text-primary h-full">
                    {/* Filters Bar */}
                    <div className="sticky top-[68px] z-40 bg-bg p-4 border-b-4 border-text-primary flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex flex-wrap gap-2">
                            {filters.map(f => (
                                <button
                                    key={f}
                                    onClick={() => setActiveFilter(f)}
                                    className={`font-mono font-bold uppercase text-xs px-4 py-2 border-2 border-text-primary hover:bg-text-primary hover:text-bg transition-colors ${activeFilter === f ? 'bg-text-primary text-bg' : 'bg-card text-rich-black'}`}
                                >
                                    {f}
                                </button>
                            ))}
                        </div>
                        <select className="bg-card font-mono text-xs uppercase border-2 border-text-primary px-4 py-2 outline-none text-rich-black appearance-none cursor-pointer">
                            {sources.map(s => <option key={s}>{s}</option>)}
                        </select>
                    </div>

                    {/* News Grid */}
                    <div className="p-4 md:p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {newsItems.map((news, i) => (
                                <div key={i} className="bg-card border-4 border-text-primary shadow-[8px_8px_0_0_#000] hover:shadow-[8px_8px_0_0_#FFD60A] hover:-translate-y-2 transition-all flex flex-col group cursor-pointer">
                                    {/* Thumbnail */}
                                    <div className={`w-full aspect-video ${news.img} border-b-4 border-text-primary relative overflow-hidden flex items-center justify-center`}>
                                        <div className="font-display text-4xl opacity-50 group-hover:scale-110 transition-transform">MEDIA</div>
                                        <div className="absolute bottom-2 right-2 bg-black/80 font-mono text-[10px] text-white px-2 py-1 uppercase tracking-widest border border-text-primary mix-blend-difference">
                                            <Clock size={10} className="inline mr-1" /> {news.readTime} READ
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="bg-accent text-black font-display tracking-widest px-2 py-1 text-xs uppercase shadow-[2px_2px_0_0_#000]">{news.source}</span>
                                            <span className="font-mono text-xs text-text-secondary">{news.time}</span>
                                        </div>

                                        <h2 className="font-display text-2xl md:text-3xl leading-tight uppercase mb-4 group-hover:text-accent transition-colors">{news.title}</h2>
                                        <p className="font-hindi text-text-secondary text-sm md:text-base leading-relaxed mb-6 flex-1">{news.summary}</p>

                                        <div className="flex justify-between items-center border-t-2 border-border pt-4 mt-auto">
                                            <span className="font-mono uppercase font-bold text-sm hover:underline decoration-2 underline-offset-4 flexItems-center gap-1">READ FULL <CornerRightUp size={14} className="inline" /></span>
                                            <button className="text-text-primary hover:text-accent"><Share2 size={18} /></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Skeleton Loaders for Infinite Scroll */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[1, 2, 3].map((skeleton) => (
                                <div key={skeleton} className="bg-card border-4 border-text-primary/50 flex flex-col pointer-events-none opacity-50">
                                    <div className="w-full aspect-video bg-text-primary/20 animate-pulse border-b-4 border-text-primary/50"></div>
                                    <div className="p-6 flex-1 flex flex-col space-y-4">
                                        <div className="flex justify-between items-start">
                                            <div className="w-16 h-4 bg-text-primary/20 animate-pulse"></div>
                                            <div className="w-10 h-3 bg-text-primary/20 animate-pulse"></div>
                                        </div>
                                        <div className="w-full h-8 bg-text-primary/20 animate-pulse mt-2"></div>
                                        <div className="w-3/4 h-8 bg-text-primary/20 animate-pulse"></div>
                                        <div className="space-y-2 mt-4">
                                            <div className="w-full h-3 bg-text-primary/20 animate-pulse"></div>
                                            <div className="w-5/6 h-3 bg-text-primary/20 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-12 text-center">
                            <span className="font-mono text-text-secondary uppercase text-sm animate-pulse">Loading more gutters...</span>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Timeline */}
                <aside className="hidden xl:block w-[350px] bg-card p-6 h-screen sticky top-[68px] overflow-y-auto border-r-4 border-text-primary">
                    <h3 className="font-display text-3xl uppercase text-accent border-b-4 border-accent pb-2 mb-8">LATEST RADAR</h3>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-text-primary">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-6 h-6 rounded-full border-4 border-black bg-accent z-10 relative"></div>
                                <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-bg p-4 border-2 border-text-primary shadow-[4px_4px_0_0_#000] ml-4 md:ml-0 md:group-odd:mr-8 md:group-even:ml-8 hover:-translate-y-1 transition-transform cursor-pointer">
                                    <div className="font-mono text-[10px] text-text-secondary uppercase mb-2">10 mins ago</div>
                                    <div className="font-hindi text-sm text-rich-black font-bold mb-1">Youth protests across 5 cities demanding jobs.</div>
                                    <div className="font-mono text-[10px] text-accent">Source: PTI</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>

            </div>
        </main>
    );
}
