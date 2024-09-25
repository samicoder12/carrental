/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:{
          sm:"1rem",
          md:"2rem",
          lg: "3rem"
        }
      },
      colors:{
        blue:"#1572D3",
        gray:"rgb(96, 96, 97)",
        black: "#000000",
        blueDark: "#2B2E4A",
        orange:"#F77D0A"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      transitionProperty: {
        bottom: 'bottom'
        
      }                  
    }
  },
  plugins: [],
  server:{
    host:true,
  }
}
