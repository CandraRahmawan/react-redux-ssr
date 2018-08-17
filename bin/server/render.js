import React from 'react';
import TemplateHtml from '../../src/app-html/TemplateHtml';
import {renderToString} from 'react-dom/server';
import {SheetsRegistry} from 'react-jss/lib/jss';
import JssProvider from 'react-jss/lib/JssProvider';
import {createGenerateClassName} from '@material-ui/core/styles';
import Entry from '../../src/app-html/Entry';
import {MuiThemeProviderWrapper} from '../../src/styles/muiConfig';
import {StaticRouter} from 'react-router-dom';
import Routes from '../../src/routes/Routes';

export default (req, res) => {
  webpackIsomorphicTools.refresh();

  const sheetsRegistry = new SheetsRegistry();

  const entry = renderToString(
    <JssProvider
      registry={sheetsRegistry}
      generateClassName={createGenerateClassName()}>
      <MuiThemeProviderWrapper>
        <StaticRouter location={req.url} context={{}}>
          <Routes />
        </StaticRouter>
      </MuiThemeProviderWrapper>
    </JssProvider>,
  );

  const muiCss = sheetsRegistry.toString();

  const templateHtml = renderToString(
    <TemplateHtml
      entry={entry}
      muiCss={muiCss}
      assets={webpackIsomorphicTools.assets()}
    />,
  );

  res.send(templateHtml);
};
