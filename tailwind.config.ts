import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        card: "#1A1A1A",
        accent: "#FFD60A",
        alert: "#FF3B30",
        success: "#00FF88",
        text: { primary: "#F5F5F5", secondary: "#A0A0A0" },
        border: "#2A2A2A",
      },
      fontFamily: {
        display: ["Anton", "Bebas Neue", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        hindi: ["Hind", "Noto Sans Devanagari", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        brutal: "4px 4px 0 0 #000000",
        "brutal-yellow": "4px 4px 0 0 #FFD60A",
        "brutal-lg": "8px 8px 0 0 #000000",
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
