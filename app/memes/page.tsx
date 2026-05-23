"use client";

import { useState } from "react";
import Link from "next/link";
import { UploadCloud, MessageSquare, Repeat2, Heart, Search, Crown, X } from "lucide-react";

export default function MemeWallPage() {
    const filters = ["Top Today", "Top Week", "All Time", "Hindi", "Regional"];
    const [activeTab, setActiveTab] = useState("Top Today");
    const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

    const memeImages = [
        "https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599054735388-bcb07bdd3574?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&auto=format&fit=crop",
    ];

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-20 relative">
            {/* Top Nav */}
            <nav className="sticky top-0 z-40 bg-bg border-b-4 border-text-primary px-4 py-3 flex justify-between items-center shadow-[0_4px_0_0_#000]">
                <Link href="/" className="font-display text-2xl uppercase tracking-widest hover:text-accent">🪳 MEMES</Link>
                <Link href="/tools/meme-generator" className="bg-accent text-black font-display uppercase tracking-widest px-6 py-2 border-2 border-black hover:bg-white transition-colors text-lg shadow-[2px_2px_0_0_#000]">
                    GENERATOR →
                </Link>
            </nav>

            {/* Hero */}
            <header className="px-4 py-16 md:py-24 text-center border-b-4 border-text-primary bg-card relative">
                <h1 className="font-display text-6xl md:text-8xl uppercase tracking-widest mb-6">THE GUTTER <span className="text-accent bg-black px-4 border-4 border-accent">WALL</span></h1>
                <p className="font-mono text-xl max-w-2xl mx-auto text-text-secondary mb-12">Drop your finest cockroaches. If it's funny, it stays. If it hurts politicians, it gets pinned.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => setIsUploadModalOpen(true)} className="bg-alert text-white font-display text-3xl uppercase px-10 py-5 border-4 border-text-primary shadow-[8px_8px_0_0_#000] hover:scale-105 transition-transform flex items-center justify-center gap-3">
                        <UploadCloud size={32} /> DROP YOUR MEME
                    </button>
                    <button className="bg-bg text-text-primary font-display text-3xl uppercase px-10 py-5 border-4 border-text-primary shadow-[8px_8px_0_0_#FFD60A] hover:scale-105 transition-transform flex items-center justify-center gap-3">
                        <Search size={32} /> SEARCH
                    </button>
                </div>
            </header>

            {/* Filters */}
            <div className="sticky top-[60px] z-30 bg-bg/90 backdrop-blur-md px-4 py-4 border-b-4 border-text-primary flex overflow-x-auto gap-4 snap-x justify-start md:justify-center">
                {filters.map(f => (
                    <button
                        key={f}
                        onClick={() => setActiveTab(f)}
                        className={`snap-center whitespace-nowrap font-display uppercase text-xl px-6 py-2 border-2 border-text-primary transition-all shadow-[2px_2px_0_0_#000] ${activeTab === f ? 'bg-text-primary text-bg translate-y-1 shadow-none' : 'bg-card text-rich-black hover:bg-accent hover:text-black'}`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Upload Meme Modal */}
            {isUploadModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-card w-full max-w-2xl border-4 border-text-primary shadow-[16px_16px_0_0_#FFD60A] relative flex flex-col animate-in zoom-in-95 duration-200">
                        <button onClick={() => setIsUploadModalOpen(false)} className="absolute -top-6 -right-6 bg-alert border-4 border-text-primary p-2 text-black hover:scale-110 transition-transform">
                            <X size={32} />
                        </button>

                        <div className="p-8 border-b-4 border-text-primary bg-bg text-center">
                            <h2 className="font-display text-5xl uppercase text-rich-black tracking-widest leading-none">DROP IT.</h2>
                        </div>

                        <div className="p-8 space-y-6">
                            <div className="border-4 border-dashed border-text-primary bg-bg/50 h-48 flex flex-col items-center justify-center text-text-secondary hover:border-accent hover:text-accent transition-colors cursor-pointer relative overflow-hidden group">
                                <UploadCloud size={48} className="mb-4 group-hover:-translate-y-2 transition-transform" />
                                <span className="font-mono uppercase font-bold text-center">DRAG & DROP<br />OR BROWSE</span>
                            </div>

                            <div>
                                <label className="font-mono text-xs uppercase text-accent font-bold mb-2 block">CAPTION (KEEP IT GUTTER)</label>
                                <input type="text" placeholder="I made this instead of applying for jobs..." className="w-full bg-bg border-4 border-text-primary p-4 font-mono text-rich-black focus:outline-none focus:border-white" />
                            </div>

                            <button onClick={() => setIsUploadModalOpen(false)} className="w-full bg-accent text-black font-display text-3xl uppercase py-4 border-4 border-text-primary shadow-[8px_8px_0_0_#000] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] transition-all">
                                UPLOAD MEME
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Masonry Grid */}
            <section className="px-4 py-8 md:py-12 max-w-[1600px] mx-auto z-10 relative">
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                    {/* Pinned Meme of the Day */}
                    <div className="break-inside-avoid bg-accent p-2 border-4 border-rich-black shadow-[8px_8px_0_0_#000] mb-6 relative group">
                        <div className="absolute -top-4 -right-4 bg-rich-black text-accent p-2 border-4 border-accent rounded-full animate-bounce z-10"><Crown size={24} /></div>
                        <div className="w-full aspect-[4/5] border-2 border-rich-black relative overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1542728928-1413d1894ed1?w=800&q=80&auto=format&fit=crop" alt="Meme of the day" className="w-full h-full object-cover" loading="lazy" />
                            <div className="absolute inset-0 bg-rich-black/45"></div>
                            <div className="absolute inset-x-0 bottom-4 text-center font-display text-4xl text-white uppercase tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">EMPLOYED?</div>
                        </div>
                        <div className="pt-3 pb-2 px-2 flex justify-between items-center text-rich-black font-mono">
                            <span className="font-bold uppercase tracking-widest text-xs">@cjp_memer</span>
                            <div className="flex gap-4 text-sm font-bold">
                                <span className="flex items-center gap-1"><Heart size={16} /> 14K</span>
                                <span className="flex items-center gap-1"><MessageSquare size={16} /> 2K</span>
                            </div>
                        </div>
                    </div>

                    {/* Standard Memes generated structurally */}
                    {memeImages.map((src, i) => {
                        const aspectRatios = ["aspect-[3/4]", "aspect-square", "aspect-[4/5]", "aspect-[16/9]"];
                        const ratio = aspectRatios[i % aspectRatios.length];
                        return (
                            <div key={i} className="break-inside-avoid bg-card border-4 border-text-primary shadow-[8px_8px_0_0_#000] hover:shadow-[8px_8px_0_0_#FFD60A] hover:-translate-y-1 transition-all group overflow-hidden mb-6 relative">
                                <div className={`w-full ${ratio} border-b-4 border-text-primary relative overflow-hidden`}>
                                    <img src={src} alt={`Meme ${i + 1}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-rich-black/80 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity z-10">
                                        <Link href={`/tools/meme-generator?template=${i}`} className="bg-accent text-rich-black p-3 border-4 border-rich-black hover:scale-110 shadow-[4px_4px_0_0_#000]" title="Remix this template">
                                            <Repeat2 size={24} />
                                        </Link>
                                        <button className="bg-white text-rich-black p-3 border-4 border-rich-black hover:scale-110 shadow-[4px_4px_0_0_#FFD60A]" title="Like meme">
                                            <Heart size={24} />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-3 bg-card font-mono text-xs flex justify-between items-center relative z-20">
                                    <span className="text-text-secondary uppercase">@user_{i + 100}</span>
                                    <span className="font-bold text-accent">{(Math.random() * 10).toFixed(1)}k ♥</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </main>
    );
}
