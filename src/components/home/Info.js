import React from 'react';
import {Button} from '../utils/Buttons'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Info = () => {
  return (
    <Container>
      <div>
        <h1>CRYPTOCURRENCY PORTFOLIO</h1>
        <h3>Keep track of your favorite Coins </h3>
        <p>Live, 24/7 Data</p>
        <p>User Friendly Interface</p>
        <p>Analytical Tools</p>
        <br></br>
      </div>
      
      <div>
        <h1>Get Started</h1>
        <Link to= '/signup'> 
          <Button>Sign Up</Button>
        </Link>
         <Link to='/login'>
          <Button>Log In</Button>
         </Link>
      </div>    
      
      <div>
        <Link to='/demo'>
          <Button 
            style={{marginTop: '20px'}} 
            width='260px'
            height='35px'
            font='15px'
            >
            Demo
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Info;

//Styled
const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 1fr;
  p {
    padding-left: 20px;
  }
`;
