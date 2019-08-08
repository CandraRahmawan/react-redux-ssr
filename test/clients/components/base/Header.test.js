import Header from '../../../../src/clients/components/base/Header';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

describe('<Header />', () => {
  const styles = {
    root: {
      'box-shadow': 'none'
    }
  };

  const component = mount(<Header classes={{ ...styles }} />);

  test('Should be render correct structure of header', () => {
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
