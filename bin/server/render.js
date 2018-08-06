import React from "react";
import TemplateHtml from "../../src/app-html/TemplateHtml";
import { renderToString } from "react-dom/server";
import Entry from "../../src/app-html/Entry";

export default (req, res) => {
  webpackIsomorphicTools.refresh();
  const templateHtml = renderToString(
    <TemplateHtml
      entry={renderToString(<Entry />)}
      assets={webpackIsomorphicTools.assets()}
    />
  );
  res.send(templateHtml);
};
