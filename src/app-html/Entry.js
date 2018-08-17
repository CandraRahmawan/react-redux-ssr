import '../styles/style.scss';
import React, {Component, Fragment} from 'react';
import Header from '../clients/components/base/Header';
import {Paper} from '@material-ui/core';
import MenuSidebar from '../clients/components/base/MenuSidebar';
import Footer from '../clients/components/base/Footer';

export default class Entry extends Component {
  render() {
    return (
      <Fragment>
        <Paper>
          <Header />
          <Paper style={{display: 'flex'}}>
            <MenuSidebar />
            <div style={{padding: '20px'}}>{this.props.children}</div>
          </Paper>
          <Footer />
        </Paper>
      </Fragment>
    );
  }
}
