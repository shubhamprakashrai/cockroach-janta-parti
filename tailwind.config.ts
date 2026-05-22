import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stitch palette — Satirical Neo-Editorial / Brutalist Light
        bg: "#FCF8F8",          // warm cream (was #0A0A0A)
        card: "#FFFFFF",        // pure white card surface (was #1A1A1A)
        accent: "#FF6B00",      // saffron primary (was #FFD60A)
        mustard: "#FFD60A",     // mustard yellow secondary highlight
        alert: "#E63946",       // revolution red (was #FF3B30)
        success: "#00A86B",     // deeper green readable on cream
        text: {
          primary: "#0A0A0A",   // rich black (was #F5F5F5)
          secondary: "#5A4136", // warm brown muted (was #A0A0A0)
        },
        border: "#0A0A0A",      // rich black borders (was #2A2A2A)
        cream: "#FCF8F8",
        "rich-black": "#0A0A0A",
        saffron: "#FF6B00",
      },
      fontFamily: {
        display: ["Anton", "Bebas Neue", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        hindi: ["Hind", "Noto Sans Devanagari", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        // Hard offset black shadows — Stitch "Physicality" principle
        brutal: "4px 4px 0 0 #0A0A0A",
        "brutal-sm": "2px 2px 0 0 #0A0A0A",
        "brutal-lg": "8px 8px 0 0 #0A0A0A",
        "brutal-xl": "16px 16px 0 0 #0A0A0A",
        "brutal-saffron": "4px 4px 0 0 #FF6B00",
        "brutal-mustard": "4px 4px 0 0 #FFD60A",
        "brutal-red": "4px 4px 0 0 #E63946",
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        glitch: "glitch 0.5s ease-in-out infinite",
        crawl: "crawl 20s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        crawl: {
          "0%": { transform: "translateX(-100px)" },
          "100%": { transform: "translateX(calc(100vw + 100px))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
