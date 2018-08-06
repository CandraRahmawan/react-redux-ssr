import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Header
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
