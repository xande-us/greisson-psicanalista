import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E2A38",
          50: "#f3f5f7",
          100: "#e2e7ec",
          200: "#c6d0d9",
          300: "#9caebd",
          400: "#6c8499",
          500: "#4d667d",
          600: "#3c5165",
          700: "#324252",
          800: "#2a3744",
          900: "#1E2A38",
          950: "#131c26",
        },
        secondary: "#F8F5F1",
        accent: {
          DEFAULT: "#C4A574",
          soft: "#D8C19B",
          deep: "#A8854F",
        },
        ink: "#2B2B2B",
        canvas: "#FAF8F5",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem, 3.6vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.018em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.875rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 2.2vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
        "overline": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
      },
      letterSpacing: {
        widest: "0.22em",
      },
      maxWidth: {
        content: "1240px",
        prose: "68ch",
      },
      spacing: {
        section: "clamp(5rem, 12vw, 11rem)",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(30,42,56,0.04), 0 8px 24px rgba(30,42,56,0.06)",
        card: "0 2px 4px rgba(30,42,56,0.03), 0 18px 48px rgba(30,42,56,0.08)",
        lift: "0 8px 16px rgba(30,42,56,0.06), 0 32px 64px rgba(30,42,56,0.12)",
        glow: "0 0 0 1px rgba(196,165,116,0.25), 0 24px 56px rgba(196,165,116,0.16)",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "float-slow": "float-slow 9s ease-in-out infinite",
        "fade-in": "fade-in 1.2s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
