import { FETCH_USERS } from './usersActionTypes';
import _ from 'lodash';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload.data, 'id') };
    default:
      return state;
  }
}
