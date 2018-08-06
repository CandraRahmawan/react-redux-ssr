const path = require("path");
const webpack = require("webpack");
const isomorphicConfig = require("./isomorphic-tools-configuration");
const progressBar = require("progress-bar-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

let webpackIsomorphicToolsPlugin = require("webpack-isomorphic-tools/plugin");
webpackIsomorphicToolsPlugin = new webpackIsomorphicToolsPlugin(
  isomorphicConfig
).development();

const distDirectory = path.resolve(__dirname, "..");

export default {
  entry: {
    app: ["./src/clients/Index.js", "webpack-hot-middleware/client"]
  },
  output: {
    filename: "[name].[hash].js",
    publicPath: "/public/"
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.s?[c]ss$/, use: [MiniCssExtractPlugin.loader, "css-loader"] }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"], {
      verbose: true,
      root: distDirectory,
      allowExternal: false
    }),
    new progressBar(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    webpackIsomorphicToolsPlugin,
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
    new MinifyPlugin()
  ],
  mode: "development",
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  }
};
