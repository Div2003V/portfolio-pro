/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#020617', // The deep black-blue in the image
        card: '#0f172a',       // Slightly lighter for cards
        accent: '#38bdf8',     // Sky blue accent
        muted: '#94a3b8',      // Grey text
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}