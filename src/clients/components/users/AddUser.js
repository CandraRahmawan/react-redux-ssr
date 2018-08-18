import React, { Component } from 'react';
import AppWrapper from '../../../app-html/AppWrapper';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import _ from 'lodash';

const styles = {
  formControl: {
    marginRight: '10px'
  }
};

class AddUser extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  state = {
    email: '',
    username: '',
    fullname: '',
    phonenumber: ''
  };

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    const existingData = JSON.parse(window.localStorage.getItem('list_users'));
    if (_.isEmpty(existingData)) {
      window.localStorage.setItem('list_users', [JSON.stringify(this.state)]);
    } else {
      window.localStorage.setItem(
        'list_users',
        JSON.stringify([...existingData, this.state])
      );
    }
    window.location = '/list-users';
    event.preventDefault();
  };

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
          <FormControl className={classes.formControl}>
            <InputLabel>User Name</InputLabel>
            <Input
              id="username"
              value={this.state.username}
              onChange={this.handleOnChange}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Full Name</InputLabel>
            <Input
              id="fullname"
              value={this.state.fullname}
              onChange={this.handleOnChange}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Phone Number</InputLabel>
            <Input
              id="phonenumber"
              value={this.state.phonenumber}
              onChange={this.handleOnChange}
            />
          </FormControl>
          <FormControl>
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </FormControl>
        </form>
      </AppWrapper>
    );
  }
}

export default withStyles(styles)(AddUser);
