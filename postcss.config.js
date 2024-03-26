// postcss.config.js
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    process.env.NODE_ENV === 'production' &&
      require('@fullhuman/postcss-purgecss')({
        content: ['./index.html', './src/**/*.js'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
      }),
  ],
};
