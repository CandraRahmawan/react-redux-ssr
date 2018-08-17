import React, {Component} from 'react';
import {MenuList, MenuItem, Paper, ListItemText, Icon} from '@material-ui/core';
import {Link} from 'react-router-dom';

export default class MenuSidebar extends Component {
  render() {
    return (
      <Paper>
        <MenuList>
          <Link to="/">
            <MenuItem>
              <Icon color="primary">dashboard</Icon>
              <ListItemText inset primary="Dashboard" />
            </MenuItem>
          </Link>
          <Link to="/list-users">
            <MenuItem>
              <Icon color="primary">people</Icon>
              <ListItemText inset primary="List Users" />
            </MenuItem>
          </Link>
        </MenuList>
      </Paper>
    );
  }
}
