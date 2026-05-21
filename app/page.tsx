"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Play, Share2, ArrowRight, Upload, Crown, Menu, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [memberCount, setMemberCount] = useState(350000);
  const [manifestoVotes, setManifestoVotes] = useState<Record<number, 'agree' | 'disagree'>>({});

  useEffect(() => {
    // Fake live counter
    const interval = setInterval(() => {
      setMemberCount(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleVote = (id: number, type: 'agree' | 'disagree') => {
    setManifestoVotes(prev => ({ ...prev, [id]: type }));
  };

  const calculatePercentage = (id: number, base: number) => {
    if (manifestoVotes[id] === 'agree') return Math.min(base + 8, 99);
    if (manifestoVotes[id] === 'disagree') return Math.max(base - 12, 1);
    return base;
  };

  const manifestoPoints = [
    { id: 1, title: "NO RAJYA SABHA FOR RETIRED CJIs", desc: "No post-retirement seat as a reward.", baseAgree: 89 },
    { id: 2, title: "CEC ARREST UNDER UAPA", desc: "If a legitimate vote is deleted.", baseAgree: 94 },
    { id: 3, title: "50% WOMEN RESERVATION", desc: "In Parliament & Cabinet.", baseAgree: 82 },
    { id: 4, title: "20-YEAR BAN FOR DEFECTING", desc: "No more horse-trading.", baseAgree: 97 },
    { id: 5, title: "CANCEL BOUGHT MEDIA", desc: "Cancel Ambani/Adani licenses.", baseAgree: 88 }
  ];

  const newsItems = [
    { source: "BusinessToday", title: "CJP Surpasses BJP on Instagram with 9.3M Followers", time: "Read in 30s", thumb: "📈" },
    { source: "ThePrint", title: "Over 3.5 Lakh Youth Drop Resumes to Join Cockroach Janta Party", time: "Read in 1m", thumb: "🤯" },
    { source: "The Wire", title: "Mahua Moitra officially verified as CJP member", time: "Read in 45s", thumb: "🔥" },
  ];

  return (
    <main className="min-h-screen font-body text-text-primary bg-bg overflow-x-hidden selection:bg-accent selection:text-black pb-20 md:pb-0">

      {/* 1. ANNOUNCEMENT TICKER */}
      <div className="sticky top-0 z-50 bg-accent text-black py-2 overflow-hidden border-b-4 border-black">
        <div className="font-mono text-sm font-bold whitespace-nowrap inline-block animate-ticker">
          9.3M FOLLOWERS ✦ 1L+ MEMBERS ✦ 0 CORPORATE SPONSORS ✦ #MAINBHICOCKROACH ✦ 9.3M FOLLOWERS ✦ 1L+ MEMBERS ✦ 0 CORPORATE SPONSORS ✦ #MAINBHICOCKROACH ✦
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <nav className="sticky top-[36px] z-40 bg-bg border-b-4 border-text-primary px-4 py-3 flex justify-between items-center shadow-[0_8px_0_0_#FFF]">
        <Link href="/" className="font-display text-2xl md:text-3xl tracking-widest uppercase hover:text-accent transition-colors">
          🪳 Cockroch Janta Parti
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-display text-xl uppercase tracking-widest">
          {["Manifesto", "News", "Memes", "Tools", "Blog"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-accent hover:underline decoration-4 underline-offset-4">{item}</Link>
          ))}
          <Link href="/join" className="bg-accent text-black px-6 py-2 border-4 border-black shadow-[4px_4px_0_0_#FFF] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#FFF] transition-all">
            JOIN THE PARTI
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 text-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={32} />
        </button>
      </nav>

      {/* Mobile Menu Dropdown & Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg border-t-4 border-text-primary flex justify-around p-3 font-mono text-xs uppercase shadow-[0_-4px_0_0_#FFF]">
        {["Home", "News", "Memes", "Quiz", "Profile"].map(tab => (
          <div key={tab} className="flex flex-col items-center gap-1 active:text-accent">
            <div className="text-xl">🪳</div>
            <span>{tab}</span>
          </div>
        ))}
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b-4 border-text-primary">
        {/* Swarm Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          {/* Abstract India Map Shape representation via scattered roaches */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: Math.random() * 100 - 50 + "vw", y: Math.random() * 100 - 50 + "vh" }}
              animate={{ x: Math.random() * 100 - 50 + "vw", y: Math.random() * 100 - 50 + "vh" }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: "mirror" }}
              className="absolute text-5xl md:text-7xl"
            >
              🪳
            </motion.div>
          ))}
        </div>

        <div className="z-10 bg-bg/80 backdrop-blur-sm p-4 md:p-12 border-4 border-text-primary shadow-[16px_16px_0_0_#FFD60A]">
          <h1 className="font-display text-7xl md:text-[8rem] uppercase leading-none tracking-tighter mb-4 text-white">
            MAIN BHI<br />
            <span className="text-accent underline decoration-8 underline-offset-8 group-hover:text-white transition-colors">COCKROACH.</span>
          </h1>
          <h2 className="font-hindi text-xl md:text-3xl text-text-secondary mb-10 max-w-3xl">
            Tum bhi banno. India's loudest Gen Z movement.
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-10">
            <Link href="/join" className="bg-accent text-black font-display text-2xl md:text-3xl uppercase tracking-widest px-8 md:px-12 py-4 md:py-6 border-4 border-text-primary shadow-[8px_8px_0_0_#FFF] hover:translate-y-1 hover:shadow-[4px_4px_0_0_#FFF] transition-all">
              JOIN THE PARTI →
            </Link>
            <Link href="/tools/card" className="bg-bg text-accent font-display text-xl md:text-2xl uppercase tracking-widest px-6 md:px-8 py-4 md:py-6 border-4 border-accent shadow-[8px_8px_0_0_#FFD60A] hover:translate-y-1 hover:shadow-[4px_4px_0_0_#FFD60A] transition-all">
              GENERATE MY COCKROACH CARD 🪳
            </Link>
          </div>

          <div className="inline-block border-2 border-text-primary bg-card/50 p-4 font-mono text-sm md:text-base">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-text-secondary">
              <div><span className="text-accent font-bold">MEMBERS:</span> {memberCount.toLocaleString()} 📈</div>
              <div className="hidden md:block">|</div>
              <div><span className="text-alert font-bold">DAYS SINCE CJI REMARK:</span> 6</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LIVE STATS DASHBOARD */}
      <section className="px-4 py-20 bg-text-primary text-bg border-b-4 border-bg relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="w-4 h-4 bg-alert rounded-full animate-pulse border-2 border-bg"></div>
            <span className="font-mono font-bold uppercase tracking-wider text-sm">Updated 60 sec ago</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "IG FOLLOWERS", value: "9.3M", src: "LIVE" },
              { label: "X FOLLOWERS", value: "47K", src: "LIVE" },
              { label: "TOTAL MEMBERS", value: "3.5L", src: "VERIFIED" },
              { label: "VS BJP GAP", value: "+600K", src: "LEAD" }
            ].map((stat, i) => (
              <div key={i} className="bg-bg text-text-primary p-6 md:p-8 border-4 border-bg shadow-[8px_8px_0_0_#FF0000] hover:scale-105 transition-transform group">
                <div className="font-display text-4xl md:text-7xl text-accent mb-2 tracking-tighter truncate">{stat.value}</div>
                <div className="font-mono text-xs md:text-sm font-bold text-text-secondary mb-4">{stat.label}</div>
                <div className="inline-block bg-accent text-bg px-2 py-1 font-mono text-[10px] md:text-xs font-bold">{stat.src}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TODAY'S TOP COCKROACH NEWS */}
      <section className="px-4 py-24 max-w-7xl mx-auto border-b-4 border-text-primary overflow-hidden">
        <div className="flex justify-between items-end mb-12">
          <h2 className="font-display text-5xl md:text-7xl uppercase inline-block border-b-8 border-alert pb-2">
            BREAKING ROACH NEWS
          </h2>
        </div>

        {/* Mobile uses flex container for horizontal scroll, desktop is grid */}
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x">
          {newsItems.map((news, i) => (
            <div key={i} className="min-w-[85vw] md:min-w-0 flex-shrink-0 snap-center bg-card border-4 border-text-primary p-6 shadow-[8px_8px_0_0_#FFF] flex flex-col justify-between group hover:-translate-y-2 transition-transform cursor-pointer">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="bg-text-primary text-bg font-bold font-mono px-3 py-1 text-xs uppercase shadow-[4px_4px_0_0_#FFD60A]">{news.source}</span>
                  <span className="text-4xl">{news.thumb}</span>
                </div>
                <h3 className="font-bold text-2xl md:text-3xl mb-6 font-hindi leading-tight group-hover:text-accent transition-colors">{news.title}</h3>
              </div>
              <div className="flex justify-between items-center border-t-4 border-text-primary pt-4">
                <span className="text-accent font-mono text-sm font-bold uppercase">{news.time}</span>
                <button className="text-text-primary hover:text-accent transition-colors" title="Share News">
                  <Share2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <Link href="/news" className="font-mono font-bold uppercase text-accent hover:text-white underline decoration-2 underline-offset-4 text-lg">See all news →</Link>
        </div>
      </section>

      {/* 6. INTERACTIVE MANIFESTO */}
      <section className="px-4 py-24 bg-card border-b-4 border-text-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight text-white mb-4">5 DEMANDS.</h2>
            <h3 className="font-display text-5xl md:text-6xl text-alert uppercase tracking-widest bg-black inline-block px-4 py-2 border-4 border-alert">NON-NEGOTIABLE.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manifestoPoints.map((point) => (
              <div key={point.id} className="bg-bg border-4 border-text-primary p-6 shadow-[12px_12px_0_0_#FFD60A] relative flex flex-col overflow-hidden">
                <div className="absolute -top-4 -right-4 font-display text-[8rem] text-text-primary opacity-10 leading-none">{`0${point.id}`}</div>
                <div className="z-10 flex-1">
                  <div className="font-display text-4xl uppercase mb-3 text-accent tracking-wide">{point.title}</div>
                  <p className="text-text-primary font-mono text-lg mb-8 bg-black/50 p-2 inline-block border-l-4 border-alert">{point.desc}</p>
                </div>

                <div className="z-10 mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => handleVote(point.id, 'agree')}
                      className={`flex-1 font-display text-2xl uppercase py-3 border-4 border-text-primary shadow-[4px_4px_0_0_#FFF] transition-all ${manifestoVotes[point.id] === 'agree' ? 'bg-success text-black translate-y-1 shadow-none' : 'bg-bg text-white hover:bg-success hover:text-black'}`}
                    >
                      AGREE {manifestoVotes[point.id] === 'agree' && '✓'}
                    </button>
                    <button
                      onClick={() => handleVote(point.id, 'disagree')}
                      className={`flex-1 font-display text-2xl uppercase py-3 border-4 border-text-primary shadow-[4px_4px_0_0_#FFF] transition-all ${manifestoVotes[point.id] === 'disagree' ? 'bg-alert text-black translate-y-1 shadow-none' : 'bg-bg text-white hover:bg-alert hover:text-black'}`}
                    >
                      DISAGREE {manifestoVotes[point.id] === 'disagree' && '✗'}
                    </button>
                  </div>

                  <div className="flex justify-between items-center border-t-4 border-border pt-4 mt-4 font-mono text-sm">
                    <div className="text-accent font-bold">{calculatePercentage(point.id, point.baseAgree)}% AGREE</div>
                    <div className="flex gap-4">
                      <button className="hover:text-success underline decoration-2 underline-offset-4 flex items-center gap-1"><Share2 size={14} /> WA SHARE</button>
                      <Link href="/manifesto" className="text-text-secondary hover:text-white underline decoration-2 underline-offset-4">DEEP DIVE →</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* 6th Card: Call to action for full manifesto */}
            <div className="bg-accent border-4 border-text-primary p-6 shadow-[12px_12px_0_0_#FFF] flex flex-col items-center justify-center text-center">
              <h3 className="font-display text-5xl uppercase text-black mb-4">WANT MORE?</h3>
              <p className="font-mono text-black font-bold mb-6">Read the full roasting of the political class.</p>
              <Link href="/manifesto" className="bg-black text-accent font-display text-3xl px-8 py-4 uppercase border-4 border-black hover:bg-bg hover:text-white transition-colors shadow-[8px_8px_0_0_#FFF]">
                VIEW FULL MANIFESTO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MEME WALL PREVIEW */}
      <section className="px-4 py-24 border-b-4 border-text-primary bg-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 text-center md:text-left">
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter">MEME WALL</h2>
            <Link href="/tools/meme-generator" className="bg-alert text-black font-display text-2xl uppercase px-8 py-4 border-4 border-text-primary shadow-[8px_8px_0_0_#FFF] hover:scale-105 transition-transform flex items-center gap-2">
              <span>Open Meme Generator 🪳</span>
            </Link>
          </div>

          {/* Pinterest Masonry layout via columns */}
          <div className="columns-2 md:columns-4 gap-6 space-y-6">
            {/* Pinned Card */}
            <div className="break-inside-avoid relative bg-accent border-4 border-text-primary p-2 md:p-4 shadow-[8px_8px_0_0_#FFF] mb-6">
              <div className="absolute -top-5 -right-5 bg-black text-accent p-3 rounded-full border-4 border-accent animate-bounce">
                <Crown size={24} />
              </div>
              <div className="h-64 bg-black flex items-center justify-center overflow-hidden relative">
                {/* Fake Meme Imagery */}
                <div className="text-[6rem]">🤡</div>
                <div className="absolute bottom-4 left-0 right-0 text-center font-display text-3xl uppercase text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)]">MEME OF<br />THE DAY</div>
              </div>
              <p className="mt-3 font-mono text-black font-bold uppercase text-xs text-center border-t-2 border-black pt-2">By @lazyroach</p>
            </div>

            {/* Other 11 Thumbnails */}
            {[...Array(11)].map((_, i) => {
              const heights = ['h-40', 'h-56', 'h-48', 'h-72', 'h-64'];
              const height = heights[i % heights.length];
              return (
                <div key={i} className={`break-inside-avoid relative bg-card border-4 border-text-primary shadow-[8px_8px_0_0_#FFD60A] group overflow-hidden ${height}`}>
                  <div className="absolute inset-0 flex items-center justify-center text-[4rem] opacity-20 group-hover:scale-125 transition-transform">🪳</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 flex items-center justify-center transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 font-display text-2xl text-accent uppercase tracking-widest text-center transition-opacity">View<br />Meme</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/memes" className="font-mono font-bold uppercase text-accent hover:text-white hover:underline decoration-2 text-lg">Load More Gutters →</Link>
          </div>
        </div>
      </section>

      {/* 8. ANTHEM PLAYER */}
      <section className="px-4 py-24 bg-accent text-black border-b-4 border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-6xl uppercase mb-6 tracking-widest bg-black text-accent inline-block px-4 border-4 border-black shadow-[8px_8px_0_0_#FFF]">THE ANTHEM</h2>

            <div className="bg-bg border-4 border-black p-8 shadow-[16px_16px_0_0_#FFF] mb-8">
              <div className="text-accent text-6xl font-display uppercase tracking-widest leading-none mb-6">TAKE A STEP<br />NOW</div>
              <div className="flex items-center gap-4">
                <button className="bg-accent text-black p-4 rounded-full border-4 border-black hover:scale-110 transition-transform">
                  <Play fill="black" size={32} />
                </button>
                {/* Visual waveform placeholder */}
                <div className="flex-1 flex gap-1 h-12 items-end">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="flex-1 bg-text-primary animate-pulse" style={{ height: `${Math.max(20, Math.random() * 100)}%`, animationDelay: `${i * 0.1}` + 's' }}></div>
                  ))}
                </div>
              </div>
            </div>

            <button className="font-mono font-bold uppercase border-4 border-black px-6 py-3 hover:bg-black hover:text-accent transition-colors flex items-center gap-2 mx-auto md:mx-0">
              <Upload size={20} /> Upload your remix
            </button>
          </div>

          <div className="flex-1 bg-text-primary text-bg p-8 md:p-12 border-4 border-black font-hindi text-3xl md:text-5xl uppercase font-bold italic shadow-[16px_16px_0_0_#000]">
            "Kill us and we rise again. <br />
            <span className="text-black bg-accent px-2 mt-4 inline-block shadow-[4px_4px_0_0_#000]">From the gutters, from the stain."</span>
          </div>

        </div>
      </section>

      {/* 9. VERIFIED MEMBERS WALL */}
      <section className="px-4 py-24 bg-card border-b-4 border-text-primary">
        <h2 className="font-display text-7xl uppercase text-center mb-16 tracking-widest text-white">WHO'S IN</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "MAHUA MOITRA", role: "TMC MP", date: "Joined: May 2026", quote: "I'm officially a cockroach." },
            { name: "KIRTI AZAD", role: "TMC MP", date: "Joined: May 2026", quote: "From the gutters, we speak." },
            { name: "KUNAL KAMRA", role: "Comedian", date: "Joined: May 2026", quote: "Vistara banned me, CJP accepted me." },
            { name: "ABHIJEET DIPKE", role: "Founder", date: "Joined: May 15, 2026", quote: "Main bhi cockroach." },
            { name: "RAVISH KUMAR", role: "Journalist", date: "Joined: May 2026", quote: "Kaun jaat ho bhai? Cockroach." },
            { name: "AKASH BANERJEE", role: "Creator", date: "Joined: May 2026", quote: "Deshbakt now a Cockroach." }
          ].map((m, i) => (
            <div key={i} className="bg-bg border-4 border-text-primary p-6 shadow-[8px_8px_0_0_#FFD60A] relative hover:-translate-y-2 transition-transform">
              <div className="absolute -top-4 -right-4 bg-success text-black p-2 border-4 border-text-primary rounded-full">
                <CheckCircle2 fill="black" stroke="lime" size={32} />
              </div>
              <div className="w-20 h-20 bg-text-primary border-4 border-text-primary flex items-center justify-center text-4xl mb-4 bg-cover bg-center">👤</div>
              <h3 className="font-display text-3xl uppercase tracking-wider mb-1">{m.name}</h3>
              <p className="font-mono text-accent uppercase font-bold text-sm mb-4 bg-black/50 inline-block px-2">{m.role}</p>
              <div className="border-t-4 border-border pt-4 mt-2">
                <p className="font-hindi text-lg italic text-text-primary mb-2">"{m.quote}"</p>
                <p className="font-mono text-xs text-text-secondary uppercase">{m.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. STATE CHAPTERS MAP */}
      <section className="px-4 py-24 bg-bg border-b-4 border-text-primary">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-display text-7xl uppercase text-white mb-6 text-center border-b-8 border-accent pb-2">STATE CHAPTERS MAP</h2>
          <p className="font-mono text-text-secondarytext-center max-w-2xl mb-12 uppercase text-lg text-center">Interactive map coming soon. For now, click a state to see member count and top meme.</p>

          {/* Abstract Map Grid */}
          <div className="w-full max-w-4xl flex flex-wrap justify-center gap-3">
            {["JK", "HP", "PB", "CH", "HR", "UK", "DL", "RJ", "UP", "BR", "SK", "AR", "AS", "NL", "MN", "MZ", "TR", "ML", "WB", "JH", "OR", "CG", "MP", "GJ", "MH", "GA", "KA", "TS", "AP", "KL", "TN"].map((code, idx) => (
              <Link href={`/states/${code}`} key={code} className="bg-card w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center border-4 border-text-primary font-display text-2xl uppercase hover:bg-accent hover:text-black transition-colors shadow-[4px_4px_0_0_#FFF] group relative">
                {code}
                {/* Hover tooltip logic simulation */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-text-primary text-black font-mono text-xs p-2 hidden group-hover:block whitespace-nowrap border-4 border-black z-10 w-32 shadow-[8px_8px_0_0_#FFD60A]">
                  <div className="font-bold text-center border-b-2 border-black pb-1 mb-1">{code} CHAPTER</div>
                  <div className="text-center">{Math.floor(Math.random() * 50 + 10)}K Members</div>
                </div>
              </Link>
            ))}
          </div>
          <Link href="/states" className="mt-12 bg-text-primary text-bg font-display text-2xl uppercase px-8 py-3 border-4 border-text-primary hover:bg-bg hover:text-text-primary transition-colors">
            VIEW DIRECTORY
          </Link>
        </div>
      </section>

      {/* 11. JOIN FORM & 13. NEWSLETTER CTA (Combined grid) */}
      <section className="px-4 py-24 bg-card border-b-4 border-text-primary">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Join Form */}
          <div className="bg-bg border-4 border-accent p-8 md:p-12 shadow-[16px_16px_0_0_#FFD60A]">
            <h2 className="font-display text-6xl uppercase text-white mb-8 border-l-8 border-accent pl-4">JOIN FORM</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-mono uppercase font-bold text-sm block mb-2 text-accent">NAME</label>
                <input type="text" className="w-full bg-card border-4 border-text-primary p-4 font-mono text-xl uppercase focus:border-accent focus:outline-none text-white placeholder-text-secondary" placeholder="YOUR NAME" />
              </div>
              <div>
                <label className="font-mono uppercase font-bold text-sm block mb-2 text-accent">CITY</label>
                <input type="text" className="w-full bg-card border-4 border-text-primary p-4 font-mono text-xl uppercase focus:border-accent focus:outline-none text-white placeholder-text-secondary" placeholder="WHERE DO YOU LURK?" />
              </div>
              <div>
                <label className="font-mono uppercase font-bold text-sm block mb-2 text-accent">WHY ARE YOU A COCKROACH?</label>
                <input type="text" className="w-full bg-card border-4 border-text-primary p-4 font-mono text-xl uppercase focus:border-accent focus:outline-none text-white placeholder-text-secondary" placeholder="1 LINE ONLY" />
              </div>
              <button className="w-full bg-accent text-black font-display text-3xl uppercase py-6 border-4 border-black hover:bg-text-primary hover:text-black transition-colors shadow-[8px_8px_0_0_#FFF] active:translate-y-2 active:shadow-none">
                GENERATE MY MEMBERSHIP CARD
              </button>
            </form>
          </div>

          {/* Content right side: Blog Teaser & Newsletter */}
          <div className="flex flex-col gap-12 justify-between">
            {/* 12. BLOG TEASER */}
            <div>
              <div className="flex justify-between items-center mb-8 border-b-4 border-text-primary pb-4">
                <h2 className="font-display text-5xl text-white">BLOG TEASER</h2>
                <Link href="/blog" className="font-mono uppercase text-sm text-accent hover:underline decoration-2"><ArrowRight size={24} /></Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <Link href={`/blog/post-${i}`} key={i} className="group bg-bg p-4 border-4 border-text-primary hover:border-accent shadow-[4px_4px_0_0_#FFF] transition-all">
                    <div className="h-24 bg-card mb-3 border-2 border-text-primary flex items-center justify-center font-display text-2xl text-text-secondary group-hover:bg-accent/20">IMG</div>
                    <h4 className="font-bold font-hindi line-clamp-2 leading-snug group-hover:text-accent">Why being lazy is actually a political statement in 2026</h4>
                  </Link>
                ))}
              </div>
              <Link href="/blog" className="inline-block mt-8 font-mono font-bold uppercase text-accent hover:text-white hover:underline decoration-2 text-lg">
                READ MORE COCKROACH WISDOM →
              </Link>
            </div>

            {/* 13. NEWSLETTER CTA */}
            <div className="bg-alert p-8 border-4 border-black shadow-[16px_16px_0_0_#FFF] text-black">
              <h2 className="font-display text-5xl uppercase mb-2">ROACH REPORT<br />— Weekly Drop</h2>
              <p className="font-mono font-bold mb-6 text-xl">No spam. Bas roach gyaan.</p>
              <form className="flex flex-col md:flex-row gap-4" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="ENTER EMAIL" className="flex-1 bg-white border-4 border-black p-4 font-mono text-xl uppercase focus:border-white focus:outline-none placeholder-text-secondary" />
                <button className="bg-black text-white font-display text-2xl uppercase px-8 border-4 border-black hover:bg-bg transition-colors">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-bg px-4 pt-24 pb-12 text-center md:text-left border-t-8 border-black relative overflow-hidden">
        <div className="absolute -bottom-20 -right-20 text-[20rem] opacity-5 pointer-events-none rotate-12">🪳</div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-16 relative z-10">

          <div className="flex-1 max-w-xl">
            <div className="font-display text-7xl text-white mb-6 uppercase tracking-widest border-b-4 border-accent pb-4 inline-block">🪳 CJP</div>
            <div className="bg-alert text-black font-display text-3xl uppercase p-4 border-4 border-text-primary shadow-[8px_8px_0_0_#FFF] mb-6">
              Fan-built. Not affiliated with CJP or ECI.
            </div>
            <p className="font-mono text-text-secondary text-lg">Made with 🪳 in India. For the lazy, by the lazy.</p>
          </div>

          <div className="flex-1 w-full grid grid-cols-2 gap-8 font-display text-2xl uppercase tracking-widest">
            <div className="flex flex-col gap-4">
              <Link href="/manifesto" className="hover:text-accent">Manifesto</Link>
              <Link href="/news" className="hover:text-accent">News</Link>
              <Link href="/memes" className="hover:text-accent">Memes</Link>
              <Link href="/quiz" className="hover:text-accent">Quiz</Link>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/join" className="text-accent hover:text-white">Join Form</Link>
              <Link href="/tools" className="hover:text-accent">Generators</Link>
              <Link href="/states" className="hover:text-accent">State Chapters</Link>
              <Link href="/blog" className="hover:text-accent">Blog Teaser</Link>
            </div>
          </div>

        </div>

        {/* Social Icons & Bottom Text */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t-4 border-card z-10 relative">
          <div className="flex gap-6 mb-6 md:mb-0 text-white font-mono font-bold text-xl hover:[&>a]:text-accent">
            <a href="#">INSTAGRAM</a>
            <a href="#">X (TWITTER)</a>
            <a href="#">YOUTUBE</a>
          </div>
          <div className="font-mono text-text-secondary text-sm">
            © 2026 COCKROCH JANTA PARTI
          </div>
        </div>
      </footer>
    </main>
  );
}
