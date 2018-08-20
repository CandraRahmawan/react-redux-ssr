import React from 'react';
import TemplateHtml from '../../src/app-html/TemplateHtml';
import { renderToString } from 'react-dom/server';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import { MuiThemeProviderWrapper } from '../../src/styles/muiConfig';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import Router from '../../src/services/Router';
import { history, store } from '../../src/redux/configureStore';

export default (req, res) => {
  /* eslint-disable no-undef */
  webpackIsomorphicTools.refresh();

  const sheetsRegistry = new SheetsRegistry();

  const appHtml = renderToString(
    <Provider store={store}>
      <JssProvider
        registry={sheetsRegistry}
        generateClassName={createGenerateClassName()}
      >
        <MuiThemeProviderWrapper>
          <ConnectedRouter history={history}>
            <Router />
          </ConnectedRouter>
        </MuiThemeProviderWrapper>
      </JssProvider>
    </Provider>
  );

  const muiCss = sheetsRegistry.toString();
  const templateHtml = renderToString(
    <TemplateHtml
      appHtml={appHtml}
      muiCss={muiCss}
      assets={webpackIsomorphicTools.assets()}
    />
  );

  res.send(templateHtml);
};
