/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"], // Specifies that all files in the project will be scanned for class names
  theme: {
    extend: {
      fontSize: {
        '10xl': ['9rem', { lineHeight: '1' }],
      },
      textColor: {
        'primary': 'rgb(25, 193, 182)',
        'secondary': 'rgb(254, 164, 57)',
        'tertiary': 'rgb(254, 103, 136)',
      },
      backgroundColor: {
        'primary': 'rgb(25, 193, 182)',
        'secondary': 'rgb(254, 164, 57)',
        'tertiary': 'rgb(254, 103, 136)',
      },
    },
  },
  plugins: [],
};
