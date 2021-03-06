import 'ignore-styles';
import express from 'express';
import chalk from 'chalk';
import render from '../server/render';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack/development.config';
import webpack from 'webpack';
import { PORT } from '../../src/constanta/common';

const server = express();
const webpackCompiler = webpack(webpackConfig);

server.use(
  webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath
  })
);
server.use(webpackHotMiddleware(webpackCompiler));
server.get('*', render);

server.listen(PORT, () =>
  console.log(chalk.blue(`\nServer running at http://localhost:${PORT}`))
);
