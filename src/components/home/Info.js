import React from 'react';
import styled from 'styled-components'

const Info = () => {
  return (
    <div>
      <div>
        <h1>Cryptocurrency Portfolio</h1>
        <h3>Keep track of your favorite coins </h3>
        <p>Live, 24/7 Data</p>
        <p>User Friendly Interface</p>
        <p>Analytical Tools</p>
      </div>
      
      <div>
        <h2>Get Started</h2>
        <div>
          <Button>Sign Up</Button>
          <Button>Log In</Button>
        </div>
      </div>
    </div>
  );
};

export default Info;

const Button = styled.button`
  background-color: #13b4c0;
  color: white;
  font-size: 20px;
  height: 50px;
  width: 120px;
  margin-right: 20px;
  &:hover {
    background-color: #007af0;
  }
`;