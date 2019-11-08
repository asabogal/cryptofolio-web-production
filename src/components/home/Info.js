import React from 'react';
import {Button} from '../utils/Buttons'
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
          <Button 
          style={{marginTop: '20px'}} 
          width='260px'
          height='35px'
          font='15px'
          >
            Demo
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Info;

//Styled
const Container = styled.div`
  display: grid;
  grid-template-rows: 60% 30%;
  grid-gap: 30px;
  p {
    padding-left: 20px;
  }
`;
