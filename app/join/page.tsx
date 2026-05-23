"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, QrCode } from "lucide-react";

export default function JoinPage() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: "", email: "", city: "", why: "" });

    return (
        <main className="min-h-screen bg-bg text-text-primary flex flex-col md:flex-row pb-20 md:pb-0">

            {/* Left Col - Hero Information */}
            <div className="flex-1 bg-accent pt-12 p-8 md:p-16 border-b-4 md:border-b-0 md:border-r-4 border-black text-black flex flex-col">
                <Link href="/" className="font-mono font-bold uppercase mb-12 hover:underline decoration-4 underline-offset-4 tracking-widest inline-block">
                    ← BACK TO GUTTERS
                </Link>
                <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] uppercase leading-[0.8] tracking-tighter mb-8">
                    JOIN THE <span className="text-bg bg-black px-2 inline-block -rotate-2 mt-4 ml-2 border-4 border-bg">PARTI.</span>
                </h1>
                <p className="font-display text-3xl md:text-4xl uppercase mb-12 opacity-80 border-l-8 border-black pl-4 py-2">
                    FREE. FOREVER. NO CASTE. NO CASTE-LIST.
                </p>

                <div className="bg-bg text-rich-black p-8 border-4 border-black shadow-[12px_12px_0_0_#000] mt-auto">
                    <h2 className="font-display text-4xl uppercase mb-6 text-accent">Eligibility Checklist</h2>
                    <ul className="space-y-4 font-mono text-lg font-bold">
                        <li className="flex justify-between items-center bg-card border-2 border-text-primary p-3">Unemployed <input type="checkbox" className="w-6 h-6 accent-accent" checked readOnly /></li>
                        <li className="flex justify-between items-center bg-card border-2 border-text-primary p-3">Lazy <input type="checkbox" className="w-6 h-6 accent-accent" checked readOnly /></li>
                        <li className="flex justify-between items-center bg-card border-2 border-text-primary p-3">Chronically online (11+ hrs) <input type="checkbox" className="w-6 h-6 accent-accent" checked readOnly /></li>
                        <li className="flex justify-between items-center bg-card border-2 border-text-primary p-3">Can rant professionally <input type="checkbox" className="w-6 h-6 accent-accent" checked readOnly /></li>
                    </ul>
                </div>
            </div>

            {/* Right Col - Interactive Form */}
            <div className="flex-1 bg-card p-8 md:p-24 flex items-center justify-center relative">
                <div className="w-full max-w-xl">

                    {step < 4 && (
                        <div className="font-mono font-bold text-accent mb-8 bg-black/50 inline-block px-4 py-2 border-2 border-accent">
                            STEP {step} OF 3
                        </div>
                    )}

                    {step === 1 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                            <h2 className="font-display text-5xl uppercase text-rich-black mb-2">Who are you?</h2>
                            <p className="font-mono text-text-secondary mb-10">Real name or alias, we don't care.</p>
                            <input
                                type="text"
                                placeholder="FULL NAME / ALIAS"
                                className="w-full bg-bg border-4 border-text-primary p-6 font-mono text-2xl uppercase text-rich-black focus:border-accent focus:outline-none placeholder-text-primary/30"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                            <input
                                type="email"
                                placeholder="YOUR GUTTER EMAIL"
                                className="w-full bg-bg border-4 border-text-primary p-6 font-mono text-2xl uppercase text-rich-black focus:border-accent focus:outline-none placeholder-text-primary/30"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                            <input
                                type="text"
                                placeholder="CITY / GUTTER LOCATION"
                                className="w-full bg-bg border-4 border-text-primary p-6 font-mono text-2xl uppercase text-rich-black focus:border-accent focus:outline-none placeholder-text-primary/30"
                                value={formData.city}
                                onChange={e => setFormData({ ...formData, city: e.target.value })}
                            />
                            <button
                                onClick={() => setStep(2)}
                                className="w-full bg-accent text-black font-display text-4xl uppercase py-6 border-4 border-black shadow-[8px_8px_0_0_#000] hover:-translate-y-1 transition-transform"
                            >
                                NEXT STEP →
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                            <h2 className="font-display text-5xl uppercase text-rich-black mb-2">Your Manifesto</h2>
                            <p className="font-mono text-text-secondary mb-10">Why are you a cockroach in 1 line?</p>
                            <textarea
                                rows={4}
                                placeholder="I HAVE 3 DEGREES AND NO JOB..."
                                className="w-full bg-bg border-4 border-text-primary p-6 font-mono text-2xl uppercase text-rich-black focus:border-accent focus:outline-none placeholder-text-primary/30 resize-none"
                                value={formData.why}
                                onChange={e => setFormData({ ...formData, why: e.target.value })}
                            ></textarea>
                            <div className="flex gap-4">
                                <button onClick={() => setStep(1)} className="bg-bg text-text-primary font-display text-4xl uppercase px-8 border-4 border-text-primary hover:bg-white hover:text-black transition-colors">←</button>
                                <button
                                    onClick={() => setStep(3)}
                                    className="flex-1 bg-accent text-black font-display text-4xl uppercase py-6 border-4 border-black shadow-[8px_8px_0_0_#000] hover:-translate-y-1 transition-transform"
                                >
                                    PREVIEW CARD →
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-8 animate-in zoom-in-95 duration-500">
                            <h2 className="font-display text-5xl uppercase text-rich-black text-center mb-8">Card Preview</h2>

                            {/* Mock Card UI */}
                            <div className="w-full aspect-[3/4] bg-bg border-8 border-accent p-6 flex flex-col relative shadow-[16px_16px_0_0_#000] transform md:rotate-2">
                                <div className="flex justify-between items-start mb-auto border-b-4 border-text-primary pb-4">
                                    <div>
                                        <h3 className="font-display text-5xl text-accent uppercase leading-none mb-2">CJP</h3>
                                        <p className="font-mono text-[10px] font-bold uppercase tracking-widest">OFFICIAL MEMBER ID</p>
                                    </div>
                                    <QrCode size={48} className="text-text-primary" />
                                </div>

                                <div className="mt-auto z-10">
                                    <p className="font-mono text-xs uppercase text-text-secondary mb-1">NAME</p>
                                    <p className="font-display text-4xl uppercase text-rich-black tracking-widest break-words mb-4">{formData.name || 'ANONYMOUS ROACH'}</p>

                                    <p className="font-mono text-xs uppercase text-text-secondary mb-1">CITY</p>
                                    <p className="font-display text-2xl uppercase text-rich-black tracking-widest break-words mb-4">{formData.city || 'NOWHERE'}</p>

                                    <div className="bg-text-primary text-bg p-3 mt-4 border-l-4 border-accent">
                                        <p className="font-hindi text-sm font-bold uppercase italic">"{formData.why || 'Main bhi cockroach.'}"</p>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 right-4 -translate-y-1/2 font-display text-[7rem] leading-none opacity-[0.08] tracking-tighter">CJP</div>
                            </div>

                            <div className="flex gap-4 mt-8">
                                <button onClick={() => setStep(2)} className="bg-bg text-text-primary font-display text-4xl uppercase px-8 border-4 border-text-primary hover:bg-white hover:text-black transition-colors">←</button>
                                <button
                                    onClick={() => setStep(4)}
                                    className="flex-1 bg-success text-white font-display text-4xl uppercase py-6 border-4 border-black shadow-[8px_8px_0_0_#000] hover:-translate-y-1 transition-transform"
                                >
                                    CONFIRM & JOIN ✓
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="text-center space-y-8 animate-in fade-in duration-500">
                            <div className="inline-flex bg-success text-white p-6 rounded-full border-4 border-black shadow-[8px_8px_0_0_#000] mb-6 animate-bounce">
                                <CheckCircle2 size={64} />
                            </div>
                            <h2 className="font-display text-6xl uppercase text-rich-black leading-none">WELCOME TO THE GUTTER.</h2>
                            <div className="font-mono text-xl border-t-2 border-b-2 border-text-primary py-4 mt-6">
                                Member Number: <span className="font-bold text-accent">#CJP-350{Math.floor(Math.random() * 999)}</span>
                            </div>
                            <div className="flex flex-col gap-4 mt-10">
                                <Link href="/tools/card" className="bg-accent text-black font-display text-2xl uppercase py-4 border-4 border-black hover:bg-white transition-colors">DOWNLOAD ID CARD</Link>
                                <button className="bg-card text-rich-black font-display text-2xl uppercase py-4 border-4 border-text-primary hover:bg-text-primary hover:text-bg transition-colors">SHARE ON WA STATUS</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </main>
    );
}
