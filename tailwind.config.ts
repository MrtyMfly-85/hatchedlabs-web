import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
        gold: {
          DEFAULT: "#c8a44e",
          deep: "#a07c2a",
          muted: "#6f5a23",
        },
        ink: {
          100: "#f4f4f4",
          300: "#999999",
          500: "#555555",
          700: "#333333",
          900: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(200,164,78,.28), 0 18px 60px rgba(200,164,78,.14)",
      },
      backgroundImage: {
        "gold-radial":
          "radial-gradient(circle at top, rgba(200,164,78,.22), rgba(0,0,0,0) 48%)",
      },
    },
  },
  plugins: [],
};

export default config;
