// E2E test — uploads a sample reel via the same Firebase config the site uses,
// then we curl /reels to confirm it appears. Run once to verify the admin pipeline.
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, serverTimestamp } from "firebase/firestore";

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

const ref = await addDoc(collection(db, "reels"), {
    title: "TEST REEL · CJP PIPELINE LIVE",
    description: "Pipeline verification reel — confirms upload to /reels works end to end.",
    videoUrl: "https://www.youtube.com/shorts/JS-PIPELINE-TEST",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    platform: "youtube",
    thumbnailUrl: "",
    createdAt: serverTimestamp(),
});

console.log("✓ Test reel uploaded · doc id:", ref.id);
process.exit(0);
