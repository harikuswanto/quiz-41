/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        q2: "700px",
      },
      fontFamily: {
        dmSans: ["var(--font-dm-sans)"],
      },
      colors: {
        primary: "#4A3AFF",
        ascent: "#EFF0F7",
        neutral: "#6F6C90",
        darkBlue: "#170F49",
        errorstate: "#962DFF",
      },
    },
  },
  plugins: [],
};
