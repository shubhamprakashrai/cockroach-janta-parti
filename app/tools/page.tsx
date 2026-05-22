"use client";

import Link from "next/link";
import { Wrench, Repeat2, QrCode, SearchCheck, MessageCircle, ArrowRight, PlaySquare, MicVocal, Volume2 } from "lucide-react";

export default function ToolsHubPage() {
    const tools = [
        { name: "MEME GENERATOR", path: "/tools/meme-generator", icon: <Repeat2 size={40} />, desc: "Craft viral gutter content in seconds.", color: "bg-alert" },
        { name: "CARD GENERATOR", path: "/tools/card", icon: <QrCode size={40} />, desc: "Get your official cockroach ID card.", color: "bg-accent" },
        { name: "QUIZ", path: "/quiz", icon: <SearchCheck size={40} />, desc: "Which breed of cockroach are you?", color: "bg-purple-500" },
        { name: "MANIFESTO ROAST", path: "/tools/roast", icon: <MessageCircle size={40} />, desc: "AI roasts political arguments instantly.", color: "bg-orange-500" },
        { name: "ANTHEM KARAOKE", path: "/anthem", icon: <MicVocal size={40} />, desc: "Sing along to 'Take a step now'.", color: "bg-green-500" },
        { name: "ELECTION BOOTH", path: "/tools/booth", icon: <PlaySquare size={40} />, desc: "Mock voting booth simulator.", color: "bg-blue-500" },
        { name: "SOUNDBOARD", path: "/tools/soundboard", icon: <Volume2 size={40} />, desc: "Play iconic roach voice notes.", color: "bg-pink-500" }
    ];

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">
            {/* Top Nav */}
            <nav className="sticky top-0 z-40 bg-card border-b-4 border-text-primary px-4 py-4 shadow-[0_4px_0_0_#000] flex justify-between items-center">
                <Link href="/" className="font-display text-3xl uppercase tracking-widest hover:text-accent">🪳 CJP HUB</Link>
            </nav>

            {/* Hero */}
            <header className="px-4 py-16 md:py-24 text-center border-b-4 border-text-primary bg-bg text-rich-black relative">
                <div className="inline-flex bg-text-primary text-bg p-4 rounded-full border-4 border-black shadow-[4px_4px_0_0_#000] mb-6 animate-pulse">
                    <Wrench size={32} />
                </div>
                <h1 className="font-display text-6xl md:text-8xl uppercase tracking-widest mb-6">THE ARSENAL</h1>
                <p className="font-mono text-xl max-w-2xl mx-auto text-text-secondary">Deploy weapons of mass satire. All tools are open source and completely free to use to annoy politicians.</p>
            </header>

            {/* Tools Grid */}
            <section className="max-w-[1400px] mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {tools.map((tool, i) => (
                        <Link href={tool.path} key={i} className="group bg-card border-4 border-text-primary shadow-[12px_12px_0_0_#000] hover:shadow-[12px_12px_0_0_#FFD60A] hover:-translate-y-2 transition-all flex flex-col items-start overflow-hidden">
                            <div className={`w-full aspect-[4/3] ${tool.color} flex items-center justify-center text-black border-b-4 border-text-primary px-8 group-hover:scale-105 transition-transform duration-500 relative`}>
                                {tool.icon}
                                <div className="absolute top-4 right-4 bg-white/20 px-2 py-1 border-2 border-black font-mono text-[10px] font-bold uppercase backdrop-blur-md">FREE</div>
                            </div>
                            <div className="p-8 w-full bg-bg z-10 flex flex-col h-full flex-grow">
                                <h2 className="font-display text-4xl uppercase mb-3 text-rich-black group-hover:text-accent transition-colors leading-none">{tool.name}</h2>
                                <p className="font-mono text-sm text-text-secondary leading-relaxed mb-8 font-bold">{tool.desc}</p>

                                <div className="mt-auto font-display text-xl uppercase tracking-widest text-text-primary flex items-center gap-2 group-hover:text-accent group-hover:underline decoration-2 underline-offset-4 w-fit">
                                    DEPLOY <ArrowRight size={20} />
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* Missing Tool Teaser */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-bg border-4 border-dashed border-text-primary min-h-[300px] flex flex-col items-center justify-center p-8 text-center hover:border-accent group cursor-pointer transition-colors shadow-none">
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
                        <h2 className="font-display text-3xl uppercase mb-2 text-text-secondary group-hover:text-rich-black transition-colors">SUGGEST A TOOL</h2>
                        <p className="font-mono text-sm text-text-secondary/50 group-hover:text-text-secondary font-bold">Have an idea for a weapon of mass satire? Tell us on X.</p>
                    </div>
                </div>
            </section>

        </main>
    );
}
