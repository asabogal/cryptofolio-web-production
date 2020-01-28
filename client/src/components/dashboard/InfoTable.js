import React from 'react';
import styled from 'styled-components'

const InfoTable = (props) => {
 
  const {changeDay, volume24Hr, dayHigh, dayLow} = props.selectedCoin
  return (
    <Container>
      <DataContainer>
        <h5>24hr Volume</h5>
        <p>{volume24Hr}</p>
      </DataContainer>
      {/* <DataContainer>
        <h5>Supply</h5>
        <p>{supply}</p>
      </DataContainer> */}
      <DataContainer>
        <h5>Change Day</h5>
        <p>{changeDay}</p>
      </DataContainer>
      <DataContainer>
        <h5>Day's High</h5>
        <p>{dayHigh}</p>
      </DataContainer>
      <DataContainer>
        <h5>Day's Low</h5>
        <p>{dayLow}</p>
      </DataContainer>
    </Container>
  );
}

export default InfoTable;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 5px;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #212542;
  p, h5 {
    font-size: 15px;
    margin-block-start: 5px;
    margin-block-end: 5px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;