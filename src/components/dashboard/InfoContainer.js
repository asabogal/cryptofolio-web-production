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
        <InfoTable style={{margin: '20px'}} selectedCoin={this.props.selectedCoin}/>
        <Container>
          <InfoLogo selectedCoin={this.props.selectedCoin}/>
          <Chart/>      
        </Container>

      </div>
    );
  }
}

export default InfoContainer;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 50px;
`;