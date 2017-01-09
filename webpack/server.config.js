const webpack = require('webpack')
const config = require('./common.config')
const nodeExternals = require('webpack-node-externals')

const isDebug = process.env.NODE_ENV === 'development'

module.exports = Object.assign({}, config, {
  // Entry file(s)
  entry: {
    server: ['babel-polyfill', './server']
  },

  // Target
  target: 'node',

  // Node-specific settings
  node: {
    __dirname: false
  },

  // Externals
  externals: [nodeExternals({
    // Pass non-JavaScript files to loaders
    whitelist: [/\.(?!(?:jsx?|json)$).{1,5}$/i]
  })],

  // Plugins
  plugins: isDebug ? config.plugins : config.plugins
})
