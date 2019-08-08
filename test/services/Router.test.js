import { Switch, Route } from 'react-router-dom';
import Router from '../../src/services/Router';

jest.mock('../../src/config/routes', () => [
  {
    key: 'dashboard',
    path: '/'
  },
  {
    key: 'listUsers',
    path: '/list-users'
  }
]);

describe('Router', () => {
  test('Should be return 2 map routes', () => {
    const component = shallow(<Router />);
    expect(component.find(Switch).find(Route)).toHaveLength(2);
  });
});
