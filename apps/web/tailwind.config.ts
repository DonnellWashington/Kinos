import type { Config } from "tailwindcss";

const config: Config = {
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
        },
      },
    },
  },
  plugins: [],
};

export default config;