"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Download, Share2, Instagram, Type, Image as ImageIcon, Upload } from "lucide-react";
import { toPng } from "html-to-image";

type Template = {
    name: string;
    bg: string;
    textColor: string;
    img?: string;
};

const TEMPLATES: Template[] = [
    { name: "CJI Remark", bg: "bg-alert", textColor: "text-white" },
    { name: "Cockroach Poster", bg: "bg-accent", textColor: "text-rich-black" },
    { name: "Main Bhi", bg: "bg-rich-black", textColor: "text-white" },
    { name: "Blank Canvas", bg: "bg-bg", textColor: "text-rich-black" },
];

const TEXT_COLOR_PALETTE = ["#FFFFFF", "#0A0A0A", "#FFD60A", "#FF6B00", "#E63946", "#00A86B"];

export default function MemeGeneratorPage() {
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [activeTemplate, setActiveTemplate] = useState<Template>(TEMPLATES[0]);
    const [textColor, setTextColor] = useState<string>("#FFFFFF");
    const [bgImage, setBgImage] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const canvasRef = useRef<HTMLDivElement | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleBgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => setBgImage(reader.result as string);
        reader.readAsDataURL(file);
    };

    const downloadMeme = async () => {
        if (!canvasRef.current) return;
        setIsGenerating(true);
        try {
            const dataUrl = await toPng(canvasRef.current, {
                cacheBust: true,
                pixelRatio: 2,
            });
            const link = document.createElement("a");
            link.download = `cjp-meme-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error("Meme export failed:", err);
            alert("Meme download failed. Try a smaller image or different browser.");
        } finally {
            setIsGenerating(false);
        }
    };

    const shareOnWhatsApp = () => {
        const text = `${topText || "Top"} / ${bottomText || "Bottom"} — made on @cjp_india\n\nhttps://cockrochjantaparti.com/tools/meme-generator`;
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

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
                            {TEMPLATES.map((t, i) => (
                                <button
                                    type="button"
                                    key={i}
                                    onClick={() => { setActiveTemplate(t); setBgImage(null); }}
                                    className={`aspect-video flex items-center justify-center border-4 border-text-primary font-mono text-xs uppercase font-bold hover:scale-105 transition-transform ${activeTemplate.name === t.name ? 'ring-4 ring-accent' : ''} ${t.bg} ${t.textColor}`}
                                >
                                    {t.name}
                                </button>
                            ))}
                        </div>
                        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleBgUpload} className="hidden" />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full bg-bg border-4 border-text-primary py-3 font-mono text-xs font-bold uppercase hover:bg-text-primary hover:text-bg flex justify-center items-center gap-2 transition-colors"
                        >
                            <Upload size={16} /> {bgImage ? "REPLACE BACKGROUND" : "UPLOAD YOUR OWN IMAGE"}
                        </button>
                        {bgImage && (
                            <button
                                type="button"
                                onClick={() => setBgImage(null)}
                                className="w-full mt-2 font-mono text-[10px] uppercase text-text-secondary hover:text-alert underline"
                            >
                                remove custom background
                            </button>
                        )}
                    </div>

                    {/* Text Editor */}
                    <div>
                        <h2 className="font-mono text-sm font-bold uppercase mb-4 text-text-secondary">2. ADD TEXT</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="font-mono text-[10px] uppercase font-bold text-text-secondary block mb-2">TEXT COLOR</label>
                                <div className="flex bg-card border-4 border-text-primary">
                                    {TEXT_COLOR_PALETTE.map((c) => (
                                        <button
                                            type="button"
                                            key={c}
                                            onClick={() => setTextColor(c)}
                                            className={`flex-1 h-10 border-r-2 last:border-r-0 border-text-primary/30 hover:opacity-80 transition-opacity ${textColor === c ? 'ring-4 ring-accent ring-inset' : ''}`}
                                            style={{ backgroundColor: c }}
                                            aria-label={`Use ${c}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="relative">
                                <Type size={16} className="absolute left-3 top-3.5 text-text-secondary" />
                                <input
                                    type="text"
                                    className="w-full bg-bg border-4 border-text-primary p-3 pl-10 font-display text-xl uppercase focus:border-accent focus:outline-none placeholder-text-secondary text-rich-black"
                                    placeholder="TOP TEXT"
                                    value={topText}
                                    onChange={(e) => setTopText(e.target.value)}
                                />
                            </div>
                            <div className="relative">
                                <Type size={16} className="absolute left-3 top-3.5 text-text-secondary" />
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

                    {/* Hint */}
                    <div className="bg-bg border-2 border-text-primary p-4 font-mono text-xs text-text-secondary leading-relaxed">
                        <p><span className="text-accent font-bold uppercase">TIP:</span> Upload your own image for custom backgrounds. Click DOWNLOAD PNG to save as a high-resolution image. Sticker overlays and AI suggestions are shipping in Phase 2.</p>
                    </div>
                </div>
            </div>

            {/* RIGHT PANEL - Canvas (60%) */}
            <div className="w-full md:w-[60%] flex flex-col h-[50vh] md:h-screen bg-bg relative">
                <div className="flex-1 p-8 flex justify-center items-center relative overflow-hidden">

                    {/* Live Canvas */}
                    <div
                        ref={canvasRef}
                        className={`w-full max-w-lg aspect-square border-8 border-text-primary flex flex-col justify-between items-center p-8 text-center relative shadow-[16px_16px_0_0_#000] overflow-hidden ${!bgImage ? activeTemplate.bg : ''}`}
                    >
                        {bgImage && (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img src={bgImage} alt="Custom background" crossOrigin="anonymous" className="absolute inset-0 w-full h-full object-cover" />
                        )}
                        {bgImage && <div className="absolute inset-0 bg-rich-black/20"></div>}

                        <h2
                            className="font-display text-4xl md:text-6xl uppercase leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] relative z-10 break-words"
                            style={{ color: textColor }}
                        >
                            {topText || "TOP TEXT"}
                        </h2>

                        <h2
                            className="font-display text-4xl md:text-6xl uppercase leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] relative z-10 break-words"
                            style={{ color: textColor }}
                        >
                            {bottomText || "BOTTOM TEXT"}
                        </h2>

                        <div className="absolute bottom-2 right-3 font-mono text-[10px] font-bold text-white/80 uppercase tracking-widest bg-rich-black/70 px-2 py-0.5 z-10">
                            cockrochjantaparti.com
                        </div>
                    </div>

                </div>

                {/* Bottom Actions Container */}
                <div className="bg-card border-t-4 border-text-primary p-4 z-10 flex flex-wrap gap-4">
                    <button
                        type="button"
                        onClick={downloadMeme}
                        disabled={isGenerating}
                        className="flex-1 bg-accent text-rich-black font-display text-2xl uppercase py-4 border-4 border-rich-black hover:bg-white transition-colors flex justify-center items-center gap-2 shadow-[4px_4px_0_0_#000] min-w-[200px] disabled:opacity-50 disabled:cursor-wait"
                    >
                        <Download size={24} /> {isGenerating ? "GENERATING..." : "DOWNLOAD PNG"}
                    </button>

                    <div className="flex gap-4 min-w-max">
                        <button
                            type="button"
                            onClick={shareOnWhatsApp}
                            className="bg-success text-white font-mono font-bold text-sm uppercase px-6 py-4 border-4 border-rich-black hover:bg-white hover:text-success flex justify-center items-center gap-2 shadow-[4px_4px_0_0_#000]"
                        >
                            <Share2 size={16} /> WA SHARE
                        </button>
                        <button
                            type="button"
                            disabled
                            title="Direct Instagram upload — coming in Phase 2"
                            className="bg-card text-text-secondary font-mono font-bold text-sm uppercase px-6 py-4 border-4 border-text-primary opacity-50 cursor-not-allowed flex justify-center items-center gap-2"
                        >
                            <Instagram size={16} /> POST IG (SOON)
                        </button>
                    </div>
                </div>
            </div>

        </main>
    );
}
