/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        KumbhSans: ['Kumbh Sans'],
      },
      colors: {
        Darkcyan: 'hsl(185, 75%, 39%)',
        Verydarkdesaturatedblue: 'hsl(229, 23%, 23%)',
        Darkgrayishblue: 'hsl(227, 10%, 46%)',
        Darkgray: 'hsl(0, 0%, 59%)',
      },
    },
  },
  plugins: [],
};
