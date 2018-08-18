import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  toolBar: {
    margin: '0 auto'
  }
};

class Footer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar className={this.props.classes.toolBar}>
          <Typography variant="title">Design by Material UI</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
