import { combineReducers } from 'redux';
import users from 'users';

const rootReducer = combineReducers({
  users: users.reducer,
});

export default rootReducer;
