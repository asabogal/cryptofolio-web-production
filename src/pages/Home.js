import React, { Component } from 'react';
import axios from 'axios'
import './style.css'

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
      <div className='page-container'>
        <h1>HOME</h1>
        <h2>{this.props.loggedInStatus}</h2>
        <button onClick={this.handleLogout}>LOGOUT</button>
      </div>
    );
  }
}

export default Home;