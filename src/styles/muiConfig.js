import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette: {
    primary: green,
    type: 'light'
  },
  typography: {
    title: {
      color: '#FAFAFA'
    }
  }
});

export const MuiThemeProviderWrapper = props => (
  <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
    {props.children}
  </MuiThemeProvider>
);

MuiThemeProviderWrapper.propTypes = {
  children: PropTypes.element.isRequired
};
