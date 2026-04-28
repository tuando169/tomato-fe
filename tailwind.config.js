/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2c5243', // Deep emerald/forest green
          dim: '#1f3e31',
          container: '#a8d5c2',
        },
        mint: '#c8e6d8',
        sage: '#9cbcae',
        seafoam: '#dff1e9',
        surface: {
          DEFAULT: '#f8fbf9',
          container: '#f1f6f4',
          'container-lowest': '#ffffff',
        }
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'serif'],
        sans: ['"Manrope"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
