/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        'midnight-purple': {
          50: '#f5f3ff',
          100: '#e8e6ff',
          200: '#c3baf7',
          300: '#9f8bee',
          400: '#7a5ce5',
          500: '#6233d6', // Base color
          600: '#542bb6',
          700: '#462395',
          800: '#381b75',
          900: '#2a1354',
        },
        gold: '#ffbf00',
      }
    },
  },
  plugins: [addVariablesForColors],
  
};


function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}