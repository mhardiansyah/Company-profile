/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        f1:"#31A0FE",
        f2:"#23856D",
        f3:"#EC5C2E",
        f4: "#E1F4FF"
      },
      backgroundImage: {
        bg: "url('cp-bg.png')",
        bg2: "url('cp-bg-2.png')",
      }
    },
  },
  plugins: [],
}

