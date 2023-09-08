import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "769px", // 576px
      md: "960px",
      lg: "1440px",
      xl: "1920px",
      xxl: "2560px",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
