import MenuSidebar from '../../../../src/clients/components/base/MenuSidebar';
import {
  MenuList,
  MenuItem,
  Paper,
  ListItemText,
  Icon
} from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<MenuSidebar />', () => {
  const styles = {
    root: {
      minHeight: 'calc(100vh - 128px)',
      boxShadow:
        '0px 0px 5px 0px rgba(0, 0, 0, 0.2), 0px 0px 2px 0px rgba(0, 0, 0, 0.14), 0px 0px 1px -2px rgba(0, 0, 0, 0.12)',
      borderRadius: '0',
      backgroundColor: '#ecf0f1',
      minWidth: '220px'
    }
  };

  const component = mount(
    <Router>
      <MenuSidebar classes={{ ...styles }} />
    </Router>
  );

  test('Should be render correct 2 NavLink', () => {
    expect(
      component
        .find(Paper)
        .find(MenuList)
        .find(MenuItem)
    ).toHaveLength(2);
    expect(component.find(MenuItem).find(Icon)).toHaveLength(2);
    expect(component.find(MenuItem).find(ListItemText)).toHaveLength(2);
  });
});
