import React, { useContext, useEffect } from 'react';
import { Route, Redirect, useHistory } from "react-router-dom";
import { AuthContext } from "../Auth";

//Route wrapper for Auth
const PrivateRoute = ({ component: RouteComponent, ...rest }) => {

  const history = useHistory();

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    !currentUser && history.push('/');
  }, [currentUser, history])

  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ?
          (<RouteComponent {...routeProps} />)
          :
          (<Redirect to={"/"} />)
      }
    />
  );
};

export default PrivateRoute;
