import React, { Component } from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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
          LOGO
        </div>

        <ul>
          <Link to='/dashboard'><li>Dashboard</li></Link>
          <Link to='/settings'><li>Settings</li></Link>
          {
            this.state.isLoggedIn ? <Link to='/logout'><li>Log Out</li></Link> : null
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
  height: 100px;
  width: 100%;
  background: none;
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-right: 50px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  li {
    list-style: none;
    text-decoration: none;
    padding: 20px;
  }
`;