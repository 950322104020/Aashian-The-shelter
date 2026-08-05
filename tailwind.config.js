/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandRed: '#C1121F',      // HIV Ribbon Red
        brandNavy: '#1E3A5F',     // Trust Navy
        brandGold: '#FFD166',     // Warm Accent Gold
        offWhite: '#F9FAFB',
        slateDark: '#1F2937'
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}