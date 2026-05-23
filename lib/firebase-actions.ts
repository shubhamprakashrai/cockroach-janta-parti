import {
    addDoc,
    collection,
    doc,
    getDoc,
    increment,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
} from "firebase/firestore";
import { getDb } from "./firebase";

const BASE_MEMBER_COUNT = 350000;

export type Member = { name: string; city: string; why: string; email?: string };
export type Comment = { id?: string; name: string; text: string; createdAtMs?: number };
export type AdminBlogPost = {
    id?: string;
    slug: string;
    title: string;
    cat: string;
    excerpt: string;
    body: string[];
    author: string;
    readTime: string;
    img: string;
    createdAtMs?: number;
};
export type Reel = {
    id?: string;
    title: string;
    description: string;
    videoUrl: string;        // raw YouTube / Instagram / Twitter URL
    embedUrl: string;        // computed iframe-safe URL
    thumbnailUrl: string;
    platform: "youtube" | "instagram" | "twitter" | "other";
    createdAtMs?: number;
};
export type AdminNewsItem = {
    id?: string;
    source: string;
    title: string;
    summary: string;
    url: string;
    img: string;
    createdAtMs?: number;
};

// ---------- Members ----------

export async function joinMember(member: Member): Promise<{ ok: boolean; reason?: string }> {
    const db = getDb();
    if (!db) return { ok: false, reason: "firebase-not-configured" };
    try {
        await addDoc(collection(db, "members"), {
            ...member,
            createdAt: serverTimestamp(),
        });
        const statsRef = doc(db, "meta", "stats");
        const snap = await getDoc(statsRef);
        if (snap.exists()) {
            await updateDoc(statsRef, { members: increment(1) });
        } else {
            await setDoc(statsRef, { members: BASE_MEMBER_COUNT + 1 }, { merge: true });
        }
        return { ok: true };
    } catch (err) {
        return { ok: false, reason: (err as Error).message };
    }
}

export function listenToMemberCount(onChange: (count: number) => void): () => void {
    const db = getDb();
    if (!db) return () => {};
    const ref = doc(db, "meta", "stats");
    return onSnapshot(ref, (snap) => {
        const value = snap.data()?.members;
        if (typeof value === "number") onChange(value);
    });
}

// ---------- Meme Likes ----------

const LIKED_MEMES_KEY = "cjp_liked_memes_v1";

function getLikedSet(): Set<string> {
    if (typeof window === "undefined") return new Set();
    try {
        const raw = window.localStorage.getItem(LIKED_MEMES_KEY);
        return new Set(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
        return new Set();
    }
}

function persistLiked(set: Set<string>) {
    if (typeof window === "undefined") return;
    try {
        window.localStorage.setItem(LIKED_MEMES_KEY, JSON.stringify(Array.from(set)));
    } catch {
        // ignore quota errors
    }
}

export function hasLikedMeme(memeId: string): boolean {
    return getLikedSet().has(memeId);
}

export async function likeMeme(memeId: string): Promise<{ ok: boolean; alreadyLiked?: boolean; reason?: string }> {
    if (hasLikedMeme(memeId)) return { ok: false, alreadyLiked: true };
    const db = getDb();
    if (!db) return { ok: false, reason: "firebase-not-configured" };
    try {
        const ref = doc(db, "memeLikes", memeId);
        const snap = await getDoc(ref);
        if (snap.exists()) {
            await updateDoc(ref, { count: increment(1) });
        } else {
            await setDoc(ref, { count: 1 });
        }
        const liked = getLikedSet();
        liked.add(memeId);
        persistLiked(liked);
        return { ok: true };
    } catch (err) {
        return { ok: false, reason: (err as Error).message };
    }
}

export function listenToMemeLikes(memeId: string, onChange: (count: number) => void): () => void {
    const db = getDb();
    if (!db) return () => {};
    return onSnapshot(doc(db, "memeLikes", memeId), (snap) => {
        const value = snap.data()?.count;
        onChange(typeof value === "number" ? value : 0);
    });
}

// ---------- Blog Comments ----------

export async function addComment(slug: string, name: string, text: string): Promise<{ ok: boolean; reason?: string }> {
    const db = getDb();
    if (!db) return { ok: false, reason: "firebase-not-configured" };
    const trimmedName = name.trim().slice(0, 60);
    const trimmedText = text.trim().slice(0, 800);
    if (!trimmedName || !trimmedText) return { ok: false, reason: "empty" };
    try {
        await addDoc(collection(db, "comments", slug, "items"), {
            name: trimmedName,
            text: trimmedText,
            createdAt: serverTimestamp(),
        });
        return { ok: true };
    } catch (err) {
        return { ok: false, reason: (err as Error).message };
    }
}

export function listenToComments(slug: string, onChange: (comments: Comment[]) => void): () => void {
    const db = getDb();
    if (!db) return () => {};
    const q = query(collection(db, "comments", slug, "items"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
        onChange(
            snap.docs.map((d) => {
                const data = d.data() as { name?: string; text?: string; createdAt?: { toMillis: () => number } };
                return {
                    id: d.id,
                    name: data.name ?? "anon",
                    text: data.text ?? "",
                    createdAtMs: data.createdAt?.toMillis?.() ?? Date.now(),
                };
            })
        );
    });
}

// ---------- Admin: Blog Posts ----------

export async function createBlogPost(post: Omit<AdminBlogPost, "id" | "createdAtMs">): Promise<{ ok: boolean; reason?: string }> {
    const db = getDb();
    if (!db) return { ok: false, reason: "firebase-not-configured" };
    if (!post.slug || !post.title) return { ok: false, reason: "missing-required" };
    try {
        await addDoc(collection(db, "blogs"), {
            ...post,
            createdAt: serverTimestamp(),
        });
        return { ok: true };
    } catch (err) {
        return { ok: false, reason: (err as Error).message };
    }
}

export function listenToAdminBlogs(onChange: (posts: AdminBlogPost[]) => void): () => void {
    const db = getDb();
    if (!db) return () => {};
    const q = query(collection(db, "blogs"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
        onChange(
            snap.docs.map((d) => {
                const data = d.data() as Partial<AdminBlogPost> & { createdAt?: { toMillis: () => number } };
                return {
                    id: d.id,
                    slug: data.slug ?? d.id,
                    title: data.title ?? "Untitled",
                    cat: data.cat ?? "News",
                    excerpt: data.excerpt ?? "",
                    body: Array.isArray(data.body) ? data.body : [],
                    author: data.author ?? "CJP Editor",
                    readTime: data.readTime ?? "3 min read",
                    img: data.img ?? "",
                    createdAtMs: data.createdAt?.toMillis?.() ?? Date.now(),
                };
            })
        );
    });
}

// ---------- Admin: Reels / Videos ----------

export function detectPlatform(url: string): Reel["platform"] {
    if (/youtube\.com|youtu\.be/.test(url)) return "youtube";
    if (/instagram\.com/.test(url)) return "instagram";
    if (/twitter\.com|x\.com/.test(url)) return "twitter";
    return "other";
}

export function buildEmbedUrl(url: string): string {
    const platform = detectPlatform(url);
    if (platform === "youtube") {
        const shortMatch = url.match(/youtu\.be\/([\w-]+)/);
        if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;
        const watchMatch = url.match(/[?&]v=([\w-]+)/);
        if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;
        const shortsMatch = url.match(/shorts\/([\w-]+)/);
        if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}`;
        return url;
    }
    if (platform === "instagram") {
        const reelMatch = url.match(/instagram\.com\/(?:reel|p|tv)\/([\w-]+)/);
        if (reelMatch) return `https://www.instagram.com/p/${reelMatch[1]}/embed`;
        return url;
    }
    return url;
}

export async function createReel(reel: Omit<Reel, "id" | "createdAtMs" | "embedUrl" | "platform">): Promise<{ ok: boolean; reason?: string }> {
    const db = getDb();
    if (!db) return { ok: false, reason: "firebase-not-configured" };
    if (!reel.videoUrl || !reel.title) return { ok: false, reason: "missing-required" };
    try {
        const platform = detectPlatform(reel.videoUrl);
        const embedUrl = buildEmbedUrl(reel.videoUrl);
        await addDoc(collection(db, "reels"), {
            ...reel,
            platform,
            embedUrl,
            createdAt: serverTimestamp(),
        });
        return { ok: true };
    } catch (err) {
        return { ok: false, reason: (err as Error).message };
    }
}

export function listenToReels(onChange: (reels: Reel[]) => void): () => void {
    const db = getDb();
    if (!db) return () => {};
    const q = query(collection(db, "reels"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
        onChange(
            snap.docs.map((d) => {
                const data = d.data() as Partial<Reel> & { createdAt?: { toMillis: () => number } };
                return {
                    id: d.id,
                    title: data.title ?? "Untitled",
                    description: data.description ?? "",
                    videoUrl: data.videoUrl ?? "",
                    embedUrl: data.embedUrl ?? data.videoUrl ?? "",
                    thumbnailUrl: data.thumbnailUrl ?? "",
                    platform: data.platform ?? "other",
                    createdAtMs: data.createdAt?.toMillis?.() ?? Date.now(),
                };
            })
        );
    });
}

// ---------- Admin: News Items ----------

export async function createNewsItem(item: Omit<AdminNewsItem, "id" | "createdAtMs">): Promise<{ ok: boolean; reason?: string }> {
    const db = getDb();
    if (!db) return { ok: false, reason: "firebase-not-configured" };
    if (!item.title || !item.url) return { ok: false, reason: "missing-required" };
    try {
        await addDoc(collection(db, "news"), {
            ...item,
            createdAt: serverTimestamp(),
        });
        return { ok: true };
    } catch (err) {
        return { ok: false, reason: (err as Error).message };
    }
}

export function listenToAdminNews(onChange: (items: AdminNewsItem[]) => void): () => void {
    const db = getDb();
    if (!db) return () => {};
    const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
    return onSnapshot(q, (snap) => {
        onChange(
            snap.docs.map((d) => {
                const data = d.data() as Partial<AdminNewsItem> & { createdAt?: { toMillis: () => number } };
                return {
                    id: d.id,
                    source: data.source ?? "CJP",
                    title: data.title ?? "Untitled",
                    summary: data.summary ?? "",
                    url: data.url ?? "#",
                    img: data.img ?? "",
                    createdAtMs: data.createdAt?.toMillis?.() ?? Date.now(),
                };
            })
        );
    });
}
