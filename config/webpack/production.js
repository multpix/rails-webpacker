// Note: You must restart bin/webpack-watcher for changes to take effect

var webpack = require('webpack');
var merge   = require('webpack-merge');
var OptimizeJsPlugin = require('optimize-js-plugin');

var sharedConfig = require('./shared.js');

module.exports = merge(sharedConfig.config, {
  output: { filename: "[name]-[hash].js" },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      sourceMap: false,
      compress: {
        warnings: false,
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
      },
    }),

    new OptimizeJsPlugin({
      sourceMap: false
    })
  ]
});
