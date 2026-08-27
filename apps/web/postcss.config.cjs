module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: ['./src/lib/styles/media.postcss'],
    },
    'postcss-custom-media': {},
    'postcss-mixins': {},
    autoprefixer: {},
  }
}