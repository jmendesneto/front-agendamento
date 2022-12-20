/** @type {import('tailwindcss').Config} */
module.exports = {

  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily:{
      abc:["Source Sans Pro", "sans-serif"],
      loto:["Lato", "sans-serif"],
      over:["Overpass","sans-serif"]
    },
    colors: {
      'green-base':'#009900',
      'hoverspt':'#18D760',
      'verde':'#038C5A',
      'verde2':'#365942',
      'Verde':'#8Dbf21',
      'Base1':'#D9D9D9',
      'base2':'#FCDE33',
      'base':'#EAEF9D',
      'munsell': '#E6E6DA',
      'green': '#8ABF17',
      'green-dark': '#193324',
      'green-2':'#365902',
      'foto':'#F5F4E0',
      'fundo':'#EFE0C4',
      'rainee':'#B2BEB4',
      '2':'#F4FCF9',
      'teste':'#7da91c',
      'base-teste':'#648716',
      'base-teste1':'#577613',
      'letras':'#3AA34C',
      'card':'#D9D9D9',
      'card3':'#e6e6e6',
      'outra':'#108613',
      'letras2':'#009900',
      'base-Card':'#f2f2f2',
      'input':'#d9d9d9',
      'outras':'#08900a',
       'nav':'#128316',
       'nav2':'#ffffff',
       'erro':'#ff0000'
    },
  },
  plugins: [],

  variants: {
    // ...
///     stroke: ['responsive'],
     stroke: ['responsive', 'hover', 'focus'],
  }

}
