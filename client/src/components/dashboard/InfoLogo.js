import React from 'react';
import styled from 'styled-components'
import {Logo} from '../utils/Logos'

const InfoLogo = (props) => {
  let sourceUrl = `https://www.cryptocompare.com/${props.selectedCoin.imageUrl}`
  return (
    <Container>
      <h2>{props.selectedCoin.symbol}</h2>
      <Logo logo={sourceUrl} height='250px' width='250px' opacity='.9'/>
    </Container>
  );
};

export default InfoLogo;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr;
  justify-items: center;
  align-items: flex-start;
  background-color: #212542;
  div {
    justify-self: center;
    align-self: flex-start;
  }
`;
