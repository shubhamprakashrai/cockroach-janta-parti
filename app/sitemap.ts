import type { MetadataRoute } from "next";

const SITE = "https://cockrochjantaparti.com";

const INDIAN_STATES = [
  "maharashtra", "bihar", "west-bengal", "delhi", "karnataka", "tamil-nadu",
  "uttar-pradesh", "punjab", "kerala", "gujarat", "rajasthan", "madhya-pradesh",
  "andhra-pradesh", "telangana", "odisha", "jharkhand", "haryana", "assam",
  "chhattisgarh", "himachal-pradesh", "uttarakhand", "tripura", "meghalaya",
  "manipur", "nagaland", "arunachal-pradesh", "mizoram", "sikkim", "goa",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const mainRoutes = [
    { p: "", priority: 1.0 },
    { p: "manifesto", priority: 0.9 },
    { p: "join", priority: 0.9 },
    { p: "memes", priority: 0.9 },
    { p: "reels", priority: 0.9 },
    { p: "news", priority: 0.9 },
    { p: "anthem", priority: 0.8 },
    { p: "founder", priority: 0.8 },
    { p: "cji-remark", priority: 0.8 },
    { p: "quiz", priority: 0.8 },
    { p: "tools", priority: 0.7 },
    { p: "tools/card", priority: 0.8 },
    { p: "tools/meme-generator", priority: 0.8 },
    { p: "blog", priority: 0.7 },
    { p: "hindi", priority: 0.7 },
    { p: "about", priority: 0.5 },
    { p: "faq", priority: 0.9 },
    { p: "press", priority: 0.8 },
  ];

  const stateRoutes = INDIAN_STATES.map((s) => ({ p: `states/${s}`, priority: 0.6 }));

  return [...mainRoutes, ...stateRoutes].map(({ p, priority }) => ({
    url: `${SITE}/${p}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority,
  }));
}
