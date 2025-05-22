export default {
  plugins: {
    '@tailwindcss/postcss': {},
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      unitPrecision: 2,
      exclude: /node_modules/i,
    }
  }
}
