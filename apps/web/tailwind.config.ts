import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kinos: {
          bg: "#F5EFEA",
          text: "#2E2A27",
          brown: "#6B4F3F",
          olive: "#7A8450",
          card: "#ffffff",

          darkBg: "#2E2A27",
          darkText: "#F5EFEA",
          darkCard: "#3B3735",
          
        },
      },
    },
  },
  plugins: [],
};

export default config;