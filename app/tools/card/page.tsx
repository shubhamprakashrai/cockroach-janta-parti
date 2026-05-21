"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, QrCode, Upload, Smartphone, Film } from "lucide-react";

export default function CardGeneratorPage() {
    const [formData, setFormData] = useState({ name: "", city: "", state: "", age: "", tagline: "Main bhi cockroach." });
    const [imgUrl, setImgUrl] = useState<string | null>(null);
    const [cardStyle, setCardStyle] = useState("classic");

    const styles = [
        { id: "classic", name: "Classic Brutal", classes: "bg-bg border-accent" },
        { id: "inverted", name: "Inverted Gutter", classes: "bg-text-primary text-black border-black" },
        { id: "alert", name: "Red Alert", classes: "bg-alert border-black" },
        { id: "gold", name: "Golden Roach", classes: "bg-accent border-text-primary" }
    ];

    const currentStyle = styles.find(s => s.id === cardStyle);

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24 relative overflow-hidden flex flex-col items-center">

            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none opacity-10 flex items-center justify-center">
                <div className="text-[30rem] -rotate-12">🪳</div>
            </div>

            <header className="w-full px-4 py-8 md:py-12 flex justify-between items-center relative z-10">
                <Link href="/tools" className="font-mono text-sm uppercase font-bold hover:text-accent bg-card px-4 py-2 border-2 border-text-primary shadow-[4px_4px_0_0_#FFF]">
                    ← TOOLS HUB
                </Link>
            </header>

            <div className="w-full max-w-7xl mx-auto px-4 grid xl:grid-cols-2 gap-12 lg:gap-24 relative z-10 mt-4 md:mt-12">

                {/* Left Col - Config */}
                <div className="flex flex-col h-full space-y-12">
                    <div>
                        <h1 className="font-display text-5xl md:text-7xl uppercase mb-4 text-white leading-none">
                            GENERATE YOUR<br /><span className="text-accent underline decoration-8 underline-offset-8">ROACH CARD.</span>
                        </h1>
                        <p className="font-mono text-text-secondary text-lg">Input your details below to instantly generate your official CJP membership ID card.</p>
                    </div>

                    <div className="bg-card border-4 border-text-primary p-6 md:p-8 shadow-[12px_12px_0_0_#FFD60A]">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                            {/* Card Style Picker */}
                            <div>
                                <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">CHOOSE CARD STYLE</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {styles.map(s => (
                                        <button
                                            key={s.id}
                                            onClick={() => setCardStyle(s.id)}
                                            className={`py-2 px-2 font-mono text-[10px] uppercase font-bold border-2 transition-all ${cardStyle === s.id ? 'border-accent bg-accent text-black scale-105' : 'border-text-primary bg-bg hover:bg-text-primary hover:text-black'}`}
                                        >
                                            {s.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">Full Name / Alias</label>
                                    <input type="text" className="w-full bg-bg border-4 border-text-primary p-4 font-display text-2xl uppercase focus:border-accent focus:outline-none text-white placeholder-text-secondary" placeholder="LAZY ROY" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div className="col-span-1 border-r-4 border-transparent">
                                    <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">City</label>
                                    <input type="text" className="w-full bg-bg border-4 border-text-primary p-4 font-display text-2xl uppercase focus:border-accent focus:outline-none text-white placeholder-text-secondary" placeholder="DELHI" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} />
                                </div>
                                <div className="col-span-1 flex gap-2">
                                    <div className="flex-1">
                                        <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">State</label>
                                        <input type="text" className="w-full bg-bg border-4 border-text-primary p-4 font-display text-2xl uppercase focus:border-accent focus:outline-none text-white placeholder-text-secondary" placeholder="DL" value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })} />
                                    </div>
                                    <div className="w-24">
                                        <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">Age</label>
                                        <input type="number" className="w-full bg-bg border-4 border-text-primary p-4 font-display text-2xl uppercase focus:border-accent focus:outline-none text-white placeholder-text-secondary" placeholder="23" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} />
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">Why Cockroach? (Tagline)</label>
                                    <input type="text" className="w-full bg-bg border-4 border-text-primary p-4 font-display text-2xl uppercase focus:border-accent focus:outline-none text-white placeholder-text-secondary" placeholder="MAIN BHI COCKROACH." value={formData.tagline} onChange={e => setFormData({ ...formData, tagline: e.target.value })} />
                                </div>
                                <div className="col-span-2">
                                    <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">Photo (Optional)</label>
                                    <div className="border-4 border-dashed border-text-primary p-6 flex flex-col items-center justify-center cursor-pointer hover:border-accent hover:text-accent transition-colors bg-bg/50">
                                        <Upload size={24} className="mb-2" />
                                        <span className="font-mono text-xs uppercase font-bold">CLICK TO UPLOAD</span>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Col - Card Output */}
                <div className="flex flex-col items-center xl:items-end justify-center h-full w-full">

                    {/* Card Canvas Component */}
                    <div id="card-generator-canvas" className={`w-full max-w-[420px] aspect-[4/5] ${currentStyle?.classes} border-8 p-6 relative flex flex-col shadow-[16px_16px_0_0_#FFF] xl:hover:scale-105 transition-transform duration-500`}>
                        {/* Header */}
                        <div className={`flex justify-between items-start border-b-4 pb-4 ${cardStyle === 'classic' || cardStyle === 'gold' ? 'border-text-primary' : 'border-black'}`}>
                            <div>
                                <h2 className={`font-display text-6xl uppercase leading-none mb-1 ${cardStyle === 'classic' ? 'text-accent' : 'text-black'}`}>CJP</h2>
                                <p className={`font-mono text-[9px] font-bold uppercase tracking-widest ${cardStyle === 'classic' ? 'text-text-primary' : 'text-black'}`}>COCKROACH JANTA PARTI</p>
                            </div>
                            <div className="bg-white p-1 border-4 border-black shrink-0 relative z-20">
                                <QrCode size={48} className="text-black" />
                            </div>
                        </div>

                        {/* Image Area */}
                        <div className={`w-full h-48 bg-card border-4 mt-6 mb-4 flex items-center justify-center overflow-hidden relative ${cardStyle === 'classic' || cardStyle === 'gold' ? 'border-text-primary' : 'border-black'}`}>
                            {imgUrl ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={imgUrl} alt="User" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-[5rem] opacity-30 z-10 relative">👤</span>
                            )}
                            <div className="absolute bottom-2 right-2 z-20 bg-accent text-black font-mono text-[10px] font-bold px-2 py-1 border-2 border-black uppercase shadow-[2px_2px_0_0_#000]">
                                MEMBER #CJP-{Math.floor(Math.random() * 9999 + 1000)}
                            </div>
                        </div>

                        {/* Data Block */}
                        <div className="mt-auto space-y-4 z-10 w-full relative">
                            <div className="grid grid-cols-4 gap-2">
                                <div className="col-span-2">
                                    <p className={`font-mono text-[9px] uppercase mb-1 ${cardStyle === 'classic' ? 'text-text-secondary' : 'text-black/60 font-bold'}`}>NAME</p>
                                    <p className={`font-display text-2xl uppercase truncate ${cardStyle === 'classic' ? 'text-white' : 'text-black'}`}>{formData.name || 'ANONYMOUS ROACH'}</p>
                                </div>
                                <div className={`col-span-1 border-l-2 pl-2 ${cardStyle === 'classic' || cardStyle === 'gold' ? 'border-text-primary' : 'border-black/30'}`}>
                                    <p className={`font-mono text-[9px] uppercase mb-1 ${cardStyle === 'classic' ? 'text-text-secondary' : 'text-black/60 font-bold'}`}>STATE</p>
                                    <p className={`font-display text-2xl uppercase truncate ${cardStyle === 'classic' ? 'text-white' : 'text-black'}`}>{formData.state || '--'}</p>
                                </div>
                                <div className={`col-span-1 border-l-2 pl-2 ${cardStyle === 'classic' || cardStyle === 'gold' ? 'border-text-primary' : 'border-black/30'}`}>
                                    <p className={`font-mono text-[9px] uppercase mb-1 ${cardStyle === 'classic' ? 'text-text-secondary' : 'text-black/60 font-bold'}`}>AGE</p>
                                    <p className={`font-display text-2xl uppercase truncate ${cardStyle === 'classic' ? 'text-white' : 'text-black'}`}>{formData.age || '--'}</p>
                                </div>
                            </div>

                            <div className="bg-text-primary text-black p-3 border-l-4 border-black shadow-[4px_4px_0_0_#000]">
                                <p className="font-hindi text-lg font-bold uppercase italic break-words leading-tight">
                                    "{formData.tagline || 'Main bhi cockroach.'}"
                                </p>
                            </div>
                        </div>

                        <div className={`absolute bottom-3 right-6 font-mono text-[9px] font-bold uppercase z-10 tracking-widest ${cardStyle === 'classic' ? 'text-text-secondary' : 'text-black'}`}>
                            JOINED: 21 MAY 2026
                        </div>

                        {/* Background graphic */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] pointer-events-none rotate-45 z-0 ${cardStyle === 'classic' ? 'opacity-[0.03]' : 'opacity-10 mix-blend-overlay'}`}>🪳</div>
                    </div>

                    <div className="w-full max-w-[420px] mt-8 flex flex-col gap-4">
                        <button className="w-full bg-accent text-black font-display text-2xl uppercase py-5 border-4 border-black hover:bg-white hover:text-black transition-colors shadow-[8px_8px_0_0_#000] flex justify-center items-center gap-3">
                            <Download size={24} /> GENERATE PNG
                        </button>
                        <button className="w-full bg-text-primary text-black font-display text-xl uppercase py-4 border-4 border-black hover:bg-card hover:text-white hover:border-text-primary transition-colors shadow-[4px_4px_0_0_#000] flex justify-center items-center gap-3">
                            <Film size={20} /> GENERATE ANIMATED MP4
                        </button>
                        <button className="w-full bg-success text-black font-mono font-bold text-sm uppercase py-4 border-4 border-black hover:bg-white flex justify-center items-center gap-2 shadow-[4px_4px_0_0_#000]">
                            <Smartphone size={18} /> SHARE ON WA STATUS
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
}
