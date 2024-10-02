/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'vitneam' : ['"Be Vietnam Pro"', 'sans-serif'],
        'banner' : ['"Archivo Black"', 'sans-serif']
      },
      colors:{
        'primary-color' : '#3967e1',
        'secundary-color' : '#2b2d42',
        'btn-color-primary' : '#ffd700',
        'btn-color-secondary':'#f45d48',   
        'light-color':'#f0f4f8',
        'extra-color':'#74c0fc'
      }
    },
  },
  plugins: [],
}

