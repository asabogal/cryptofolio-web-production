import React from 'react';
import styled from 'styled-components'
import {Logo} from '../utils/Logos'

const CoinCard = ({symbol, name, image}) => {

  return (
    <CardContainer>
      <section>
        <div>{symbol}</div>
        -
        <div>{name}</div>
      </section>
      <div>
        <Logo logo={image} width="50px" height="50px"/>
      </div>
    </CardContainer>
  );
};

export default CoinCard;

//styled

const CardContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  justify-content: center;
  align-content: center;
  border: 1px solid white;
  section {
    display: flex;
  }
`;