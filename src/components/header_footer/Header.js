import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Logo} from '../utils/Logos'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false
     };
  }

  render() {
    return (
      <Container>
        <div>
          <Logo link width='60px' height='60px'/>
        </div>

        <ul>
          <Link to='/dashboard'><li>Dashboard</li></Link>
          <Link to='/settings'><li>Settings</li></Link>
          {
            this.state.isLoggedIn ? <Link to='/'><li>Log Out</li></Link> : null
          }
          
        </ul>
      </Container>
    );
  }
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background: none;
  margin: 30px;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
  }
  a {
    text-decoration: none;
    color: white;
  }
  li {
    list-style: none;
    text-decoration: none;
    padding-left: 20px;
  }
`;