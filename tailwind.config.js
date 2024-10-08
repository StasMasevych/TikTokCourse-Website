/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      borderRadius: {
        custom: '18px', // Add a custom name and value
      },
      colors: {
        'deep-blue': '#010026',
        blue: '#2CBCE9',
        red: '#DC4492',
        yellow: '#FDCC49',
        grey: '#ededed',
        'dark-grey': '#757575',
        'opaque-black': 'rgba(0,0,0,0.35)',
      },
      backgroundImage: (theme) => ({
        'gradient-rainbow':
          'linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)',

        'gradient-rainblue':
          'linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)',
      }),
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person 1.png')",
        person2: "url('./assets/person 2.png')",
        person3: "url('./assets/person 3.png')",
        person4: "url('./assets/person 4.png')",
        person5: "url('./assets/person 5.png')",
        person6: "url('./assets/person 6.png')",
      },
    },
    screens: {
      xxs: '400px',
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
