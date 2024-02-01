/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      bebasNeue: ["Bebas Neue", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        red: "#E24D4D",
        yellow: "#D3C11D",
        yellowDark: "#B6A71D",
        dark: "#011622",
        darkPara: "#120F24",
        light: "#F7F7F7",
        whiteBg: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
