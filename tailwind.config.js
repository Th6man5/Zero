/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#323232",
        coba: "rgb(41 41 42)",
        unhover: "#8E8E8E",
        accent: "#379683",
        hijo: "#5CDB94",
        white: "#ffffff",
        black: "#000000",
        black2: "#1E1E1E",
        current1: "#201920",
        current2: "#533B5E",
        ulasan: "#1D1B1B",
        bar: "#BCBCBC",
      },
      height: {
        sidebar: "97%",
        cover: "188px"
      },
      blur: {
        xs: "1px",
      },
    },
  },
};
