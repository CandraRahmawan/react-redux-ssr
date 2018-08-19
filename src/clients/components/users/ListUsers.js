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
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogContentText
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { routePathname } from '../../../helpers/commonHelper';
import { ADD_USER, EDIT_USER } from '../../../constanta/common';
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

  state = {
    openDialog: false,
    indexUser: null,
    email: ''
  };

  handleClose = () => this.setState({ openDialog: false });

  handleClickOpen = (indexUser, email) =>
    this.setState({ openDialog: true, indexUser: indexUser, email: email });

  handleDeleteUser = () => {
    let dataUser = JSON.parse(window.localStorage.getItem('list_users'));
    delete dataUser[this.state.indexUser];
    window.localStorage.setItem(
      'list_users',
      JSON.stringify(_.compact(dataUser))
    );
    this.setState({ openDialog: false });
    setTimeout(
      () => window.alert(`Success Delete User: ${this.state.email}`),
      300
    );
  };

  confirmDeleteUser = () => (
    <Dialog
      open={this.state.openDialog}
      onClose={this.handleClose}
      keepMounted
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent id="alert-dialog-slide-description">
        <DialogContentText>{`Delete this user ${
          this.state.email
        } ?`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={this.handleDeleteUser} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );

  renderTableBody = () => {
    if (process.env.BROWSER) {
      return _.map(
        JSON.parse(window.localStorage.getItem('list_users')),
        (item, index) => {
          return (
            <TableRow key={index}>
              <TableCell key={`${item.email}-${index}`}>{item.email}</TableCell>
              <TableCell key={`${item.username}-${index}`}>
                {item.username}
              </TableCell>
              <TableCell key={`${item.fullname}-${index}`}>
                {item.fullname}
              </TableCell>
              <TableCell key={`${item.phonenumber}-${index}`}>
                {item.phonenumber}
              </TableCell>
              <TableCell key={`actions-${index}`}>
                <NavLink to={`/edit-user/${index}`}>
                  <Icon color="secondary">edit</Icon>
                </NavLink>
                {' | '}
                <a
                  href="#"
                  onClick={() => this.handleClickOpen(index, item.email)}
                >
                  <Icon color="secondary">delete</Icon>
                </a>
              </TableCell>
            </TableRow>
          );
        }
      );
    }
    return (
      <TableRow>
        <TableCell>Loading...</TableCell>
      </TableRow>
    );
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
            <TableBody>{this.renderTableBody()}</TableBody>
          </Table>
        </Paper>
        {this.confirmDeleteUser()}
      </AppWrapper>
    );
  }
}

export default withStyles(styles)(ListUsers);
