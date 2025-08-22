/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            primary: "#F26A1B",  // Orange
            secondary: "#27A291", // Teal
            dark: "#1D2D44",     // Navy
            base: "#FDF7F2",     // Cream
            accent: "#FFB86F"    // Highlight
          }
        }
      },
    },
    plugins: [],
  }
  