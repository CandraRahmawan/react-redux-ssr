import { combineReducers } from 'redux';

export const user = (state = {}, action) => state;

const rootReducers = combineReducers({
  user
});

export default rootReducers;
