import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../../images/crypto-vault.png'

export const NavLogo = () => {
  return (
    <Link to='/'>
      <LogoContainer/>
    </Link>
  )
 
}

const LogoContainer = styled.div`
  background: url(${logo}) no-repeat;
  background-size: cover !important;
  width: 50px;
  height: 50px;
  opacity: .6;
`;