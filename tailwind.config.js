/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'montserrat' : ['"Montserrat"', 'sans-serif'],
      },
      colors:{
        'primary-color' : '#3967e1',
        'secundary-color' : '#2b2d42',
        'btn-color-primary' : '#ffd700',
        'btn-color-secondary':'#f45d48',   
        'light-color':'#f0f4f8',
        'extra-color':'#74c0fc'
      },
      backgroundImage:{
        'banner-curso': "url('/src/images/banner-curso-home.jpg')",
      }
    },
  },
  plugins: [],
}

