/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontSize: {
      sm: '0.8rem',
      md: '0.9rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '5.052rem',
      '7xl': '7.052rem',
      '8xl': '9.052rem',
    },
    colors: {
      transparent: 'transparent',
      'navy': {
        //If you don't explicitly declare a color for a property, Tailwind will use the default color for that property. 
        DEFAULT:'#16142F',
        light: '#292562',
    },
      'pink': '#D2295A',
      'alt-pink': '#DF7090',
      'white': '#FFFFFF',
      'alt-white': '#C7CCDB',
      'alt-blue': '#292562',
      'blue': '#242244',
      'gray': '#242238',
      'alt-gray': '#242244',
      'icon-gray': '#2A324B',
      'blue-connect': '#1D1A3F',
    },
    fontFamily: {
      main: ['Barlow', 'sans-serif'],
      mainCond: ['Barlow Condensed', 'sans-serif'],
      btn: ['Source Code Pro', 'monospace'],
      title: ['Zen Dots', 'cursive'],
      connect: ['Inria Sans', 'sans-serif'],
      barcode: ['Libre Barcode 128 Text', 'cursive'],  
    },
    
  },
 
  plugins: [
  ],
},
}


//----- BTN
// function ({customButtons}) {
//   customButtons({
//     
//  
//     
//     },
//     '.btn-large-icon': {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '0.75rem 1rem',
//       fontSize: '1.5rem',
//       fontWeight: '600',
//       lineHeight: '1.25',
//       textAlign: 'center',
//       fontFamily: theme('fontFamily.btn'),
//       textTransform: 'uppercase',
//       color: theme('colors.white'),
//       backgroundColor: theme('colors.gray'),
//       borderWidth: '2px',
//       borderColor: theme('colors.alt-white'),
//     },
//     '.btn-small-icon': {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       whiteSpace:'nowrap',
//       padding: '.5rem 1rem',
//       fontSize: '1rem',
//       fontWeight: '600',
//       textAlign: 'center',
//       fontFamily: theme('fontFamily.btn'),
//       textTransform: 'uppercase',
//       color: theme('colors.white'),
//       backgroundColor: theme('colors.pink'),
//       borderWidth: '2px',
//       borderColor: theme('colors.white'),
//     },
//    
//   })
// }
