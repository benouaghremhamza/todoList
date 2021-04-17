import React from 'react';
import { Route as DomRoute, Redirect } from 'react-router-dom';

const Route = ({
  component: Component,
  isAuthenticated,
  redirectTo,
  ...rest
}) => {
  return (
    <DomRoute
      {...rest}
      render={() =>
        isAuthenticated ? <Component {...rest} /> : <Redirect to={redirectTo} />
      }
    />
  );
};

Route.defaultProps = {
  isAuthenticated: true,
};

export default Route;
