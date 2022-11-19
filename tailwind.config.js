/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Merriweather: ["Merriweather Sans", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
