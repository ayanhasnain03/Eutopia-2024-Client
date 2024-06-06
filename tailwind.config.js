/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dank': ['dank mono'],
        "gabri":['Gabriola']
      },
      colors:{
        'primary': '#94FFD8',
      
      }
    },
  },
  plugins: [],
}