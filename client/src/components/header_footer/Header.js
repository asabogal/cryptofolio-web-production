import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Logo} from '../utils/Logos'
import logo from '../../images/crypto-vault.png'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  handleLogout = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => this.props.handleLogout())
    .catch(error => console.log(error))
  }

  render() {
    return (
      <Container>
        {
          this.props.loggedInStatus ? <div>
            <Logo link="/settings" logo={logo} width='60px' height='60px'/>
          </div> 
        :
          <div>
            <Logo link="/" logo={logo} width='60px' height='60px'/>
          </div> 
        }
     
        {
          this.props.loggedInStatus ? <ul>
            <Link to='/dashboard'><li>Dashboard</li></Link>
            <Link to='/settings'><li>Settings</li></Link>
            <Link to='/' onClick={this.handleLogout}><li>Log Out</li></Link> 
          </ul>  : null
        }
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