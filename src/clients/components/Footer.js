import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default class Footer extends Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Footer
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
