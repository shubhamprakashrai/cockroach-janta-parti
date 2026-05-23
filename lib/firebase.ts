import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

const config = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const isFirebaseConfigured = Boolean(config.apiKey && config.projectId);

let app: FirebaseApp | undefined;
let dbInstance: Firestore | undefined;

export function getDb(): Firestore | undefined {
    if (!isFirebaseConfigured) return undefined;
    if (typeof window === "undefined") return undefined;
    if (!app) {
        app = getApps().length > 0 ? getApps()[0] : initializeApp(config as Record<string, string>);
    }
    if (!dbInstance) {
        dbInstance = getFirestore(app);
    }
    return dbInstance;
}
