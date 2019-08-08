import LoginUser from '../../../../src/clients/components/login/LoginUser';
import AppWrapper from '../../../../src/app-html/AppWrapper';
import { FormControl, Button } from '@material-ui/core';

describe('<LoginUser />', () => {
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
  const ReactComponent = () => <LoginUser {...baseProps} />;
  const ConnectedComponent = connectRedux(mapStateToProps)(ReactComponent);
  const component = mountWithState(<ConnectedComponent />, mountState);

  test('Should be render correct form login', () => {
    expect(
      component
        .find(AppWrapper)
        .find('form')
        .find(FormControl)
    ).toHaveLength(2);
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
