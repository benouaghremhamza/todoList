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
    <nav className={className}>
      <a className="nav-item" href="/">
        Todo List
      </a>
      <a className="nav-item" href="/">
        Home
      </a>
      <a className="nav-item" href="/">
        Tâches
      </a>
      <button type="button" className="nav-item btn" onClick={logoutUser}>
        Déconnexion
      </button>
    </nav>
  );
};

export default withStyle(NavBar);
