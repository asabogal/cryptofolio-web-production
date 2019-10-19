import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  handleLogout = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => this.props.handleLogout())
    .catch(error => console.log(error))
  }

  render() {
    return (
      <Container>
        <h1>HOME</h1>
        {
          this.props.loggedInStatus ? <h2>Logged In</h2> : <h2>Not Logged In</h2>
        }
        {
          this.props.loggedInStatus ? <button onClick={this.handleLogout}>LOGOUT</button> : null
        }
        
      </Container>
    );
  }
}

export default Home;

const Container = styled.div`
  margin: 50px;
`
