/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        red: "#E24D4D",
        dark: "#011622",
        darkPara: "#120F24",
        light: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
