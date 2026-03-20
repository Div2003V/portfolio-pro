/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // The warm background from the image
        background: '#F5F2ED', 
        // The deep blue/ink cards
        card: '#0F172A',       
        // The purple and orange accents
        accent: '#7C3AED',     
        orange: '#F97316',
        // Secondary text
        muted: '#64748B',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}