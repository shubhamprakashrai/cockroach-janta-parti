"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Play, Pause, FastForward, Rewind, Music, Upload, MessageCircle } from "lucide-react";

export default function AnthemPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [lang, setLang] = useState<'EN' | 'HI'>('EN');

    // Simulated lyrics syncing
    const [activeLine, setActiveLine] = useState(0);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isPlaying) {
            interval = setInterval(() => {
                setActiveLine(prev => (prev + 1) % 5);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [isPlaying]);

    const lyrics = {
        EN: [
            "[Bass Drop] We are the swarm in the night...",
            "Crawling up your pristine walls, oh so tight",
            "You sweep, you spray, you lock the door",
            "But we breed in the cracks of your marble floor",
            "CHORUS: Take a step now! Join the hive!"
        ],
        HI: [
            "[Bass Drop] हम रात का झुंड हैं...",
            "तुम्हारी साफ दीवारों पर रेंगते हुए",
            "तुम झाड़ू लगाते हो, स्प्रे करते हो, ताला लगाते हो",
            "लेकिन हम तुम्हारे संगमरमर के फर्श की दरारों में पनपते हैं",
            "CHORUS: अब एक कदम उठाओ! झुंड में शामिल हो जाओ!"
        ]
    };

    const remixes = Array.from({ length: 10 }, (_, i) => ({
        creator: `@roach_dj_${i + 1}`,
        title: i % 2 === 0 ? "Drill Beat Remix (Delhi Edition)" : "Lofi Gutter Beats to Rant to",
        plays: Math.floor(Math.random() * 900 + 100) + 'K'
    }));

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">
            {/* Top Nav */}
            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-3 flex justify-between items-center shadow-[0_4px_0_0_#FFF]">
                <Link href="/" className="font-display text-2xl uppercase tracking-widest hover:text-accent">🪳 ANTHEM</Link>
                <button
                    onClick={() => setLang(lang === 'EN' ? 'HI' : 'EN')}
                    className="font-mono text-sm font-bold uppercase bg-card border-2 border-text-primary px-4 py-1 hover:bg-text-primary hover:text-black transition-colors"
                >
                    TOGGLE {lang === 'EN' ? 'HINDI' : 'ENGLISH'}
                </button>
            </nav>

            {/* Big Audio Player */}
            <header className="bg-card border-b-8 border-text-primary p-8 md:p-16 flex justify-center sticky top-[60px] z-40 shadow-[0_16px_0_0_#000]">
                <div className="w-full max-w-3xl flex flex-col items-center">
                    <h1 className="font-display text-5xl md:text-7xl uppercase text-white mb-8 tracking-widest text-center leading-none">
                        TAKE A STEP <span className="text-accent underline decoration-8">NOW</span>.
                    </h1>

                    {/* Visualizer Mock */}
                    <div className="w-full h-32 flex items-end justify-center gap-1 mb-8 overflow-hidden">
                        {Array.from({ length: 40 }).map((_, i) => (
                            <div
                                key={i}
                                className="w-full bg-accent transition-all duration-75"
                                style={{ height: isPlaying ? `${Math.random() * 100}%` : '5%' }}
                            ></div>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 md:gap-12 w-full justify-center">
                        <button className="text-text-primary hover:text-white transition-colors p-4"><Rewind size={32} /></button>
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className={`w-24 h-24 rounded-full border-4 border-black flex items-center justify-center transition-all ${isPlaying ? 'bg-alert text-black shadow-[4px_4px_0_0_#FFF]' : 'bg-success text-black shadow-[8px_8px_0_0_#FFF] hover:scale-105'}`}
                        >
                            {isPlaying ? <Pause size={48} /> : <Play size={48} className="ml-2" />}
                        </button>
                        <button className="text-text-primary hover:text-white transition-colors p-4"><FastForward size={32} /></button>
                    </div>
                </div>
            </header>

            <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-16">

                {/* Live Lyrics */}
                <div className="bg-card border-4 border-text-primary p-8 md:p-12 lg:h-[600px] flex flex-col justify-center relative overflow-hidden shadow-[16px_16px_0_0_#FFD60A]">
                    <Music size={120} className="absolute -top-10 -right-10 opacity-5 text-accent rotate-12" />
                    <div className="space-y-8 z-10">
                        {lyrics[lang].map((line, i) => (
                            <p
                                key={i}
                                className={`font-display text-4xl md:text-5xl uppercase leading-none transition-all duration-500 ${activeLine === i ? 'text-white scale-105 blur-none' : 'text-text-primary opacity-30 blur-[2px]'}`}
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Remix Tools & Leaderboard */}
                <div className="space-y-12">

                    <div className="bg-alert border-4 border-black p-8 text-black relative group hover:shadow-[12px_12px_0_0_#000] transition-shadow cursor-pointer">
                        <div className="absolute top-4 right-4 animate-bounce"><Upload size={32} /></div>
                        <h2 className="font-display text-5xl uppercase mb-2">MAKE YOUR REMIX</h2>
                        <p className="font-mono text-sm font-bold uppercase mb-6">Download stems, make it gutter, upload here.</p>
                        <div className="flex gap-4">
                            <button className="bg-black text-white font-mono text-xs uppercase px-4 py-2 hover:bg-white hover:text-black border-2 border-black">DL STEMS (WAV)</button>
                            <button className="bg-bg text-text-primary font-mono text-xs uppercase px-4 py-2 border-2 border-black hover:bg-white hover:text-black">UPLOAD MP3</button>
                        </div>
                    </div>

                    <div className="bg-black border-4 border-text-primary p-8">
                        <h3 className="font-display text-3xl uppercase text-white mb-6 border-b-4 border-text-primary pb-2 flex justify-between">
                            COMMUNITY TRACKS <span className="text-accent">🔥</span>
                        </h3>

                        <div className="space-y-4">
                            {remixes.map((remix, i) => (
                                <div key={i} className="flex items-center justify-between group hover:bg-card p-2 -mx-2 transition-colors border-b-2 border-text-primary/20 pb-4 cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-bg flex items-center justify-center font-display text-accent border-2 border-text-primary">{i + 1}</div>
                                        <div>
                                            <div className="font-mono text-[10px] text-text-secondary uppercase mb-1">{remix.creator}</div>
                                            <div className="font-hindi text-sm text-white font-bold group-hover:text-accent transition-colors">{remix.title}</div>
                                        </div>
                                    </div>
                                    <div className="text-right flex items-center gap-4">
                                        <span className="font-mono text-xs text-text-secondary">{remix.plays} <Play className="inline" size={12} /></span>
                                        <button className="text-text-primary hover:text-success"><MessageCircle size={16} /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </section>
        </main>
    );
}
