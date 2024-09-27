import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:  {
        primary: "#22A11F",
        gray: {
            400: "#9898AD",
            500: "#6B6B7B",
            600: "#5B5B6B",
            800: "#353340",
            900: "#272532",
        }
    },
    },
  },
  plugins: [],
};
export default config;
