"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Play, Instagram, Youtube, Twitter, Film, ArrowLeft, Copy, Share2 } from "lucide-react";
import { getReelById, type Reel } from "@/lib/firebase-actions";

const PLATFORM_META = {
    youtube: { Icon: Youtube, label: "YOUTUBE", color: "bg-alert" },
    instagram: { Icon: Instagram, label: "INSTAGRAM", color: "bg-[#E1306C]" },
    twitter: { Icon: Twitter, label: "X / TWITTER", color: "bg-rich-black" },
    other: { Icon: Film, label: "VIDEO", color: "bg-text-secondary" },
} as const;

export default function ReelDetailPage({ params }: { params: { id: string } }) {
    const [reel, setReel] = useState<Reel | null>(null);
    const [loaded, setLoaded] = useState(false);
    const [copyState, setCopyState] = useState<"idle" | "copied">("idle");

    useEffect(() => {
        getReelById(params.id).then((r) => {
            setReel(r);
            setLoaded(true);
        });
    }, [params.id]);

    if (loaded && !reel) notFound();
    if (!reel) {
        return (
            <main className="min-h-screen bg-bg flex items-center justify-center font-mono text-text-secondary uppercase tracking-widest text-sm animate-pulse">
                Loading reel...
            </main>
        );
    }

    const meta = PLATFORM_META[reel.platform];
    const shareUrl = `https://cockrochjantaparti.com/reels/${params.id}`;
    const shareText = encodeURIComponent(`${reel.title} — watch on @cjp_india`);
    const twitterHref = `https://twitter.com/intent/tweet?text=${shareText}&url=${encodeURIComponent(shareUrl)}`;
    const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${reel.title}\n${shareUrl}`)}`;

    const copyLink = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            setCopyState("copied");
            setTimeout(() => setCopyState("idle"), 1800);
        });
    };

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">
            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-4 shadow-[0_4px_0_0_#000] flex justify-between items-center">
                <Link href="/reels" className="font-mono text-sm uppercase font-bold hover:text-accent flex items-center gap-2">
                    <ArrowLeft size={16} /> ALL REELS
                </Link>
                <Link href="/" className="font-display text-xl uppercase tracking-widest hover:text-accent">🪳 CJP</Link>
            </nav>

            <article className="max-w-5xl mx-auto px-4 py-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className={`inline-flex items-center gap-1 ${meta.color} text-white font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 border-2 border-rich-black`}>
                        <meta.Icon size={12} /> {meta.label}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-text-secondary">
                        {reel.createdAtMs ? new Date(reel.createdAtMs).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }) : ""}
                    </span>
                </div>

                <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-[0.95] text-rich-black mb-8">
                    {reel.title}
                </h1>

                <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
                    <div>
                        <div className="relative aspect-[9/16] max-w-md mx-auto lg:max-w-none lg:aspect-video bg-rich-black border-4 border-text-primary shadow-[16px_16px_0_0_#FFD60A] overflow-hidden">
                            {reel.platform === "youtube" ? (
                                <iframe
                                    src={reel.embedUrl}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    loading="eager"
                                    title={reel.title}
                                />
                            ) : reel.platform === "instagram" ? (
                                <iframe
                                    src={reel.embedUrl}
                                    className="w-full h-full"
                                    scrolling="no"
                                    allowTransparency
                                    loading="eager"
                                    title={reel.title}
                                />
                            ) : (
                                <a href={reel.videoUrl} target="_blank" rel="noopener noreferrer" className="w-full h-full flex flex-col items-center justify-center text-white hover:bg-accent hover:text-rich-black transition-colors group relative">
                                    {reel.thumbnailUrl && <img src={reel.thumbnailUrl} alt={reel.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30" />}
                                    <Play size={64} className="relative z-10" />
                                    <span className="font-mono text-xs uppercase tracking-widest mt-2 relative z-10">OPEN VIDEO</span>
                                </a>
                            )}
                        </div>

                        {reel.description && (
                            <p className="mt-8 font-hindi text-lg md:text-xl leading-relaxed text-text-primary">{reel.description}</p>
                        )}

                        <a
                            href={reel.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-widest text-accent hover:underline decoration-2 underline-offset-4"
                        >
                            <meta.Icon size={16} /> Open on {meta.label} →
                        </a>
                    </div>

                    <aside className="space-y-6">
                        <div className="bg-card border-4 border-text-primary p-6 shadow-[8px_8px_0_0_#000]">
                            <h3 className="font-display text-2xl uppercase mb-4 text-rich-black border-b-2 border-text-primary pb-2">SPREAD THE SWARM</h3>
                            <div className="space-y-3">
                                <a
                                    href={twitterHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-rich-black text-white font-mono font-bold text-xs uppercase tracking-widest py-3 border-4 border-rich-black hover:bg-white hover:text-rich-black transition-colors flex justify-center items-center gap-2"
                                >
                                    <Twitter size={14} /> SHARE ON X
                                </a>
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full bg-success text-white font-mono font-bold text-xs uppercase tracking-widest py-3 border-4 border-rich-black hover:bg-white hover:text-success transition-colors flex justify-center items-center gap-2"
                                >
                                    <Share2 size={14} /> WHATSAPP
                                </a>
                                <button
                                    type="button"
                                    onClick={copyLink}
                                    className="w-full bg-accent text-rich-black font-mono font-bold text-xs uppercase tracking-widest py-3 border-4 border-rich-black hover:bg-white transition-colors flex justify-center items-center gap-2"
                                >
                                    <Copy size={14} /> {copyState === "copied" ? "COPIED!" : "COPY LINK"}
                                </button>
                            </div>
                            <input
                                type="text"
                                readOnly
                                value={shareUrl}
                                onClick={(e) => (e.target as HTMLInputElement).select()}
                                className="w-full mt-4 bg-bg border-2 border-text-primary p-2 font-mono text-[10px] text-rich-black outline-none cursor-text"
                            />
                        </div>

                        <Link
                            href="/join"
                            className="block bg-accent text-rich-black font-display text-2xl uppercase py-4 px-4 border-4 border-rich-black hover:bg-rich-black hover:text-accent transition-colors shadow-[8px_8px_0_0_#000] text-center"
                        >
                            JOIN THE PARTI →
                        </Link>
                    </aside>
                </div>
            </article>
        </main>
    );
}
