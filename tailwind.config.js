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
  plugins: [],
}

// module.exports = {
//   mode: "jit",
//   purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       backgroundImage: (theme) => ({
//         home: "url('/images/background.png')",
//       }),
//     },
//     fontFamily: {
//       body: ["Montserrat", "sans-serif"],
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };