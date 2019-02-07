import React, { Component } from 'react';
import AppWrapper from '../../../app-html/AppWrapper';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { loginUser } from '../../../redux/actions';

const styles = {
  formControl: {
    marginRight: 10
  }
};

class LoginUser extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    isLogin: PropTypes.bool.isRequired
  };

  state = {
    email: ''
  };

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.isLogin) {
      window.location = '/list-users';
    }
  }

  handleOnChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email } = this.state;
    window.localStorage.setItem('login_users', JSON.stringify(email));
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

const mapStateToProps = state => ({
  isLogin: state.user.isLogin
});

const mapDispatchToProps = {
  loginUser
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(LoginUser);
