import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        cursive: ["var(--font-dancing-script)", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          purple: "#7042f8",
          "purple-light": "#b49bff",
          dark: "#030014",
        },
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(112, 66, 248, 0.4)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.4)",
      },
      animation: {
        gradient: "gradient 6s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%":   { backgroundPosition: "0% 50%" },
          "50%":  { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
