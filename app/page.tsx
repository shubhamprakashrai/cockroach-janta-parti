"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Play, Share2, ArrowRight, Upload, Crown, Menu, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { listenToMemberCount, joinMember, listenToAdminNews, listenToAdminBlogs, type AdminNewsItem, type AdminBlogPost } from "@/lib/firebase-actions";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "movnoogd";
const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [memberCount, setMemberCount] = useState(1);
  const [manifestoVotes, setManifestoVotes] = useState<Record<number, 'agree' | 'disagree'>>({});
  const [joinForm, setJoinForm] = useState({ name: "", city: "", why: "" });
  const [joinStatus, setJoinStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
  const [adminNews, setAdminNews] = useState<AdminNewsItem[]>([]);
  const [adminBlogs, setAdminBlogs] = useState<AdminBlogPost[]>([]);

  useEffect(() => {
    // Real Firestore listener — no fake drift, only true joins increment the count.
    const unsubCount = listenToMemberCount((count) => setMemberCount(count));
    const unsubNews = listenToAdminNews(setAdminNews);
    const unsubBlogs = listenToAdminBlogs(setAdminBlogs);
    return () => { unsubCount(); unsubNews(); unsubBlogs(); };
  }, []);

  const submitJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (joinStatus === "submitting") return;
    setJoinStatus("submitting");
    // Save to localStorage so /tools/card can pre-fill from this submission
    try { window.localStorage.setItem("cjp_join_form_v1", JSON.stringify(joinForm)); } catch {}
    // Submit to Firestore (live counter + members collection) — graceful no-op if unconfigured
    joinMember(joinForm).catch(() => {});
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...joinForm, _subject: `New CJP member: ${joinForm.name || "Anonymous"}`, source: "homepage" }),
      });
      if (!res.ok) throw new Error("submit failed");
      setJoinStatus("ok");
    } catch {
      setJoinStatus("error");
    }
  };

  const cardLinkWithData = () => {
    const params = new URLSearchParams();
    if (joinForm.name) params.set("name", joinForm.name);
    if (joinForm.city) params.set("city", joinForm.city);
    if (joinForm.why) params.set("why", joinForm.why);
    const qs = params.toString();
    return qs ? `/tools/card?${qs}` : "/tools/card";
  };

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

  // News + blog teasers are pulled live from Firestore (uploads via /admin).
  // The members showcase stays empty until founders opt in — for now, the section flips to a CTA.
  const newsItems = adminNews.slice(0, 3).map((n) => ({
    source: n.source,
    title: n.title,
    time: n.createdAtMs ? new Date(n.createdAtMs).toLocaleDateString("en-IN", { day: "numeric", month: "short" }) : "Just in",
    img: n.img,
    url: n.url,
  }));
  const members: { name: string; role: string; date: string; quote: string; avatar: string }[] = [];

  const memeImages = [
    "https://images.unsplash.com/photo-1542728928-1413d1894ed1?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1488229297570-58520851e868?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599054735388-bcb07bdd3574?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?w=600&q=80&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=600&q=80&auto=format&fit=crop",
  ];

  const blogPosts = adminBlogs.slice(0, 4).map((b) => ({
    slug: b.slug,
    title: b.title,
    img: b.img,
  }));

  return (
    <main className="min-h-screen font-body text-text-primary bg-bg overflow-x-hidden selection:bg-accent selection:text-black pb-20 md:pb-0">

      {/* 1. ANNOUNCEMENT TICKER */}
      <div className="sticky top-0 z-50 bg-accent text-black py-2 overflow-hidden border-b-4 border-black">
        <div className="font-mono text-sm font-bold whitespace-nowrap inline-block animate-ticker">
          DAY 1 LIVE ✦ FAN-BUILT SATIRE ✦ ZERO CORPORATE DONORS ✦ BE A FOUNDING ROACH ✦ #MAINBHICOCKROACH ✦ DAY 1 LIVE ✦ FAN-BUILT SATIRE ✦ ZERO CORPORATE DONORS ✦ BE A FOUNDING ROACH ✦ #MAINBHICOCKROACH ✦
        </div>
      </div>

      {/* 2. NAVIGATION BAR */}
      <nav className="sticky top-[36px] z-40 bg-bg border-b-4 border-text-primary px-4 py-3 flex justify-between items-center shadow-[0_8px_0_0_#000]">
        <Link href="/" className="font-display text-2xl md:text-3xl tracking-widest uppercase hover:text-accent transition-colors">
          🪳 Cockroch Janta Parti
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-display text-xl uppercase tracking-widest">
          {["Manifesto", "News", "Reels", "Memes", "Tools", "Blog"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-accent hover:underline decoration-4 underline-offset-4">{item}</Link>
          ))}
          <Link href="/join" className="bg-accent text-black px-6 py-2 border-4 border-black shadow-[4px_4px_0_0_#000] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] transition-all">
            JOIN THE PARTI
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 text-accent" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu size={32} />
        </button>
      </nav>

      {/* Mobile Menu Dropdown & Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-bg border-t-4 border-text-primary flex justify-around p-3 font-mono text-xs uppercase shadow-[0_-4px_0_0_#000]">
        {["Home", "News", "Memes", "Quiz", "Profile"].map(tab => (
          <div key={tab} className="flex flex-col items-center gap-1 active:text-accent">
            <div className="text-xl">🪳</div>
            <span>{tab}</span>
          </div>
        ))}
      </div>

      {/* 3. HERO SECTION */}
      <section className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden border-b-4 border-text-primary">
        {/* Hero photo background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=2000&q=80&auto=format&fit=crop"
            alt="A youth-led protest movement in India"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-rich-black/65"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-rich-black/30 via-transparent to-rich-black/70"></div>
        </div>

        <div className="z-10 max-w-5xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 bg-accent text-rich-black px-4 py-1 mb-6 font-mono text-xs md:text-sm font-bold uppercase tracking-[0.2em] border-2 border-rich-black shadow-[4px_4px_0_0_#000]">
            <span className="w-2 h-2 bg-rich-black animate-pulse"></span>
            DAY 1 · SATIRICAL POLITICAL ART PROJECT
          </div>
          <h1 className="font-display text-6xl sm:text-7xl md:text-[9rem] uppercase leading-[0.85] tracking-tighter mb-6 text-white">
            MAIN BHI<br />
            <span className="text-accent underline decoration-8 underline-offset-[12px]">COCKROACH.</span>
          </h1>
          <p className="font-hindi text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            India&apos;s loudest satirical movement just started. Be a founding roach &mdash; not the 3-lakh-th.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-12">
            <Link href="/join" className="bg-accent text-rich-black font-display text-2xl md:text-3xl uppercase tracking-widest px-8 md:px-12 py-4 md:py-5 border-4 border-rich-black shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all">
              JOIN THE PARTI →
            </Link>
            <Link href="/tools/card" className="bg-white text-rich-black font-display text-xl md:text-2xl uppercase tracking-widest px-6 md:px-8 py-4 md:py-5 border-4 border-rich-black shadow-[8px_8px_0_0_#FFD60A] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#FFD60A] transition-all">
              GET YOUR CARD
            </Link>
          </div>

          <div className="inline-flex flex-col md:flex-row gap-3 md:gap-6 items-center bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 font-mono text-xs md:text-sm text-white">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
              <span><span className="font-bold text-accent">FOUNDING ROACHES:</span> {memberCount.toLocaleString()}</span>
            </div>
            <span className="hidden md:block text-white/30">|</span>
            <div><span className="font-bold text-alert">YOU&apos;LL BE #{(memberCount + 1).toLocaleString()}.</span></div>
          </div>
        </div>
      </section>

      {/* 4. LIVE STATS DASHBOARD */}
      <section className="px-4 py-20 bg-text-primary text-bg border-b-4 border-bg relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10 justify-center">
            <div className="w-4 h-4 bg-success rounded-full animate-pulse border-2 border-bg"></div>
            <span className="font-mono font-bold uppercase tracking-wider text-sm">Live from Firestore · syncs every second</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { label: "FOUNDING ROACHES", value: memberCount.toLocaleString(), src: "LIVE" },
              { label: "DAYS SINCE LAUNCH", value: "1", src: "DAY ONE" },
              { label: "ACTIVE STATES", value: "—", src: "GROWING" },
              { label: "CORPORATE DONORS", value: "0", src: "BY DESIGN" }
            ].map((stat, i) => (
              <div key={i} className="bg-bg text-text-primary p-6 md:p-8 border-4 border-bg shadow-[8px_8px_0_0_#FF6B00] hover:scale-105 transition-transform group">
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
            ESSENTIAL READING
          </h2>
        </div>

        {newsItems.length === 0 ? (
          <div className="bg-card border-4 border-text-primary p-10 md:p-16 text-center shadow-[12px_12px_0_0_#FFD60A]">
            <h3 className="font-display text-3xl md:text-5xl uppercase mb-4 text-rich-black">FIRST NEWS DROP COMING</h3>
            <p className="font-mono text-sm text-text-secondary uppercase tracking-widest mb-8 max-w-xl mx-auto">
              We are not aggregating someone else&apos;s noise. The first story posted here will be a CJP original. Subscribe and you will know first.
            </p>
            <Link href="/news" className="inline-block bg-accent text-rich-black font-display text-2xl uppercase px-8 py-4 border-4 border-rich-black hover:bg-rich-black hover:text-accent transition-colors shadow-[8px_8px_0_0_#000]">
              READING LIST →
            </Link>
          </div>
        ) : (
          <>
            <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x">
              {newsItems.map((news, i) => (
                <a key={i} href={news.url} target="_blank" rel="noopener noreferrer" className="min-w-[85vw] md:min-w-0 flex-shrink-0 snap-center bg-card border-4 border-text-primary shadow-[8px_8px_0_0_#000] flex flex-col group hover:-translate-y-2 transition-transform cursor-pointer overflow-hidden">
                  <div className="relative h-52 overflow-hidden border-b-4 border-text-primary">
                    <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <span className="absolute top-3 left-3 bg-rich-black text-white font-bold font-mono px-3 py-1 text-xs uppercase tracking-widest shadow-[4px_4px_0_0_#FFD60A]">{news.source}</span>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between">
                    <h3 className="font-bold text-xl md:text-2xl mb-6 font-hindi leading-tight group-hover:text-accent transition-colors">{news.title}</h3>
                    <div className="flex justify-between items-center border-t-2 border-text-primary/20 pt-4">
                      <span className="text-accent font-mono text-xs font-bold uppercase tracking-widest">{news.time}</span>
                      <span className="text-text-primary group-hover:text-accent transition-colors" title="Open story">
                        <Share2 size={20} />
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link href="/news" className="font-mono font-bold uppercase text-accent hover:text-rich-black underline decoration-2 underline-offset-4 text-lg">See all news →</Link>
            </div>
          </>
        )}
      </section>

      {/* 6. INTERACTIVE MANIFESTO */}
      <section className="px-4 py-24 bg-card border-b-4 border-text-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-6xl md:text-8xl uppercase tracking-tight text-rich-black mb-4">5 DEMANDS.</h2>
            <h3 className="font-display text-5xl md:text-6xl text-alert uppercase tracking-widest bg-black inline-block px-4 py-2 border-4 border-alert">NON-NEGOTIABLE.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {manifestoPoints.map((point) => (
              <div key={point.id} className="bg-bg border-4 border-text-primary p-6 shadow-[12px_12px_0_0_#FFD60A] relative flex flex-col overflow-hidden">
                <div className="absolute -top-4 -right-4 font-display text-[8rem] text-text-primary opacity-10 leading-none">{`0${point.id}`}</div>
                <div className="z-10 flex-1">
                  <div className="font-display text-4xl uppercase mb-3 text-accent tracking-wide">{point.title}</div>
                  <p className="text-bg font-mono text-lg mb-8 bg-rich-black p-2 inline-block border-l-4 border-alert">{point.desc}</p>
                </div>

                <div className="z-10 mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => handleVote(point.id, 'agree')}
                      className={`flex-1 font-display text-2xl uppercase py-3 border-4 border-text-primary shadow-[4px_4px_0_0_#000] transition-all ${manifestoVotes[point.id] === 'agree' ? 'bg-success text-white translate-y-1 shadow-none' : 'bg-card text-rich-black hover:bg-success hover:text-white'}`}
                    >
                      AGREE {manifestoVotes[point.id] === 'agree' && '✓'}
                    </button>
                    <button
                      onClick={() => handleVote(point.id, 'disagree')}
                      className={`flex-1 font-display text-2xl uppercase py-3 border-4 border-text-primary shadow-[4px_4px_0_0_#000] transition-all ${manifestoVotes[point.id] === 'disagree' ? 'bg-alert text-white translate-y-1 shadow-none' : 'bg-card text-rich-black hover:bg-alert hover:text-white'}`}
                    >
                      DISAGREE {manifestoVotes[point.id] === 'disagree' && '✗'}
                    </button>
                  </div>

                  <div className="flex justify-between items-center border-t-4 border-border pt-4 mt-4 font-mono text-sm">
                    <div className="text-accent font-bold">{calculatePercentage(point.id, point.baseAgree)}% AGREE</div>
                    <div className="flex gap-4">
                      <button className="hover:text-success underline decoration-2 underline-offset-4 flex items-center gap-1"><Share2 size={14} /> WA SHARE</button>
                      <Link href="/manifesto" className="text-text-secondary hover:text-rich-black underline decoration-2 underline-offset-4">DEEP DIVE →</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* 6th Card: Call to action for full manifesto */}
            <div className="bg-accent border-4 border-text-primary p-6 shadow-[12px_12px_0_0_#000] flex flex-col items-center justify-center text-center">
              <h3 className="font-display text-5xl uppercase text-black mb-4">WANT MORE?</h3>
              <p className="font-mono text-black font-bold mb-6">Read the full roasting of the political class.</p>
              <Link href="/manifesto" className="bg-rich-black text-accent font-display text-3xl px-8 py-4 uppercase border-4 border-rich-black hover:bg-bg hover:text-rich-black transition-colors shadow-[8px_8px_0_0_#000]">
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
            <Link href="/tools/meme-generator" className="bg-alert text-white font-display text-2xl uppercase px-8 py-4 border-4 border-rich-black shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#000] transition-all">
              Open Meme Generator →
            </Link>
          </div>

          {/* Pinterest Masonry layout via columns */}
          <div className="columns-2 md:columns-4 gap-6 space-y-6">
            {/* Pinned Card */}
            <div className="break-inside-avoid relative bg-accent border-4 border-text-primary p-2 md:p-3 shadow-[8px_8px_0_0_#000] mb-6">
              <div className="absolute -top-5 -right-5 bg-rich-black text-accent p-3 rounded-full border-4 border-accent animate-bounce z-20">
                <Crown size={24} />
              </div>
              <div className="h-64 overflow-hidden relative border-2 border-rich-black">
                <img src="https://images.unsplash.com/photo-1542728928-1413d1894ed1?w=800&q=80&auto=format&fit=crop" alt="Meme of the day" className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-rich-black/40"></div>
                <div className="absolute bottom-3 left-0 right-0 text-center font-display text-3xl uppercase text-white drop-shadow-[0_4px_4px_rgba(0,0,0,1)] tracking-widest">MEME OF<br />THE DAY</div>
              </div>
              <p className="mt-3 font-mono text-rich-black font-bold uppercase text-xs text-center border-t-2 border-rich-black pt-2 tracking-widest">By @lazyroach</p>
            </div>

            {/* Other 11 Thumbnails */}
            {memeImages.map((src, i) => {
              const heights = ['h-44', 'h-60', 'h-52', 'h-72', 'h-64'];
              const height = heights[i % heights.length];
              return (
                <div key={i} className={`break-inside-avoid relative bg-card border-4 border-text-primary shadow-[8px_8px_0_0_#FFD60A] group overflow-hidden ${height}`}>
                  <img src={src} alt={`Meme ${i + 1}`} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-rich-black/0 group-hover:bg-rich-black/80 flex items-center justify-center transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 font-display text-2xl text-accent uppercase tracking-widest text-center transition-opacity">View<br />Meme</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link href="/memes" className="font-mono font-bold uppercase text-accent hover:text-rich-black hover:underline decoration-2 text-lg">Load More Gutters →</Link>
          </div>
        </div>
      </section>

      {/* 8. ANTHEM PLAYER */}
      <section className="px-4 py-24 bg-accent text-black border-b-4 border-black">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">

          <div className="flex-1 text-center md:text-left">
            <h2 className="font-display text-6xl uppercase mb-6 tracking-widest bg-black text-accent inline-block px-4 border-4 border-black shadow-[8px_8px_0_0_#000]">THE ANTHEM</h2>

            <div className="bg-bg border-4 border-black p-8 shadow-[16px_16px_0_0_#000] mb-8">
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

      {/* 9. FOUNDING COHORT WALL */}
      <section className="px-4 py-24 bg-card border-b-4 border-text-primary">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-rich-black text-accent px-4 py-1 mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em]">Founding Cohort · First 50</div>
            <h2 className="font-display text-6xl md:text-7xl uppercase tracking-widest text-rich-black">WHO&apos;S IN</h2>
            <p className="font-mono text-xs md:text-sm text-text-secondary mt-4 max-w-xl mx-auto uppercase tracking-widest">All 50 founding spots open. Your number is locked the moment you join.</p>
          </div>
          {members.length === 0 ? (
            <div className="bg-rich-black text-white p-8 md:p-16 border-4 border-rich-black shadow-[16px_16px_0_0_#FFD60A] text-center">
              <div className="font-display text-7xl md:text-9xl uppercase mb-4 leading-none">
                0<span className="text-text-secondary/40">/50</span>
              </div>
              <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] text-white/70 mb-8">
                Founding cohort spots claimed.
              </p>
              <p className="font-hindi text-xl md:text-3xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Be the first.<br />
                The first 50 founding members get a permanent number, a card, and bragging rights forever.
              </p>
              <Link
                href="/join"
                className="inline-block bg-accent text-rich-black font-display text-3xl md:text-4xl uppercase px-10 md:px-16 py-5 md:py-6 border-4 border-accent hover:bg-white transition-colors shadow-[8px_8px_0_0_#FFD60A] hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0_0_#FFD60A]"
              >
                CLAIM #001 →
              </Link>
              <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/50 mt-6">
                Whoever fills the join form first locks the #001 spot.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((m, i) => (
                <div key={i} className="bg-bg border-4 border-text-primary p-6 shadow-[8px_8px_0_0_#FFD60A] relative hover:-translate-y-2 transition-transform">
                  <div className="absolute -top-4 -right-4 bg-success p-2 border-4 border-text-primary rounded-full z-10">
                    <CheckCircle2 fill="white" stroke="white" size={28} />
                  </div>
                  <div className="w-24 h-24 border-4 border-text-primary mb-4 overflow-hidden shadow-[4px_4px_0_0_#000]">
                    <img src={m.avatar} alt={m.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" loading="lazy" />
                  </div>
                  <h3 className="font-display text-3xl uppercase tracking-wider mb-1">{m.name}</h3>
                  <p className="font-mono text-xs font-bold uppercase tracking-widest mb-4 inline-block bg-rich-black text-accent px-2 py-1">{m.role}</p>
                  <div className="border-t-2 border-rich-black/20 pt-4 mt-2">
                    <p className="font-hindi text-lg italic text-text-primary mb-2 leading-snug">&ldquo;{m.quote}&rdquo;</p>
                    <p className="font-mono text-xs text-text-secondary uppercase tracking-widest">{m.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 10. STATE CHAPTERS MAP */}
      <section className="px-4 py-24 bg-bg border-b-4 border-text-primary">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-display text-7xl uppercase text-rich-black mb-6 text-center border-b-8 border-accent pb-2">STATE CHAPTERS MAP</h2>
          <p className="font-mono text-text-secondary max-w-2xl mb-12 uppercase text-lg text-center">Interactive map coming soon. For now, click a state to see member count and top meme.</p>

          {/* Abstract Map Grid */}
          <div className="w-full max-w-4xl flex flex-wrap justify-center gap-3">
            {["JK", "HP", "PB", "CH", "HR", "UK", "DL", "RJ", "UP", "BR", "SK", "AR", "AS", "NL", "MN", "MZ", "TR", "ML", "WB", "JH", "OR", "CG", "MP", "GJ", "MH", "GA", "KA", "TS", "AP", "KL", "TN"].map((code, idx) => (
              <Link href={`/states/${code}`} key={code} className="bg-card w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center border-4 border-text-primary font-display text-2xl uppercase hover:bg-accent hover:text-black transition-colors shadow-[4px_4px_0_0_#000] group relative">
                {code}
                {/* Hover tooltip logic simulation */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 bg-rich-black text-bg font-mono text-xs p-2 hidden group-hover:block whitespace-nowrap border-4 border-rich-black z-10 w-32 shadow-[8px_8px_0_0_#FFD60A]">
                  <div className="font-bold text-center border-b-2 border-bg pb-1 mb-1">{code} CHAPTER</div>
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
            <h2 className="font-display text-5xl md:text-6xl uppercase text-rich-black mb-2 border-l-8 border-accent pl-4">BE A FOUNDING ROACH</h2>
            <p className="font-mono text-xs uppercase tracking-widest text-text-secondary pl-5 mb-8">First 50 members get permanent founding numbers · #{memberCount + 1} is yours.</p>
            {joinStatus === "ok" ? (
              <div className="space-y-6">
                <div className="bg-success text-white p-6 border-4 border-rich-black">
                  <p className="font-display text-3xl uppercase">Welcome to the gutter, {joinForm.name || "Roach"}.</p>
                  <p className="font-mono text-sm uppercase mt-2 tracking-widest">You&apos;re in. Now make it official.</p>
                </div>
                <Link href={cardLinkWithData()} className="block text-center bg-accent text-rich-black font-display text-2xl uppercase py-5 border-4 border-rich-black hover:bg-white transition-colors shadow-[8px_8px_0_0_#000]">
                  GENERATE YOUR ID CARD →
                </Link>
                <p className="text-center font-mono text-xs uppercase tracking-widest text-text-secondary">Your name + city auto-fill in the card. Add state + age there.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={submitJoin}>
                <div>
                  <label className="font-mono uppercase font-bold text-sm block mb-2 text-accent">NAME</label>
                  <input type="text" required value={joinForm.name} onChange={e => setJoinForm({ ...joinForm, name: e.target.value })} className="w-full bg-card border-4 border-text-primary p-4 font-mono text-xl uppercase focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary" placeholder="YOUR NAME" />
                </div>
                <div>
                  <label className="font-mono uppercase font-bold text-sm block mb-2 text-accent">CITY</label>
                  <input type="text" required value={joinForm.city} onChange={e => setJoinForm({ ...joinForm, city: e.target.value })} className="w-full bg-card border-4 border-text-primary p-4 font-mono text-xl uppercase focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary" placeholder="WHERE DO YOU LURK?" />
                </div>
                <div>
                  <label className="font-mono uppercase font-bold text-sm block mb-2 text-accent">WHY ARE YOU A COCKROACH?</label>
                  <input type="text" required value={joinForm.why} onChange={e => setJoinForm({ ...joinForm, why: e.target.value })} className="w-full bg-card border-4 border-text-primary p-4 font-mono text-xl uppercase focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary" placeholder="1 LINE ONLY" />
                </div>
                <button type="submit" disabled={joinStatus === "submitting"} className="w-full bg-accent text-rich-black font-display text-3xl uppercase py-6 border-4 border-rich-black hover:bg-rich-black hover:text-accent transition-colors shadow-[8px_8px_0_0_#000] active:translate-y-2 active:shadow-none disabled:opacity-50 disabled:cursor-wait">
                  {joinStatus === "submitting" ? "JOINING..." : "JOIN THE SWARM"}
                </button>
                {joinStatus === "error" && (
                  <div className="bg-alert text-white font-mono text-sm font-bold uppercase p-4 border-4 border-rich-black">
                    Submission failed. Check your network and try again.
                  </div>
                )}
              </form>
            )}
          </div>

          {/* Content right side: Blog Teaser & Newsletter */}
          <div className="flex flex-col gap-12 justify-between">
            {/* 12. BLOG TEASER */}
            <div>
              <div className="flex justify-between items-center mb-8 border-b-4 border-text-primary pb-4">
                <h2 className="font-display text-5xl text-rich-black">BLOG TEASER</h2>
                <Link href="/blog" className="font-mono uppercase text-sm text-accent hover:underline decoration-2"><ArrowRight size={24} /></Link>
              </div>
              {blogPosts.length === 0 ? (
                <div className="bg-bg border-4 border-dashed border-text-primary/40 p-6 text-center">
                  <h4 className="font-display text-2xl uppercase text-rich-black mb-2">FIRST POST INCOMING</h4>
                  <p className="font-mono text-xs uppercase tracking-widest text-text-secondary">The blog opens with the founding manifesto. Stay tuned.</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {blogPosts.map((post, i) => (
                    <Link href={`/blog/${post.slug}`} key={i} className="group bg-bg border-4 border-text-primary hover:border-accent shadow-[4px_4px_0_0_#000] transition-all overflow-hidden">
                      <div className="h-28 overflow-hidden border-b-2 border-text-primary">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                      </div>
                      <h4 className="font-bold font-hindi line-clamp-2 leading-snug group-hover:text-accent p-3 text-sm">{post.title}</h4>
                    </Link>
                  ))}
                </div>
              )}
              <Link href="/blog" className="inline-block mt-8 font-mono font-bold uppercase text-accent hover:text-rich-black hover:underline decoration-2 text-lg">
                READ MORE COCKROACH WISDOM →
              </Link>
            </div>

            {/* 13. NEWSLETTER CTA */}
            <div className="bg-alert p-8 border-4 border-black shadow-[16px_16px_0_0_#000] text-black">
              <h2 className="font-display text-5xl uppercase mb-2">ROACH REPORT<br />— Weekly Drop</h2>
              <p className="font-mono font-bold mb-6 text-xl">No spam. Bas roach gyaan.</p>
              <form className="flex flex-col md:flex-row gap-4" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="ENTER EMAIL" className="flex-1 bg-white border-4 border-black p-4 font-mono text-xl uppercase focus:border-white focus:outline-none placeholder-text-secondary" />
                <button className="bg-rich-black text-white font-display text-2xl uppercase px-8 border-4 border-rich-black hover:bg-bg hover:text-rich-black transition-colors">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 14. FOOTER */}
      <footer className="bg-rich-black px-4 pt-24 pb-12 text-center md:text-left border-t-8 border-accent relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1600&q=80&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-16 relative z-10">

          <div className="flex-1 max-w-xl">
            <div className="font-display text-7xl text-white mb-6 uppercase tracking-widest border-b-4 border-accent pb-4 inline-block">CJP</div>
            <div className="bg-alert text-white font-display text-2xl md:text-3xl uppercase p-4 border-4 border-white shadow-[8px_8px_0_0_#FFD60A] mb-6">
              SATIRICAL POLITICAL ART PROJECT
            </div>
            <p className="font-mono text-white/80 text-sm md:text-base mb-3">
              This is a fan-built creative project. CJP is <span className="text-accent font-bold">not a registered political party</span> and is not affiliated with the Election Commission of India, any sitting politician, judge, or media organisation. All scenarios on this site (including the CJI quote) are hypothetical thought experiments.
            </p>
            <p className="font-mono text-white/60 text-xs">Built in India by Gen Z. Open-source. Zero corporate funding.</p>
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
              <Link href="/blog" className="hover:text-accent">Blog</Link>
            </div>
          </div>

        </div>

        {/* Social Icons & Bottom Text */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20 z-10 relative">
          <div className="flex gap-6 mb-6 md:mb-0 text-white font-mono font-bold text-sm md:text-base hover:[&>a]:text-accent">
            <a href="#">INSTAGRAM</a>
            <a href="#">X (TWITTER)</a>
            <a href="#">YOUTUBE</a>
          </div>
          <div className="font-mono text-white/50 text-xs md:text-sm">
            © 2026 COCKROCH JANTA PARTI
          </div>
        </div>
      </footer>
    </main>
  );
}
