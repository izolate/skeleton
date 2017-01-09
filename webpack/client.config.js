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

  // Plugins
  plugins: isDebug ? config.plugins : config.plugins.concat([
    new webpack.optimize.UglifyJsPlugin({})
  ])
})
