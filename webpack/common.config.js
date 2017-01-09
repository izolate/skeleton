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
        use: ['babel-loader']
      },

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
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],

  // File watching
  watchOptions: {
    ignored: /node_modules/
  }
}
