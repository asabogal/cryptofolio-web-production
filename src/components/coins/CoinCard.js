import React from 'react';
import styled from 'styled-components'
import {Logo} from '../utils/Logos'

const CoinCard = ({symbol, name, image}) => {

  return (
    <CardContainer>
      <section>
        <div>{symbol}</div>
        <div>{name}</div>
      </section>
      <div>
        <Logo logo={image} width="65px" height="65px"/>
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
  background-color: #2f314d;
  padding: 10px;
  width: 200px;
  height: 120px;
   :hover {
       border: 2px solid #2a8ba8;
   }
`;