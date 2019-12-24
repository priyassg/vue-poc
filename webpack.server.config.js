const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.config');

const webpackConfig = merge(baseWebpackConfig, {
  target: 'node',
  entry: {
    app: './src/entry-server.js',
  },
  devtool: false,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'server.bundle.js',
    libraryTarget: 'commonjs2',
  },
  externals: Object.keys(require('./package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
      // 'process.env': 'production',
    }),
  ],
  optimization: {
    minimize: false,
    // minimizer: [
    //   new UglifyJsPlugin({
    //     sourceMap: true,
    //   }),
    // ],
  },
});
module.exports = webpackConfig;
