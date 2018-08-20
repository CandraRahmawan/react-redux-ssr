const path = require('path');
const webpack = require('webpack');
const isomorphicConfig = require('./isomorphic-tools-configuration');
const ProgressBar = require('progress-bar-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

let WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
WebpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(
  isomorphicConfig
).development();

const distDirectory = path.resolve(__dirname, '..');

export default {
  entry: {
    app: ['./src/clients/Entry.js', 'webpack-hot-middleware/client']
  },
  output: {
    filename: '[name].[hash].js',
    publicPath: '/public/'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?[c]ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      verbose: true,
      root: distDirectory,
      allowExternal: false
    }),
    new ProgressBar(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    WebpackIsomorphicToolsPlugin,
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css'
    }),
    new MinifyPlugin(),
    new webpack.DefinePlugin({
      'process.env.BROWSER': JSON.stringify(true)
    })
  ],
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  }
};
