import '../styles/style.scss';
import React, { Component, Fragment } from 'react';
import Header from '../clients/components/base/Header';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MenuSidebar from '../clients/components/base/MenuSidebar';
import Footer from '../clients/components/base/Footer';
import ErrorBoundary from '../clients/components/errors/ErrorBoundary';

const styles = {
  root: {
    display: 'flex',
  },
  content: {
    padding: '20px',
    width: '100%',
  },
};

class AppWrapper extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <ErrorBoundary>
          <Paper>
            <Header />
            <Paper className={classes.root}>
              <MenuSidebar />
              <div className={classes.content}>{this.props.children}</div>
            </Paper>
            <Footer />
          </Paper>
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default withStyles(styles)(AppWrapper);
