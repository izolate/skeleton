const webpack = require('webpack')
const path = require('path')

const plugins = [
  new webpack.EnvironmentPlugin(['NODE_ENV'])
]

module.exports = {
  // Context
  context: path.resolve(__dirname, '../'),

  // Output bundle
  output: {
    path: 'dist',
    filename: '[name].js'
  },

  // Modules
  module: {
    rules: [

      // JavaScript
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },

  // Plugins
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],

  // File watching
  watchOptions: {
    ignored: /node_modules/
  }
}
