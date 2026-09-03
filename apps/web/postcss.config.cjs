/* eslint @typescript-eslint/no-require-imports: off */
const path = require('node:path');

module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [
        path.resolve(__dirname, './src/lib/styles/media.postcss'),
      ],
    },
    'postcss-custom-media': {},
    'postcss-mixins': {},
    'postcss-nested': {},
    autoprefixer: {},
  }
}