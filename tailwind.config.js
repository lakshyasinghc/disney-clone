module.exports = {
  mode:"jit",
  
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/images/images/background.png')",

      }
    },
    fontFamily:{
      body:["Montserrat","sans-serif"],
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
