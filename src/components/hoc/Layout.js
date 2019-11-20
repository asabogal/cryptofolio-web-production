import React from 'react';
import Header from '../header_footer/Header'

const Layout = ({handleLogin, handleLogout, loggedInStatus, children}) => {
  return (
    <div>
      <Header
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        loggedInStatus={loggedInStatus}
      />
      {children}
    </div>
  );
};

export default Layout;