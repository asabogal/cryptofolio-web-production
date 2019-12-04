import React from 'react';
import styled from 'styled-components'
import {Logo} from '../utils/Logos'

const CoinCard = ({symbol, name, image}) => {

  return (
    <CardContainer>
      <section>
        <div style={{textAlign: 'left'}}>{symbol}</div>
        <div style={{textAlign: 'right'}}>{name}</div>
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
  background-color: #212542;
  padding: 10px;
  width: 200px;
  height: 120px;
  cursor: pointer;
   :hover {
       border: 2px solid #2a8ba8;
       background-color: #272841;
   }
   section {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    color: #ffffffdb;
   }
   div {
     justify-self: center;
     align-self: center;
   }
`;