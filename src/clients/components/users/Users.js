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
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {};

class Users extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppWrapper>
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
                    <Icon color="primary">edit</Icon>
                  </a>
                  {' | '}
                  <a href="#">
                    <Icon color="primary">delete</Icon>
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

export default withStyles(styles)(Users);
