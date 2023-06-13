/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        book: "url('img/books.jpg')",
        check: "url('icons/check.svg')",
        xMark: "url('icons/x-mark.svg')",
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Gloock Regular"', 'Georgia', 'monospace'],
      },
    },
    plugins: [require('@tailwindcss/forms')],
  },
};
