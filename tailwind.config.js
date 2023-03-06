module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        100: '100',
      },
      fontSize: {
        xxs: '.625rem',
      },
      colors: {
        'blue-km': '#142859',
        'yellow-km': '#FFBE01',
        'red-km': '#FF646D',
        'teal-km': '#1EDCC7',
        'red-wine-km': '#781C3D',
        'beige-km': '#FFFAEA',
      },
      maxWidth: {
        sidebar: '320px',
      },
      fontFamily: {
        silvia: ['SilvaDisplay'],
        brown: ['Brown', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  corePlugins: {
    space: true,
  },
};
