import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Logo = (props) => {
  if (props.link) {
    return (
      <Link to={props.link}>
        <LogoContainer logo={props.logo} width={props.width} height={props.height} opacity={props.opacity}/>
      </Link>
      )
  } else {
    return <LogoContainer logo={props.logo} width={props.width} height={props.height} opacity={props.opacity}/>
  }

}

const LogoContainer = styled.div`
  background: url(${props => props.logo}) no-repeat;
  background-size: cover !important;
  width: ${props => props.height};
  height: ${props => props.width};
  opacity: ${props => props.opacity || '1'};
`;