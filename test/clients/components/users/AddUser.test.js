import AddUser from '../../../../src/clients/components/users/AddUser';
import AppWrapper from '../../../../src/app-html/AppWrapper';
import { FormControl, Button } from '@material-ui/core';

describe('<AddUser />', () => {
  const baseProps = {
    classes: {
      formControl: ''
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
  const ReactComponent = () => <AddUser {...baseProps} />;
  const ConnectedComponent = connectRedux(mapStateToProps)(ReactComponent);
  const component = mountWithState(<ConnectedComponent />, mountState);

  test('Should be render correct form Add User', () => {
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
