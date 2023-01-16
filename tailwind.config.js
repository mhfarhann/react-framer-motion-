/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'popins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'syne'  : ['Syne', 'sans-serif'],
        'hanson': ['Hanson', 'sans-serif']
      },
      colors:{
        'pewter': {
          '50': '#F1F1F1',
          '100': '##c8d2ca',
          '300': '#99ab9e',
          '400': '#798e7f',
          '500': '#597061',
          '600': '#44574b',
          '700': '#36463c',
          '800': '#2c3931',
          '900': '#252f29',
      },
      'weee' :{
      '50'  : '#F7F7F7',
      "100 ": "#28291F",
      "200" : "#31553A",
      "300" : "#EBEBEA",
      "400" : "#E46A44",
      "500" : "#CFED72",
      "600" : "#0A0A0D",
      "700" : "#E2E2E2",
      "800" : "#DCD1EE",
      "900" : "#FF3C32" ,
      }
           
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
        '4000': '4000ms',
        '8000': '8000ms'
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require('hide-tailwind-scrollbar')
  ],
}
