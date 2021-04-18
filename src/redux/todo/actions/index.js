import { ADD_TODO, CLEAR_TODO, CLEAR_TODOS, TOGGLE_TODO } from './constants';

export const add = ({ title, content }) => ({
  type: ADD_TODO,
  payload: { title, content, state: 'pending' },
});

export const toggle = (id) => ({ type: TOGGLE_TODO, payload: id });

export const clear = (id) => ({ type: CLEAR_TODO, payload: id });

export const clearAll = () => ({ type: CLEAR_TODOS });
