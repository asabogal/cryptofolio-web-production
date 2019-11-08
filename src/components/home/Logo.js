import React from 'react';
import styled from 'styled-components'
import logo from '../../images/crypto-vault.png'

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo} alt="app logo"/>
    </LogoContainer>
  );
};

export default Logo;

// Styled
const LogoContainer = styled.div`
  height: 85%;
  width: 85%;
  img {
    padding-top: 40px;
    height: 90%;
    width: 90%;
  }
`;
