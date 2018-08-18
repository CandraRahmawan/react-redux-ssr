import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    'box-shadow': 'none',
  },
};
class Header extends Component {
  render() {
    return (
      <AppBar position="static" color="primary" className={this.props.classes.root}>
        <Toolbar>
          <Typography variant="title">
            React Router Redux with Server Side Rendering
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Header);
