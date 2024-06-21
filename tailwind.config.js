/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'Red': '#4B1411',
      'Red-claro':'#F94239',
      'Escuro':'#1E1D1D'
      
    },
    fontFamily: {
      customFont: ['"Russo One"', "sans-serif"],
    },
    backgroundImage: {
      'footer-texture': "url('/src/componentes/Images/pexels-donaldtong94-109669.jpg')",
    }
  },
  },
  plugins: [],
}