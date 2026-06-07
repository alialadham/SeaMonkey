import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: "#062B3F",
        navy: "#031923",
        sand: "#D8B98C",
        olive: "#5E6F42",
        gold: "#C89B4A",
        parchment: "#F8F3E8",
        ink: "#050505",
      },
      boxShadow: {
        cinematic: "0 24px 90px rgba(0, 0, 0, 0.35)",
        gold: "0 18px 50px rgba(200, 155, 74, 0.26)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"],
        display: [
          "Kalam",
          "Marker Felt",
          "Comic Sans MS",
          "Segoe Print",
          "cursive",
        ],
      },
      backgroundImage: {
        "topographic-lines":
          "radial-gradient(circle at 20% 25%, rgba(216,185,140,0.18), transparent 28%), radial-gradient(circle at 75% 10%, rgba(94,111,66,0.18), transparent 26%), linear-gradient(135deg, rgba(248,243,232,0.06) 25%, transparent 25%), linear-gradient(45deg, rgba(248,243,232,0.045) 25%, transparent 25%)",
      },
    },
  },
  plugins: [],
};

export default config;
