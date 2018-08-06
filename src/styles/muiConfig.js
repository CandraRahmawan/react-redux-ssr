import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: "light"
  }
});

export const muiThemeProvider = appHtml => (
  <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
    {appHtml}
  </MuiThemeProvider>
);
