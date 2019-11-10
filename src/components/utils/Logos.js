import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../../images/crypto-vault.png'

export const Logo = (props) => {
  if (props.link) {
    return (
      <Link to='/'>
        <LogoContainer width={props.width} height={props.height}/>
      </Link>
      )
  } else {
    return <LogoContainer width={props.width} height={props.height}/>
  }

}


const LogoContainer = styled.div`
  background: url(${logo}) no-repeat;
  background-size: cover !important;
  width: ${props => props.height};
  height: ${props => props.width};
  opacity: .6;
`;