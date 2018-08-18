import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
    type: "light"
  },
  typography: {
    title: {
      color: "#FAFAFA"
    }
  }
});

export const MuiThemeProviderWrapper = props => (
  <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
    {props.children}
  </MuiThemeProvider>
);
