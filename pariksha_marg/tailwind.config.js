const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans your files
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ...colors, // Merge Tailwind's default colors
        primary: colors.indigo["600"], // Explicitly setting a primary color for consistency
      },
      ringWidth: {
        DEFAULT: "2px",
        3: "3px",
        4: "4px",
      },
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
    require("@tailwindcss/forms"), // Optional: Adds better form styling
    require("@tailwindcss/typography"), // Optional: Improves text formatting
  ],
};
