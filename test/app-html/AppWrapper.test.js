import AppWrapper from '../../src/app-html/AppWrapper';
import { Paper } from '@material-ui/core';
import ErrorBoundary from '../../src/clients/components/errors/ErrorBoundary';
import Header from '../../src/clients/components/base/Header';
import MenuSidebar from '../../src/clients/components/base/MenuSidebar';

describe('<AppWrapper />', () => {
  const baseProps = {
    classes: {
      root: '',
      content: ''
    },
    children: () => 'children'
  };
  const baseState = {
    router: {
      location: {
        pathname: '/login'
      }
    }
  };
  const mapStateToProps = state => ({
    state
  });
  const ReactComponent = () => <AppWrapper {...baseProps} />;
  const ConnectedComponent = connectRedux(mapStateToProps)(ReactComponent);
  const component = state =>
    mountWithState(<ConnectedComponent />, { ...baseState, ...state });

  test('Should be render AppWrapper Header', () => {
    expect(
      component()
        .find(ErrorBoundary)
        .find(Paper)
        .find(Header)
        .exists()
    ).toBe(true);
  });

  test('Should be not render AppWrapper MenuSidebar when path is login', () => {
    expect(
      component()
        .find(ErrorBoundary)
        .find(MenuSidebar)
        .exists()
    ).toBe(false);
  });
});
