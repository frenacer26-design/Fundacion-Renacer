/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'renacer-orange': '#f97316', 
        'renacer-blue': '#38bdf8',   
      }
    },
  },
  plugins: [],
}