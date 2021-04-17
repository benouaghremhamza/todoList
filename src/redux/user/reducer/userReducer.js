import { LOGIN, LOGOUT } from '../actions/constants';

const defaultState = {};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return defaultState;
    default:
      return state;
  }
};

export default userReducer;
