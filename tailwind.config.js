/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#04080f",
        secondary: "#8b9cb3",
        tertiary: "#0a1628",
        "black-100": "#0c1829",
        "black-200": "#071018",
        "white-100": "#e2e8f0",
        accent: "#38bdf8",
        phosphor: "#7dd3fc",
        signal: "#22d3ee",
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 24px 80px -20px rgba(2, 8, 23, 0.7)",
        glow: "0 0 40px -8px rgba(56, 189, 248, 0.35)",
        nav: "0 8px 32px -8px rgba(0, 0, 0, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(ellipse 90% 70% at 75% 0%, rgba(56, 189, 248, 0.14), transparent 50%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(34, 211, 238, 0.08), transparent 45%), linear-gradient(180deg, #04080f 0%, #081422 45%, #04080f 100%)",
        "card-shine":
          "linear-gradient(135deg, rgba(56, 189, 248, 0.08) 0%, transparent 50%, transparent 100%)",
      },
    },
  },
  plugins: [],
};
