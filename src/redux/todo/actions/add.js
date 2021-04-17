import { ADD_TODO } from './constants';

const add = ({ title, content }) => ({
  type: ADD_TODO,
  payload: { title, content, state: 'pending' },
});

export default add;
