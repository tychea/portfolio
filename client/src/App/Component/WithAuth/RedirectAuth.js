import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectAuth = (Component) => {
  const AuthRoute = (props) => {
    const isAuth = localStorage.getItem('token');
    if (isAuth) {
      return <Redirect to='/dashboard' />;
    } else {
      return <Component {...props} />;
    }
  };

  return AuthRoute;
};

export default RedirectAuth;
