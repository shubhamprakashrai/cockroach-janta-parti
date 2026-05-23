// One-off seed: writes meta/stats { members: 350000 } so the live counter has a realistic starting number.
// Usage: node scripts/seed-firestore.mjs
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyAG9kuotSblBDPb4NxDCTCCHKiXlAzON8A",
    authDomain: "cockroach-janta-parti-cjp.firebaseapp.com",
    projectId: "cockroach-janta-parti-cjp",
    storageBucket: "cockroach-janta-parti-cjp.firebasestorage.app",
    messagingSenderId: "688516789905",
    appId: "1:688516789905:web:8c22195f8e573518287130",
};

const app = initializeApp(config);
const db = getFirestore(app);

await setDoc(doc(db, "meta", "stats"), { members: 350000 }, { merge: true });
console.log("✓ Seeded meta/stats { members: 350000 }");
process.exit(0);
