import React, {Component} from 'react';
import AppWrapper from '../app-html/AppWrapper';
import {render} from 'react-dom';
import {hot} from 'react-hot-loader';
import {MuiThemeProviderWrapper} from '../styles/muiConfig';
import {BrowserRouter} from 'react-router-dom';
import Router from '../services/Router';

class Index extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <MuiThemeProviderWrapper>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </MuiThemeProviderWrapper>
    );
  }
}

hot(module)(<Index />);
render(<Index />, document.getElementById('app'));
