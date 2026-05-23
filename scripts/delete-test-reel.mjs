// One-off: delete the test reel (Rick Astley placeholder) from Firestore.
import { initializeApp } from "firebase/app";
import { getFirestore, doc, deleteDoc } from "firebase/firestore";

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

await deleteDoc(doc(db, "reels", "koO9lIhwoukKvx3pKT1B"));
console.log("✓ Test reel koO9lIhwoukKvx3pKT1B deleted from /reels collection.");
process.exit(0);
