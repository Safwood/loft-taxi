import React from "react";
import {Route, Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

export const PrivateRoute = ({component: Component, path, ...rest}) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    return (
    <Route 
      {...rest}
      path={path}
      render={
        (props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/"></Redirect>
      }
    />
  )  
}