"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, RotateCcw, Share2, Download, CheckCircle2, Skull, Pizza, Brain, Zap } from "lucide-react";

export default function QuizPage() {
    const [stage, setStage] = useState<'intro' | 'quiz' | 'result'>('intro');
    const [currentQ, setCurrentQ] = useState(0);
    const [sliderVal, setSliderVal] = useState(50);
    const [answers, setAnswers] = useState<any[]>([]);

    const questions = [
        { type: 'mcq', text: "What's your primary reaction to bad political news?", options: ["Tweet an angry thread", "Make a cynical meme", "Ignore and play BGMI", "Discuss it at the pan tapri"] },
        { type: 'image', text: "Pick your natural habitat:", options: ["Dark Corner", "Gutter Pipe", "Leftover Pizza Box", "Office Keyboard"] },
        { type: 'slider', text: "How allergic are you to 'hustle culture'? (0 = Love it, 100 = Puke)", options: [] },
        { type: 'mcq', text: "What is your main source of protein?", options: ["Copium", "Instant Maggi", "Tears of politicians", "Whatever is on the floor"] },
        { type: 'image', text: "Choose your weapon of mass annoyance:", options: ["Flying directly at face", "Running across foot", "Hiding in shoe", "Crawling on ceiling"] },
        { type: 'mcq', text: "What's your stance on daylight?", options: ["Hate it. Burn it.", "Only for taking selfies", "Necessary evil", "I haven't seen the sun in years"] },
        { type: 'slider', text: "Level of existential dread currently felt:", options: [] }
    ];

    const handleAnswer = () => {
        if (currentQ < 6) {
            setCurrentQ(prev => prev + 1);
        } else {
            setStage('result');
        }
    };

    const handleRestart = () => {
        setStage('intro');
        setCurrentQ(0);
        setAnswers([]);
    };

    return (
        <main className="min-h-screen bg-bg text-text-primary flex flex-col items-center">

            {/* Intro Stage */}
            {stage === 'intro' && (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center max-w-4xl mx-auto animate-in zoom-in duration-500">
                    <Link href="/" className="font-mono text-sm uppercase text-text-secondary hover:text-rich-black absolute top-8 left-8">← BACK TO HOME</Link>

                    <div className="relative mb-12">
                        <div className="text-[12rem] md:text-[16rem] leading-none animate-pulse">🪳</div>
                        <div className="absolute top-0 right-0 bg-alert text-white font-mono font-bold text-xs uppercase px-4 py-2 border-4 border-black rotate-12 shadow-[4px_4px_0_0_#000]">
                            100% SCIENTIFIC
                        </div>
                    </div>

                    <h1 className="font-display text-5xl md:text-8xl uppercase mb-6 leading-none drop-shadow-[0_4px_0_var(--accent)]">
                        WHICH COCKROACH<br /><span className="text-accent border-4 border-accent px-4 bg-black">ARE YOU?</span>
                    </h1>
                    <p className="font-mono text-lg md:text-2xl mb-12 max-w-2xl text-text-secondary uppercase">
                        Take the ultimate personality assessment to discover your specific breed of pest in the great Indian political ecosystem.
                    </p>

                    <button
                        onClick={() => setStage('quiz')}
                        className="bg-accent text-black font-display text-4xl uppercase px-12 py-6 border-4 border-black shadow-[8px_8px_0_0_#000] hover:scale-105 hover:bg-white hover:shadow-[12px_12px_0_0_#FFD60A] transition-all flex items-center justify-center gap-4"
                    >
                        <Play size={40} className="fill-black" /> START THE QUIZ
                    </button>
                </div>
            )}

            {/* Quiz Stage */}
            {stage === 'quiz' && (
                <div className="flex-1 w-full max-w-3xl mx-auto flex flex-col p-4 md:p-8 animate-in fade-in duration-300">
                    {/* Progress Dots */}
                    <div className="flex justify-center gap-3 pt-8 mb-12">
                        {[0, 1, 2, 3, 4, 5, 6].map(dot => (
                            <div key={dot} className={`h-4 border-2 border-black transition-all ${dot === currentQ ? 'w-12 bg-accent' : dot < currentQ ? 'w-4 bg-success' : 'w-4 bg-bg border-text-primary'}`} />
                        ))}
                    </div>

                    {/* Question Content */}
                    <div className="flex-1 flex flex-col justify-center mb-12">
                        <h2 className="font-display text-4xl md:text-6xl uppercase text-rich-black mb-12 leading-tight text-center">
                            {questions[currentQ].text}
                        </h2>

                        {/* Options */}
                        {questions[currentQ].type === 'mcq' && (
                            <div className="space-y-4">
                                {questions[currentQ].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={handleAnswer}
                                        className="w-full text-left bg-card border-4 border-text-primary p-6 font-mono text-xl md:text-2xl uppercase hover:bg-text-primary hover:text-bg hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#FFD60A] transition-all group relative overflow-hidden"
                                    >
                                        <span className="relative z-10 font-bold block">{opt}</span>
                                        <div className="absolute inset-y-0 left-0 w-0 bg-accent transition-all duration-300 group-hover:w-full z-0 opacity-20"></div>
                                    </button>
                                ))}
                            </div>
                        )}

                        {questions[currentQ].type === 'image' && (
                            <div className="grid grid-cols-2 gap-4">
                                {questions[currentQ].options.map((opt, i) => (
                                    <button
                                        key={i}
                                        onClick={handleAnswer}
                                        className="aspect-square bg-card border-4 border-text-primary hover:border-accent flex flex-col items-center justify-center p-4 hover:-translate-y-2 transition-transform hover:shadow-[8px_8px_0_0_#000] relative group overflow-hidden"
                                    >
                                        <div className="text-[5rem] mb-4 group-hover:scale-125 transition-transform opacity-30 group-hover:opacity-100 mix-blend-screen group-hover:hue-rotate-90">
                                            {i === 0 ? '🏚️' : i === 1 ? '🚰' : i === 2 ? '🍕' : '💻'}
                                        </div>
                                        <span className="font-mono text-lg font-bold uppercase text-center relative z-10 bg-black/50 px-2 py-1 w-full">{opt}</span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {questions[currentQ].type === 'slider' && (
                            <div className="flex flex-col items-center justify-center space-y-12 py-12">
                                <div className="w-full relative">
                                    <input
                                        type="range"
                                        min="0" max="100"
                                        value={sliderVal}
                                        onChange={(e) => setSliderVal(parseInt(e.target.value))}
                                        className="w-full h-4 appearance-none hover:bg-white bg-text-primary cursor-pointer border-2 border-black"
                                        style={{ accentColor: '#FFD60A' }}
                                    />
                                    <div className="flex justify-between font-mono text-xs uppercase font-bold mt-4 text-text-secondary">
                                        <span>0 (No)</span>
                                        <span className="text-accent text-3xl">{sliderVal}%</span>
                                        <span>100 (Yes)</span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleAnswer}
                                    className="bg-accent text-black font-display text-3xl uppercase px-12 py-4 border-4 border-black hover:bg-white hover:-translate-y-1 shadow-[8px_8px_0_0_#000] transition-all"
                                >
                                    CONFIRM RATING
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Result Stage */}
            {stage === 'result' && (
                <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col p-4 md:p-8 animate-in slide-in-from-bottom-12 duration-700 pb-24">

                    <div className="text-center mb-8">
                        <p className="font-mono font-bold text-text-secondary uppercase tracking-widest mb-2 border-b-2 border-text-primary inline-block pb-1">DIAGNOSIS COMPLETE</p>
                        <h1 className="font-display text-5xl md:text-7xl uppercase text-rich-black leading-tight">
                            YOU ARE THE <br />
                            <span className="text-accent bg-black px-4 lg:inline-block border-4 border-accent mt-2 shadow-[8px_8px_0_0_#FFD60A] -rotate-1">PIZZA-BOX COCKROACH</span>
                        </h1>
                    </div>

                    <div className="bg-card border-8 border-text-primary shadow-[16px_16px_0_0_#FFD60A] p-8 mt-12 flex flex-col md:flex-row gap-8 items-center md:items-start relative">
                        <div className="w-full md:w-1/3 aspect-square bg-bg border-4 border-black flex items-center justify-center p-4 relative overflow-hidden group">
                            <div className="text-[10rem] group-hover:scale-110 transition-transform -rotate-12 z-10 drop-shadow-[0_10px_0_#000]">🍕🪳</div>
                            <div className="absolute inset-0 bg-alert mix-blend-overlay opacity-20"></div>
                            {/* Trait Tags */}
                            <div className="absolute top-2 left-2 bg-black border-2 border-success text-success font-mono text-[9px] font-bold px-2 py-0.5 uppercase">Rare Breed</div>
                        </div>

                        <div className="w-full md:w-2/3">
                            <h2 className="font-display text-3xl uppercase text-rich-black mb-4 border-l-8 border-accent pl-4">DESCRIPTION</h2>
                            <p className="font-hindi text-lg mb-8 text-text-secondary leading-relaxed">
                                You thrive on leftover scraps of political gossip and cold pizza. While others are fighting in the streets, you observe chaos from the safety of your greasy cardboard haven. You are chronically online, deeply cynical, but oddly comfortable in the current economic collapse.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <span className="font-mono text-xs uppercase bg-black text-white px-3 py-1 border-2 border-text-primary flex gap-2 items-center"><Brain size={14} className="text-blue-500" /> CYNICAL MIND</span>
                                <span className="font-mono text-xs uppercase bg-black text-white px-3 py-1 border-2 border-text-primary flex gap-2 items-center"><Zap size={14} className="text-yellow-500" /> FAST TYPER</span>
                                <span className="font-mono text-xs uppercase bg-black text-white px-3 py-1 border-2 border-text-primary flex gap-2 items-center"><Skull size={14} className="text-red-500" /> DEAD INSIDE</span>
                            </div>
                        </div>

                        {/* Stamp */}
                        <div className="hidden md:block absolute -top-8 -right-8 text-5xl font-display text-alert rotate-[25deg] border-4 border-alert px-4 py-2 bg-black opacity-80 decoration-4 shadow-[4px_4px_0_0_rgba(255,59,48,1)]">
                            VERIFIED ROACH
                        </div>
                    </div>

                    <div className="mt-12 flex flex-col md:flex-row gap-6 w-full max-w-2xl mx-auto">
                        {/* Share PNG logic visual hook */}
                        <button className="flex-1 bg-accent text-black font-display text-3xl uppercase py-5 border-4 border-black hover:bg-white hover:-translate-y-1 shadow-[8px_8px_0_0_#000] transition-all flex justify-center items-center gap-3">
                            <Share2 size={28} /> SHARE RESULT
                        </button>
                        <button
                            onClick={handleRestart}
                            className="flex-1 bg-bg text-text-primary font-display text-3xl uppercase py-5 border-4 border-text-primary hover:bg-text-primary hover:text-bg hover:-translate-y-1 shadow-[8px_8px_0_0_#FFD60A] transition-all flex justify-center items-center gap-3"
                        >
                            <RotateCcw size={28} /> TRY AGAIN
                        </button>
                    </div>

                    <div className="mt-8 text-center">
                        <Link href="/tools" className="font-mono font-bold uppercase text-sm border-b-2 border-white pb-1 hover:text-accent hover:border-accent">← BACK TO TOOLS HUB</Link>
                    </div>
                </div>
            )}

        </main>
    );
}
