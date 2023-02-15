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
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    colors: {
      transparent: 'transparent',
      'navy': {
        //If you don't explicitly declare a color for a property, Tailwind will use the default color for that property. 
        DEFAULT:'#16142F',
        light: '#292562',
    },
      'pink': '#D2295A',
      'l-pink': '#DF7090',
      'white': '#FFFFFF',
      'alt-white': '#C7CCDB',
      'l-blue': '#292562',
      'blue': '#242244',
      'gray': '#242238',
      'alt-gray': '#242244',
    },
    fontFamily: {
      main: ['Barlow', 'sans-serif'],
      mainCond: ['Barlow Condensed', 'sans-serif'],
      btn: ['Source Code Pro', 'monospace'],
      title: ['Zen Dots', 'cursive'],
      connect: ['Inria Sans', 'sans-serif'],
      barcode: ['Libre Barcode 39 Text', 'cursive'],  
    },
    
  },
 
  plugins: [
  ],
},
}


//----- BTN
// function ({customButtons}) {
//   customButtons({
//     '.btn-connect': {
//       display: 'inline-block',
//       padding: '.5rem 1rem',
//       fontSize: '1rem',
//       fontWeight: '600',
//       whiteSpace:'nowrap',
//       textAlign: 'center',
//       fontFamily: theme('fontFamily.connect'),
//       textTransform: 'uppercase',
//       color: theme('colors.pink'),
//       backgroundColor: theme('colors.main-navy'),
//        // Add transitions to background and text color
//       // transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
//       // '&:hover': {
//       //   color: theme('colors.pink'),
//       //   backgroundColor: theme('colors.main-navy'),
//       // },
//     },
//     '.btn-action': {
//       display: 'inline-block',
//       padding: '.5rem 1rem',
//       fontSize: '1rem',
//       fontWeight: '600',
//       whiteSpace:'nowrap',
//       textAlign: 'center',
//       fontFamily: theme('fontFamily.btn'),
//       textTransform: 'uppercase',
//       color: theme('colors.white'),
//       backgroundColor: theme('colors.pink'),
//       borderWidth: '2px',
//       borderColor: theme('colors.alt-white'),
//        // Add transitions to background and text color
//       transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
//       '&:hover': {
//         color: theme('colors.pink'),
//         backgroundColor: theme('colors.main-navy'),
//       },
//     },
//     '.btn-passive': {
//       display: 'inline-block',
//       padding: '.5rem 1rem',
//       fontSize: '1rem',
//       fontWeight: '400',
//       whiteSpace:'nowrap',
//       textAlign: 'center',
//       fontFamily: theme('fontFamily.btn'),
//       textTransform: 'uppercase',
//       color: theme('colors.alt-white'),
//       backgroundColor: theme('colors.main-navy.light'),
//        // Add transitions to background and text color
//       transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out',
//       '&:hover': {
//         color: theme('colors.pink'),
//         backgroundColor: theme('colors.main-navy'),
//       },
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
//     '.btn-disabled': {
//       display: 'inline-block',
//       padding: '.5rem 1rem',
//       fontSize: '2rem',
//       fontWeight: '600',
//       whiteSpace:'nowrap',
//       textAlign: 'center',
//       fontFamily: theme('fontFamily.btn'),
//       textTransform: 'uppercase',
//       color: theme('colors.pink'),
//       backgroundColor: theme('colors.alt-gray'),
//       borderWidth: '2px',
//       borderColor: theme('colors.pink'),
//       cursor: 'not-allowed',
//     }
//   })
// }
