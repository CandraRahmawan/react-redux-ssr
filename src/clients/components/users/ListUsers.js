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
                <TableCell>Full Name</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>candra.assasin@gmail.com</TableCell>
                <TableCell>Candra Rahmawan</TableCell>
                <TableCell>085642203535</TableCell>
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
            </TableBody>
          </Table>
        </Paper>
      </AppWrapper>
    );
  }
}

export default withStyles(styles)(ListUsers);
