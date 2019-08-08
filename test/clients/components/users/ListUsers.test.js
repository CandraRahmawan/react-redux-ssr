import ListUsers from '../../../../src/clients/components/users/ListUsers';
import AppWrapper from '../../../../src/app-html/AppWrapper';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  Paper,
  Button,
  TableCell,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@material-ui/core';
import { BrowserRouter, NavLink } from 'react-router-dom';

jest.mock('../../../../src/constanta/common', () => ({
  ADD_USER: 'addUser'
}));

jest.mock('../../../../src/config/routes', () => [
  {
    key: 'addUser',
    path: '/testing-add-user'
  }
]);

describe('<ListUsers />', () => {
  const baseProps = {
    classes: {
      button: ''
    }
  };
  const mountState = {
    user: {
      isLogin: true
    },
    router: {
      location: {
        pathname: '/login'
      }
    }
  };
  const mapStateToProps = state => ({
    state
  });
  const ReactComponent = () => (
    <BrowserRouter>
      <ListUsers {...baseProps} />
    </BrowserRouter>
  );
  const ConnectedComponent = connectRedux(mapStateToProps)(ReactComponent);
  const component = mountWithState(<ConnectedComponent />, mountState);

  test('Should be render correct Button Add User & link', () => {
    expect(
      component
        .find(AppWrapper)
        .find(NavLink)
        .find(Button)
        .exists()
    ).toBe(true);
    expect(
      component
        .find(AppWrapper)
        .find(NavLink)
        .prop('to')
    ).toEqual('/testing-add-user');
  });

  test('Should be render correct Header Table', () => {
    expect(
      component
        .find(AppWrapper)
        .find(Paper)
        .find(Table)
        .find(TableHead)
        .find(TableRow)
        .find(TableCell)
    ).toHaveLength(5);
  });

  test('Should be render correct Body Table', () => {
    expect(
      component
        .find(AppWrapper)
        .find(Paper)
        .find(Table)
        .find(TableBody)
        .exists()
    ).toBe(true);
  });

  test('Should be render Dialog delete user', () => {
    expect(
      component
        .find(AppWrapper)
        .find(Dialog)
        .prop('open')
    ).toEqual(false);
  });

  test('Should be render DialogContent', () => {
    expect(
      component
        .find(Dialog)
        .find(DialogContent)
        .find(DialogContentText)
        .exists()
    ).toBe(true);
  });

  test('Should be render DialogActions', () => {
    expect(
      component
        .find(Dialog)
        .find(DialogActions)
        .find(Button)
        .first()
        .prop('children')
    ).toEqual('Cancel');
    expect(
      component
        .find(Dialog)
        .find(DialogActions)
        .find(Button)
        .last()
        .prop('children')
    ).toEqual('OK');
  });
});
