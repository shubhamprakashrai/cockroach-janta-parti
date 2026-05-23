"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Play, Instagram, Youtube, Twitter, Film } from "lucide-react";
import { listenToReels, type Reel } from "@/lib/firebase-actions";

function PlatformBadge({ platform }: { platform: Reel["platform"] }) {
    const config = {
        youtube: { Icon: Youtube, label: "YOUTUBE", color: "bg-alert" },
        instagram: { Icon: Instagram, label: "INSTAGRAM", color: "bg-[#E1306C]" },
        twitter: { Icon: Twitter, label: "X / TWITTER", color: "bg-rich-black" },
        other: { Icon: Film, label: "VIDEO", color: "bg-text-secondary" },
    }[platform];
    const { Icon, label, color } = config;
    return (
        <span className={`inline-flex items-center gap-1 ${color} text-white font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-1 border-2 border-rich-black`}>
            <Icon size={10} /> {label}
        </span>
    );
}

export default function ReelsPage() {
    const [reels, setReels] = useState<Reel[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const unsub = listenToReels((r) => {
            setReels(r);
            setLoaded(true);
        });
        // mark loaded even if no data after 1.5s (firebase unconfigured fallback)
        const t = setTimeout(() => setLoaded(true), 1500);
        return () => {
            unsub();
            clearTimeout(t);
        };
    }, []);

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">
            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-4 shadow-[0_4px_0_0_#000] flex justify-between items-center">
                <Link href="/" className="font-display text-2xl uppercase tracking-widest hover:text-accent">🪳 CJP REELS</Link>
                <Link href="/memes" className="font-mono text-xs uppercase font-bold hover:text-accent">MEMES →</Link>
            </nav>

            <header className="px-4 py-16 md:py-24 text-center border-b-4 border-text-primary bg-card">
                <div className="inline-block bg-accent text-rich-black px-3 py-1 mb-4 font-mono text-xs font-bold uppercase tracking-widest border-2 border-rich-black shadow-[2px_2px_0_0_#000]">
                    Live drops · Updated whenever Abhijeet uploads
                </div>
                <h1 className="font-display text-6xl md:text-8xl uppercase tracking-tighter mb-6">
                    THE <span className="text-accent">REEL</span> WALL
                </h1>
                <p className="font-mono text-base md:text-xl text-text-secondary max-w-2xl mx-auto">
                    Reels, shorts, and clips dropped on Instagram, YouTube, and X — collected here so you can binge the swarm in one place.
                </p>
            </header>

            <section className="max-w-7xl mx-auto px-4 py-16">
                {!loaded && (
                    <div className="text-center font-mono text-text-secondary uppercase tracking-widest text-sm py-20 animate-pulse">
                        Loading the gutter...
                    </div>
                )}

                {loaded && reels.length === 0 && (
                    <div className="bg-card border-4 border-text-primary p-12 md:p-16 text-center max-w-2xl mx-auto shadow-[12px_12px_0_0_#FFD60A]">
                        <Film size={64} className="mx-auto text-accent mb-6" />
                        <h2 className="font-display text-4xl md:text-5xl uppercase mb-4 text-rich-black">FIRST REEL DROPPING SOON</h2>
                        <p className="font-mono text-sm text-text-secondary mb-8 uppercase tracking-widest">
                            We are still recording. Follow on Instagram &amp; YouTube so you do not miss the launch reel.
                        </p>
                        <Link href="/" className="inline-block bg-accent text-rich-black font-display text-xl uppercase px-8 py-3 border-4 border-rich-black hover:bg-rich-black hover:text-accent transition-colors shadow-[4px_4px_0_0_#000]">
                            ← BACK TO HOME
                        </Link>
                    </div>
                )}

                {loaded && reels.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reels.map((reel) => (
                            <article key={reel.id} className="bg-card border-4 border-text-primary shadow-[8px_8px_0_0_#000] hover:shadow-[8px_8px_0_0_#FFD60A] hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
                                <div className="relative aspect-[9/16] bg-rich-black border-b-4 border-text-primary overflow-hidden">
                                    {reel.platform === "youtube" ? (
                                        <iframe
                                            src={reel.embedUrl}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                            loading="lazy"
                                            title={reel.title}
                                        />
                                    ) : reel.platform === "instagram" ? (
                                        <iframe
                                            src={reel.embedUrl}
                                            className="w-full h-full"
                                            scrolling="no"
                                            allowTransparency
                                            loading="lazy"
                                            title={reel.title}
                                        />
                                    ) : (
                                        <a href={reel.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full flex flex-col items-center justify-center text-white hover:bg-accent hover:text-rich-black transition-colors group">
                                            {reel.thumbnailUrl && <img src={reel.thumbnailUrl} alt={reel.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30" />}
                                            <Play size={64} className="relative z-10" />
                                            <span className="font-mono text-xs uppercase tracking-widest mt-2 relative z-10">OPEN VIDEO</span>
                                        </a>
                                    )}
                                </div>
                                <div className="p-5 flex flex-col gap-3 flex-1">
                                    <div className="flex justify-between items-start gap-3">
                                        <h3 className="font-display text-xl md:text-2xl uppercase leading-tight text-rich-black">{reel.title}</h3>
                                        <PlatformBadge platform={reel.platform} />
                                    </div>
                                    {reel.description && (
                                        <p className="font-mono text-xs text-text-secondary leading-relaxed">{reel.description}</p>
                                    )}
                                    <a
                                        href={reel.videoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto font-mono text-xs font-bold uppercase tracking-widest text-accent hover:underline decoration-2 underline-offset-4"
                                    >
                                        Open on {reel.platform} →
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
}
