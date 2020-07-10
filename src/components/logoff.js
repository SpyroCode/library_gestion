import React, {useContext} from "react";
import { Route, Redirect } from "react-router-dom"
import {UserContext } from "../helpers/auth";

function LogOffRoute({ component: Component, ...rest }) {
    const {setUser}=useContext(UserContext);
    const isAuthenticated=false
    localStorage.setItem('token',null)
    setUser(null)
    
    //setUser(null)
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
    )
}

export default LogOffRoute