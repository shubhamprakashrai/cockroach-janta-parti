"use client";

import Link from "next/link";
import { ArrowRight, Play, Users, BookOpen } from "lucide-react";

export default function HindiHomepage() {
    return (
        <main className="min-h-screen bg-bg text-text-primary relative overflow-hidden">

            {/* Lang Toggle / Ticker Mock */}
            <div className="bg-accent text-black overflow-hidden py-2 border-b-4 border-black border-t-8 border-t-black">
                <div className="whitespace-nowrap animate-ticker inline-block font-mono font-bold uppercase tracking-widest text-sm">
                    अस्वीकरण: यह एक व्यंग्यात्मक प्रशंसक साइट है। यह वह पार्टी है जिसकी हमें आवश्यकता है, न कि वह जिसके हम हकदार हैं।
                    &nbsp;&nbsp;&nbsp;⚠️&nbsp;&nbsp;&nbsp;
                    अस्वीकरण: यह एक व्यंग्यात्मक प्रशंसक साइट है। यह वह पार्टी है जिसकी हमें आवश्यकता है, न कि वह जिसके हम हकदार हैं।
                </div>
            </div>

            <nav className="border-b-4 border-text-primary px-4 py-4 flex justify-between items-center bg-card sticky top-0 z-50">
                <Link href="/hindi" className="font-display text-3xl uppercase">🪳 सीजेपा</Link>
                <Link href="/" className="font-mono text-[10px] font-bold uppercase border-2 border-text-primary px-3 py-1 hover:bg-white hover:text-black">SWITCH TO ENGLISH</Link>
            </nav>

            {/* Hero */}
            <header className="relative w-full min-h-[90vh] flex flex-col items-center justify-center border-b-4 border-text-primary bg-bg text-center px-4 overflow-hidden">
                {/* Background Swarm Mock */}
                <div className="absolute inset-0 z-0 opacity-10 flex items-center justify-center">
                    <div className="text-[20rem]">🪳</div>
                </div>

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
                    <div className="inline-block bg-alert text-black font-hindi font-bold uppercase px-4 py-2 border-4 border-black shadow-[4px_4px_0_0_#FFF] mb-8 rotate-[-2deg]">
                        महान भारतीय राजनीतिक प्रयोग।
                    </div>

                    <h1 className="font-display text-7xl md:text-[10rem] xl:text-[12rem] uppercase leading-[0.8] tracking-tighter text-white drop-shadow-[0_8px_0_var(--accent)] mb-8">
                        <span className="block">मैं भी</span>
                        <span className="block text-accent">कॉकरोच।</span>
                    </h1>

                    <p className="font-hindi text-xl md:text-3xl max-w-3xl mb-12 text-text-secondary leading-relaxed bg-black/50 p-4 border-l-8 border-accent">
                        उन्होंने हमें बेरोजगार, आलसी और कीड़े कहा। हमने इसे एक पहचान बना लिया। कॉकरोच जनता पार्टी में आपका स्वागत है। कोई जाति नहीं। कोई धर्म नहीं। केवल शुद्ध अस्तित्व।
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
                        <Link href="/hindi/manifesto" className="flex-1 bg-accent text-black font-display text-3xl md:text-4xl uppercase py-6 border-4 border-text-primary shadow-[8px_8px_0_0_#FFF] hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#000] transition-all flex items-center justify-center gap-2">
                            घोषणापत्र पढ़ें <BookOpen size={30} />
                        </Link>
                        <Link href="/join" className="flex-1 bg-bg text-white font-display text-3xl md:text-4xl uppercase py-6 border-4 border-text-primary shadow-[8px_8px_0_0_#FFD60A] hover:bg-white hover:text-black hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                            झुंड में शामिल हों <Users size={30} />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Grid Highlights */}
            <section className="max-w-[1600px] mx-auto px-4 py-20 flex flex-col gap-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-card border-8 border-text-primary p-8 md:p-12 shadow-[16px_16px_0_0_#FFD60A]">
                        <h2 className="font-display text-5xl uppercase mb-6 text-alert line-clamp-1">मीम दीवार</h2>
                        <p className="font-hindi text-xl text-text-secondary mb-8">अपनी सर्वश्रेष्ठ कॉकरोच कला अपलोड करें। अगर यह मजाकिया है, तो यह यहीं रहेगा। यदि यह राजनेताओं को आहत करता है, तो इसे पिन किया जाएगा।</p>
                        <Link href="/memes" className="inline-flex bg-white text-black font-display text-2xl uppercase px-8 py-4 border-4 border-black hover:bg-accent hover:-translate-y-1 transition-transform">
                            मीम्स देखें <ArrowRight className="ml-2" />
                        </Link>
                    </div>

                    <div className="bg-bg border-8 border-text-primary p-8 md:p-12 shadow-[16px_16px_0_0_#000] relative overflow-hidden group">
                        <div className="absolute -right-10 -bottom-10 text-[10rem] opacity-10 group-hover:scale-110 transition-transform">🎧</div>
                        <h2 className="font-display text-5xl uppercase mb-6 text-white relative z-10 line-clamp-1">पार्टी गान</h2>
                        <p className="font-hindi text-xl text-text-secondary mb-8 relative z-10">सुनें आधिकारिक "एक कदम उठाओ" एंथम और अपना खुद का रीमिक्स बनाएं।</p>
                        <Link href="/anthem" className="relative z-10 inline-flex bg-accent text-black font-display text-2xl uppercase px-8 py-4 border-4 border-black hover:bg-white hover:-translate-y-1 transition-transform">
                            गान चलाएं <Play className="ml-2" fill="currentColor" />
                        </Link>
                    </div>
                </div>
            </section>

        </main>
    );
}
