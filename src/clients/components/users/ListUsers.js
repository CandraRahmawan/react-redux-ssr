import React, { Component } from 'react';
import AppWrapper from '../../../app-html/AppWrapper';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Icon,
  Paper,
  Button
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { routePathname } from '../../../helpers/commonHelper';
import { ADD_USER } from '../../../constanta/common';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

const styles = {
  button: {
    marginBottom: '15px'
  }
};

class ListUsers extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };
  render() {
    const { classes } = this.props;
    return (
      <AppWrapper>
        <NavLink to={routePathname(ADD_USER)}>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            size="large"
          >
            Add User
          </Button>
        </NavLink>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>User Name</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {_.map(
                JSON.parse(window.localStorage.getItem('list_users')),
                (item, index) => {
                  return (
                    <TableRow>
                      <TableCell key={`${item.email}-${index}`}>
                        {item.email}
                      </TableCell>
                      <TableCell key={`${item.username}-${index}`}>
                        {item.username}
                      </TableCell>
                      <TableCell key={`${item.fullname}-${index}`}>
                        {item.fullname}
                      </TableCell>
                      <TableCell key={`${item.phonenumber}-${index}`}>
                        {item.phonenumber}
                      </TableCell>
                      <TableCell>
                        <a href="#">
                          <Icon color="secondary">edit</Icon>
                        </a>
                        {' | '}
                        <a href="#">
                          <Icon color="secondary">delete</Icon>
                        </a>
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </Paper>
      </AppWrapper>
    );
  }
}

export default withStyles(styles)(ListUsers);
