import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        marquee: "marquee 32s linear infinite",
        glow: "glow 2s ease-in-out infinite",
        scanline: "scanline 12s linear infinite",
        fadeLeft: "fadeLeft .55s ease both",
        fadeRight: "fadeRight .55s ease both",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 4px #059669" },
          "50%": { boxShadow: "0 0 14px #059669, 0 0 28px rgba(5,150,105,.27)" },
        },
        scanline: {
          "0%": { top: "-4%" },
          "100%": { top: "104%" },
        },
        fadeLeft: {
          from: { opacity: "0", transform: "translateX(-28px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          from: { opacity: "0", transform: "translateX(28px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
