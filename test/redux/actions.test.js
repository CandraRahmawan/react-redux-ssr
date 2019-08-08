import { LOGIN_USER, loginUser } from '../../src/redux/actions';

describe('redux actions', () => {
  test('should create an action to add loginUser', () => {
    const payload = {
      isLogin: true,
      userEmail: 'candraa.rahmawan@gmail.com'
    };
    const expectedAction = {
      type: LOGIN_USER,
      payload
    };
    expect(loginUser(payload)).toEqual(expectedAction);
  });
});
