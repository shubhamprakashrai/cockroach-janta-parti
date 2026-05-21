import type { MetadataRoute } from "next";

const SITE = "https://cockrochjantaparti.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "", "manifesto", "join", "news", "memes", "tools", "blog",
    "founder/abhijeet-dipke", "cji-remark", "anthem", "about",
    "quiz/which-cockroach-are-you", "hindi",
  ];
  return routes.map((path) => ({
    url: `${SITE}/${path}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: path === "" ? 1.0 : 0.8,
  }));
}
