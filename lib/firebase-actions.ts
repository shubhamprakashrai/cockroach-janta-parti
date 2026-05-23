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
