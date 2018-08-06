import express from "express";
import chalk from "chalk";
import render from "../server/render";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../../webpack/development.config";
import webpack from "webpack";

const server = express();
const port = 9000;
const webpackCompiler = webpack(webpackConfig);

server.use(
  webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath
  })
);
server.use(webpackHotMiddleware(webpackCompiler));
server.get("/", render);

server.listen(port, () =>
  console.log(chalk.blue(`Server running at http://localhost:${port}`))
);
