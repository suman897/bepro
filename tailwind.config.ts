import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C63FF",
          light: "#8F8AFF",
        },
        accent: "#3DB5FF",
        accent2: "#FFB347",
        background: "#F9FAFC",
        border: "#E7ECF3",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        number: ["var(--font-space-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
