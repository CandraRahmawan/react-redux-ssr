import React from 'react';
import TemplateHtml from '../../src/app-html/TemplateHtml';
import { renderToString } from 'react-dom/server';
import { SheetsRegistry } from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { createGenerateClassName } from '@material-ui/core/styles';
import { MuiThemeProviderWrapper } from '../../src/styles/muiConfig';
import { StaticRouter } from 'react-router-dom';
import Router from '../../src/services/Router';

export default (req, res) => {
  /* eslint-disable no-undef */
  webpackIsomorphicTools.refresh();

  const sheetsRegistry = new SheetsRegistry();

  const entry = renderToString(
    <JssProvider
      registry={sheetsRegistry}
      generateClassName={createGenerateClassName()}
    >
      <MuiThemeProviderWrapper>
        <StaticRouter location={req.url} context={{}}>
          <Router />
        </StaticRouter>
      </MuiThemeProviderWrapper>
    </JssProvider>
  );

  const muiCss = sheetsRegistry.toString();
  const templateHtml = renderToString(
    <TemplateHtml
      entry={entry}
      muiCss={muiCss}
      assets={webpackIsomorphicTools.assets()}
    />
  );

  res.send(templateHtml);
};
