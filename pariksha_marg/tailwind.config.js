const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans your files
  darkMode: "class",
  theme: {
    extend: {
      colors: colors, // Extending Tailwind's default colors
    },
  },
  plugins: [
    function addVariablesForColors({ addBase, theme }) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

      addBase({
        ":root": newVars,
      });
    },
  ],
};
