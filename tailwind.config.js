const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'smoke': '#f3f6fa',
        'yellow-910': '#ffff00',
      },
    },
  },
  plugins: [],
}
