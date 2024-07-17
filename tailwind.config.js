/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#ffffff",
      blue: "#07162e",
      lightBlue: "#158ee6",
      darkBlue: "#040b14",
      blue1: "#053c96",
      blue2: "#025ef2",
      grey: "#9097A0",
      darkGrey:"#69686A",
      lightGrey: "#F0ECF0",
      textBgBlue: "#1b3661",
      purple: "#744293",
    },
    fontSize: {
      64: "64px",
      48: "48px",
      36: "36px",
      32: "32px",
      26: "26px",
      24: "24px",
      20: "20px",
      18: "18px",
      16: "16px",
      14: "14px",
      12: "12px",
    },
  },
  plugins: [],
};
