/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabecalho: ['Merriweather', 'serif'],
        principal: ['Roboto', 'sans-serif'],
        destaque: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
