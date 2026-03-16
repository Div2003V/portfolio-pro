/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // You can add custom brand colors here
          navy: {
            light: '#112240',
            dark: '#0a192f',
            deep: '#020c1b',
          },
          blue: {
            accent: '#64ffda', // A classic "Dev Portfolio" cyan-blue
          }
        },
      },
    },
    plugins: [],
  }