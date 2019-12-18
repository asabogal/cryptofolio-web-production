import React from 'react';
import {Link} from 'react-router-dom'
import {Button} from '../components/utils/Buttons'

const NotLoggedIn = () => {
  return (
    <div>
      <h1>YOU MUST BE LOGGED IN TO ACCESS THIS PAGE</h1>
      <Link to= '/signup'> 
          <Button>Sign Up</Button>
        </Link>
         <Link to='/login'>
          <Button>Log In</Button>
        </Link>
    </div>
  );
};

export default NotLoggedIn;