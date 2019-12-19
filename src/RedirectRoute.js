import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const RedirectRoute = () => {
  
  return (
    <Route
      render={props => {
        return <Redirect to="/login"/>
      }}
    />
  )
};

export default RedirectRoute;