import React from 'react';
import {Link} from 'react-router-dom'
import './style.css'

const Jumbotron = () => {
  return (
    <div className='jumbotron-container'>
      <h1>CRYPTOFOLIO</h1>
      <div className='register-links'>
        <Link to='/signup'>Sign Up</Link> | <Link to='/login'>Log In</Link>
      </div>
      
    </div>
  );
};

export default Jumbotron;
