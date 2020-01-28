import React from 'react';
import styled from 'styled-components'

const InfoLogo = (props) => {
  let sourceUrl = `https://www.cryptocompare.com/${props.selectedCoin.imageUrl}`
  return (
    <Container className='symbol-logo-container'>
      <h2>{props.selectedCoin.symbol}</h2>
      <div>
        <img src={sourceUrl} alt='coin-logo'/>
      </div>
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
    margin: 5px;
  } 
  img {
    width: 100%;
    height: auto;
  }
`;
