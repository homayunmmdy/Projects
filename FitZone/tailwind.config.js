module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Roboto',
      secondary: 'Roboto',
    },
    container: {
      padding: {
        DEFAULT: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1038px',
    },
    extend: {
      colors: {
        primary: {
          100: '#a5ffce',
          200: '#4ae290',
          300: '25c870',
        },
        neutral: {
          100: '#ffffff',
          200: '#dedee3',
          300: '#9797a1',
          400: '#595962',
          500: '#131316',
        },
        page: '#fcfcff',
      },
      backgroundImage: {
        banner: "url('/img/banner/bg.png')",
        faq: "url('/src/assets/img/faq/bg.svg')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        custom: '95%',
      },
    },
  },
  plugins: [],
};
