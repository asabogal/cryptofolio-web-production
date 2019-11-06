import React from 'react';
import styled from 'styled-components'
import logo from '../../images/crypto-vault.png'

const Logo = () => {
  return (
    <LogoContainer>
      <img src={logo}/>
    </LogoContainer>
  );
};

export default Logo;

// Styled
const LogoContainer = styled.div`
  justify-self: center;
  img {
    height: 100%;
    width: 100%;
  }
`;
