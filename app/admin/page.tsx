"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, FileText, Video, Newspaper, LogOut, CheckCircle2, AlertTriangle } from "lucide-react";
import {
    createBlogPost,
    createReel,
    createNewsItem,
    detectPlatform,
    buildEmbedUrl,
} from "@/lib/firebase-actions";

const ADMIN_PASSCODE = process.env.NEXT_PUBLIC_ADMIN_PASSCODE || "mainBhiCockroach2026";
const SESSION_KEY = "cjp_admin_session_v1";

type Tab = "blog" | "reel" | "news";

export default function AdminPage() {
    const [authed, setAuthed] = useState(false);
    const [passcode, setPasscode] = useState("");
    const [authError, setAuthError] = useState(false);
    const [tab, setTab] = useState<Tab>("blog");

    useEffect(() => {
        try {
            if (window.sessionStorage.getItem(SESSION_KEY) === "1") setAuthed(true);
        } catch {}
    }, []);

    const tryLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (passcode === ADMIN_PASSCODE) {
            setAuthed(true);
            try { window.sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
        } else {
            setAuthError(true);
            setTimeout(() => setAuthError(false), 2500);
        }
    };

    const logout = () => {
        setAuthed(false);
        setPasscode("");
        try { window.sessionStorage.removeItem(SESSION_KEY); } catch {}
    };

    if (!authed) {
        return (
            <main className="min-h-screen bg-bg flex items-center justify-center px-4">
                <form onSubmit={tryLogin} className="w-full max-w-md bg-card border-4 border-text-primary p-8 shadow-[16px_16px_0_0_#FFD60A] space-y-6">
                    <div className="flex items-center gap-3">
                        <Lock size={32} className="text-accent" />
                        <h1 className="font-display text-4xl uppercase text-rich-black">CJP ADMIN</h1>
                    </div>
                    <p className="font-mono text-xs uppercase text-text-secondary tracking-widest">Enter the passcode to upload content.</p>
                    <input
                        type="password"
                        value={passcode}
                        onChange={(e) => setPasscode(e.target.value)}
                        autoFocus
                        placeholder="PASSCODE"
                        className="w-full bg-bg border-4 border-text-primary p-4 font-mono text-xl uppercase tracking-widest focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary"
                    />
                    {authError && (
                        <div className="bg-alert text-white font-mono text-xs font-bold uppercase tracking-widest p-3 border-2 border-rich-black flex items-center gap-2">
                            <AlertTriangle size={16} /> Wrong passcode. Try again.
                        </div>
                    )}
                    <button type="submit" className="w-full bg-accent text-rich-black font-display text-2xl uppercase py-4 border-4 border-rich-black hover:bg-rich-black hover:text-accent transition-colors shadow-[8px_8px_0_0_#000]">
                        UNLOCK ADMIN
                    </button>
                    <Link href="/" className="block text-center font-mono text-xs uppercase text-text-secondary hover:text-accent">← Back to site</Link>
                </form>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">
            <nav className="sticky top-0 z-50 bg-rich-black text-white border-b-4 border-accent px-4 py-3 flex justify-between items-center">
                <Link href="/" className="font-display text-2xl uppercase tracking-widest hover:text-accent">🪳 CJP ADMIN</Link>
                <button onClick={logout} className="font-mono text-xs uppercase tracking-widest hover:text-accent flex items-center gap-2">
                    <LogOut size={14} /> LOGOUT
                </button>
            </nav>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="font-display text-5xl md:text-7xl uppercase text-rich-black mb-2">UPLOAD CONTENT</h1>
                <p className="font-mono text-sm uppercase text-text-secondary tracking-widest mb-12">Anything you publish here goes live instantly. Be intentional.</p>

                {/* Tabs */}
                <div className="flex gap-2 mb-8 border-b-4 border-text-primary">
                    {[
                        { id: "blog" as Tab, label: "BLOG POST", Icon: FileText },
                        { id: "reel" as Tab, label: "REEL / VIDEO", Icon: Video },
                        { id: "news" as Tab, label: "NEWS ITEM", Icon: Newspaper },
                    ].map(({ id, label, Icon }) => (
                        <button
                            key={id}
                            type="button"
                            onClick={() => setTab(id)}
                            className={`flex items-center gap-2 px-4 md:px-6 py-3 font-mono text-xs md:text-sm font-bold uppercase tracking-widest border-4 border-b-0 border-text-primary transition-colors ${tab === id ? "bg-accent text-rich-black" : "bg-card text-text-secondary hover:bg-bg"}`}
                        >
                            <Icon size={16} /> {label}
                        </button>
                    ))}
                </div>

                {tab === "blog" && <BlogForm />}
                {tab === "reel" && <ReelForm />}
                {tab === "news" && <NewsForm />}
            </div>
        </main>
    );
}

// ---------- BLOG FORM ----------
function BlogForm() {
    const [form, setForm] = useState({
        slug: "",
        title: "",
        cat: "News",
        excerpt: "",
        body: "",
        author: "CJP Editor",
        readTime: "5 min read",
        img: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
    const [liveLink, setLiveLink] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        const post = {
            ...form,
            body: form.body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean),
            slug: form.slug.trim() || form.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
        };
        const result = await createBlogPost(post);
        if (result.ok && result.slug) {
            setStatus("ok");
            setLiveLink(`/blog/${result.slug}`);
            setForm({ slug: "", title: "", cat: "News", excerpt: "", body: "", author: "CJP Editor", readTime: "5 min read", img: "" });
        } else {
            setStatus("error");
            setLiveLink(null);
        }
    };

    return (
        <form onSubmit={onSubmit} className="bg-card border-4 border-text-primary p-6 md:p-8 space-y-6 shadow-[8px_8px_0_0_#000]">
            <FormField label="TITLE *" value={form.title} onChange={(v) => setForm({ ...form, title: v })} placeholder="HOW WE WON THE GUTTER" />
            <FormField label="URL SLUG" value={form.slug} onChange={(v) => setForm({ ...form, slug: v })} placeholder="auto-generated from title if blank" />
            <div className="grid grid-cols-2 gap-4">
                <FormSelect label="CATEGORY" value={form.cat} onChange={(v) => setForm({ ...form, cat: v })} options={["News", "History", "Tools", "Hindi", "Marathi", "Bengali", "Memes", "Opinion"]} />
                <FormField label="READ TIME" value={form.readTime} onChange={(v) => setForm({ ...form, readTime: v })} placeholder="5 min read" />
            </div>
            <FormField label="AUTHOR" value={form.author} onChange={(v) => setForm({ ...form, author: v })} placeholder="CJP Editor" />
            <FormField label="COVER IMAGE URL *" value={form.img} onChange={(v) => setForm({ ...form, img: v })} placeholder="https://images.unsplash.com/photo-XXXX?w=1400&q=80&auto=format&fit=crop" />
            <FormTextarea label="EXCERPT (1-2 lines)" value={form.excerpt} onChange={(v) => setForm({ ...form, excerpt: v })} rows={2} placeholder="Short hook shown on the blog list." />
            <FormTextarea
                label="BODY *"
                value={form.body}
                onChange={(v) => setForm({ ...form, body: v })}
                rows={14}
                placeholder={`Write paragraphs separated by a blank line.\n\nUse ## at the start of a line for a section heading.\n\n## Why this matters\n\nBecause the system already broke. We just stopped pretending.`}
            />
            <SubmitButton status={status} label="PUBLISH BLOG POST" liveLink={liveLink} liveLabel="VIEW LIVE POST" />
        </form>
    );
}

// ---------- REEL FORM ----------
function ReelForm() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        videoUrl: "",
        thumbnailUrl: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
    const [liveLink, setLiveLink] = useState<string | null>(null);

    const platform = form.videoUrl ? detectPlatform(form.videoUrl) : "other";
    const embedPreview = form.videoUrl ? buildEmbedUrl(form.videoUrl) : "";

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        const result = await createReel(form);
        if (result.ok && result.id) {
            setStatus("ok");
            setLiveLink(`/reels/${result.id}`);
            setForm({ title: "", description: "", videoUrl: "", thumbnailUrl: "" });
        } else {
            setStatus("error");
            setLiveLink(null);
        }
    };

    return (
        <form onSubmit={onSubmit} className="bg-card border-4 border-text-primary p-6 md:p-8 space-y-6 shadow-[8px_8px_0_0_#000]">
            <FormField label="TITLE *" value={form.title} onChange={(v) => setForm({ ...form, title: v })} placeholder="THE GUTTER GOES VIRAL — REEL #1" />
            <FormField
                label="VIDEO URL * (YouTube / Instagram Reel / X)"
                value={form.videoUrl}
                onChange={(v) => setForm({ ...form, videoUrl: v })}
                placeholder="https://www.instagram.com/reel/ABC123/ or https://youtu.be/abc123"
            />
            {form.videoUrl && (
                <div className="bg-bg border-2 border-text-primary p-3 font-mono text-xs uppercase tracking-widest">
                    <div className="text-text-secondary">Detected platform: <span className="text-accent font-bold">{platform.toUpperCase()}</span></div>
                    <div className="text-text-secondary mt-1 break-all">Embed URL: <span className="text-rich-black">{embedPreview}</span></div>
                </div>
            )}
            <FormField label="THUMBNAIL URL (optional fallback)" value={form.thumbnailUrl} onChange={(v) => setForm({ ...form, thumbnailUrl: v })} placeholder="https://i.ytimg.com/vi/abc123/maxresdefault.jpg" />
            <FormTextarea label="DESCRIPTION" value={form.description} onChange={(v) => setForm({ ...form, description: v })} rows={3} placeholder="1-2 lines of context shown under the video." />
            <SubmitButton status={status} label="PUBLISH REEL" liveLink={liveLink} liveLabel="VIEW LIVE REEL" />
        </form>
    );
}

// ---------- NEWS FORM ----------
function NewsForm() {
    const [form, setForm] = useState({
        source: "",
        title: "",
        summary: "",
        url: "",
        img: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        const result = await createNewsItem(form);
        if (result.ok) {
            setStatus("ok");
            setForm({ source: "", title: "", summary: "", url: "", img: "" });
            setTimeout(() => setStatus("idle"), 3000);
        } else {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={onSubmit} className="bg-card border-4 border-text-primary p-6 md:p-8 space-y-6 shadow-[8px_8px_0_0_#000]">
            <FormField label="SOURCE *" value={form.source} onChange={(v) => setForm({ ...form, source: v })} placeholder="ThePrint, BusinessToday, OP-ED…" />
            <FormField label="TITLE *" value={form.title} onChange={(v) => setForm({ ...form, title: v })} placeholder="Full headline" />
            <FormField label="EXTERNAL URL *" value={form.url} onChange={(v) => setForm({ ...form, url: v })} placeholder="https://theprint.in/..." />
            <FormField label="COVER IMAGE URL *" value={form.img} onChange={(v) => setForm({ ...form, img: v })} placeholder="https://images.unsplash.com/photo-XXXX?w=800&q=80&auto=format&fit=crop" />
            <FormTextarea label="SUMMARY" value={form.summary} onChange={(v) => setForm({ ...form, summary: v })} rows={3} placeholder="2-3 sentences shown on the news card." />
            <SubmitButton status={status} label="PUBLISH NEWS ITEM" liveLink="/news" liveLabel="OPEN NEWS PAGE" />
        </form>
    );
}

// ---------- shared inputs ----------
function FormField({ label, value, onChange, placeholder }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string }) {
    return (
        <div>
            <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary tracking-widest">{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full bg-bg border-4 border-text-primary p-3 font-mono text-sm focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary/60"
            />
        </div>
    );
}

function FormTextarea({ label, value, onChange, placeholder, rows = 4 }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; rows?: number }) {
    return (
        <div>
            <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary tracking-widest">{label}</label>
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                rows={rows}
                className="w-full bg-bg border-4 border-text-primary p-3 font-mono text-sm focus:border-accent focus:outline-none text-rich-black placeholder-text-secondary/60 resize-y leading-relaxed"
            />
        </div>
    );
}

function FormSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
    return (
        <div>
            <label className="font-mono uppercase font-bold text-xs block mb-2 text-text-secondary tracking-widest">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full bg-bg border-4 border-text-primary p-3 font-mono text-sm uppercase focus:border-accent focus:outline-none text-rich-black"
            >
                {options.map((o) => (
                    <option key={o} value={o}>{o}</option>
                ))}
            </select>
        </div>
    );
}

function SubmitButton({ status, label, liveLink, liveLabel }: { status: "idle" | "submitting" | "ok" | "error"; label: string; liveLink?: string | null; liveLabel?: string }) {
    return (
        <div className="space-y-3">
            <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-accent text-rich-black font-display text-2xl uppercase py-4 border-4 border-rich-black hover:bg-rich-black hover:text-accent transition-colors shadow-[8px_8px_0_0_#000] disabled:opacity-50 disabled:cursor-wait"
            >
                {status === "submitting" ? "PUBLISHING..." : label}
            </button>
            {status === "ok" && (
                <div className="bg-success text-white font-mono text-xs font-bold uppercase tracking-widest p-3 border-2 border-rich-black flex items-center justify-between gap-2 flex-wrap">
                    <span className="flex items-center gap-2"><CheckCircle2 size={16} /> Published. Live right now.</span>
                    {liveLink && (
                        <a href={liveLink} target="_blank" rel="noopener noreferrer" className="bg-white text-success px-3 py-1 border-2 border-rich-black hover:bg-accent hover:text-rich-black transition-colors">
                            {liveLabel || "VIEW LIVE"} →
                        </a>
                    )}
                </div>
            )}
            {status === "error" && (
                <div className="bg-alert text-white font-mono text-xs font-bold uppercase tracking-widest p-3 border-2 border-rich-black flex items-center gap-2">
                    <AlertTriangle size={16} /> Failed to publish. Required fields missing or Firebase unreachable.
                </div>
            )}
        </div>
    );
}
