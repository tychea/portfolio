import React from 'react';
import { Redirect } from 'react-router-dom';

const WithAuth = (Component) => {
  const AuthRoute = () => {
    const isAuth = localStorage.getItem('token');
    if (isAuth) {
      return <Component />;
    } else {
      return <Redirect to='/login' />;
    }
  };

  return AuthRoute;
};

export default WithAuth;
