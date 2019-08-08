import Footer from '../../../../src/clients/components/base/Footer';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

describe('<Footer />', () => {
  const styles = {
    toolBar: {
      margin: '0 auto'
    }
  };

  const component = mount(<Footer classes={{ ...styles }} />);

  test('Should be render correct structure of footer', () => {
    expect(component.find(AppBar).exists()).toBe(true);
    expect(
      component
        .find(AppBar)
        .find(Toolbar)
        .exists()
    ).toBe(true);
    expect(
      component
        .find(Toolbar)
        .find(Typography)
        .exists()
    ).toBe(true);
  });
});
