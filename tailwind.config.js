/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'Verde': '#A1C130',
      'Cinza':'#D9D9D9'
      
    },
    fontFamily: {
      customFont: ['"Quicksand"', "sans-serif"],
    },
    backgroundImage: {
      'footer-texture': "url('/src/componentes/Images/pexels-donaldtong94-109669.jpg')",
    },

  },
  },
  plugins: [],
}