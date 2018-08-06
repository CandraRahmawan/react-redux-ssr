import React, { Component } from "react";
import Entry from "../app-html/Entry";
import { hydrate } from "react-dom";
import { hot } from "react-hot-loader";

class Index extends Component {
  render() {
    return <Entry />;
  }
}

hot(module)(<Index />);
hydrate(<Index />, document.getElementById("app"));
