module.exports = {
  prefix: '',
  important: true,
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screen: {
        xs: { min: '320px', max: '640px' },
        sm: { min: '640px', max: '767px' },
        md: { min: '768px', max: '1023px' },
        lg: { min: '1024px', max: '1279px' },
        xl: { min: '1280px', max: '1535px' },
        '2xl': { min: '1536px' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
