/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "Gilroy-Black":['Gilroy-Black', 'sans-serif']
      },
      colors:{
        bgBlog:'#656565'
      }
    },
  },
  plugins: [],
}

