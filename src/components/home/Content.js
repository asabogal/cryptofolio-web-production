import React from 'react';
import Info from './Info'
import Logo from './Logo'
import styled from 'styled-components'

const Content = () => {
  return (
    <Container>
      <Info/>
      <Logo/>
    </Container>
  );
};

export default Content;

// Styled
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 15px;
  height: 350px;
  width: 80vw;
  padding: 100px;
`;