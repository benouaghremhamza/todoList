import { CLEAR_TODOS, ADD_TODO, CLEAR_TODO } from '../actions/constants';

const defaultState = [];
const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { ...action.payload, id: new Date().valueOf() }];
    case CLEAR_TODO:
      return [...state.filter(({ id }) => id !== action.payload)];
    case CLEAR_TODOS:
      return defaultState;
    default:
      return state;
  }
};

export default todoReducer;
