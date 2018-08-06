import React, { Component } from "react";

export default class TemplateHtml extends Component {
  render() {
    const {
      assets: { javascript },
      muiCss
    } = this.props;
    return (
      <html>
        <head>
          <title>React Redux with Server Side Rendering</title>
        </head>
        <body>
          <div
            id="app"
            dangerouslySetInnerHTML={{ __html: this.props.entry }}
          />
          <style
            id="jss-server-side"
            dangerouslySetInnerHTML={{ __html: muiCss }}
          />
        </body>
        <script src={javascript.main} />
      </html>
    );
  }
}
