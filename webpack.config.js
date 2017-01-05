const webpack = require('webpack')
const path = require('path')

const isDebug = process.env.NODE_ENV === 'development'

const plugins = [
  new webpack.EnvironmentPlugin(['NODE_ENV'])
]

module.exports = {
  // Context
  context: path.resolve(__dirname),

  // Entry file
  entry: './client/',

  // Output bundle
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js'
  },

  // Target
  target: 'node',

  // Modules
  module: {
    rules: [{
      // JavaScript
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }, {
      // CSS
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=1',
      ]
    }, {
      // SSS
      test: /\.sss$/,
      use: [
        'style-loader',
        'css-loader?importLoaders=1',
        'postcss-loader'
      ]
    }, {
      // SVGs
      test: /\.svg$/,
      use: [{
        loader: 'file-loader',
        options: {
          emitFile: false
        }
      }]
    }]
  },

  // Plugins
  plugins: isDebug ? plugins : plugins.concat([
    new webpack.optimize.UglifyJsPlugin({})
  ]),

  // File watching
  watchOptions: {
    ignored: /node_modules/
  }
}
