import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/actions';

const Login = () => {
  const dispatch = useDispatch();

  const loginUser = useCallback(() => {
    dispatch(login({ username: 'test@test.com', password: 'test' }));
  }, []);

  return (
    <div>
      <button type="button" onClick={loginUser}>
        LOGIN
      </button>
    </div>
  );
};

export default Login;
