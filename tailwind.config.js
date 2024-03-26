/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        hero: ["El Messiri"],
        subHero : ["Forum"]
      },
      colors : {
        'bgGreen' : '#005d12',
        'bgBlue' : '#457DC0'
      },
    },
  },
  plugins: [],
};
