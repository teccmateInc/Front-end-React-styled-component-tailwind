module.exports = {
  plugins: {
    tailwindcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer')
      ]
    },
    autoprefixer: {},
  },
}
