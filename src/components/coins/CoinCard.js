import React from 'react';
import styled from 'styled-components'
import {Logo} from '../utils/Logos'

const CoinCard = ({symbol, name, image, top, addCoin, removeCoin}) => {

  let CardBody
  top ? CardBody = CardTop : CardBody = CardBottom

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

export default CoinCard;

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
   :hover {
     section div:nth-child(2) {
       display: none;
     }
       border: 2px solid red;
       background-color: #272841;
   }
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