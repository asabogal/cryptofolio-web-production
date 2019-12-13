import React from 'react';
import styled from 'styled-components'
import {Logo} from '../utils/Logos'

export const CoinCard = ({symbol, name, image, top, addCoin, removeCoin, isUserCoin}) => {

  let CardBody = CardBottom
  if (top) {
    CardBody = CardTop
  } else if (isUserCoin(symbol)) {
    CardBody = DisabledCoin
  }

  const clickCoinHanlder = () => {
    let coin = {
      symbol: symbol,
      name: name,
      imageUrl: image
    }
    top ? removeCoin(coin) : addCoin(coin)
  }
 
  return (
    <CardBody onClick={clickCoinHanlder}>
      <section>
        <div>{name}</div>
        <div>{symbol}</div>
        <DeleteIcon> X </DeleteIcon>
      </section>
      <div>
        <Logo logo={image} width="65px" height="65px"/>
      </div>
    </CardBody>
  );
};

//styled

const CardBottom = styled.div`
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

const CardTop = styled(CardBottom)`
background-color: #2a8ba8;
   :hover {
     section div:nth-child(2) {
       display: none;
     }
       border: 2px solid red;
       background-color: #272841;
   }
`;

export const InfoCard = styled(CardBottom)`
  height: 90px;
  grid-template-rows: 1fr 2fr 1fr;
  section :nth-child(2) {
    color: ${props => props.changePct < 0 ? 'red' : 'green' }
  }
  div {
    justify-self: 'left';
    align-self: center;
  }
  .card-price {
    font-size: 28px;
    font-weight: bold;
    justify-self: left;
    align-self: center;
  }
  .card-mktcap {
    font-size: 15px;
    color: grey;
    justify-self: right;
  }
`;


const DisabledCoin = styled(CardBottom)`
  opacity: .1;
  pointer-events: none;
`;

const DeleteIcon = styled.div`
  display: none;
  ${CardTop}:hover & {
    display: flex;
    color: red;
    align-self: right;
    text-align: right;
  }
`;