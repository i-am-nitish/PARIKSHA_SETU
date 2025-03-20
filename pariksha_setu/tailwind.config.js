/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // This enables the 'dark' class-based dark mode
  theme: {
    extend: {
      screens: {
        xs: "475px", // Extra small devices
        sm: "640px", // Small devices (matches default Tailwind)
        md: "768px", // Medium devices (matches default Tailwind)
        lg: "1024px", // Large devices (matches default Tailwind)
        xl: "1280px", // Extra large devices (matches default Tailwind)
        "2xl": "1536px", // 2X-Large devices (matches default Tailwind)
        "3xl": "1920px", // Custom 3X-Large devices (like full HD)
        tall: { raw: "(min-height: 800px)" }, // Custom height-based breakpoint
        portrait: { raw: "(orientation: portrait)" }, // Orientation based
        landscape: { raw: "(orientation: landscape)" }, // Orientation based
      },
    },
  },
  plugins: [],
};
