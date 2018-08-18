import '../styles/style.scss';
import React, { Component, Fragment } from 'react';
import Header from '../clients/components/base/Header';
import { Paper } from '@material-ui/core';
import MenuSidebar from '../clients/components/base/MenuSidebar';
import Footer from '../clients/components/base/Footer';
import ErrorBoundary from '../clients/components/errors/ErrorBoundary';

export default class Entry extends Component {
  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <Paper>
            <Header />
            <Paper style={{ display: 'flex' }}>
              <MenuSidebar />
              <div style={{ padding: '20px' }}>{this.props.children}</div>
            </Paper>
            <Footer />
          </Paper>
        </ErrorBoundary>
      </Fragment>
    );
  }
}
