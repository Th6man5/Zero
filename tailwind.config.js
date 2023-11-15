/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        primary: "#121212",
        secondary: "#323232",
        accent: "#379683",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
};
