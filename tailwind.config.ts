import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          "0%": { borderColor: "black" },
          "50%": { borderColor: "white" },
          "100%": { borderColor: "black" },
        },
        "blink-dark": {
          "0%": { borderColor: "black" },
          "50%": { borderColor: "rgb(156 163 175)" },
          "100%": { borderColor: "black" },
        },
      },
      animation: {
        cursor: "blink 1s linear infinite",
        "cursor-dark": "blink-dark 1s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
