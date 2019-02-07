import { combineReducers } from 'redux';
import { LOGIN_USER } from './actions';

export const user = (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN_USER: {
      return {
        ...payload
      };
    }
    default: {
      return state;
    }
  }
};

const rootReducers = combineReducers({
  user
});

export default rootReducers;
