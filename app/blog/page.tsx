"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Search, Clock, ArrowRight } from "lucide-react";
import { blogPosts, type BlogPost } from "@/lib/blog";
import { listenToAdminBlogs, type AdminBlogPost } from "@/lib/firebase-actions";

export default function BlogIndexPage() {
    const categories = ["News", "Memes", "History", "Tools", "Hindi", "Marathi", "Bengali", "Opinion"];

    const [adminPosts, setAdminPosts] = useState<AdminBlogPost[]>([]);
    useEffect(() => {
        const unsub = listenToAdminBlogs(setAdminPosts);
        return () => unsub();
    }, []);

    // Merge: admin-uploaded (newest first by createdAt) on top, then static archive.
    const merged: BlogPost[] = [
        ...adminPosts.map((p) => ({
            slug: p.slug,
            title: p.title,
            cat: p.cat,
            excerpt: p.excerpt,
            body: p.body,
            author: p.author,
            date: new Date(p.createdAtMs ?? Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),
            readTime: p.readTime,
            img: p.img,
        })),
        ...blogPosts,
    ];
    const posts = merged;

    return (
        <main className="min-h-screen bg-bg text-text-primary pb-24">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-card border-b-4 border-text-primary px-4 py-4 shadow-[0_4px_0_0_#000] flex justify-between items-center">
                <Link href="/" className="font-display text-3xl uppercase tracking-widest hover:text-accent">🪳 BLOG</Link>
            </nav>

            {/* Hero Search */}
            <header className="px-4 py-16 text-center border-b-4 border-text-primary bg-bg relative">
                <div className="max-w-4xl mx-auto">
                    <h1 className="font-display text-5xl md:text-7xl uppercase text-rich-black mb-8">THE ROACH <span className="text-accent underline decoration-8">DIGEST</span></h1>
                    <div className="relative max-w-2xl mx-auto mb-8">
                        <Search size={24} className="absolute top-1/2 -translate-y-1/2 left-4 text-text-secondary" />
                        <input
                            type="text"
                            placeholder="Search articles, guides, manifestos..."
                            className="w-full bg-card border-4 border-text-primary p-5 pl-14 font-mono font-bold uppercase text-rich-black shadow-[8px_8px_0_0_#FFD60A] focus:outline-none focus:border-accent"
                        />
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map(c => (
                            <button key={c} className="bg-black text-white font-mono text-xs uppercase px-4 py-2 border-2 border-text-primary hover:bg-white hover:text-black hover:-translate-y-1 transition-all">
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            {/* Grid */}
            <section className="max-w-[1400px] mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12">
                    {posts.map((post, i) => (
                        <Link href={`/blog/${post.slug}`} key={i} className="flex flex-col bg-card border-4 border-text-primary shadow-[12px_12px_0_0_#000] hover:shadow-[12px_12px_0_0_#FFD60A] hover:-translate-y-2 transition-all group overflow-hidden">

                            {/* Cover */}
                            <div className="w-full aspect-video border-b-4 border-text-primary relative overflow-hidden">
                                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                                <div className="absolute top-4 left-4 bg-white text-rich-black font-mono font-bold text-[10px] uppercase px-2 py-1 border-2 border-rich-black tracking-widest z-10">
                                    {post.cat}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <h2 className="font-display text-3xl uppercase text-rich-black mb-3 leading-tight group-hover:text-accent transition-colors">{post.title}</h2>
                                <p className="font-hindi text-text-secondary text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex justify-between items-end border-t-2 border-text-primary pt-4 mt-auto font-mono text-xs font-bold uppercase text-text-secondary">
                                    <div className="flex flex-col">
                                        <span className="text-rich-black">BY: {post.author}</span>
                                        <span className="flex items-center gap-1 mt-1"><Clock size={12} /> {post.readTime}</span>
                                    </div>
                                    <div className="text-accent group-hover:underline decoration-2 underline-offset-4 flex items-center gap-1">
                                        READ <ArrowRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

        </main>
    );
}
