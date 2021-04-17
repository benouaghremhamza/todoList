import React from 'react';
import { isEmpty } from 'lodash';
import { Switch, Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Login from '../pages/Login';
import history from '../shared/utils/history';
import Route from '../components/atoms/Route';

const user = null;

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/login"
          component={Login}
          isAuthenticated={isEmpty(user)}
          redirectTo="/app"
        />
        <Route
          path="/"
          component={AppRoutes}
          isAuthenticated={!isEmpty(user)}
          redirectTo="/login"
        />
      </Switch>
    </Router>
  );
};
export default Routes;
