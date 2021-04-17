import { LOGIN } from './constants';

const login = ({ username, password }) => {
  if (username === 'test@test.com' && password === 'test')
    return {
      type: LOGIN,
      payload: { username },
    };

  return {
    type: LOGIN,
    payload: null,
  };
};

export default login;
