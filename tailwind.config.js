/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      mobile: "586px",
      tablet: "820px",
      laptop: "1181px",
    },
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 0 10px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
