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
        accent: "#379683",
        hijo: "#5CDB94",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
};
