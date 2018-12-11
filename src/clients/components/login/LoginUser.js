import React, { Component } from 'react';
import AppWrapper from '../../../app-html/AppWrapper';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  formControl: {
    marginRight: 10
  }
};

class LoginUser extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    email: ''
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {};

  render() {
    const { classes } = this.props;
    return (
      <AppWrapper>
        <form onSubmit={this.handleSubmit}>
          <FormControl className={classes.formControl}>
            <InputLabel>Email</InputLabel>
            <Input
              id="email"
              value={this.state.email}
              onChange={this.handleOnChange}
            />
          </FormControl>
          <FormControl>
            <Button type="submit" color="primary" variant="contained">
              Login
            </Button>
          </FormControl>
        </form>
      </AppWrapper>
    );
  }
}

export default withStyles(styles)(LoginUser);
