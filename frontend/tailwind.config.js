/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#020617', // Deepest Slate Black
        card: '#0f172a',       // Slate Blue Card
        accent: '#38bdf8',     // Electric Blue
        muted: '#94a3b8',      // Soft Grey
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}