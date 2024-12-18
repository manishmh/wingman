import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-green": "#115E56", 
        "light-green": "#CCFBEF",
        "font-green": "#15B79F",
        "font-black": "#212636",
        "font-gray": "#667085",
      },
    },
  },
  plugins: [],
} satisfies Config;
