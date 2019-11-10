import React from 'react';
import Info from './Info'
import {Logo} from '../utils/Logos'
import styled from 'styled-components'

const Content = () => {
  return (
    <Container>
      <Info/>
      <Logo height='400px' width='400px'/>
    </Container>
  );
};

export default Content;

// Styled
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
  padding-left: 80px;
  padding-right: 80px;
`;