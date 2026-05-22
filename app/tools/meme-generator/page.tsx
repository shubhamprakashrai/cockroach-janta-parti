"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Share2, Instagram, Wand2, Plus, Type, Image as ImageIcon } from "lucide-react";

export default function MemeGeneratorPage() {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");

    const templates = [
        { name: "CJI Remark", bg: "bg-alert" },
        { name: "Cockroach Poster", bg: "bg-accent" },
        { name: "Main Bhi", bg: "bg-text-primary" },
        { name: "Blank Canvas", bg: "bg-bg" }
    ];

    const [activeTemplate, setActiveTemplate] = useState(templates[0]);

    return (
        <main className="min-h-screen bg-bg text-text-primary flex flex-col md:flex-row overflow-hidden">

            {/* LEFT PANEL - Controls (40%) */}
            <div className="w-full md:w-[40%] bg-card border-r-4 border-text-primary flex flex-col h-[50vh] md:h-screen overflow-y-auto">
                <div className="p-6 border-b-4 border-text-primary bg-bg sticky top-0 z-10 flex justify-between items-center">
                    <Link href="/memes" className="font-mono text-sm uppercase font-bold hover:text-accent">← BACK TO MEMES</Link>
                    <h1 className="font-display text-3xl uppercase tracking-widest text-accent">GENERATOR</h1>
                </div>

                <div className="p-6 md:p-8 space-y-8 flex-1">
                    {/* Templates */}
                    <div>
                        <h2 className="font-mono text-sm font-bold uppercase mb-4 text-text-secondary">1. SELECT TEMPLATE</h2>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            {templates.map((t, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveTemplate(t)}
                                    className={`aspect-video flex items-center justify-center border-4 border-text-primary font-mono text-xs uppercase font-bold hover:scale-105 transition-transform ${activeTemplate.name === t.name ? 'ring-4 ring-accent' : ''} ${t.bg} ${t.bg === 'bg-bg' ? 'text-text-primary' : 'text-black'}`}
                                >
                                    {t.name}
                                </button>
                            ))}
                        </div>
                        <button className="w-full bg-bg border-4 border-text-primary py-3 font-mono text-xs font-bold uppercase hover:bg-text-primary hover:text-bg flex justify-center items-center gap-2">
                            <ImageIcon size={16} /> UPLOAD YOUR OWN
                        </button>
                    </div>

                    {/* Text Editor */}
                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <h2 className="font-mono text-sm font-bold uppercase text-text-secondary">2. ADD TEXT</h2>
                            <button className="bg-text-primary text-bg px-2 py-1 flex justify-center items-center gap-1 font-mono text-[10px] uppercase font-bold border-2 border-text-primary hover:bg-accent hover:border-accent">
                                <Wand2 size={12} /> AI SUGGEST
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Fonts & Colors */}
                            <div className="flex gap-4">
                                <select className="flex-1 bg-card border-4 border-text-primary px-4 py-2 font-mono text-sm uppercase text-rich-black outline-none cursor-pointer">
                                    <option>Impact (Classic)</option>
                                    <option>Anton (Brutalist)</option>
                                    <option>Comic Sans (Irony)</option>
                                    <option>Arial (Boring)</option>
                                </select>
                                <div className="flex bg-card border-4 border-text-primary">
                                    {['#FFFFFF', '#FFD60A', '#FF3B30', '#00FF88', '#000000'].map((c, i) => (
                                        <button key={i} className="w-8 h-full border-r-2 last:border-r-0 border-text-primary/50 hover:bg-white/20" style={{ backgroundColor: c }}></button>
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <Type size={16} className="absolute left-3 top-3 text-text-secondary" />
                                <input
                                    type="text"
                                    className="w-full bg-bg border-4 border-text-primary p-3 pl-10 font-display text-xl uppercase focus:border-accent focus:outline-none placeholder-text-secondary text-rich-black"
                                    placeholder="TOP TEXT"
                                    value={topText}
                                    onChange={(e) => setTopText(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <Type size={16} className="absolute left-3 top-3 text-text-secondary" />
                                <input
                                    type="text"
                                    className="w-full bg-bg border-4 border-text-primary p-3 pl-10 font-display text-xl uppercase focus:border-accent focus:outline-none placeholder-text-secondary text-rich-black"
                                    placeholder="BOTTOM TEXT"
                                    value={bottomText}
                                    onChange={(e) => setBottomText(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Overlays / Stickers */}
                    <div>
                        <h2 className="font-mono text-sm font-bold uppercase mb-4 text-text-secondary">3. ADD STICKERS</h2>
                        <div className="flex gap-4">
                            {['🪳', '🤡', '🔥', '💰'].map((em, i) => (
                                <button key={i} className="w-12 h-12 flex items-center justify-center text-3xl bg-bg border-2 border-text-primary hover:bg-card hover:scale-110 transition-transform">
                                    {em}
                                </button>
                            ))}
                            <button className="w-12 h-12 flex items-center justify-center bg-bg border-2 border-text-primary text-text-secondary hover:text-rich-black border-dashed">
                                <Plus size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL - Canvas (60%) */}
            <div className="w-full md:w-[60%] flex flex-col h-[50vh] md:h-screen bg-bg relative">
                <div className="flex-1 p-8 flex justify-center items-center relative overflow-hidden">

                    {/* Live Canvas Mockup */}
                    <div className={`w-full max-w-lg aspect-square ${activeTemplate.bg} border-8 border-text-primary flex flex-col justify-between items-center p-8 text-center relative shadow-[16px_16px_0_0_#000]`}>

                        <h2 className={`font-display text-5xl md:text-7xl uppercase leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,1)] ${activeTemplate.bg === 'bg-bg' ? 'text-rich-black' : 'text-rich-black'}`}>
                            {topText || "TOP TEXT"}
                        </h2>

                        <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20 text-[10rem]">
                            🪳
                        </div>

                        <h2 className={`font-display text-5xl md:text-7xl uppercase leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,1)] z-10 ${activeTemplate.bg === 'bg-bg' ? 'text-rich-black' : 'text-rich-black'}`}>
                            {bottomText || "BOTTOM TEXT"}
                        </h2>

                        <div className="absolute bottom-2 right-4 font-mono text-[10px] font-bold text-rich-black/50 uppercase tracking-widest bg-black px-1">
                            @cockrochjantaparti.com
                        </div>
                    </div>

                </div>

                {/* Bottom Actions Container */}
                <div className="bg-card border-t-4 border-text-primary p-4 z-10 flex flex-wrap gap-4">
                    {/* Downlaod Action */}
                    <button className="flex-1 bg-accent text-black font-display text-2xl uppercase py-4 border-4 border-black hover:bg-white transition-colors flex justify-center items-center gap-2 shadow-[4px_4px_0_0_#000] min-w-[200px]">
                        <Download size={24} /> DOWNLOAD PNG
                    </button>

                    {/* Share Actions */}
                    <div className="flex gap-4 min-w-max">
                        <button className="bg-success text-white font-mono font-bold text-sm uppercase px-6 py-4 border-4 border-black hover:bg-white flex justify-center items-center gap-2 shadow-[4px_4px_0_0_#000]">
                            <Share2 size={16} /> WA SHARE
                        </button>
                        <button className="bg-[#E1306C] text-white font-mono font-bold text-sm uppercase px-6 py-4 border-4 border-black hover:bg-white hover:text-black flex justify-center items-center gap-2 shadow-[4px_4px_0_0_#000]">
                            <Instagram size={16} /> POST IG
                        </button>
                        <button className="bg-white text-black font-mono font-bold text-sm uppercase px-6 py-4 border-4 border-black hover:bg-black hover:text-white flex justify-center items-center gap-2 shadow-[4px_4px_0_0_#000]">
                            ADD TO WALL 🪳
                        </button>
                    </div>
                </div>
            </div>

        </main>
    );
}
