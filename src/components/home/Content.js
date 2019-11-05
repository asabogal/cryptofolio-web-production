import React from 'react';
import Info from './Info'
import Logo from './Logo'
import './style.css'

const Content = () => {
  return (
    <div className='home-content'>
      <Info/>
      <Logo/>
    </div>
  );
};

export default Content;