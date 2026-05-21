import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://cockrochjantaparti.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Cockroach Janta Party — Fan HQ | Main Bhi Cockroach 🪳",
    template: "%s | Cockroach Janta Parti",
  },
  description:
    "India's #1 fan hub for the Cockroach Janta Party (CJP). News, memes, manifesto, anthem, and join the movement. Main Bhi Cockroach.",
  keywords: [
    "cockroach janta party",
    "cockroach janata party",
    "main bhi cockroach",
    "cjp india",
    "abhijeet dipke",
    "cji cockroach remark",
    "cjp manifesto",
    "cjp memes",
    "indian gen z movement",
    "satirical political party india",
  ],
  authors: [{ name: "CJP Fan HQ" }],
  creator: "CJP Fan HQ",
  publisher: "CJP Fan HQ",
  openGraph: {
    type: "website",
    locale: "en_IN",
    alternateLocale: ["hi_IN"],
    url: SITE_URL,
    siteName: "Cockroach Janta Parti — Fan HQ",
    title: "Main Bhi Cockroach 🪳 — India's Loudest Gen Z Movement",
    description:
      "Join 1L+ cockroaches. Memes, manifesto, news, anthem. Fan-built. Unofficial.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Cockroach Janta Parti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Main Bhi Cockroach 🪳",
    description: "India's loudest Gen Z movement. Fan-built hub.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  alternates: {
    canonical: SITE_URL,
    languages: { "en-IN": "/", "hi-IN": "/hindi" },
  },
  category: "politics",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cockroach Janta Parti — Fan HQ",
              url: SITE_URL,
              logo: `${SITE_URL}/logo.png`,
              description: "Fan-built hub for India's Cockroach Janta Party movement",
              sameAs: [
                "https://www.instagram.com/cockroachjantaparty",
                "https://twitter.com/cockroachjp",
              ],
            }),
          }}
        />
      </head>
      <body className="bg-bg text-text-primary font-body antialiased">{children}</body>
    </html>
  );
}
