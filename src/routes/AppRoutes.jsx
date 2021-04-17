import React from 'react';
import { Switch } from 'react-router-dom';
import Route from '../components/atoms/Route';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/app" component={Dashboard} />
  </Switch>
);

export default AppRoutes;
