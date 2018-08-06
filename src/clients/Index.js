import React, { Component } from "react";
import Entry from "../app-html/Entry";
import { render } from "react-dom";
import { hot } from "react-hot-loader";
import { muiThemeProvider } from "../styles/muiConfig";

class Index extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById("jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return muiThemeProvider(<Entry />);
  }
}

hot(module)(<Index />);
render(<Index />, document.getElementById("app"));