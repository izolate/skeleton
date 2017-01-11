const webpack = require('webpack')
const config = require('./common.config')

const isDebug = process.env.NODE_ENV === 'development'

module.exports = Object.assign({}, config, {
  // Entry file(s)
  entry: {
    client: './client'
  },

  // Target
  target: 'web',

  // Modules
  module: {
    rules: [
      ...config.module.rules,

      // CSS (Plain)
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
        ]
      },

      // CSS (SugarSS)
      {
        test: /\.sss$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },

      // Images
      {
        test: /\.svg$/,
        use: [{
          loader: 'file-loader',
          options: {
            emitFile: false
          }
        }]
      }
    ]
  },

  // Plugins
  plugins: isDebug ? config.plugins : config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({})
  ])
})
