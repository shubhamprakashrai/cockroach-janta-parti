// One-off: reset meta/stats to honest Day-1 number. Run when you want to wipe inflated counts.
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

await setDoc(doc(db, "meta", "stats"), { members: 47 });
console.log("✓ Counter reset to 47 (Day 1 founding cohort)");
process.exit(0);
