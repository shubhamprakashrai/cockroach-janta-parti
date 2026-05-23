"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Download, QrCode, Upload, Smartphone, Film } from "lucide-react";
import { toPng } from "html-to-image";

function CardGeneratorInner() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({ name: "", city: "", state: "", age: "", tagline: "Main bhi cockroach." });
    const [imgUrl, setImgUrl] = useState<string | null>(null);
    const [cardStyle, setCardStyle] = useState("classic");
    const [memberId] = useState(() => Math.floor(Math.random() * 9999 + 1000));
    const [isGenerating, setIsGenerating] = useState(false);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // Hydrate from URL params (homepage join form passes ?name=&city=&why=) or localStorage fallback
    useEffect(() => {
        if (typeof window === "undefined") return;
        const fromUrl = {
            name: searchParams.get("name") || "",
            city: searchParams.get("city") || "",
            why: searchParams.get("why") || "",
        };
        let stored: { name?: string; city?: string; why?: string } = {};
        try {
            const raw = window.localStorage.getItem("cjp_join_form_v1");
            if (raw) stored = JSON.parse(raw);
        } catch {}
        const name = fromUrl.name || stored.name || "";
        const city = fromUrl.city || stored.city || "";
        const tagline = fromUrl.why || stored.why || "Main bhi cockroach.";
        if (name || city || (tagline && tagline !== "Main bhi cockroach.")) {
            setFormData((prev) => ({ ...prev, name, city, tagline }));
        }
    }, [searchParams]);

    const styles = [
        { id: "classic", name: "Classic Brutal", classes: "bg-bg border-accent" },
        { id: "inverted", name: "Inverted Gutter", classes: "bg-text-primary text-bg border-black" },
        { id: "alert", name: "Red Alert", classes: "bg-alert border-black" },
        { id: "gold", name: "Golden Roach", classes: "bg-accent border-text-primary" }
    ];

    const currentStyle = styles.find(s => s.id === cardStyle);

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setImgUrl(reader.result as string);
        reader.readAsDataURL(file);
    };

    const downloadCard = async () => {
        if (!cardRef.current) return;
        setIsGenerating(true);
        try {
            const dataUrl = await toPng(cardRef.current, {
                cacheBust: true,
                pixelRatio: 2,
                backgroundColor: "#FCF8F8",
            });
            const link = document.createElement("a");
            const safeName = (formData.name || "ANONYMOUS_ROACH").replace(/\s+/g, "_").toUpperCase();
            link.download = `cjp-card-${safeName}-${memberId}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error("Card export failed:", err);
            alert("Card download failed. Try a smaller photo or different browser.");
        } finally {
            setIsGenerating(false);
        }
    };

    const shareOnWhatsApp = () => {
        const name = formData.name || "ANONYMOUS ROACH";
        const text = `I just generated my official Cockroach Janta Parti card. Main bhi cockroach. Tum bhi banno. 🪳\n\nhttps://cockrochjantaparti.com/tools/card\n\n— ${name}, Member #CJP-${memberId}`;
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24 relative overflow-hidden flex flex-col items-center">

            <header className="w-full px-4 py-8 md:py-12 flex justify-between items-center relative z-10">
                <Link href="/tools" className="font-mono text-sm uppercase font-bold hover:text-accent bg-card px-4 py-2 border-2 border-text-primary shadow-[4px_4px_0_0_#000]">
                    ← TOOLS HUB
                </Link>
            </header>

            <div className="w-full max-w-7xl mx-auto px-4 grid xl:grid-cols-2 gap-12 lg:gap-24 relative z-10 mt-4 md:mt-12">

                {/* Left Col - Config */}
                <div className="flex flex-col h-full space-y-12">
                    <div>
                        <h1 className="font-display text-5xl md:text-7xl uppercase mb-4 text-rich-black leading-none">
                            GENERATE YOUR<br /><span className="text-accent underline decoration-8 underline-offset-8">ROACH CARD.</span>
                        </h1>
                        <p className="font-mono text-text-secondary text-lg">Input your details below and download an official CJP membership ID as a high-res PNG.</p>
                    </div>

                    <div className="bg-card border-4 border-text-primary p-6 md:p-8 shadow-[12px_12px_0_0_#FFD60A]">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

                            {/* Card Style Picker */}
                            <div>
                                <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">CHOOSE CARD STYLE</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                    {styles.map(s => (
                                        <button
                                            type="button"
                                            key={s.id}
                                            onClick={() => setCardStyle(s.id)}
                                            className={`py-2 px-2 font-mono text-[10px] uppercase font-bold border-2 transition-all ${cardStyle === s.id ? 'border-accent bg-accent text-rich-black scale-105' : 'border-text-primary bg-bg hover:bg-text-primary hover:text-bg'}`}
                                        >
                                            {s.name}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">Full Name / Alias</label>
                                    <input type="text" className="w-full bg-bg border-4 border-text-primary p-4 font-display text-2xl uppercase focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary" placeholder="LAZY ROY" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                </div>
                                <div className="col-span-1 border-r-4 border-transparent">
                                    <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">City</label>
                                    <input type="text" className="w-full bg-bg border-4 border-text-primary p-4 font-display text-2xl uppercase focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary" placeholder="DELHI" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })} />
                                </div>
                                <div className="col-span-1 flex gap-2">
                                    <div className="flex-1">
                                        <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">State</label>
                                        <input type="text" className="w-full bg-bg border-4 border-text-primary p-4 font-display text-2xl uppercase focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary" placeholder="DL" value={formData.state} onChange={e => setFormData({ ...formData, state: e.target.value })} />
                                    </div>
                                    <div className="w-24">
                                        <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">Age</label>
                                        <input type="number" className="w-full bg-bg border-4 border-text-primary p-4 font-display text-2xl uppercase focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary" placeholder="23" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} />
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">Why Cockroach? (Tagline)</label>
                                    <input type="text" className="w-full bg-bg border-4 border-text-primary p-4 font-display text-2xl uppercase focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary" placeholder="MAIN BHI COCKROACH." value={formData.tagline} onChange={e => setFormData({ ...formData, tagline: e.target.value })} />
                                </div>
                                <div className="col-span-2">
                                    <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">Photo (Optional)</label>
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept="image/*"
                                        onChange={handlePhotoChange}
                                        className="hidden"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="w-full border-4 border-dashed border-text-primary p-6 flex flex-col items-center justify-center cursor-pointer hover:border-accent hover:text-accent transition-colors bg-bg/50"
                                    >
                                        <Upload size={24} className="mb-2" />
                                        <span className="font-mono text-xs uppercase font-bold">
                                            {imgUrl ? "REPLACE PHOTO" : "CLICK TO UPLOAD"}
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Right Col - Card Output */}
                <div className="flex flex-col items-center xl:items-end justify-center h-full w-full">

                    {/* Card Canvas Component */}
                    <div ref={cardRef} id="card-generator-canvas" className={`w-full max-w-[420px] aspect-[4/5] ${currentStyle?.classes} border-8 p-6 relative flex flex-col shadow-[16px_16px_0_0_#000] xl:hover:scale-105 transition-transform duration-500`}>
                        {/* Header */}
                        <div className={`flex justify-between items-start border-b-4 pb-4 ${cardStyle === 'classic' || cardStyle === 'gold' ? 'border-text-primary' : 'border-black'}`}>
                            <div>
                                <h2 className={`font-display text-6xl uppercase leading-none mb-1 ${cardStyle === 'classic' ? 'text-accent' : 'text-white'}`}>CJP</h2>
                                <p className={`font-mono text-[9px] font-bold uppercase tracking-widest ${cardStyle === 'classic' ? 'text-text-primary' : 'text-white'}`}>COCKROACH JANTA PARTI</p>
                            </div>
                            <div className="bg-white p-1 border-4 border-black shrink-0 relative z-20">
                                <QrCode size={48} className="text-black" />
                            </div>
                        </div>

                        {/* Image Area */}
                        <div className={`w-full h-48 bg-card border-4 mt-6 mb-4 flex items-center justify-center overflow-hidden relative ${cardStyle === 'classic' || cardStyle === 'gold' ? 'border-text-primary' : 'border-black'}`}>
                            {imgUrl ? (
                                /* eslint-disable-next-line @next/next/no-img-element */
                                <img src={imgUrl} alt="Member photo" crossOrigin="anonymous" className="w-full h-full object-cover" />
                            ) : (
                                <div className="font-display text-6xl text-text-secondary tracking-tighter opacity-40">{(formData.name || "AR").split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()}</div>
                            )}
                            <div className="absolute bottom-2 right-2 z-20 bg-accent text-rich-black font-mono text-[10px] font-bold px-2 py-1 border-2 border-black uppercase shadow-[2px_2px_0_0_#000]">
                                MEMBER #CJP-{memberId}
                            </div>
                        </div>

                        {/* Data Block */}
                        <div className="mt-auto space-y-4 z-10 w-full relative">
                            <div className="grid grid-cols-4 gap-2">
                                <div className="col-span-2">
                                    <p className={`font-mono text-[9px] uppercase mb-1 ${cardStyle === 'classic' ? 'text-text-secondary' : 'text-white/70 font-bold'}`}>NAME</p>
                                    <p className={`font-display text-2xl uppercase truncate ${cardStyle === 'classic' ? 'text-rich-black' : 'text-white'}`}>{formData.name || 'ANONYMOUS ROACH'}</p>
                                </div>
                                <div className={`col-span-1 border-l-2 pl-2 ${cardStyle === 'classic' || cardStyle === 'gold' ? 'border-text-primary' : 'border-black/30'}`}>
                                    <p className={`font-mono text-[9px] uppercase mb-1 ${cardStyle === 'classic' ? 'text-text-secondary' : 'text-white/70 font-bold'}`}>STATE</p>
                                    <p className={`font-display text-2xl uppercase truncate ${cardStyle === 'classic' ? 'text-rich-black' : 'text-white'}`}>{formData.state || '--'}</p>
                                </div>
                                <div className={`col-span-1 border-l-2 pl-2 ${cardStyle === 'classic' || cardStyle === 'gold' ? 'border-text-primary' : 'border-black/30'}`}>
                                    <p className={`font-mono text-[9px] uppercase mb-1 ${cardStyle === 'classic' ? 'text-text-secondary' : 'text-white/70 font-bold'}`}>AGE</p>
                                    <p className={`font-display text-2xl uppercase truncate ${cardStyle === 'classic' ? 'text-rich-black' : 'text-white'}`}>{formData.age || '--'}</p>
                                </div>
                            </div>

                            <div className="bg-rich-black text-bg p-3 border-l-4 border-accent shadow-[4px_4px_0_0_#000]">
                                <p className="font-hindi text-lg font-bold uppercase italic break-words leading-tight">
                                    &ldquo;{formData.tagline || 'Main bhi cockroach.'}&rdquo;
                                </p>
                            </div>
                        </div>

                        <div className={`absolute bottom-3 right-6 font-mono text-[9px] font-bold uppercase z-10 tracking-widest ${cardStyle === 'classic' ? 'text-text-secondary' : cardStyle === 'gold' ? 'text-rich-black' : 'text-white/80'}`}>
                            JOINED: 21 MAY 2026
                        </div>

                        {/* Background graphic */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[12rem] pointer-events-none rotate-12 z-0 leading-none tracking-tighter ${cardStyle === 'classic' ? 'opacity-[0.04] text-rich-black' : 'opacity-[0.08] text-white'}`}>CJP</div>
                    </div>

                    <div className="w-full max-w-[420px] mt-8 flex flex-col gap-4">
                        <button
                            type="button"
                            onClick={downloadCard}
                            disabled={isGenerating}
                            className="w-full bg-accent text-rich-black font-display text-2xl uppercase py-5 border-4 border-rich-black hover:bg-white transition-colors shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000] flex justify-center items-center gap-3 disabled:opacity-50 disabled:cursor-wait"
                        >
                            <Download size={24} /> {isGenerating ? "GENERATING..." : "DOWNLOAD PNG"}
                        </button>
                        <button
                            type="button"
                            onClick={shareOnWhatsApp}
                            className="w-full bg-success text-white font-mono font-bold text-sm uppercase py-4 border-4 border-rich-black hover:bg-white hover:text-success flex justify-center items-center gap-2 shadow-[4px_4px_0_0_#000]"
                        >
                            <Smartphone size={18} /> SHARE ON WHATSAPP
                        </button>
                        <button
                            type="button"
                            disabled
                            className="w-full bg-card text-text-secondary font-display text-xl uppercase py-4 border-4 border-text-primary opacity-50 cursor-not-allowed flex justify-center items-center gap-3"
                            title="Animated MP4 export — coming in Phase 2"
                        >
                            <Film size={20} /> ANIMATED MP4 (SOON)
                        </button>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default function CardGeneratorPage() {
    return (
        <Suspense fallback={<main className="min-h-screen bg-bg" />}>
            <CardGeneratorInner />
        </Suspense>
    );
}
