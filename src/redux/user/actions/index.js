import { LOGIN, LOGOUT } from './constants';

export const login = ({ username, password }) => {
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

export const logout = () => ({ type: LOGOUT });
