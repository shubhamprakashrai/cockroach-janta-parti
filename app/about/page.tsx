"use client";

import Link from "next/link";
import { AlertCircle, FileText, Lock, ShieldAlert } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">

            {/* Nav */}
            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-4 flex justify-between items-center shadow-[0_4px_0_0_#FFF]">
                <Link href="/" className="font-display text-2xl uppercase tracking-widest hover:text-accent">🪳 CJP</Link>
            </nav>

            {/* Hero Notice */}
            <header className="px-4 py-16 md:py-24 border-b-8 border-text-primary bg-alert text-black text-center relative shadow-[0_16px_0_0_rgba(255,214,10,1)]">
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <AlertCircle size={300} />
                </div>
                <div className="max-w-4xl mx-auto relative z-10 space-y-6">
                    <div className="bg-black text-white px-4 py-2 font-mono font-bold uppercase inline-block border-4 border-black">
                        LEGAL NOTICE
                    </div>
                    <h1 className="font-display text-6xl md:text-8xl uppercase tracking-widest leading-none">
                        THIS IS A PARODY <br /> SATELLITE.
                    </h1>
                    <p className="font-mono text-xl max-w-2xl mx-auto font-bold px-4 py-2 bg-white/20">
                        Cockroach Janta Party is an unverified, unregistered, and entirely sarcastic internet movement. We do not claim to contest actual elections.
                    </p>
                </div>
            </header>

            <section className="max-w-[1200px] mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16">

                <div className="space-y-12">
                    <div className="bg-card border-4 border-text-primary p-8 shadow-[8px_8px_0_0_#FFF]">
                        <h2 className="font-display text-4xl uppercase text-white mb-6 border-b-4 border-text-primary pb-2">Who We Are</h2>
                        <p className="font-hindi text-lg text-text-secondary leading-relaxed font-bold">
                            We are the chronically online youth of India. Frustrated by unemployment, toxic hustle culture, and political parties that treat us like pests. If they view us as pests, we will act like a swarm.
                        </p>
                    </div>

                    <div className="bg-card border-4 border-text-primary p-8 shadow-[8px_8px_0_0_#FFF]">
                        <h2 className="font-display text-4xl uppercase text-white mb-6 border-b-4 border-text-primary pb-2">Why This Exists</h2>
                        <p className="font-hindi text-lg text-text-secondary leading-relaxed font-bold">
                            Satire is the only weapon the establishment truly fears. We created this space to channel aggression into art, memes, and undeniable digital infrastructure protesting the state of affairs.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="font-display text-4xl uppercase border-b-4 border-text-primary pb-2 text-accent">Contact the Hive</h2>
                    <form className="bg-black border-4 border-text-primary p-8 space-y-6" onSubmit={e => e.preventDefault()}>
                        <div>
                            <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">Pest ID / Name</label>
                            <input type="text" className="w-full bg-bg border-4 border-text-primary p-4 font-mono uppercase text-white focus:outline-none focus:border-accent" />
                        </div>
                        <div>
                            <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary">Transmission (Message)</label>
                            <textarea rows={4} className="w-full bg-bg border-4 border-text-primary p-4 font-mono uppercase text-white focus:outline-none focus:border-accent resize-none"></textarea>
                        </div>
                        <button className="w-full bg-accent text-black font-display text-3xl uppercase py-4 border-4 border-black hover:bg-white hover:-translate-y-1 shadow-[4px_4px_0_0_#FFF] transition-all">
                            SEND SIGNAL
                        </button>
                    </form>

                    <div className="flex flex-col gap-4">
                        <a href="#" className="bg-bg border-4 border-text-primary p-4 font-mono font-bold uppercase flex items-center justify-between hover:bg-text-primary hover:text-black transition-colors group">
                            TERMS OF SERVICE <FileText size={20} className="group-hover:text-black text-text-secondary" />
                        </a>
                        <a href="#" className="bg-bg border-4 border-text-primary p-4 font-mono font-bold uppercase flex items-center justify-between hover:bg-text-primary hover:text-black transition-colors group">
                            PRIVACY POLICY <Lock size={20} className="group-hover:text-black text-text-secondary" />
                        </a>
                        <a href="#" className="bg-bg border-4 border-text-primary p-4 font-mono font-bold uppercase flex items-center justify-between hover:bg-text-primary hover:text-black transition-colors group">
                            DMCA DELETION <ShieldAlert size={20} className="group-hover:text-black text-text-secondary" />
                        </a>
                    </div>
                </div>

            </section>

        </main>
    );
}
