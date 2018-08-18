import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    'box-shadow': 'none'
  }
};
class Header extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  render() {
    return (
      <AppBar
        position="static"
        color="primary"
        className={this.props.classes.root}
      >
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
