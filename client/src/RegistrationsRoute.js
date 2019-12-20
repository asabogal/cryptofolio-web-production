import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const RegistrationsRoute = ({component: Component, ...rest}) => {
  
  return (
    <Route {...rest} 
    render={props => {
      if (!rest.loggedIn) {
        return  <Component {...props} handleLogin={rest.handleLogin} loggedInStatus={rest.loggedIn} />
      } else {
        return <Redirect to={
          {pathname: "/dashboard"}
        }
        />
      }
    }}
    />
  ); 
};

export default RegistrationsRoute;