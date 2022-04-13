module.exports = {
  // mode: 'jit',
  // jit document: https://tailwindcss.com/docs/just-in-time-mode
  purge: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.ts'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'login-bg':
          'url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
