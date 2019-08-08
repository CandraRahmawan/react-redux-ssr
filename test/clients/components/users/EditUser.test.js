import EditUser from '../../../../src/clients/components/users/EditUser';
import AppWrapper from '../../../../src/app-html/AppWrapper';
import { FormControl, Button } from '@material-ui/core';

describe('<EditUser />', () => {
  const baseProps = {
    classes: {
      formControl: ''
    },
    match: {
      params: {
        id: 1
      }
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
  const ReactComponent = () => <EditUser {...baseProps} />;
  const ConnectedComponent = connectRedux(mapStateToProps)(ReactComponent);
  const component = mountWithState(<ConnectedComponent />, mountState);

  test('Should be render correct form Edit User', () => {
    expect(
      component
        .find(AppWrapper)
        .find('form')
        .find(FormControl)
    ).toHaveLength(5);
  });

  test('Should be render button', () => {
    expect(
      component
        .find(AppWrapper)
        .find('form')
        .find(Button)
        .exists()
    ).toBe(true);
  });
});
