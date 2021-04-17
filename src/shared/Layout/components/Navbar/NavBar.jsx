import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import withStyle from './withStyle';
import { logout } from '../../../../redux/user/actions';

const NavBar = ({ className }) => {
  const dispatch = useDispatch();

  const logoutUser = useCallback(() => {
    dispatch(logout());
  }, []);

  return (
    <div className={className}>
      <h6>Hello</h6>
      <button type="button" onClick={logoutUser}>
        Logout
      </button>
    </div>
  );
};

export default withStyle(NavBar);
