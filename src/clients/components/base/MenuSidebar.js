import React, { Component } from 'react';
import {
  MenuList,
  MenuItem,
  Paper,
  ListItemText,
  Icon
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { routePathname } from '../../../helpers/commonHelper';
import { DASHBOARD, LIST_USERS } from '../../../constanta/common';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    minHeight: 'calc(100vh - 128px)',
    boxShadow:
      '0px 0px 5px 0px rgba(0, 0, 0, 0.2), 0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 1px -2px rgba(0, 0, 0, 0.12)',
    borderRadius: '0',
    backgroundColor: '#ecf0f1',
    minWidth: '220px'
  }
};

class MenuSidebar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  render() {
    return (
      <Paper className={this.props.classes.root}>
        <MenuList>
          <NavLink
            exact
            to={routePathname(DASHBOARD)}
            activeClassName="selected"
          >
            <MenuItem>
              <Icon color="secondary">dashboard</Icon>
              <ListItemText inset primary="Dashboard" />
            </MenuItem>
          </NavLink>
          <NavLink
            exact
            to={routePathname(LIST_USERS)}
            activeClassName="selected"
          >
            <MenuItem>
              <Icon color="secondary">people</Icon>
              <ListItemText inset primary="List Users" />
            </MenuItem>
          </NavLink>
        </MenuList>
      </Paper>
    );
  }
}

export default withStyles(styles)(MenuSidebar);
