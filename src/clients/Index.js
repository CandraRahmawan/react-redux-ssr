import React, {Component} from 'react';
import Entry from '../app-html/Entry';
import {render} from 'react-dom';
import {hot} from 'react-hot-loader';
import {MuiThemeProviderWrapper} from '../styles/muiConfig';
import {BrowserRouter} from 'react-router-dom';
import Routes from '../routes/Routes';

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
          <Routes />
        </BrowserRouter>
      </MuiThemeProviderWrapper>
    );
  }
}

hot(module)(<Index />);
render(<Index />, document.getElementById('app'));
