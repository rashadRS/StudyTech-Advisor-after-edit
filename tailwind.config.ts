import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef2ff",
          500: "#6366f1",
          700: "#4338ca"
        },
        accent: {
          500: "#14b8a6",
          700: "#0f766e"
        }
      },
      boxShadow: {
        glow: "0 10px 45px -15px rgba(99, 102, 241, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
