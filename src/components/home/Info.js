import React from 'react';
import styled from 'styled-components'

const Info = () => {
  return (
    <Container>
      <div>
        <h1>CRYPTOCURRENCY PORTFOLIO</h1>
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
    </Container>
  );
};

export default Info;

//Styled
const Container = styled.div`
  display: grid;
  grid-template-rows: 60% 40%;
  grid-gap: 30px;
  p {
    padding-left: 20px;
  }
`;

const Button = styled.button`
  background-color: #7F97A4;
  color: white;
  font-size: 20px;
  height: 50px;
  width: 120px;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    background-color: #677075;
  }
`;