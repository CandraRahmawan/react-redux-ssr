import '../styles/style.scss';
import React, { Component, Fragment } from 'react';
import Header from '../clients/components/base/Header';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuSidebar from '../clients/components/base/MenuSidebar';
import Footer from '../clients/components/base/Footer';
import ErrorBoundary from '../clients/components/errors/ErrorBoundary';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { loginUser } from '../redux/actions';

const styles = {
  root: {
    display: 'flex'
  },
  content: {
    padding: '20px',
    width: '100%'
  }
};

class AppWrapper extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
    routePathname: PropTypes.string.isRequired,
    loginUser: PropTypes.func.isRequired
  };

  componentDidMount() {
    const loginUsers = window.localStorage.getItem('login_users');
    if (loginUsers) {
      this.props.loginUser({ isLogin: true, userEmail: loginUsers });
    }
  }

  isLoginPath = () => this.props.routePathname === '/login';

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <ErrorBoundary>
          <Paper>
            <Header />
            <Paper className={classes.root}>
              {!this.isLoginPath() && <MenuSidebar />}
              <div className={classes.content}>{this.props.children}</div>
            </Paper>
            <Footer />
          </Paper>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  routePathname: state.router.location.pathname
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
)(AppWrapper);
