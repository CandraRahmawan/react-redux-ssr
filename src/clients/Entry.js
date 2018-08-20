import React, { Component } from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { MuiThemeProviderWrapper } from '../styles/muiConfig';
import Router from '../services/Router';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { store, history } from '../redux/configureStore';

class Entry extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProviderWrapper>
          <ConnectedRouter history={history}>
            <Router />
          </ConnectedRouter>
        </MuiThemeProviderWrapper>
      </Provider>
    );
  }
}

hot(module)(<Entry />);
render(<Entry />, document.getElementById('app'));
