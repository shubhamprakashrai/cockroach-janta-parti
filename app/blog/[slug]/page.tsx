"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Facebook, Instagram, Twitter, MessageSquare, Quote, Send } from "lucide-react";
import { getPostBySlug, getRelatedPosts, blogPosts, type BlogPost } from "@/lib/blog";
import { addComment, listenToComments, listenToAdminBlogs, type Comment, type AdminBlogPost } from "@/lib/firebase-actions";

function CommentsSection({ slug }: { slug: string }) {
    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error" | "notconfigured">("idle");

    useEffect(() => {
        const unsub = listenToComments(slug, setComments);
        return () => unsub();
    }, [slug]);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (status === "submitting") return;
        setStatus("submitting");
        const result = await addComment(slug, name, text);
        if (result.ok) {
            setStatus("ok");
            setText("");
            setTimeout(() => setStatus("idle"), 2500);
        } else if (result.reason === "firebase-not-configured") {
            setStatus("notconfigured");
        } else {
            setStatus("error");
        }
    };

    return (
        <div className="space-y-6">
            <form onSubmit={onSubmit} className="bg-card border-4 border-text-primary p-6 space-y-4 shadow-[8px_8px_0_0_#000]">
                <input
                    type="text"
                    required
                    maxLength={60}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="YOUR NAME / HANDLE"
                    className="w-full bg-bg border-2 border-text-primary p-3 font-mono text-sm uppercase text-rich-black focus:border-accent focus:outline-none placeholder-text-secondary"
                />
                <textarea
                    required
                    rows={3}
                    maxLength={800}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="DROP YOUR THOUGHT — KEEP IT GUTTER."
                    className="w-full bg-bg border-2 border-text-primary p-3 font-mono text-sm text-rich-black focus:border-accent focus:outline-none placeholder-text-secondary resize-none"
                />
                <button
                    type="submit"
                    disabled={status === "submitting" || status === "notconfigured"}
                    className="w-full bg-accent text-rich-black font-display text-xl uppercase py-3 border-4 border-rich-black hover:bg-rich-black hover:text-accent transition-colors shadow-[4px_4px_0_0_#000] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    <Send size={18} /> {status === "submitting" ? "POSTING..." : "POST COMMENT"}
                </button>
                {status === "ok" && <p className="font-mono text-xs uppercase text-success font-bold">✓ Comment posted.</p>}
                {status === "error" && <p className="font-mono text-xs uppercase text-alert font-bold">Comment failed — try again.</p>}
                {status === "notconfigured" && (
                    <p className="font-mono text-xs uppercase text-text-secondary">
                        Comments go live once the admin enables Firebase. (Wiring complete — env vars pending.)
                    </p>
                )}
            </form>

            {comments.length === 0 ? (
                <p className="font-mono text-sm text-text-secondary uppercase tracking-widest text-center py-6 border-2 border-dashed border-text-primary/30">
                    No comments yet. Be the first cockroach to crawl out.
                </p>
            ) : (
                <ul className="space-y-4">
                    {comments.map((c) => (
                        <li key={c.id} className="bg-card border-4 border-text-primary p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-accent">{c.name}</span>
                                {c.createdAtMs && (
                                    <span className="font-mono text-[10px] uppercase text-text-secondary">
                                        {new Date(c.createdAtMs).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                                    </span>
                                )}
                            </div>
                            <p className="font-hindi text-sm text-rich-black leading-relaxed whitespace-pre-line">{c.text}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function adminToBlogPost(p: AdminBlogPost): BlogPost {
    return {
        slug: p.slug,
        title: p.title,
        cat: p.cat,
        excerpt: p.excerpt,
        body: p.body,
        author: p.author,
        date: new Date(p.createdAtMs ?? Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
        readTime: p.readTime,
        img: p.img,
    };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const staticPost = getPostBySlug(params.slug);
    const [adminPosts, setAdminPosts] = useState<AdminBlogPost[]>([]);
    const [firestoreChecked, setFirestoreChecked] = useState(false);

    useEffect(() => {
        const unsub = listenToAdminBlogs((posts) => {
            setAdminPosts(posts);
            setFirestoreChecked(true);
        });
        const t = setTimeout(() => setFirestoreChecked(true), 1500);
        return () => { unsub(); clearTimeout(t); };
    }, []);

    const adminPost = adminPosts.find((p) => p.slug === params.slug);
    const post: BlogPost | undefined = staticPost || (adminPost ? adminToBlogPost(adminPost) : undefined);

    if (!staticPost && firestoreChecked && !adminPost) notFound();
    if (!post) {
        return (
            <main className="min-h-screen bg-bg flex items-center justify-center font-mono text-text-secondary uppercase tracking-widest text-sm animate-pulse">
                Loading post...
            </main>
        );
    }

    const allPosts: BlogPost[] = [...adminPosts.map(adminToBlogPost), ...blogPosts];
    const related = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

    const currentUrl = `cockrochjantaparti.com/blog/${post.slug}`;
    const shareText = encodeURIComponent(`${post.title} — read on @cjp_india`);
    const shareUrl = encodeURIComponent(`https://${currentUrl}`);
    const twitterHref = `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`;
    const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24 border-x-4 lg:border-x-[16px] border-text-primary">

            <nav className="sticky top-0 z-50 bg-bg border-b-4 border-text-primary px-4 py-3 shadow-[0_4px_0_0_#000]">
                <Link href="/blog" className="font-mono text-sm font-bold uppercase hover:text-accent">← ALL POSTS</Link>
            </nav>

            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_300px] gap-12 items-start relative pb-16 pt-8 px-4 lg:px-8 border-b-4 border-text-primary">

                {/* Main Content */}
                <article className="min-w-0">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="bg-accent text-rich-black font-mono font-bold text-[10px] uppercase tracking-widest px-2 py-1 border-2 border-rich-black inline-block mb-6 shadow-[2px_2px_0_0_#000]">
                            {post.cat}
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-[5rem] uppercase text-rich-black leading-none tracking-tight mb-8">
                            {post.title}
                        </h1>
                        <div className="font-mono text-sm font-bold uppercase text-text-secondary flex flex-wrap gap-6 items-center">
                            <span className="text-rich-black border-b-2 border-accent pb-1">BY: {post.author.toUpperCase()}</span>
                            <span>{post.date.toUpperCase()}</span>
                            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime.toUpperCase()}</span>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="w-full aspect-video border-4 border-text-primary mb-12 shadow-[12px_12px_0_0_#FFD60A] overflow-hidden">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" loading="eager" />
                    </div>

                    {/* Body */}
                    <div className="bg-card p-6 md:p-12 border-4 border-text-primary space-y-6 font-hindi text-lg leading-relaxed text-text-primary">
                        {post.body.map((para, i) => {
                            if (para.startsWith("## ")) {
                                return (
                                    <h2 key={i} className="font-display text-3xl md:text-4xl uppercase text-rich-black mt-10 mb-4 border-b-4 border-text-primary pb-2">
                                        {para.replace(/^##\s*/, "")}
                                    </h2>
                                );
                            }
                            if (i === 0) {
                                return (
                                    <p key={i} className="text-xl md:text-2xl leading-relaxed font-bold text-rich-black uppercase font-display tracking-wide mb-2">
                                        {para}
                                    </p>
                                );
                            }
                            return (
                                <p key={i} className="whitespace-pre-line">
                                    {para}
                                </p>
                            );
                        })}

                        {/* Closing pull quote */}
                        <blockquote className="my-12 p-8 border-l-8 border-alert bg-bg text-2xl md:text-3xl font-display uppercase italic leading-tight relative">
                            <Quote className="absolute top-4 right-4 text-text-primary opacity-20" size={64} />
                            &ldquo;Main bhi cockroach. Tum bhi banno.&rdquo;
                        </blockquote>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:sticky top-[100px] space-y-12 w-full max-w-md mx-auto lg:mx-0">

                    {/* TOC */}
                    <div className="bg-bg border-4 border-text-primary p-6 shadow-[8px_8px_0_0_#000]">
                        <h3 className="font-display text-2xl uppercase text-rich-black mb-4 border-b-2 border-text-primary pb-2">CONTENTS</h3>
                        <ul className="font-mono text-sm uppercase space-y-3 font-bold text-text-secondary">
                            {post.body.filter((p) => p.startsWith("## ")).map((heading, idx) => (
                                <li key={idx} className="hover:text-accent cursor-pointer">{heading.replace(/^##\s*/, "")}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Share Sticky */}
                    <div className="bg-accent border-4 border-rich-black p-6 shadow-[8px_8px_0_0_#000]">
                        <h3 className="font-display text-2xl uppercase text-rich-black mb-4">SPREAD THE SWARM</h3>
                        <div className="flex gap-2">
                            <a href={twitterHref} target="_blank" rel="noopener noreferrer" className="flex-1 bg-rich-black text-white hover:bg-white hover:text-rich-black border-2 border-rich-black p-3 flex justify-center transition-colors" aria-label="Share on X"><Twitter size={20} /></a>
                            <a href={facebookHref} target="_blank" rel="noopener noreferrer" className="flex-1 bg-rich-black text-white hover:bg-white hover:text-rich-black border-2 border-rich-black p-3 flex justify-center transition-colors" aria-label="Share on Facebook"><Facebook size={20} /></a>
                            <a href={`https://www.instagram.com/`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-rich-black text-white hover:bg-white hover:text-rich-black border-2 border-rich-black p-3 flex justify-center transition-colors" aria-label="Share on Instagram"><Instagram size={20} /></a>
                        </div>
                        <input type="text" readOnly value={currentUrl} onClick={(e) => (e.target as HTMLInputElement).select()} className="w-full mt-4 bg-white/30 border-2 border-rich-black p-2 font-mono text-[10px] text-rich-black outline-none cursor-text" />
                    </div>
                </aside>

            </div>

            {/* Footer Related & Comments */}
            <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 grid lg:grid-cols-2 gap-16">
                <div>
                    <h3 className="font-display text-4xl uppercase text-rich-black mb-8 border-b-4 border-text-primary pb-2 flex items-center justify-between">
                        THE GUTTER (COMMENTS) <MessageSquare size={32} />
                    </h3>
                    <CommentsSection slug={post.slug} />
                </div>

                <div>
                    <h3 className="font-display text-4xl uppercase text-rich-black mb-8 border-b-4 border-text-primary pb-2">MORE ROASTS</h3>
                    <div className="space-y-6">
                        {related.map((rp) => (
                            <Link key={rp.slug} href={`/blog/${rp.slug}`} className="block bg-card border-4 border-text-primary p-4 hover:border-accent hover:-translate-y-1 transition-all group">
                                <div className="font-mono text-[10px] uppercase text-text-secondary mb-1">{rp.cat}</div>
                                <h4 className="font-display text-2xl text-rich-black uppercase leading-tight group-hover:text-accent">{rp.title}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
