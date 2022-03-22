const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'background': '#FBFBFB',
      'white': '#fff',
      'grey': {
        100: "#E5E6E9",
        200: "#9296A5"
      } ,
     
      'done': "#1dbc68",
      'brand': "#FD7B38",
      'outline': "#F9E4D8",
      'done-outline': "#CAEEDB"
      
    },},
  },
  plugins: [],
}
