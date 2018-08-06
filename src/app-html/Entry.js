import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class Entry extends Component {
  render() {
    return (
      <div suppressHydrationWarning={true}>
        <Button variant="outlined" color="primary">
          Click here
        </Button>
        <br />
        <br />
        Hello World from Component...
      </div>
    );
  }
}
