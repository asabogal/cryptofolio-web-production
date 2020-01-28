import React, { Component } from 'react';
import styled from 'styled-components'
import InfoLogo from './InfoLogo'
import Chart from './Chart'
import InfoTable from './InfoTable'

class InfoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      selectedCoin: ''
     };
  }
  render() {
    return (
      <div>
        <Container>
          <InfoLogo selectedCoin={this.props.selectedCoin}/>
          <Chart chartData={this.props.chartData} changeChartRange={this.props.changeChartRange}/>      
        </Container>
        <InfoTable style={{margin: '20px'}} selectedCoin={this.props.selectedCoin}/>
      </div>
    );
  }
}

export default InfoContainer;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 5px;
  margin: 50px 0px 5px 0px;
  @media (max-width: 1200px) {
    grid-template-columns: auto;
   .symbol-logo-container {
     display: none;
   }
  }
`;