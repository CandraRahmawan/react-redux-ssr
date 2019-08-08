import { routePathname } from '../../src/helpers/commonHelper';
import Router from '../../src/services/Router';

jest.mock('../../src/config/routes', () => [
  {
    key: 'dashboard',
    path: '/'
  },
  {
    key: 'test',
    path: '/testing-url'
  }
]);

describe('commonHelper', () => {
  test('Should be return value path /testing-url', () => {
    const component = shallow(<Router />);
    expect(routePathname('test')).toEqual('/testing-url');
  });
});
