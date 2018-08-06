const webpack = require("webpack");
const isomorphicConfig = require("./isomorphic-tools-configuration");

let webpackIsomorphicToolsPlugin = require("webpack-isomorphic-tools/plugin");
webpackIsomorphicToolsPlugin = new webpackIsomorphicToolsPlugin(
  isomorphicConfig
).development();

export default {
  entry: ["./src/clients/Index.js", "webpack-hot-middleware/client"],
  output: {
    filename: "[name].[hash].js",
    publicPath: "/"
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    webpackIsomorphicToolsPlugin
  ],
  mode: "development"
};
