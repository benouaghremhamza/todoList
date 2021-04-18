import {
  CLEAR_TODOS,
  ADD_TODO,
  CLEAR_TODO,
  TOGGLE_TODO,
} from '../actions/constants';

const defaultState = [];
const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ ...action.payload, id: new Date().valueOf() }, ...state];
    case CLEAR_TODO:
      return [...state.filter(({ id }) => id !== action.payload)];
    case TOGGLE_TODO:
      return [
        ...state.map((todo) => {
          if (todo.id === action.payload)
            return {
              ...todo,
              state: todo.state === 'pending' ? 'completed' : 'pending',
            };

          return todo;
        }),
      ];
    case CLEAR_TODOS:
      return defaultState;
    default:
      return state;
  }
};

export default todoReducer;
