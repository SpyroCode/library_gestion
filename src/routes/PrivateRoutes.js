import React,{useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../helpers/auth";

function PrivateRoute({ component: Component, ...rest }) {
    const {userAuth}=useContext(UserContext);
    const isAuthenticated = userAuth;
  
  return(
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

export default PrivateRoute;