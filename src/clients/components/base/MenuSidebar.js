import React, {Component} from 'react';
import {MenuList, MenuItem, Paper, ListItemText, Icon} from '@material-ui/core';

export default class MenuSidebar extends Component {
  render() {
    return (
      <Paper>
        <MenuList>
          <MenuItem>
            <Icon color="primary">home</Icon>
            <ListItemText inset primary="Home" />
          </MenuItem>
          <MenuItem>
            <Icon color="primary">people</Icon>
            <ListItemText inset primary="List Users" />
          </MenuItem>
        </MenuList>
      </Paper>
    );
  }
}
