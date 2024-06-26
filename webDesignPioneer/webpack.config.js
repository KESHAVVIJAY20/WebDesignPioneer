// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // Your other Webpack configurations...
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
