import React, { Component } from 'react';
import styled from 'styled-components'
import InfoLogo from './InfoLogo'
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
      <Container>
        <InfoLogo selectedCoin={this.props.selectedCoin}/>
        <InfoTable selectedCoin={this.props.selectedCoin}/>
      </Container>
    );
  }
}

export default InfoContainer;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;