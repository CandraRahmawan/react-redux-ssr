import React, { Component } from 'react';
import {
  MenuList,
  MenuItem,
  Paper,
  ListItemText,
  Icon,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { routePathname } from '../../../helpers/commonHelper';
import { DASHBOARD, USERS } from '../../../constanta/common';

export default class MenuSidebar extends Component {
  render() {
    return (
      <Paper>
        <MenuList>
          <NavLink to={routePathname(DASHBOARD)}>
            <MenuItem>
              <Icon color="primary">dashboard</Icon>
              <ListItemText inset primary="Dashboard" />
            </MenuItem>
          </NavLink>
          <NavLink to={routePathname(USERS)}>
            <MenuItem>
              <Icon color="primary">people</Icon>
              <ListItemText inset primary="List Users" />
            </MenuItem>
          </NavLink>
        </MenuList>
      </Paper>
    );
  }
}
