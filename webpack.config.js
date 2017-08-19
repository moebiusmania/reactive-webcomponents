'use strict';

const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js',
  },
  devtool: 'source-map',
  plugins: [
    new FlowWebpackPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        ecma: 6
      }
    }),
    new WebpackNotifierPlugin({
      title: 'reactive-webcomponents',
      alwaysNotify: true
    })
  ],
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: ['node_modules', 'dist'],
      loader: 'babel-loader'
    }]
},
}