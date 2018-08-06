import path from "path";
import chalk from "chalk";
import { EADDRINUSE } from "../../src/constanta/error";
import { killProcess } from "port-kill";
import WebpackIsomorphicTools from "webpack-isomorphic-tools";
import isomorphicConfig from "../../webpack/isomorphic-tools-configuration";
import mainServer from "../server/main";

const baseProjectPath = path.resolve(__dirname, "..", "..");
global.webpackIsomorphicTools = new WebpackIsomorphicTools(
  isomorphicConfig
).server(baseProjectPath, () => {
  mainServer;
});

process.on("uncaughtException", error => {
  switch (error.code) {
    case EADDRINUSE: {
      console.log(chalk.red(`Port ${port} already in used`));
      console.log(chalk.blue("Port will kill automatically in 10 second"));
      setTimeout(() => {
        try {
          killProcess(port);
          console.log(
            chalk.green(`Success kill port ${port}, please restart server`)
          );
        } catch (err) {
          console.log(
            chalk.red(`Failed kill port ${port}, Please use manual kill port`)
          );
          console.log(chalk.red(`error detail : ${err}`));
        }
      }, 10000);
    }
  }
});
