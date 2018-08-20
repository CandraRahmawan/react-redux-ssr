import React, { Component } from 'react';
import _ from 'lodash';
import { JS, STYLES } from '../constanta/common';
import PropTypes from 'prop-types';

export default class TemplateHtml extends Component {
  static propTypes = {
    assets: PropTypes.object.isRequired,
    appHtml: PropTypes.string.isRequired,
    muiCss: PropTypes.string.isRequired
  };
  renderAssets = type => {
    const { assets } = this.props;
    if (type === JS) {
      return _.map(_.values(assets[JS]), (item, index) => (
        <script key={index} src={item} />
      ));
    } else if (type === STYLES) {
      return _.map(_.values(assets[STYLES]), (item, index) => (
        <link key={index} href={item} rel="stylesheet" />
      ));
    }
  };

  render() {
    const { muiCss, appHtml } = this.props;
    return (
      <html>
        <head>
          <title>React Redux with Server Side Rendering</title>
          {this.renderAssets(STYLES)}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: appHtml }} />
          <style id="jss-server-side">{muiCss}</style>
        </body>
        {this.renderAssets(JS)}
      </html>
    );
  }
}
